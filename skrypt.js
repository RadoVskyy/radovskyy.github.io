document.addEventListener('keydown', odpal);
document.addEventListener('click', odpal);

var muza1Gra = false

function odpal(){
    console.log('nyger');
    const muza2 = new Audio('cyce.mp3').play();
    pobierzPlik('karoPro.png');
    otworzLatajaceOkno();
    otworzLatajaceOkno2()
    
    intervalId = setInterval(function() {
      console.log('nyger');
      pobierzPlik('karoPro.png');
      otworzLatajaceOkno();
      otworzLatajaceOkno2()
    }, 1000);

    muza1Gra === false ? muza() : null;
}

function muza(){
  const muza1 = new Audio('muza.mp3').play();
  muza1Gra = true;
}

function pobierzPlik(sciezkaDoPliku) {
  fetch(sciezkaDoPliku)
      .then(response => response.blob())
      .then(blob => {
          const nazwaPliku = sciezkaDoPliku.split('/').pop(); // Pobierz nazwę pliku z pełnej ścieżki
          const url = window.URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = url;
          link.download = nazwaPliku;

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Błąd pobierania pliku:', error));
}

function otworzLatajaceOkno() {
    // Sprawdź, czy przeglądarka obsługuje funkcję otwierania nowego okna
    if (window.open && window.focus) {
      // Utwórz nowe okno przeglądarki
      const noweOkno = window.open('', '_blank', 'width=400,height=300');
  
      // Sprawdź, czy okno zostało otwarte poprawnie
      if (noweOkno) {
        // Dodaj treść HTML do okna
        const content = `
          <html>
            <head>
              <title>Latające Okno</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                  background: url(golenie.png);
                  background-size: cover;
                  background-position: center;
                }
              </style>
            </head>
            <body>
              
            <script src="skrypt.js"></script>
            </body>
          </html>
        `;
  
        // Ustaw treść HTML w nowym oknie
        noweOkno.document.write(content);
  
        // Ustaw początkowe położenie okna na środku ekranu
        let x = window.screen.width / 2 - 200;
        let y = window.screen.height / 2 - 150;
  
        // Ustaw początkowy kierunek na prawo i w dół
      let kierunekX = 1;
      let kierunekY = 1;

      // Ustaw interwał czasowy do poruszania okna
      const interwal = setInterval(function () {
        // Sprawdź, czy okno nadal istnieje
        if (noweOkno.closed) {
          // Jeśli okno zostało zamknięte, wyczyść interwał
          clearInterval(interwal);
        } else {
          // Sprawdź, czy okno dotknęło krawędzi poziomej
          if (x + noweOkno.innerWidth + 10 >= window.screen.width || x <= 0) {
            // Zmień kierunek w osi X
            kierunekX *= -1;
          }

          // Sprawdź, czy okno dotknęło krawędzi pionowej
          if (y + noweOkno.innerHeight + 10 >= window.screen.height || y <= 0) {
            // Zmień kierunek w osi Y
            kierunekY *= -1;
          }

          // Oblicz nowe położenie okna
          const newX = x + 100 * kierunekX;
          const newY = y + 100 * kierunekY;

          // Sprawdź, czy nowe położenie wychodzi poza krawędź ekranu
          if (newX >= 0 && newX + noweOkno.innerWidth <= window.screen.width &&
              newY >= 0 && newY + noweOkno.innerHeight <= window.screen.height) {
            // Jeśli nie, porusz oknem
            x = newX;
            y = newY;
            noweOkno.moveTo(x, y);
          } else {
            // Jeśli tak, zmień kierunek w obu osiach
            kierunekX *= -1;
            kierunekY *= -1;
          }
        }
      }, 1); // Co 100 milisekund (10 razy na sekundę)
    }
  } else {
    console.log('Twoja przeglądarka nie obsługuje tej funkcji.');
  }
}

function otworzLatajaceOkno2() {
  // Sprawdź, czy przeglądarka obsługuje funkcję otwierania nowego okna
  if (window.open && window.focus) {
    // Utwórz nowe okno przeglądarki
    const noweOkno = window.open('', '_blank', 'width=400,height=300');

    // Sprawdź, czy okno zostało otwarte poprawnie
    if (noweOkno) {
      // Dodaj treść HTML do okna
      const content = `
        <html>
          <head>
            <title>Latające Okno</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background: url(golenie.png);
                background-size: cover;
                background-position: center;
              }
            </style>
          </head>
          <body>
            <video src="garb.mp4" muted autoplay loop></video>
          <script src="skrypt.js"></script>
          </body>
        </html>
      `;

      // Ustaw treść HTML w nowym oknie
      noweOkno.document.write(content);

      // Ustaw początkowe położenie okna na środku ekranu
      let x = window.screen.width / 2 - 200;
      let y = window.screen.height / 2 - 150;

      // Ustaw początkowy kierunek na prawo i w dół
    let kierunekX = 1;
    let kierunekY = 1;

    // Ustaw interwał czasowy do poruszania okna
    const interwal = setInterval(function () {
      // Sprawdź, czy okno nadal istnieje
      if (noweOkno.closed) {
        // Jeśli okno zostało zamknięte, wyczyść interwał
        clearInterval(interwal);
      } else {
        // Sprawdź, czy okno dotknęło krawędzi poziomej
        if (x + noweOkno.innerWidth + 10 >= window.screen.width || x <= 0) {
          // Zmień kierunek w osi X
          kierunekX *= -1;
        }

        // Sprawdź, czy okno dotknęło krawędzi pionowej
        if (y + noweOkno.innerHeight + 10 >= window.screen.height || y <= 0) {
          // Zmień kierunek w osi Y
          kierunekY *= -1;
        }

        // Oblicz nowe położenie okna
        const newX = x + 100 * kierunekX;
        const newY = y + 100 * kierunekY;

        // Sprawdź, czy nowe położenie wychodzi poza krawędź ekranu
        if (newX >= 0 && newX + noweOkno.innerWidth <= window.screen.width &&
            newY >= 0 && newY + noweOkno.innerHeight <= window.screen.height) {
          // Jeśli nie, porusz oknem
          x = newX;
          y = newY;
          noweOkno.moveTo(x, y);
        } else {
          // Jeśli tak, zmień kierunek w obu osiach
          kierunekX *= -1;
          kierunekY *= -1;
        }
      }
    }, 1); // Co 100 milisekund (10 razy na sekundę)
  }
} else {
  console.log('Twoja przeglądarka nie obsługuje tej funkcji.');
}
}