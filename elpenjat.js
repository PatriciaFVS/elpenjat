

function penjat(perdudes,guanyades){
   let num= parseInt(prompt("Introdueix un mode: 1-Iniciar un joc 2.Estadístiques 3.Sortir"));
   
    do{
        if(num==1){
            juga();
            guanyades+=estadistiques.guanyades;
            perdudes+=estadistiques.perdudes;
        }else if (num==2){
            estadistiques(perdudes,guanyades);
        }else if (num==3){
            break;
        }else
        console.log("Introdueix una opció vàlida" )


    }while(num<1 || num>3)

}

function juga(){
    let paraula=prompt("Introdueix una paraula: ");
    let guionArray=[];
    let paraulaArray=[];
    let lletresUtilitzades=[];
    let intents=6;
    let guanyades1=0;
    let perdudes1=0;
        for (let i = 0; i < paraula.length; i++) {
           guionArray.push("_"); 
           paraulaArray.push(paraula.charAt(i));
        
        }
    console.log(guionArray)
    let lletra;
    do{
        
        do{
            lletra=prompt("Introdueix una lletra:");
        }while(!(isNaN(lletra)&& lletra.length==1))
    
        
        if(paraula.includes(lletra)){ 
            for (let i = 0; i < paraula.length; i++) {
                    if(paraulaArray[i]==lletra){
                        guionArray[i] = lletra;
                        console.log(guionArray);
                        if(guionArray.toString()==paraulaArray.toString()){
                            console.log("Enhorabona has completat la paraula!");
                            guanyades1++;
                            return(perdudes1,guanyades1);
                            
                            
                        }
                    }
                }
            }
        else{
            lletresUtilitzades.push(lletra);
            intents--;
            if(intents==0){
                console.log("Has perdut");
                perdudes1++;
                function penjat(perdudes,guanyades){
   let num= parseInt(prompt("Introdueix un mode: 1-Iniciar un joc 2.Estadístiques 3.Sortir"));
   
    do{
        if(num==1){
            juga();
            
        }else if (num==2){
            estadistiques(perdudes,guanyades);
        }else if (num==3){
            break;
        }else
        console.log("Introdueix una opció vàlida" )


    }while(num<1 || num>3)

}

function juga(){
    let paraula=prompt("Introdueix una paraula: ");
    let guionArray=[];
    let paraulaArray=[];
    let lletresUtilitzades=[];
    let intents=6;
    let guanyades1=0;
    let perdudes1=0;
        for (let i = 0; i < paraula.length; i++) {
           guionArray.push("_"); 
           paraulaArray.push(paraula.charAt(i));
        
        }
    console.log(guionArray)
    let lletra;
    do{
        
        do{
            lletra=prompt("Introdueix una lletra:");
        }while(!(isNaN(lletra)&& lletra.length==1))
    
        
        if(paraula.includes(lletra)){ 
            for (let i = 0; i < paraula.length; i++) {
                    if(paraulaArray[i]==lletra){
                        guionArray[i] = lletra;
                        console.log(guionArray);
                        if(guionArray.toString()==paraulaArray.toString()){
                            console.log("Enhorabona has completat la paraula!");
                            guanyades1++;
                            penjat(perdudes1,guanyades1);
                            
                            
                        }
                    }
                }
            }
        else{
            lletresUtilitzades.push(lletra);
            intents--;
            if(intents==0){
                console.log("Has perdut");
                perdudes1++;
                penjat(perdudes1,guanyades1);
            }
        }

        
    } while(intents > 0)
    
}

function estadistiques(perdudes,guanyades){
    console.log("Partides guanyades: "+guanyades+ " partides perdudes: "+ perdudes);
    penjat();

}


                return(perdudes1,guanyades1);
            }
        }
        
        
    } while(intents > 0)
    
}

function estadistiques(perdudes,guanyades){
    console.log("Partides guanyades: "+guanyades+ " partides perdudes: "+ perdudes);
    penjat();

}

