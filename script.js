// Fetch delle immagini da un'API e creazione di card per ogni immagine
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then((response) => response.json())
    .then((data) => {
        const lista = document.getElementById('lista'); //seleziono la lista
        data.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('card'); //aggiungo  classi
            card.classList.add('col-sm-6');
            card.classList.add('col-md-4');
            card.classList.add('text-start');
            card.classList.add('mt-4');
            card.classList.add('c-trasparent');
            //aggiungo contenuto alla card
            card.innerHTML = `  
                <div class="bg-light" >
                    <div class="card-image object-fit-contain m-2"> 
                        <img src="${item.url}" class="card-image1" alt="${item.url}">  
                    </div>
                </div>
                <div class="card-text bg-light sometype-mono">
                    <p class="m-2">${item.date}</p>
                    <h4 class="m-2 edu-tas-beginner">${item.title}</h4>
                </div>
                <div class="card-image object-fit-contain none"> 
                    <img src="./img/pin.svg" class="relative">
                </div>
            `;
            lista.appendChild(card);
        });
    });





















