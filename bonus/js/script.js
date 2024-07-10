let members = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const container = document.getElementById('container');
container.classList.add('container-fluid', 'text-center', 'py-5', 'bg-light');
container.innerHTML = `<h1>OUR TEAM</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus dolorem nam! Culpa vitae enim labore tenetur odio ipsam iusto id praesentium sint iure facere, qui, excepturi doloremque, accusantium voluptatem?</p>`


function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    return row
}

function createCol() {
    let col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');
    return col
}

function createCont() {
    let cont = document.createElement('div');
    cont.classList.add('content', 'my-3');
    return cont
}

function createCard() {
    let card = document.createElement('div');
    card.classList.add('card', 'h-100');
    return card
}

let newRow = createRow();

container.append(newRow);


for (i = 0; i < members.length; i++) {
    let newCol = createCol();
    let newCont = createCont();
    let newCard = createCard();
    console.log(members[i].nome, members[i].ruolo, members[i].foto)
    newCard.innerHTML += `<img src="../img/${members[i].foto}"><div class="card-body"><h5 class="card-title">${members[i].nome}</h5> <p class="card-text fst-italic">${members[i].ruolo}</p></div>`
    newRow.append(newCol);
    newCol.append(newCont);
    newCont.append(newCard);
}
