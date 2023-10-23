 let nome = "Lagajo"
 let xp =6.000  

 if(xp < 1.000){
    xp = "ferro"
 }
    else if(xp > 1.000 && xp <= 2.000 ){
        xp = "Bronze"
    }   
    else if(xp > 2.000 && xp <= 5.000){
        xp ="Prata"
    }
    else if(xp > 5.000 && xp <= 7.000){
        xp = "Ouro"
    }
    else if(xp > 7.000 && xp <= 8.000){
        xp = "Platina Diamante"
    }
    else if(xp > 8.000 && xp <= 9.00){
        xp = "Ascendente"
    }
    else if(xp > 9.000 && xp <= 10.000){
        xp = "Imortal"
    }
    else if(xp > 10.000){
        xp = "Radiante"
    }
    console.log("O herói de nome " + nome + " está no nível de " + xp)