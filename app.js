const intituleInput = document.querySelector('#intitule');
const sommeInput = document.querySelector('#somme');
const BtnCancel = document.querySelector('#btn-cancel');
const BtnSubmit = document.querySelector('#btn-submit');
const depensesList = document.querySelector('#depenses-list');

BtnSubmit.addEventListener('click', () => {
 const name = intituleInput.value;
 const prix = sommeInput.value;

 if(name.trim().length == 0 || prix.trim().length == 0 || prix <= 0){
  return;
 }
 else{
  const newItem = document.createElement('ion-item');
  const newLabel = document.createElement('ion-label');
  newLabel.textContent = `${name} : ${prix},00$`; //name +":" + prix;
  newLabel.setAttribute('color', 'primary');
  newItem.appendChild(newLabel);
  depensesList.appendChild(newItem); 
 }
}),

BtnCancel.addEventListener('click', () => {
  depensesList.textContent = "";

 })


