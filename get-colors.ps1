Add-Type -AssemblyName System.Drawing;

$folder = "c:\Users\elsay\Desktop\site structure"
$files = Get-ChildItem -Path $folder -Filter "*.jpg"

foreach ($file in $files) {
    Write-Output "Processing $($file.Name)..."
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $bmp = new-object System.Drawing.Bitmap($img)
    
    # Just sample a few pixels to get an idea of the colors
    $centerX = [math]::Round($img.Width / 2)
    $centerY = [math]::Round($img.Height / 2)
    
    $c = $bmp.GetPixel($centerX, $centerY)
    $topLeft = $bmp.GetPixel(10, 10)
    $bottomRight = $bmp.GetPixel($img.Width - 10, $img.Height - 10)
    
    Write-Output ("Center     : R:" + $c.R + " G:" + $c.G + " B:" + $c.B)
    Write-Output ("TopLeft    : R:" + $topLeft.R + " G:" + $topLeft.G + " B:" + $topLeft.B)
    Write-Output ("BottomRight: R:" + $bottomRight.R + " G:" + $bottomRight.G + " B:" + $bottomRight.B)
    Write-Output "------------------------------"
    
    $bmp.Dispose()
    $img.Dispose()
}
