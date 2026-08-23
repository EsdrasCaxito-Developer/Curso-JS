let atual = new Date();
let diaSem = atual.getDay();

/*
Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
    */
   
   //let diaSemName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
   //console.log(diaSemName[diaSem]);

   switch(diaSem){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
   }