//Markiert aktive Zelle
function td_highlight(offset){
    document.getElementById("feld" + offset).className = "bg-light";
}

//Ändert den Text einer Zelle
function td_change_text(offset, fragetext){
    document.getElementById("feld" + offset).innerHTML = fragetext;
}

//Ändert die Farbe (übergabe: true == grün, false == rot)
function td_change_color(offset, true_false){
    x = document.getElementById("feld" + offset);
    if(true_false === true){
        x.className = "";
        x.className = "bg-success"
    }
    else{
        x.className = "";
        x.className = "bg-danger"
    }
}

//Setzt die Tabelle zurück auf Ursprung
function td_reset(){
    for(x=1; x <= 9; x++){
        y = "Frage " + x
        document.getElementById("feld" + x).className = "";
        td_change_text(x, y);
    }
}

//Liest die Antwort aus
function get_answer(){
    x = document.getElementById("Antwort").nodeValue;
    return x;
}