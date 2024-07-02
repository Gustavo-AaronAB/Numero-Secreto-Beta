// variable global

let numeroSecreto = 0; 
let intentos =0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);



// funcion generica (parametro)

function asignarTextoElemento( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    console.log(intentos);
    if (numeroDelUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //usuario no acerto 
        if(numeroSecreto > numeroDelUsuario)
        asignarTextoElemento('p', 'El numero secreto es mayor');
    else{
        asignarTextoElemento('p','El numero secreto es menor');
      }
    
      intentos++
      limpiarCaja();
    }
      return;  
      
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}   

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo )+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

        //validar 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');

    }
        else{
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();

            }
            else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado
            }
        }
    }

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero 
    //Generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


//Llamar a a la funcion 

condicionesIniciales();


