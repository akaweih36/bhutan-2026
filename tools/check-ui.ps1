[CmdletBinding()]
param(
  [string]$Page = "flights.html"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$target = Join-Path $repoRoot $Page
$styles = Join-Path $repoRoot "styles.css"
$app = Join-Path $repoRoot "app.js"
$profileRoot = $env:USERPROFILE
$beaconRoots = @()
$directBeaconRoot = Join-Path $profileRoot ".codex\skills\beacon\scripts"
if (Test-Path -LiteralPath (Join-Path $directBeaconRoot "design-qa.mjs")) {
  $beaconRoots += $directBeaconRoot
}
$beaconPluginRoot = Join-Path $profileRoot ".codex\plugins\cache\beacon\beacon"
if (Test-Path -LiteralPath $beaconPluginRoot) {
  $beaconRoots += Get-ChildItem -LiteralPath $beaconPluginRoot -Directory |
    Sort-Object Name -Descending |
    ForEach-Object { Join-Path $_.FullName "scripts" }
}
$beaconRoot = $beaconRoots |
  Where-Object { (Test-Path -LiteralPath (Join-Path $_ "advisor.mjs")) -and (Test-Path -LiteralPath (Join-Path $_ "design-qa.mjs")) } |
  Select-Object -First 1
$advisor = if ($beaconRoot) { Join-Path $beaconRoot "advisor.mjs" }
$designQa = if ($beaconRoot) { Join-Path $beaconRoot "design-qa.mjs" }
$artifactLintCandidates = @(
  (Join-Path $profileRoot ".agents\skills\akegarasu-design\scripts\lint-artifact.mjs"),
  (Join-Path $profileRoot ".codex\skills\akegarasu-design\scripts\lint-artifact.mjs")
)
$artifactLint = $artifactLintCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1

if (-not $beaconRoot) {
  throw "Beacon scripts were not found. Pass the installed Beacon location through the script before running UI QA."
}
if (-not $artifactLint) {
  throw "Akegarasu lint-artifact.mjs was not found. Install the skill or pass its path through the script."
}

if (-not (Test-Path -LiteralPath $target)) {
  throw "Page not found: $target"
}

function Invoke-NodeCheck {
  param(
    [string]$Label,
    [string]$Script,
    [string[]]$Arguments
  )

  Write-Host "`n[$Label]" -ForegroundColor Cyan
  & node $Script @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "$Label failed with exit code $LASTEXITCODE"
  }
}

Push-Location $repoRoot
try {
  Invoke-NodeCheck "Beacon advisor" $advisor @($target, $styles)
  Invoke-NodeCheck "Akegarasu artifact lint" $artifactLint @($target)
  Invoke-NodeCheck "JavaScript syntax" "--check" @($app)

  $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $pageName = [IO.Path]::GetFileNameWithoutExtension($Page)
  $reportDir = Join-Path $repoRoot "reports\design-qa\$pageName-$stamp"
  New-Item -ItemType Directory -Force -Path $reportDir | Out-Null
  $fileUrl = "file:///" + $target.Replace("\", "/")
  $report = Join-Path $reportDir "design-qa.json"

  Invoke-NodeCheck "Beacon design QA" $designQa @(
    "--url", $fileUrl,
    "--output", $report,
    "--screenshots", $reportDir,
    "--date", (Get-Date -Format "yyyy-MM-dd")
  )

  & git diff --check
  if ($LASTEXITCODE -ne 0) {
    throw "git diff --check failed"
  }

  Write-Host "`nUI QA passed for $Page." -ForegroundColor Green
  Write-Host "Beacon checks machine layout and accessibility signals; human review still owns content density and hierarchy."
  Write-Host "Report: $report"
}
finally {
  Pop-Location
}
