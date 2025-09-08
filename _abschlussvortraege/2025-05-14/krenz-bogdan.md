---
nachname: Krenz
vorname: Bogdan
datum: 2025-05-14
uhrzeit: 11-00
raum: 3.217
betreuer: hvn
thema: "Schnittstellenmigration: Umgang mit Versionierung von Softwaresystemen"
kooperationspartner: S-Com, TH Köln
teaserimage: krenz-bogdan.png
stichworte: Softwaremigration, Codeanalyse, Halstead, McCabe, Schnittstellenversionierung
---

## Abstract
Schnittstellenmigrationen sind zentrale Herausforderungen in modernen Softwaresystemen – vor allem, wenn Legacy-Komponenten beibehalten und weiterentwickelt werden sollen. Ziel dieses Praxisprojekts war es, theoretische Migrationsmodelle mit praktischen Bewertungstechniken zu verbinden, um fundierte Entscheidungen zwischen Migration und Neuimplementierung zu ermöglichen. Als konkretes Beispiel diente ein geplantes Major-Update im Open-Source-Content-Management-System Strapi.

Der Schwerpunkt lag auf der Entwicklung eines Prototyps zur automatisierten Codeanalyse mittels Halstead- und McCabe-Metriken. Ergänzt wurde dies durch Aufwandsabschätzungen auf Basis von COCOMO, Function Point Analysis und Lines of Code. Der entwickelte CLI-Prototyp analysiert gezielt einzelne Funktionen und liefert reproduzierbare, objektive Bewertungen der Codekomplexität.

Die gewonnenen Ergebnisse zeigen, dass sich wartungsintensive Komponenten bereits frühzeitig identifizieren lassen – ein entscheidender Vorteil bei API-Migrationen mit Breaking Changes. Zusätzlich wurden Konzepte wie der Parallelbetrieb über Fuzzy API Gateways berücksichtigt, um auch infrastrukturelle Herausforderungen zu adressieren. Eine Reflexion über Risiken wie beim CrowdStrike-Vorfall 2024 rundet die Analyse ab.

## Weiterführende Themen
* Erweiterung des CLI-Prototyps um zusätzliche Metriken wie Maintainability Index oder Fan-Out
* Integration der Komplexitätsbewertung in automatisierte Build- oder CI/CD-Prozesse
* Vergleich unterschiedlicher API-Gateways im Parallelbetrieb (z. B. Fuzzy Gateway vs. Kong)
* Untersuchung des Zusammenhangs zwischen Metrikwerten und tatsächlichem Wartungsaufwand in Refactoring-Projekten
* Entwicklung einer VSCode-Extension zur kontextbasierten Komplexitätsanalyse im Editor
* Bewertung psychologischer Einflussfaktoren auf Codeverständlichkeit (z. B. Namensgebung, Kommentare)
* Systematische Analyse von Migrationsentscheidungen im Spannungsfeld zwischen Legacy-Erhalt und technischer Innovation
