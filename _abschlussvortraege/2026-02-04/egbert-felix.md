---
nachname: Egbert
vorname: Felix
datum: 2026-02-04
uhrzeit: 12-00
raum:  3.216
betreuer: cn
thema: "Konzeption und prototypische Umsetzung eines web-basierten Tools zur Bearbeitung von IPTC-Daten"
kooperationspartner: TH Köln
teaserimage: egbert-felix-teaserimage.jpeg
stichworte: Bildmetadaten, IPTC, Webanwendung, Prototyp, TypeScript, Nuxt
quelle-bildrechte-teaser: Felix Egbert
---

## Abstract

Die Verwaltung und Bearbeitung von Bildmetadaten ist ein wesentlicher Bestandteil professioneller Fotografischer, journalistischer und archivischer Workflows. Obwohl der IPTC Standard Information Interchange Model (IIM) seit Jahrzehnten etabliert ist, wird er von vielen modernen Anwendungen nur unzureichend unterstützt. Existierende Lösungen zur Bearbeitung von IPTC-IIM-Metadaten sind häufig entweder technisch veraltet, an komplexe OS-spezifische Desktop-Software gebunden, kostenpflichtig oder setzen spezialisiertes Fachwissen voraus. Insbesondere im webbasierten Umfeld fehlen frei verfügbare, zeitgemäße Werkzeuge, die eine vollständige und standardkonforme Bearbeitung von IPTC-IIM-Metadaten ermöglichen.

Ziel dieser Arbeit ist die Konzeption und prototypische Umsetzung eines vollständig webbasierten Tools, das die Anzeige, Bearbeitung und Speicherung von IPTC-IIM-Metadaten direkt im Browser erlaubt. Im Rahmen eines praxisorientierten Design-Science-Research-Ansatzes wurde ein eigener, leichtgewichtiger Parser entwickelt, der IPTC-IIM-Daten auf Byte-Ebene aus JPEG-Dateien extrahiert, interpretiert und standardkonform zurückschreibt. Der Parser wurde als modulares JavaScript-Paket umgesetzt und in eine Webanwendung auf Basis von Nuxt.js 4 und TypeScript integriert.

Die Anwendung verarbeitet sämtliche Daten ausschließlich clientseitig und verzichtet vollständig auf Serverkommunikation, wodurch sowohl Plattformunabhängigkeit als auch ein hohes Maß an Datenschutz gewährleistet werden. Mithilfe moderner Webtechnologien wie der File System Access API und IndexedDB können Bilddateien lokal geladen, bearbeitet und gespeichert werden. Eine dynamisch generierte Benutzeroberfläche ermöglicht eine strukturierte, valide und nutzerfreundliche Bearbeitung der IPTC-Felder, ohne dass tiefgehende Kenntnisse der zugrunde liegenden Metadatenstruktur erforderlich sind.

Die Ergebnisse zeigen, dass die funktionalen Lücken bestehender, häufig schwer zugänglicher oder kostenpflichtiger Lösungen durch moderne Webtechnologien effektiv geschlossen werden können. Der entwickelte Prototyp demonstriert, wie auch technisch anspruchsvolle und ältere Metadatenstandards in zeitgemäße, niedrigschwellige Webanwendungen überführt werden können und bildet eine belastbare Grundlage für zukünftige Erweiterung und produktive Einsatzszenarien.

## Weiterführende Themen

* Erweiterung des Tools um Unterstützung weiterer Metadatenstandards wie XMP und EXIF
* Kollaborative Bearbeitung von Bildmetadaten in Echtzeit im Web
* KI-gestützte Generierung von IPTC-Metadaten basierend auf Bildinhalten
