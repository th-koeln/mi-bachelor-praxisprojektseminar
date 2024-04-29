---
nachname: Neufeldt
vorname: Dennis
datum: 2024-05-07
uhrzeit: 11-00
raum:  3.216
betreuer: sk
thema: Evaluation von Authentifizierungsmaßnahmen in Kafka basierten IIoT Systemen
kooperationspartner: SmartConData GmbH
teaserimage: neufeldt-dennis-teaserimage.jpg
stichworte: IIoT, IoT, IIoT Security, Authentifizierung, Public Key Infrastruktur 
quelle-bildrechte-teaser: jcomp / rawpixel.com aus freepik.com
weiterfuehrende-themen: Konzipierung eines Systems zur Vorhersage von Anomalien in IIoT Systemen | Implementierung und Bewertung einer Datagram Transport Layer Security Schnittstelle für IoT Geräte | Analyse von Blockchain-Technologien zur Gewährleistung der Sicherheit in IIoT systemen 
---

## Abstract
Internet of Things (IoT) Geräte in der Industrie helfen dabei Prozesse zu automatisieren und zu überwachen. Das funktioniert beispielsweise über Temperatursensoren an Maschinen in Fertigungsanlagen, welche ihre Daten über das Internet an Verwaltungs- und Analyseprogramme senden. Da dabei oftmals große Datenmengen entstehen, können die einzelnen Datenpakete mithilfe von Apache Kafka der Reihe nach verarbeitet und weitergeleitet werden. Jedoch birgt die Implementierung von solchen Industrial IoT (IIoT) Systemen aufgrund der schwachen Rechenleistung der Geräte und einer großen Anzahl von Angriffen Risiken. Ein berühmtes Beispiel für einen Angriff findet sich im September 2010, wo mithilfe des Computervirus "Stuxnet" in einem iranischen Atomkraftwerk schätzungsweise 1000 der 9000 verwendeten Zentrifugen zerstört wurden. Da heutzutage auch Teile der Energieversorgung durch IIoT Systeme unterstützt werden, ist es daher wichtig solche Systemen abzusichern.

Drei häufig anzutreffende Angriffe sind Man in the Middle, Device Impersonation und (Distributed) Denial of Service. Diese Präsentation beschäftigt sich mit der Frage welche Authentifizierungsmaßnahmen dabei helfen können diese Attacken zu verhindern und in ein IIoT System passen, dass über UDP eine Kafka Connect Schnittstelle für IoT Geräte bietet. Die gewählten Maßnahmen werden unter anderem im Hinblick auf ihren Einfluss auf die Skalierbarkeit, Performance und Gewährleistung der IT-Sicherheitsziele verglichen und bewertet. Im Anschluss werden die wichtigsten Abläufe der, aus der Evaluation, resultierenden Authentifizierungsmaßnahmen im vorgestellten System beschrieben. Diese Präsentation soll Entwicklern einen Einstieg in das Thema Industrial Internet of Things Security geben und dabei helfen eine fundierte Entscheidung bezüglich Authentifizierung der IoT Geräte in einem solchen System zu treffen.

## Material & weiterführende Infos
- [Diverse Whitepaper von Keyfactor](https://www.keyfactor.com/resources/)
- [Plattform Industrie 4.0](https://www.plattform-i40.de/IP/Navigation/DE/Home/home.html)
- [Sicherheitsstandard IEC 62443](https://www.pilz.com/de-DE/produkte/industrial-security/security-norm)
