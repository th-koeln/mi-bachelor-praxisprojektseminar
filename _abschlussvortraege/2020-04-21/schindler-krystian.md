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

Oft werden für medizinische Zwecke Statistiken über Normbereiche biometrischer Parameter für bestimmte Menschengruppen erstellt. Weitere, individuellere Faktoren werden allerdings häufig nicht beachtet, wodurch keine Zusammenhänge erkannt oder konkrete Prognosen erstellt werden können.

Im Rahmen des Praxisprojekts soll ein System entwickelt werden, mit dem medizinische Daten von Personen sensorisch erfasst und persistent gespeichert werden können, um eine Datenbasis für die Erstellung von Prognosen zu schaffen. Konkret sollen Körpertemperatur, Körperposition, Blutdruck und Blutsauerstoffsättigung ermittelt werden. Hierzu werden zunächst verschiedene Sensoren unter Zuhilfenahme mikroelektronischer Komponenten durch einen Mikrocontroller ausgelesen. Als Mikrocontroller wird ein Arduino verwendet, für welchen eine Software zur Ansteuerung der Sensoren und Weiterleitung der ermittelten Daten entwickelt wird. Zur persistenten Speicherung der Daten werden diese in einer auf MariaDB basierten Datenbank abgelegt. Diese wird auf dem Einplatinencomputer Raspberry Pi aufgesetzt, da sich der Arduino als Mikrocontroller nicht zum Speichern größerer Datenmengen eignet. Zur Kommunikation zwischen Arduino und Raspberry Pi wird auf letzterem ein Node.js-Server aufgesetzt, welcher die Daten per HTTP-Request vom Arduino empfängt und diese in der Datenbank speichert.