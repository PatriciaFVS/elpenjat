function novaPartida(){
 crearAbc()
}
function crearAbc(){
let caractersPermesos = 'abcdefghijklmñnopqrstuvwxyz';
let contAbc=document.getElementById("abecedari");
let carHtml="";
let letra;

for(let i=0; i<caractersPermesos.length; i++){
    letra=caractersPermesos[i];
    carHtml += `<button id=${letra} onclick="alertaLetra('${letra}')">${letra}</button>`
   
   
}
contAbc.innerHtml=carHtml;
}

function alertaLetra(letra){
    alert ("La lletra escollida és: "+ letra)
}