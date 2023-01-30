const inputText = document.querySelector('.inputTxt');
const btnAddItem = document.querySelector('.addItem');
const divCont = document.querySelector('.container');
var listItemDiv = document.querySelector('.listItem');
const checkBox = document.querySelector('.checkBox');
const removeButt = document.querySelector('.remove');
const itemDisplay = document.querySelector('.itemText');
const body = document.querySelector('body');

const div = document.createElement('div');
var listOfItems = [];
var tekst = inputText.textContent;

for(i=0;i<50;i++){
    if(btnAddItem.click){
divCont.appendChild(listItemDiv);
console.log('for');

    }
}
// const handleButton = (e) => {
//     const target = e.target;
//     console.log(target);
// itemDisplay.textContent = inputText.textContent;


// }
function handleRemoveButton(e){

var clickedButt = e.target;
console.log(clickedButt);
listItemDiv = clickedButt.parentElement;
listItemDiv.remove();
itemDisplay.value='';
        
    
}
function handleButton () {
    
    if(btnAddItem.click){
        console.log('kliknut');
       tekst += inputText.value;
        itemDisplay.value = tekst;
        itemDisplay.textContent = itemDisplay.value;
        listOfItems+=itemDisplay.textContent;
        itemDisplay.value = '';
        
    }

    for(i=0;i<listOfItems.length;i++){
     divCont.append(listItemDiv);

    }

   

}

// var button = btnAddItem.addEventListener('click',handleButton);
btnAddItem.addEventListener('click',handleButton);
removeButt.addEventListener('click',handleRemoveButton);

