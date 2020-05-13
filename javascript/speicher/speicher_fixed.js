// Editiert von SR - Orginal konnte nicht verwendet werden

var spielstand = 0;
var frage = new Frage();
var fragen;
var frage_erstellt = false;

function weiter() {
    if (spielstand != 10) {
        td_highlight(spielstand);
        fragen = frage.frageGenerieren(spielstand);
        td_change_text(spielstand, fragen);
        frage_erstellt = true;
    } else {
        alert("Spiel beendet, bitte auf neu klicken um ein neues spiel zu starten");
    }
}

function eingabebutton() {
    if (frage_erstellt == true) {
        let eingabe = document.querySelector("#Antwort").value;
        if (frage.ergebnisPruefen(fragen, eingabe)) {
            td_change_text(spielstand, "Richtig!");
            td_change_color(spielstand, true);
            spielstand++;
        } else {
            td_change_text(spielstand, "Falsch!");
            td_change_color(spielstand, false);
            spielstand++;
        }
        frage_erstellt = false;
    } else {
        alert("Bitte zuerst eine Frage erstellen!")
    }
    localStorage.setItem("spielstand", spielstand);
    document.getElementById("Antwort").value = "";
}



function neu() {
    td_reset();
    spielstand = 1;
    frage_erstellt = false;
    localStorage.setItem("Spielstand", spielstand);
    alert("Spielstand wurde auf 1 gesetzt");
}


if (localStorage.getItem("spielstand") == null) {
    spielstand = 1;
} else {
    spielstand = localStorage.getItem("spielstand");
}

naechsterzug.onclick = weiter;
neuesSpiel.onclick = neu;
BtnAntwort.onclick = eingabebutton;