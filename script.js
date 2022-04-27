/*Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team.
 Ogni membro ha le informazioni necessarie per stampare la relativa card: **Name, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html,
 stampare dinamicamente una card per ogni membro del team.



BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi 
membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **
inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente. */


const team = [

  {
    Name : 'Wayne Barnett',
    role : 'founder - ceo',
    image : 'wayne-barnett-founder-ceo.jpg'
  },
  { 
    Name : 'Angela Caroll',
    role : 'chief editor',
    image : 'angela-caroll-chief-editor.jpg'
  },
  {
    Name : 'Walter Gordon',
    role : 'Office Manager',
    image : 'walter-gordon-office-manager.jpg'
  },
  {
    Name : 'Angela Lopez',
    role : 'social media manager',
    image : 'angela-lopez-social-media-manager.jpg'
  },
  {
    Name : 'Scott Estrada',
    role : 'developer',
    image : 'scott-estrada-developer.jpg'
  },
  {
    Name : 'Barbara Ramos',
    role : 'graphic designer',
    image : 'barbara-ramos-graphic-designer.jpg'
  },
  
];

const container = document.querySelector('.team-container');

init(team);


function init(card) {

  for(let i = 0; i < team.length; i++) {

    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';

    const cardimage = createimage(card[i]);

    const cardTxt = createText(card[i]);

    container.append(teamCard);

    teamCard.append(cardimage);
    teamCard.append(cardTxt);


  }

}

function createimage(crd){

  const cardimage = document.createElement('div');

  cardimage.className = 'card-image';

  cardimage.innerHTML = `<image
  src="img/${crd.image}"
  alt="${crd.Name}"
  />`;

  return cardimage

}

function createText(txt){

  const cardText = document.createElement('div');

  cardText.className = 'card-text';

  cardText.innerHTML = `<h3>${txt.Name}</h3>
                        <p>${txt.role}</p>`;

  return cardText
  
}

document.querySelector('button').addEventListener('click', createNewCard)

function createNewCard(){
  
  const Name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const image = document.getElementById('image').value;

  team.push({Name, role, image},);

  container.innerHTML = '';

  init(team);
}

