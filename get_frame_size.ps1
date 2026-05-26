Add-Type -AssemblyName System.Drawing
$imgPath = (Resolve-Path "public/Hero Section frames/ezgif-frame-001.jpg").Path
$img = New-Object System.Drawing.Bitmap($imgPath)
Write-Output "Frame Size: $($img.Width) x $($img.Height)"
$img.Dispose()
