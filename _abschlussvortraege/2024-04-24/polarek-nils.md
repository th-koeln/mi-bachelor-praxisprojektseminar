---
nachname: Polarek
vorname: Nils
datum: 2024-04-24
uhrzeit: 10-30
raum:  3.216
betreuer: cn
thema: Webbasierte Visualisierung von Engineering Diagrams
kooperationspartner: TU Delft - Process Intelligence Research Group
teaserimage: polarek-nils-teaserimage.png
stichworte: Digitalisierung, Engineering Diagrams, SVG, Canvas API, Visualisierung im Web
quelle-bildrechte-teaser: Process Intelligence Research Group, Google Material Icons, Nils Polarek
hinweise:
weiterfuehrende-themen: Optimierung der Canvas Implementierung | Einen generelleren Vergleich zwischen SVG und Canvas API schaffen | Erweiterung der Funktionalitäten des Editors | Designkonzept für die Webapplikation
---

## Abstract

In der chemischen Prozessindustrie kommen sogenannte „Engineering Diagrams“ zum Einsatz, um zu beschreiben und festzuhalten, wie und womit verschiedene Instrumente und Komponenten in einer Anlage verbunden sind.
Diese Diagramme werden mit CAD-Software erstellt, sodass sie iterativ verändert, erweitert und verbessert werden können.
Dennoch existieren in der Industrie und in der Forschung nach wie vor viele analoge oder nicht maschinenlesbare Exemplare.
Da das manuelle Digitalisieren von nicht maschinenlesbaren oder analogen Diagrammen ein aufwendiger Prozess ist, haben Forscher:innen der Forschungsgruppe „Process Intelligence Research Group“ der TU-Delft Machine Learning Algorithmen zur automatischen Digitalisierung dieser entwickelt.
Die Ausgaben dieser sind jedoch noch nicht in CAD-Software nutzbar und die Ausführung erfordert technisches Wissen und Zugriff auf die Algorithmen selber.

Um potenziellen Nutzer:innen und Investor:innen die Nutzung der Algorithmen und derer Ergebnisse zu ermöglichen, ohne dabei die Algorithmen weitergeben zu müssen, ist es das Ziel der Forschungsgruppe, eine Webapplikation zu entwickeln, welche die Nutzung der Algorithmen abstrahiert und die Ergebnisse visualisiert und editierbar macht.
Im Rahmen des Praxisprojektes wurde ein prototypisches Frontend für dieses Vorhaben entwickelt.

Dieser Vortrag vermittelt zunächst grundlegende Eigenschaften der Problemdomäne und fokussiert sich daraufhin auf einen Vergleich der zwei Webtechnologien „SVG“ und „Canvas API“ zur Implementierung einer visuellen Darstellung der digitalisierten Diagramme und der Interaktion mit den Elementen dieser in Form eines Editors im Web.
Dazu werden Unterschiede und Gemeinsamkeiten der Technologien im Kontext der Domäne aufgezeigt und anhand von konkreten Beispielen vertieft.
Zuletzt werden die Editoren anhand der Ergebnisse automatisierter Performancetests und einer Nutzwertanalyse final beurteilt und eine Empfehlung für die Wahl der Technologie zur Weiterentwicklung der Webapplikation wird ausgesprochen.

## Material & weiterführende Infos
- [TU Delft - Process Intelligence Research Group](https://www.pi-research.org/)
- Paper: [Digitization of chemical process flow diagrams using deep convolutional neural networks](https://www.sciencedirect.com/science/article/pii/S2772508122000631)
- [SVG Spezifikation](https://www.w3.org/TR/SVG11/Overview.html)
- [HTML: The Living Standard - The canvas element](https://html.spec.whatwg.org/multipage/canvas.html)
