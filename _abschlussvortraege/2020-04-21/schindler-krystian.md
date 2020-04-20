---
nachname: Schindler
vorname: Krystian
datum: 2020-04-21
uhrzeit: 11-30
raum: https://zoom.us/j/99463334433 (Zugangscode ist pps)
betreuer: hfw
thema: Auslesen und Speichern medizinischer Sensordaten mithilfe eines Arduino
kooperationspartner: TH Köln, telexiom AG
teaserimage: schindler-krystian-teaserimage.jpeg
stichworte: Arduino, Raspberry Pi, Mikroelektronik, Medizin, Sensoren
hinweise:
---

## Abstract

Das Praxisprojekt beschäftigt sich mit dem Auslesen medizinischer Sensordaten und der persistenten Speicherung dieser in einer Datenbank. Konkret werden Körpertemperatur, Körperposition, Blutdruck und Blutsauerstoffgehalt ermittelt. Hierzu werden die an der Auslesung beteiligten Sensoren unter Zuhilfenahme mikroelektronischer Komponenten an einen Arduino angeschlossen. Eine zur Ansteuerung der Sensoren entwickelte Software leitet die ausgelesenen Daten per HTTP- Request an einen Raspberry Pi weiter, der als Server fungiert und die empfangenen Daten in einer lokalen, auf MariaDB basierten Datenbank speichert.