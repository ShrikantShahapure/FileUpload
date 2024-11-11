const fileUploadArea = document.querySelector('.file-upload-area');
const fileInput = document.querySelector('.file-input');
const fileBrowseButton = document.querySelector('.file-browse-button');
const uploadedImage = document.querySelector('.uploaded-image');

fileUploadArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  fileUploadArea.classList.add('active');
});

fileUploadArea.addEventListener('dragleave', () => {
  fileUploadArea.classList.remove('active');
});

fileUploadArea.addEventListener('drop', (event) => {
  event.preventDefault();
  fileUploadArea.classList.remove('active');
  const files = event.dataTransfer.files;
  handleFiles(files);
});

fileBrowseButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  handleFiles(files);
});

function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        uploadedImage.hidden = false; 
      };
      reader.readAsDataURL(file); 
    } else {
      alert("Please upload an image file.");
    }
  }
}
