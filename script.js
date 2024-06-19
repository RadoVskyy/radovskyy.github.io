document.querySelectorAll('input')[0].addEventListener('input', function() {
  document.getElementById('imieLabel').innerText = this.value;
});

document.querySelectorAll('input')[1].addEventListener('input', function() {
  document.getElementById('nazwiskoLabel').innerText = this.value;
});

document.querySelector('select').addEventListener('change', function() {
  document.getElementById('stopienLabel').innerText = this.value;
});


document.querySelectorAll('input')[2].addEventListener('change', (event) => {
  const plik = event.target.files[0];
  if (plik) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById('zdjecie');
      img.src = e.target.result;
      img.style.display = 'block';
    };
    reader.readAsDataURL(plik);
  }
});

document.querySelector('button').addEventListener('click', () => {
  const element = document.getElementById("karta");
  const img = document.getElementById('zdjecie');
  
  html2canvas(element).then(function(canvas) {
    const ctx = canvas.getContext('2d');

    // Ustawienie filtru na kanwie przed rysowaniem obrazu
    ctx.filter = 'grayscale(1)';
    ctx.drawImage(img, 28, 167, 192, 237); // Rysowanie obrazu na kanwie

    ctx.filter = 'none'; // Przywrócenie domyślnego filtra

    canvas.toBlob(function(blob) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'karta_cwela.png'; 
      link.click();
    }, 'image/png');
  });
});