const container = document.getElementById('container');
container.classList.add('container', 'text-center', 'my-5');
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

let newRow = createRow();
let newCol = createCol();

container.append(newRow);
newRow.append(newCol);


for (i = 0; i < members.length; i++) {
    console.log(members[i].nome, members[i].ruolo, members[i].foto)
    text.innerHTML += `${members[i].nome}, ${members[i].ruolo}, <img src="../img/${members[i].foto}"> <br>`
}

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