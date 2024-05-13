export function getLowerQualityImg(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Redimensionar a imagem para 800x600 (por exemplo)
    const maxWidth = 800;
    const maxHeight = 600;
    let width = img.width;
    let height = img.height;
    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }
    canvas.width = width;
    canvas.height = height;
    ctx!.drawImage(img, 0, 0, width, height);

    // Diminuir a qualidade da imagem
    return canvas.toDataURL('image/jpeg', 0.7); // Qualidade 70%
}
