export const addDragAndDrop = () => {
    const dropZone = document.getElementById('dropZone');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('click', () => {
        fileInput.click();  // Trigger the file input click event when the drop zone is clicked
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;

        if (files.length === 0 || !Array.from(files).every(file => file.type.startsWith('image/'))) {
            alert('Please drop only image files');
            return;
        }

        Array.from(files).forEach((file) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreviewContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        });
    });

    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;

        if (files.length === 0 || !Array.from(files).every(file => file.type.startsWith('image/'))) {
            alert('Please select only image files');
            return;
        }

        Array.from(files).forEach((file) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreviewContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        });
    });
}
