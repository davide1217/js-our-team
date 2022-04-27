/*Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team.
 Ogni membro ha le informazioni necessarie per stampare la relativa card: **name, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html,
 stampare dinamicamente una card per ogni membro del team.



BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi 
membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **
inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente. */


const team = [

  {
    name : 'Wayne Barnett',
    role : 'founder - ceo',
    img : 'wayne-barnett-founder-ceo.jpg'
  },
  { 
    name : 'Angela Caroll',
    role : 'chief editor',
    img : 'angela-caroll-chief-editor.jpg'
  },
  {
    name : 'Walter Gordon',
    role : 'Office Manager',
    img : 'walter-gordon-office-manager.jpg'
  },
  {
    name : 'Angela Lopez',
    role : 'social media manager',
    img : 'angela-lopez-social-media-manager.jpg'
  },
  {
    name : 'Scott Estrada',
    role : 'developer',
    img : 'scott-estrada-developer.jpg'
  },
  {
    name : 'Barbara Ramos',
    role : 'graphic designer',
    img : 'barbara-ramos-graphic-designer.jpg'
  }
  
];

const container = document.querySelector('.team-container');


displayCards(team);


function displayCards(card) {

  for(let i = 0; i < team.length; i++) {

    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';

    const cardImg = createImg(card[i]);

    const cardTxt = createText(card[i]);

    container.append(teamCard);

    teamCard.append(cardImg);
    teamCard.append(cardTxt);


  }

}

function createImg(crd){

  const cardImg = document.createElement('div');

  cardImg.className = 'card-image';

  cardImg.innerHTML = `<img
  src="img/${crd.img}"
  alt="${crd.name}"
  />`;

  return cardImg

}

function createText(txt){

  const cardText = document.createElement('div');

  cardText.className = 'card-text';

  cardText.innerHTML = `<h3>${txt.name}</h3>
                        <p>${txt.role}</p>`;

  return cardText
  
}

/* <div class="team-card">
    <div class="card-image">
      <img
        src="img/wayne-barnett-founder-ceo.jpg"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
  </div> */