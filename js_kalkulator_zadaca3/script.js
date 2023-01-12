var broj=[];
var calcDiv = document.querySelector('.calcDiv');
var body = document.querySelector('body')[0];
var inputCalc = document.querySelector('.inputCalc');
var inputBox = document.querySelector('.inputBox');
var operators = document.querySelectorAll('.operators > .btn');
var buttonNumbers = document.querySelectorAll('.numberButtons > .btn-numb');
var button = document.querySelector('numberButtons');
var buttonJednako = document.querySelector('.numberButtons > .btn-jednako');
var result=0;

function handleJednako(event){
  var target = event.target;
 
  
  if(target == buttonJednako){
    console.log('jednako');
    // result=parseFloat(inputCalc.value+handleOperators()+parseFloat(inputBox.value));
    inputBox.value = result; //OVDJE MORAM SKUŽITI KAK DA VRATIM KRAJNJU VRIJEDNOST
  }
}





function handleButton(event){
  
  var target = event.target;
 

for(i=0;i<buttonNumbers.length;i++){
  if(target== buttonNumbers[i]){
    console.log('uspješno');
    inputBox.value+=buttonNumbers[i].value; //5
  
    
  }
}
  
}



function handleOperators(e){
 
  var target = e.target;


for(i=0;i<operators.length;i++){
  if(target == operators[i]){ //bio ti je npr.5 i ti si kliknuo +
    console.log('unos operatora uspješan');
    
    inputCalc.value+= (inputBox.value+operators[i].value); //5+
    //inputBox.value+=inputBox.value;
    broj = inputBox.value; //5
    
    //inputCalc.value = inputCalc.value +inputBox.value +operators[i].value
  }
}

    if(target.value == operators[5].value){ //2*
      
      result+=parseFloat(broj); //2*
      
     //4+
      //inputBox.value='';
  
      
  
    }
 else if(target.value == operators[3].value){
    
    result=parseFloat(inputCalc.value)/parseFloat(inputBox.value);
  
   

    

}
 else if(target.value == operators[4].value){
    
    result+=parseFloat(inputCalc.value)+parseFloat(inputBox.value);
  
    inputBox.value='';

    

}

else if(target.value == operators[1].value){
    
  result=parseFloat(inputCalc.value)-parseFloat(inputBox.value);
  
  inputBox.value='';

  

}

  }


 

 







    
   
  

for (i=0;i<buttonNumbers.length;i++){
  
  var buttons = buttonNumbers[i];
   buttons.addEventListener('click',handleButton);
   buttonJednako.addEventListener('click',handleJednako);

}


for (i=0;i<operators.length;i++){
  
  var operatori = operators[i];
   operatori.addEventListener('click',handleOperators);

}