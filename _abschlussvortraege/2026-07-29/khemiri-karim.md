---
nachname: Khemiri
vorname: Karim
datum: 2026-07-29
uhrzeit: 10:30
raum:  3.216
betreuer: fn
thema: Mesh Shader Frustum Zellen für Echtzeit Ray-Marching Partikelsystem
kooperationspartner: TH Köln
teaserimage: khemiri-karim-teaserimage.png
stichworte: Rendering, Visuelle Effekte, Grafikprogrammierung, Optimierung
quelle-bildrechte-teaser: Referenzen und Eigene Darstellungen
---

## Abstract

Ray Marching, eine alternative Methode zur Darstellung von Objekten anhand mathematischer Funktionen (Signed Distance Fields), wird in der Echtzeit-Darstellung, z.B. in Videospielen, normalerweise für Volumetrics und Fluid-Simulationen mithilfe von Density Fields oder uniformem Sampling verwendet. 

Diese Verfahren sind allerdings ungeeignet für viele einzelne Objekte, die gegebenenfalls auch individuelle Eigenschaften oder Bewegungen besitzen, wie es in dynamischen Partikelsystemen der Fall ist, da sie deutlich rechenintensiver und ineffizienter sind. 

Viele Partikelsysteme verwenden daher Sprites oder Instancing-Geometry, die deutlich schneller dargestellt werden können, liefern allerdings nicht die Vorteile der Kombination und Vereinigung einzelner Objekte, wie Ray marching es ermöglicht.

Ziel ist die Entwicklung eines Rendering-Systems zur korrekten und performanten Darstellung von Signed Distance Fields für Echtzeit-Partikelsysteme

## Materialien

- [GitHub Repository](https://github.com/Scopii/AstralGen)


## Weiterführende Themen

* Evaluation und Performance-Analyse des Systems vergliche mit Standardverfahren in verschiedenen Szenen
* Erschluss weiterer zukünftiger Optimierungsmöglichkeiten und Systemerweiterungen für Ray Marching.
* Experimentelle Tests zum nutzen des Systems.

