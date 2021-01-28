---
nachname: Bieber
vorname: Dominik
datum: 2021-02-02
uhrzeit: 10-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: sk
thema: Entwicklung eines Prototyps zur automatisierten Erkennung von Funktionssignaturen in JavaScript
kooperationspartner: TH Köln
teaserimage: bieber-dominik-teaserimage.jpg
stichworte: JavaScript, Fingerprinting, Security, Privacy, Datenschutz
quelle-bildrechte-teaser: Markus Spiske | unsplash
hinweise:
weiterfuehrende-themen: Wie kann Fingerprinting verhindert werden? | Verbesserung des Algorithmus durch Fuzzing | Boterkennung
---

## Abstract

JavaScript ist aus der heutigen Technologiewelt kaum noch wegzudenken. Fast jede moderne Webseite bindet Skripte ein und jeder aktuelle Browser besitzt eine Engine, die diese Skripte ausführen kann. Dabei ist JavaScript schon längst keine reine Skriptsprache mehr. Die Möglichkeiten, die es bietet, werden immer vielfältiger; die Engines komplexer und damit auch die Angriffsmöglichkeiten. Eine schlecht geschützte Webseite könnte zum Beispiel einem Angreifer die Möglichkeit bieten, Zugangsdaten über Schwachstellen wie *Cross-Site-Scripting* zu stehlen. 
Da JavaScript in der Regel clientseitig - also auf dem eigenen Rechner - läuft, enthalten viele Variablen Daten über den eigenen Rechner. Diese werden auch benötigt: So kann eine Webseite beispielsweise durch die exakte Bildschirmauflösung genau in der richtigen Größe angezeigt werden. Listen von installierten Fonts stellen sicher, dass eine Schriftart gewählt wird, die auch vorhanden ist. Solche Werte werden in diesem Kontext auch Properties oder Eigenschaften genannt. Die einzelnen Eigenschaften an sich sind kaum eine Gefahr. Es gibt allerdings tausende, die es in der Summe erlauben, einen sogenannten *Fingerprint* zu erstellen. Mit diesem Fingerprint ist es möglich, Nutzer über mehrere Webseiten zu tracken, ohne dabei Cookies verwenden zu müssen.

Das Projekt baut auf einer vorangegangenen Arbeit von Schwarz et al. aus dem Jahre 2019 auf. Dort wurden sämtliche Eigenschaften aus der JavaScript-Umgebung extrahiert, um diese vergleichen oder einen Fingerprint generieren zu können. Ein offenes Problem in dem Paper war allerdings, dass Funktionen nicht weiter beachtet wurden. Durch das Ausführen von Funktionen erhofften sich die Autoren damals aber, eine noch breitere Auswahl an Eigenschaften und somit ein noch genaueres Fingerprinting.
An dieser Stelle setzt dieses Projekt an. Ziel war es also, Funktionen automatisiert auszuführen, um deren Ausgaben als zusätzliche Eigenschaften zu speichern.
Dabei treten mehrere Probleme auf, die es galt in diesem Praxisprojekt zu lösen:
Zum einen ist nicht von vornherein klar, welche Eigenschaft nun ein einfaches Property ist und hinter welchen eine Funktion wartet. Zum anderen benötigen viele Funktionen Parameter zum erfolgreichen Ausführen. Diese Parameter müssen in der Anzahl und auch häufig in den Datentypen, mit den Erwartungen der Funktion übereinstimmen. Zum Schluss gibt es noch Probleme bei der Ausführung der Funktionen selbst. So gibt es einige Funktionen, die beispielsweise die JavaScript-Umgebung verändern oder Vorgänge abbrechen. All diese Probleme mussten gelöst werden. Dafür wurde in einem ersten Prototyp ein Bruteforce Algorithmus entwickelt, der es ermöglicht, die *Funktionssignatur*, also die Eigenschaften der Funktion, automatisiert zu erfassen.



## Material & weiterführende Infos
- [Michael Schwarz, Florian Lackner, und Daniel Gruss - Javascript template attacks: Automatically inferring host information for targeted
exploits.](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-4_Schwarz_paper.pdf)
