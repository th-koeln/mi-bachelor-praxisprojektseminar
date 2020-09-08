---
nachname: Honnen
vorname: René
datum: 2020-09-08
uhrzeit: 12-00
raum:  https://us02web.zoom.us/j/86324956433 (Passwort steht im Ilias)
betreuer: mw
thema: Konzeption einer Webanwendung für das Verwalten automatischer Tests
kooperationspartner: RIB IMS GmbH
teaserimage: honnen-rene-teaserimage.png
stichworte: Software-Testing, Webanwendung
hinweise:
---

## Abstract

Die Firma RIB IMS GmbH (ehem. IMSWARE GmbH) entwickelt seit 1987 verschiedene Software-Lösungen für CAFM, Property Management, Kabel-, FTTx- und Netzwerk-Management. Seit 2012 werden diese sukzessive in einer Webversion nachgebildet. Dabei wird je nach Kunde eine individuelle Instanz mit verschiedenen Modulen und Anpassungen ausgeliefert. Bislang wurde bei der Entwicklung auf Software-Tests verzichtet und dies soll nun nachgeholt werden. Dabei fiel die Wahl auf das Test-Framework Cypress.

Das Ziel des Praxisprojekts ist es, einen Prototypen zu entwickeln, der es ermöglicht, Tests automatisiert auszuführen, die Testergebnisse anschließend übersichtlich einsehen zu können und festzulegen wann welche Instanz getestet werden soll. Die Herausforderung ist es, statt des kostenpflichtigen Dashboards von Cypress, einen auf die Software von IMSWARE zugeschnittenen Test-Manager zu entwickeln.

Für die Realisierung des Prototyps wird ein Webserver mit node.js und express eingesetzt, damit die Module-API von Cypress genutzt werden kann. So können im Anschluss von Testläufen weitere selbst definierte Aktionen ausgeführt werden. Auf der vom Webserver bereitgestellten Website werden drei Seiten bereitgestellt:
- Eine Startseite mit der Übersicht über aktuell laufende Tests und der Möglichkeit Tests manuell zu starten,
- eine Archivseite mit den Berichten aller zuvor gelaufenen Tests und
- eine Einstellungsseite wo festgelegt werden kann, wann welche Tests ausgeführt werden.

## Material & weiterführende Infos
- [Cypress Dokumentation](https://docs.cypress.io/guides/guides/module-api.html)
