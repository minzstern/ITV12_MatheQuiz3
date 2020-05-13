// // # -> Hinzugefügt von Gruppe Design
// // Änderungen von Gruppe Design sind nur Proof of Concept -> Muss von Gruppe Speicher richtig implementiert werden

// var spielstand = 0;
// var frage = new Frage();
// var fragen;

// function weiter(){
//     if(spielstand != 10){
//         //alert("Spielstand: " + spielstand);   #
//         td_highlight(spielstand);   //#
//         fragen = frage.frageGenerieren(spielstand);
//         td_change_text(spielstand, fragen); //#
//         let eingabe = prompt(fragen);
//         if(frage.ergebnisPruefen(fragen, eingabe))
//             {
//                 td_change_text(spielstand, "Richtig!");    //#
//                 td_change_color(spielstand, true);  //#
//                 spielstand ++;
//                 //alert("Richtig!");   //#
//             }
//         else
//             {
//                 td_change_text(spielstand, "Falsch!");    //#
//                 td_change_color(spielstand, false);  //#
//                 spielstand++;   //#
//                 //alert("Falsch!"); #
//             }

//     if(spielstand == 10){
//         alert("Spiel beendet");
//         spielstand = 1;
//         }
//     }
//     localStorage.setItem("spielstand",spielstand);
// }

// function neu(){
//     td_reset(); //#
//     spielstand = 1;
//     localStorage.setItem("Spielstand",spielstand);
//     alert("Spielstand wurde auf 1 gesetzt");
// }


// if (localStorage.getItem("spielstand") == null){
//    spielstand = 1;
// }
// else {
//     spielstand = localStorage.getItem("spielstand");
// }

// naechsterzug.onclick = weiter;
// neuesSpiel.onclick = neu;