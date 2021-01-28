---
nachname: Sarbiewski
vorname: Jaroslaw
datum: 2020-02-02
uhrzeit: 12-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: me
thema: Webbasierter Szene-Graph zur Schulung im Bereich der Computergrafik
kooperationspartner: TH Köln
teaserimage: sarbiewski-jaroslaw-teaserimage.jpg
stichworte: Computergrafik, Grafik, Schulung, Szene, Graph, Szenegraph, Szene-Graph
quelle-bildrechte-teaser: Jaroslaw Sarbiewski
hinweise:
weiterfuehrende-themen: Inwieweit lässt sich die Lerneffizienz optimieren, durch den Einsatz von Web-Components, für wiederverwendbare Konzepte in den einzelnen Lern-Anwendungen einer Domäne? | Was für Auswirkungen hat die künstliche Intelligenz auf den Workflow, bei der Erstellung von grafischen digitalen Medien?
---

## Abstract

Einige Themenfelder der Computergrafik als Lerndisziplin stellen Student*innen oft vor große Herausforderungen. Das geht aus der Annahme hervor, dass die Theorie der Computergrafik sehr trocken sein kann und/oder ein hohes Maß an räumlichen Vorstellungsvermögen und mathematischen Vorkenntnissen voraussetzt.  
Zur Lernunterstützung können professionelle Grafikanwendungen aus dem Produktionsbereich genutzt werden. Diese geben jedoch einen geringen, bis keinen Einblick auf die mathematischen Hintergründe, die im Studium erforderlich sind. Des Weiteren sind diese Anwendungen durch ihre überbordenden Funktionalitäten, beeinträchtigend für das Verstehen des Lernstoffs.

Ein essenzielles Thema der Computergrafik ist der Szene-Graph. Es ist eine Datenstruktur, die einerseits beschreibt wie Objekte im euklidischen Raum bzgl. der Transformation (Kombination aus Rotation, Skalierung und Translation) angeordnet sind und andererseits wie diese Objekte hierarchisch zueinander in Beziehung stehen. In der Hierarchie übernimmt ein Kindobjekt die Transformationen seines Elternobjekts.  

Im Rahmen dieser Projektarbeit wurde eine webbasierte Anwendung entwickelt, die zum effizienten Erlernen des Szene-Graphen beitragen soll<sup>1</sup>. Zu Beginn des Projektes wurde zunächst ermittelt welche Komponenten erforderlich sind, um einen Szene-Graphen aufzubauen, zu manipulieren und dessen Ergebnis mathematisch und visuell zu repräsentieren.  
Folgende Komponenten haben sich ergeben:

- Der Szene-Graph als Hauptkomponente, mit Toolbar um den Szene-Graphen aufzubauen, zu verändern und persistent zu sichern.
- Eine Benutzerschnittstelle (Schieberegler) um die Knoten (Objekte und Transformationen) und Kanten des Graphen und somit die Lage der 3D-Objekte im Raum einzustellen.
- Die visuelle Ausgabe (3D-Szene)
- Die mathematische Ausgabe (Matrizenmultiplikation)

Für jede Komponente wurden die notwendigen strukturellen, visuellen und funktionalen Design-Entscheidungen getroffen und begründet, mit dem Ziel, die Anwendung so abstrakt wie möglich und so konkret wie nötig zu konzipieren.

Zur Implementierung der Webanwendung wurde, durch sein statisches Typsystem, die Programmiersprache _Typescript_ verwendet. Für die hardware-beschleunigte visuelle 3D-Ausgabe kam _three.js_ zum Einsatz und _jQuery_ als Framework für die einfache HTML-DOM-Manipulation.  
Da der Szene-Graph, die visuelle Ausgabe und die mathematische Ausgabe sehr stark voneinander abhängen und sich zum größten Teil nur durch ihre Repräsentationen unterscheiden, wurde als Entwurfsmuster das Beobachtermuster zur Implementierung angewandt.

Nach dem ersten Einsatz der Webanwendung und Feedback von Student*innen, wurde die Anwendung in einem letzten Iterationsschritt bzgl. der Gebrauchstauglichkeit optimiert.
Die endgültige Anwendung hat ein positives Feedback erhalten, jedoch gab es keine empirischen Untersuchungen.
  
  
<sup>1</sup>Das Wort _soll_ wird hier bewusst verwendet, da es keine empirischen Untersuchungen des Ergebnisses gab.