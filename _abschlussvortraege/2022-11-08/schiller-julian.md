---
nachname: Schiller
vorname: Julian
datum: 2022-11-08
uhrzeit: 09-30
raum: https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: mb
thema: Erarbeitung eines Peer-to-Peer-Konzeptes zur Speicherung und Bereitstellung von Sensordaten mit prototypischer Implementierung
kooperationspartner: TH Köln
teaserimage: schiller-julian-teaserimage.jpg
stichworte: IoT, Peer-to-Peer, verteilter Systeme
quelle-bildrechte-teaser: Julian Schiller
hinweise:
weiterfuehrende-themen: Nutzung von Peer-to-Peer-Technologien in Low Power Wide Area Networks (LPWA) | Vergleich von Hypercore und IPFS in Bezug auf die Tauglichkeit im Anwendungsfall:Speicherung, Verarbeitung und Bereitstellung von Sensordaten in der Edge
---

## Abstract

Gängige Internet of Things (IoT) Architekturen nutzen für das Versenden von Nachrichten und zur Verarbeitung von Data Streams (z.B. Zeitreihendaten von Sensoren) i.d.R. entweder einen Broker-basierten Publish/Subscriber-Ansatz wie z.B. MQTT, oder das Client/Server Model wie z.B. CoAP. Die Nutzung eines zentralen Brokers oder des Client/Server-Model führen zu einer zentralisierten Architektur. Bei klassischen IoT-Architekturen determiniert i.d.R. die zentrale Komponente die Leistungsfähigkeit, Resilienz und Robustheit das Gesamtsystems.

Das Praxisprojekt ging der Frage nach, ob mithilfe einer Peer-to-Peer Technologie eine vollständig dezentrale Architektur zur Speicherung und Bereitstellung von Sensordaten ermöglicht werden kann. Im Rahmen der formulierten Forschungsfrage wurde eine Alternative zu gängigen IoT- Architekturen untersucht und prototypisch implementiert.
Der Peer-to-Peer Ansatz hat das Potenzial, Systeme robuster und resilienter zu machen, in dem z.B. single point of failure vermieden werden.
Bei Peer-to-Peer Overlay-Netzwerken handelt es sich um verteilte Systeme ohne Hierarchie und, in vielen Fällen, ohne eine zentrale Komponente. Diese Overlay Netzwerke arbeiten i.d.R. auf der Anwendungsschicht des TCP/IP-Protokollstapel.

Für die prototypische Implementierung wurde das Hypercore Protokoll gewählt.
Die Architektur von Hyper\* erlaubt es, einzelne Module aus dem Protokollstapel zu
implementieren und so flexibel an den gewünschten Anwendungsfall anzupassen. Dies
ermöglicht eine schmale und leichtgewichtige Umsetzung des Prototyps. Zusätzlich
stellt Hypercore bereits eine Datenstruktur in Form einer Key-Value-Datenbank namens
Hyperbee bereit. Hypercore wurde entwickelt mit dem Hauptziel, große Datenmengen
in einem verteilen System bereitzustellen.

Anhand eines Proof-of-Concept (PoC) wurde die Machbarkeit des erarbeiteten Ansatzes geprüft. Die hier gewählte Implementierung von Hyper\* führt zu einem Netzwerk, welches
gegen Ausfälle, sowie das Ein- und Austreten von Netzwerkentitäten robust und
resilient ist. Die erfolgreiche Durchführung des PoC hat gezeigt, dass das Projektziel erreicht wurde. Somit kann die Verwendung von Peer-to-Peer-Technologien eine Alternative zum klassischen, zentralisierten Ansatz sein.

## Material & weiterführende Infos

- [Repo zum Praxisprojekt](https://github.com/JJJS777/Praxisprojekt2022)
