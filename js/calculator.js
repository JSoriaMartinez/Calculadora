
let GetStarted = () => {
    document.getElementById("screen").value = "Let's train!";
    playSound("pikachu.mp3")
    function playSound(soundPath){
      let audio = document.getElementById("start");
      audio.src = soundPath;
      audio.play();
    }
}

let GetOff = () => {
    document.getElementById("screen").value = '';
    playSound("close.mp3")
    function playSound(soundPath){
      let audio = document.getElementById("close");
      audio.src = soundPath;
      audio.play();
    }
}

let addSymbol = (character) => {
    let screenValue = document.getElementById("screen").value;
    if (screenValue == "Let's train!" || screenValue == '0') {
        document.getElementById("screen").value = character;
    } else {
        document.getElementById("screen").value += character;
    }

    playSound("teclas.mp3")
    function playSound(soundPath){
      let audio = document.getElementById("teclas");
      audio.src = soundPath;
      audio.play();
    }
}

let clearScreen = () => {
    document.getElementById("screen").value = '';
    playSound("clear.mp3")
    function playSound(soundPath){
      let audio = document.getElementById("clear");
      audio.src = soundPath;
      audio.play();
    }
}

let calculate = () => {
    let operation = document.getElementById("screen").value;

    let res = "E";

    let operador = "";
    let pos = 0;
    let found = false;

    //Búsqueda del primer operador. Cuando lo encuentre, lo almacenamos en la posición donde se encuentre con las variables operador y pos. 

    for(let i = 0; i < operation.length - 1 && found == false; i++){
        if(isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true){
          operador = operation[i + 1];
          pos = i + 1;
          found = true;
          
          //Si la operación en su posición 0, es decir, si el usuario introduce primero el signo de multiplicar o dividir, entonces lanzamos un error.

        }else if(operation[0] == "*" || operation[0] == "/" || operation[1] == "+" || operation[1] == "-"){
            console.log("ERROR")
            document.getElementById("screen").value = "Not efective!";
            playSound("lose.mp3")
            function playSound(soundPath){
              let audio = document.getElementById("Lose");
              audio.src = soundPath;
              audio.play();
            }
            return;
        }
        

      }


  
      //primer operando. Conversión del string en número y cortamos para separarlo del operador. Verificamos que el operando no sea un texto con isNaN. En caso de serlo, lanzamos error.

     let op1 = parseInt(operation.slice(0, pos));

     if(isNaN(op1) || pos == 0){
        console.log("ERROR");
        document.getElementById("screen").value = "Not efective!";
        playSound("lose.mp3")
        function playSound(soundPath){
          let audio = document.getElementById("Lose");
          audio.src = soundPath;
          audio.play();
        }
        return; 
      
     }
    

    //Segundo operando. Conversión del string en número y cortamos para separarlo del operador.

     let op2 = parseInt(operation.slice(pos + 1));

     //Si en el corte, se incluye cualquiera de los signos operadores, entonces lanzamos un error para que no se haga el cálculo. 

     if (operation.slice(pos + 2).includes('+') || operation.slice(pos + 2).includes('-') || operation.slice(pos + 2).includes('/') || operation.slice(pos + 2).includes('*')) {
        console.log("ERROR");
        document.getElementById("screen").value = "Not efective!";
        playSound("lose.mp3")
        function playSound(soundPath){
          let audio = document.getElementById("Lose");
          audio.src = soundPath;
          audio.play();
        }
        return;
            }
           
    
    
        
        //Calculo final con switch, asignando cada caso a cada simbolo. 

       

          switch(operador){
            case "+":
              res = op1 + op2;
              break;
            case "-":
              res = op1 - op2;
              break;
            case "/":
              res = op1 / op2;
              break;
            case "*":
              res = op1 * op2;
              break;
          }


      playSound("./12_3.mp3");

      function playSound(soundPath){
        let audio = document.getElementById("keySound");
        audio.src = soundPath;
        audio.play();
      }


    


    //TODO: coger el string, procesar la operación y obtener el resultado

    console.log(operation);

    document.getElementById("screen").value = res;
}




  
  


/*
operaciones correctas

5+3
-5+3
-5-3
-5+-3
-5--3
5--3
849/2
-840/-2
6*+9

*/

//el operador se obtiene recorriendo el string como un array
//y cogiendo el primer simbolo NO numerico seguido de un simbolo
//numerico

//isNaN() -> true -> cuando NO es un numero
//isNaN() -> false -> cuando SI que es un numero


/*
Operaciones NO permitidas -> E

333

*3

+/6

6+*9

3+4+5

*3+6

2.6+6  -> E

/9*3

4-/6

7* / *5

*/


