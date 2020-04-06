// 3 Schwierigkeitsgrade
// Einfach:	a * b 			Regex: \d+\*\d+$
// Mittel:	a * b -+ c		Regex: \d+\*\d+[-+]\d+$
// Schwer:	a * b -+ c * d	Regex: \d+\*\d+[-+]\d+\*(1[0-9]|20|[2-9])$
// Alle Zahlen werden zufällig generiert
// Nur ganze Zahlen
// 1 - 20

class Frage {
	constructor() {
		this._frageRegex = [
			/\d+\*\d+$/,
			/\d+\*\d+[-+]\d+$/,
			/\d+\*\d+[-+]\d+\*(1[0-9]|20|[2-9])$/
		];
	
		this._frageString = [
			'\d*\d',
			'\d*\d?\d',
			'\d*\d?\d*\d'
		];
	}

	_zufallszahlGenerieren(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	_schwierigkeitErmitteln(spielstand) {
		// Position des Spielers ermitteln
		// Feld 1-3 = Einfach
		// Feld 4-6 = Mittel
		// Feld 7-9 = Schwer
		if (spielstand > 0 && spielstand < 10) {
			if (spielstand < 4) {
			return 1;
			} else if (spielstand < 7) {
			return 2;
			} else if (spielstand < 10) {
			return 3;
		}
		} else {
			alert("Fehler: Spielstand nicht im Bereich von 1-9!");
			console.log("Fehler: Spielstand nicht im Bereich von 1-9!");
			return 0;
		}
	}

	_fragePruefen(frage, schwierigkeit) {
		if (this._frageRegex[schwierigkeit - 1].test(frage))
			return true;
		return false;
	}

	_ergebnisBerechnen(frage) {
		return eval(frage);
	}

	ergebnisPruefen(frage, ergebnis) {
		if (ergebnis == this._ergebnisBerechnen(frage))
			return true;
		return false;
	}
	
	frageGenerieren(spielstand) {
		let schwierigkeit = this._schwierigkeitErmitteln(spielstand);
		if (schwierigkeit == 0)
			return;

		let frage = this._frageString[schwierigkeit - 1];

		let i = schwierigkeit;
		do {
			frage = frage.replace('\d', this._zufallszahlGenerieren(1, 20));
			i--;
		} while (i != -1);

		if (spielstand > 3) {
			if (this._zufallszahlGenerieren(0, 1) == 1) {
				frage = frage.replace('?', '+');
			} else {
				frage = frage.replace('?', '-');
			}
		}

		if (this._fragePruefen(frage, schwierigkeit)) {
			return frage;
		} else {
			return this.frageGenerieren(spielstand);
		}
	}
}