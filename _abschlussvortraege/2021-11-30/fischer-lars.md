---
nachname: Fischer   
vorname: Lars
datum: 2021-11-30
uhrzeit: 09-00
raum:  Zoom
betreuer: hls
thema: Konzeptionierung & Entwicklung eines API-Explorers
kooperationspartner: d.velop
teaserimage: fischer-lars-teaserimage.jpg
stichworte: API, REST, User Interface, React, Frontend, d.velop, Explorer, Redux, API-Dokumentation
quelle-bildrechte-teaser: Erweitert von Smart Homepage Agentur | (https://www.smart-homepage-agentur.de/images/api/api-schnittstelle-illustration.jpg)
hinweise:
weiterfuehrende-themen: Vertiefende Analyse: Microsoft Graph Explorer // Google APIs Explorer // Facebook Graph API Explorer // ...

                        Weiterentwicklung API-Explorer: Dynamische oder eigene Templates, flexible API Einbindung

                        Vergleichbare/Aufbauende Themen: Unterschiedliche Formen von API-Dokumentationen, Interaktive API-Dokumentationen, automatische Template oder API-Dokumentation Generierung, Integration API-Explorer in API-Dokumentation mittels Web Components
---

## Abstract

Dokumentationen von einer API (Application Programming Interface) dienen dem Aufbau und den Abruf von Wissen über diese. Theoretisches Wissen kann durch praktisches Testen und Ausprobieren gefestigt werden. Die Business Objects API-Dokumentation von d.velop soll von den Kunden schnell und intuitiv verstanden werden. Durch das Ausprobieren der API-Dokumentation über eine Art API-Explorer soll dieses Ziel erreicht werden.

Hierfür lässt sich folgende Forschungsfrage stellen: Wie und in welcher Form kann ein API-Explorer in prototypischer Form entwickelt werden? Mit dieser Forschungsfrage wird es möglich sein herauszufinden was einen API-Explorer ausmacht, wie er die Anforderungen der Domäne erfüllen kann, welche Elemente und Priorisierungen in der Konzeption zu beachten sind und welche Einschränkungen auftreten und welche Technologien in der Implementierung zu verwenden sind.

Die Voraussetzungen für den API-Explorer sind eine Orientierung an Material Design und die Kommunikation mit der Business Objects API, die mittels REST (Representational State Transfer) oder OData V4 (Open Data Protocol Version 4) angesprochen werden kann. 

Der Nutzungskontext und die Konzeption ergeben, dass das Projekt in React (JavaScript-Softwarebibliothek) mit Typescript umgesetzt wird. Durch die Domänen-, Stakeholder- und Risikoanalysen sowie den Vergleich bestehender Ansätze werden Features ermittelt und priorisiert. Als Kernfunktionalität werden beispielsweise Templates, die das Laden und Anpassen von vorgefertigten Anfragen gegen die Schnittstelle ermöglichen, implementiert.

Das Ergebnis ist ein lokal auszuführender API-Explorer der REST-konform Requests senden und Responses wie Statuscodes ausgeben kann. Templates können geladen verändert und zurückgesetzt werden. Eine erste Verknüpfung mit der API-Dokumentation über kontextbasierte Verlinkungen in die Dokumentation ist vorhanden. Über Syntax Highlighting wird der Benutzer bei seinen Eingaben unterstützt. Zusammengefasst: Der Benutzer kann über den API-Explorer die Business Objects API verwenden und erforschen.


## Material & weiterführende Infos
- [API-Explorer Github](https://github.com/LarsFischer97/API-Explorer_Praxisprojekt)
