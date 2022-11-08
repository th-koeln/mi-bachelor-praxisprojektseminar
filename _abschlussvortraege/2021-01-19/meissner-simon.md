---
nachname: Meissner
vorname: Simon
datum: 2021-01-19
uhrzeit: 09-30
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: wk
thema: Entwicklung eines Black Jack Clienten in der Game Learning Umgebung General Board Game
kooperationspartner: TH Köln
teaserimage: meissner-simon-teaserimage.jpg
stichworte: Mashine-Learning, Game-Learning, Künstliche-Intelligenz, General-Board-Game, GBG, Black-Jack, Agenten
quelle-bildrechte-teaser: Simon Meissner
hinweise:
weiterfuehrende-themen: Wovon ist der Lernerfolg nichtdeterministischer Spiele imperfekter Informationen abhängig und wie kann man diesen messen? | Eine Gegenüberstellung - Das Lernen deterministischer gegen nichtdeteministischer Spiele durch künstliche Intelligenzen.
---

## Abstract

Durch die exponentiell gestiegene Rechenleistung der letzten 20 Jahre, konnten im Bereich des Machine Learnings herausragende Ergebnisse erzielt werden (Autonomes Fahren, AlphaZero, AlphaGo). Innerhalb eines begrenzten Aufgabenbereichs übertreffen die Fähigkeiten einer künstlichen Intelligenz die des Menschen bei weitem. Somit können künstliche Intelligenzen zur Lösung spezifischer, relevanter Probleme eingesetzt werden.
 
Das Praxisprojekt unterliegt dem Forschungsbereich des Game Learnings und beschäftigt sich insbesondere mit der Implementierung eines nichtdeterministischen Spiels imperfekter Informationen in ein Game Learning Framework.
Als Voraussetzung einer Forschungsfrage, welche das Erlernen und Spielen zutreffender Spiele durch künstliche Intelligenzen untersucht, wird eine passende Umgebung benötigt. In dieser Umgebung müssen künstliche Intelligenzen und ein zutreffendes Spiel existieren. Somit ergibt sich das Ziel, die gewählte Game Learning Umgebung um das fehlende nichtdeterministische Spiel imperfekter Informationen zu erweitern.

Als Framework wird das von Prof. Dr. Wolfgang Konen entwickelte General Board Game (GBG) verwendet, welches auf das Lernen beliebiger zugbasierter Spiele von künstlichen Intelligenzen spezialisiert ist. Für die Umsetzung wird das nichtdeterministische Kartenspiel Black Jack verwendet, welches sich durch imperfekte Informationen auszeichnet. Black Jack bildet nach Implementation eines der ersten nichtdeterministischen Spiele mit imperfekten Informationen in GBG.
Für die Erweiterung des GBGs durch Black Jack ist es notwendig, die bereitgestellten Interfaces zu implementieren. Hierfür wird der Spielzustand bzw. Game State für Black Jack kodiert und anschließend Regeln definiert, nach denen ein Game State in den Folgezustand (Advance) versetzt wird. Um das Spiel für Menschen spielbar zu machen, wird eine grafische Oberfläche realisiert, welche den Game State visualisiert und Interaktionen des Menschen erlaubt.

Das Ergebnis des Praxisprojekt ist somit eine technische Grundlage, um fortführende Forschungsfragen im Bereich des Game Learnings nichtdeterministischer Spiele mit imperfekten Informationen anhand von Black Jack zu untersuchen.


## Material & weiterführende Infos

- [Github Repo in welchem Gearbeitet wurde](https://github.com/simonitor/PraxisProjekt-GBG)
- [Ofizielles GBG Github Repo](https://github.com/WolfgangKonen/GBG)
