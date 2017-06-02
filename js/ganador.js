function usuario(nom,dif,tiempo) {
    this.nom = nom;
    this.dif = dif;
    this.tiempo = tiempo;
}



function getDificultad(dificultad) {
    switch (dificultad){
        case 10:return "Facil";
        case 25:return "Normal";
        case 50:return "Difícil";
        default:return "Indeterminado";
    }
}
