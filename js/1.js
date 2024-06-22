const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const rankInput = document.getElementById('rank-input');
const fileInput = document.getElementById('file-input');

const nameLabel = document.getElementById('name');
const surnameLabel = document.getElementById('surname');
const rankLabel = document.getElementById('rank');

nameInput.addEventListener('input', function() {
  nameLabel.innerText = this.value;
});

surnameInput.addEventListener('input', function() {
  surnameLabel.innerText = this.value;
});

rankInput.addEventListener('input', function() {
  rankLabel.innerText = this.value;
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById('photo');
      img.src = e.target.result;
      img.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}); 

document.getElementById('screenshot-btn').addEventListener('click', () => {
  const element = document.getElementById('card');

  
  html2canvas(element).then(function(canvas) {
      
      canvas.toBlob(function(blob) {
          
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'karta_cwela.png'; 
          link.click();
      }, 'image/png');
  });
});


