function penjat(){
   let num= parseInt(prompt("Introdueix un mode: 1-Iniciar un joc, 2.Estadístiques"))
    do{
        if(num==1){
            juga();
        }else if (num==2){

        }else if (num==3){
            break;
        }else
        console.log("Introdueix una opció vàlida" )


    }while(num<1 || num>3)

}

function juga(){
    let paraula=prompt("Introdueix una paraula: ");
    let cadena1="";
        for (let i = 0; i < paraula.length; i++) {
        cadena1 += (" _");
        }
    console.log(cadena1)
    let lletra=prompt("Introdueix una lletra:");
    let novaParaula="";
        if(isNaN(lletra)&& lletra.length==1){
            for (let i = 0; i < paraula.length; i++) {
                if(paraula.charAt(i)===lletra){
                    novaParaula += lletra;
                } else {
                    novaParaula += paraula.charAt(i);
                }console.log(novaParaula)
    
            }
        }
}
