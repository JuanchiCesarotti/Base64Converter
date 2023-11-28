
function convertToImages() {
    const jsonInput = document.getElementById('jsonInput').value;
    const imageContainer = document.getElementById('imageContainer');

    try {
        const jsonData = JSON.parse(jsonInput);

        // Clear previous images
        imageContainer.innerHTML = '';

        if (Array.isArray(jsonData)) {
            // If jsonData is an array, assume it contains image information
            jsonData.forEach(item => {
                const img = document.createElement('img');
                img.src = `data:image/png;base64,${item.Base64CardImage}`;
                img.alt = item.Name || 'Image';
                
                img.classList.add('row');
                img.classList.add('mt-4');
                imageContainer.appendChild(img);
            });
        } else {
            // If jsonData is an object, assume it contains a single image information
            const img = document.createElement('img');
            img.src = `data:image/png;base64,${jsonData.Base64CardImage}`;
            img.alt = jsonData.Name || 'Image';
            img.classList.add('img-fluid');
            imageContainer.appendChild(img);
        }
    } catch (error) {
        alert('Please enter valid JSON data.');
    }
}
