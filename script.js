

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then((response) => response.json())
    .then((data) => {
        const lista = document.getElementById('lista'); //seleziono la lista
        data.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('card'); //aggiungo  classi
            card.classList.add('col-4');
            card.classList.add('text-start');
            card.classList.add('mt-4');
            card.classList.add('c-trasparent');
            //aggiungo contenuto alla card
            card.innerHTML = `  
                <div class="card-image object-fit-contain"> 
                    <img src="${item.url}" class="card-image1" alt="${item.url}">  
                </div>
                    <div class="card-text bg-light oooh-baby-regular">
                        <p class="m-2">${item.date}</p>
                        <h4 class="m-2">${item.title}</h4>
                    </div>
                <div class="card-image object-fit-contain "> 
                    <img src="./img/pin.svg" class="relative">
                </div>
            `;
            lista.appendChild(card);
        });
    });





















