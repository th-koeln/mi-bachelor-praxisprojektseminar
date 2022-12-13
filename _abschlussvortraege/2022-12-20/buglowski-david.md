---
nachname: Buglowski
vorname: David
datum: 2022-12-20
uhrzeit: 11-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: ck
thema: Entwicklung einer Dynamic Link Library zur Steuerung eines File Update Prozesses
kooperationspartner: TH Köln, Heimbach GmbH
teaserimage: buglowski-david-teaserimage.jpg
stichworte: Development, C#, Klassenbibliothek, DLL, .NET, CRM-System
quelle-bildrechte-teaser: David Buglowski
hinweise:
weiterfuehrende-themen: Gestaltung einer UI | Nutzen und Einsatz von Klassenbibliotheken
---

## Abstract

Im Unternehmen steht aktuell der Wechsel auf ein Cloud-basiertes Customer-Relationship-Management-System (kurz CRM-System) an. Diesbezüglich müssen auch Anwendungen, welche an die Datenbank des bisherigen CRM-Systems angebunden sind, dementsprechend aktualisiert werden. So müssen generell die Verbindungen zu den Datenbanken aktualisiert werden, aber auch der Ablauf bei aktualisierten Dateien der jeweiligen Anwendungen.

Die entwickelte Dynamic Link Library (kurz dll) soll zwei, erzeugte Windows-Form-Anwendungen unterstützen und die Hauptaufgaben übernehmen. Die erste Windows-Form-Anwendung soll dazu dienen, in der Industrie genutzte Programme bei neuen Versionen automatisch zu aktualisieren. Diese zu aktualisierenden Anwendungen sind Eigenentwicklungen des Unternehmens und befinden sich aktuell in einer Neubearbeitung aufgrund des Wechsels des CRM-Systems. Zukünftig werden aktualisierte Versionen dieser Anwendungen im CRM-System in der Cloud hinterlegt und mit einer lokalen Datenbank in SQLite synchronisiert. Eine Aktualisierung findet dann über diese lokale Datenbank statt. Die zweite Anwendung, welche mit der entwickelten dll unterstützt wird, stellt einen File Upload für aktualisierte Versionen in das CRM-System dar. Diese wird über ein Interface gesteuert, welches die Auswahl der Datenbank (Produktiv, Test, Entwicklung), des jeweiligen Programms und eine Auflistung der bisher hochgeladenen Versionen, sowie Funktionen für das Hochladen, Bearbeiten und Löschen von Versionen ermöglicht.

Das Ergebnis der Implementierung der Klassenbibliothek ist die erfolgreiche Entwicklung beider Anwendungen. Diese wurde im vierköpfigen Team ausgiebig getestet und bei Fehlern korrigiert.

## Material & weiterführende Infos
-
