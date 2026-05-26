---
nachname: Hartono
vorname: Jason
datum: 2026-06-03
uhrzeit: 11-00
raum: 3.216
betreuer: mb
thema: Raycast-basierte Augmented-Reality-Steuerung zur ergonomischen Interaktion im Smart Home
kooperationspartner: TH Köln
teaserimage: hartono_jason-teaserimage.jpg
stichworte: Internet of Things, Augmented Reality, Smart Home, Pointer 
quelle-bildrechte-teaser: Teaserbild erstellt mit Nano Banana 2 
---

## Abstract

Stellen Sie sich vor, Sie könnten Ihre Smart-Home-Geräte bedienen, indem Sie das Smartphone lediglich in deren Richtung weisen, ohne die Navigation durch verschachtelte Menüs herkömmlicher 2D-Applikationen. Augmented Reality (AR) eröffnet durch räumliche Benutzeroberflächen genau diese Möglichkeit. Bei der praktischen Anwendung zeigt sich jedoch eine Hürde: Die dauerhafte Interaktion mit schwebenden Interfaces führt unweigerlich zu muskulärer Ermüdung. Dieses sogenannte Gorilla-Arm-Syndrom stellt derzeit eine Limitierung für den alltäglichen Einsatz mobiler AR-Anwendungen dar.

In diesem Vortrag wird ein architektonischer Lösungsansatz für dieses Problem vorgestellt: Das Scan-Once, Point-Anywhere (SOPA) Paradigma.

Um das mobile Endgerät nicht permanent auf Augenhöhe halten zu müssen, entkoppelt das SOPA-Konzept den visuellen Sichtraum funktional vom Interaktionsraum. Durch die initiale Registrierung der physischen Umgebung via 2D-Bildmarker wird zunächst ein stabiles, sitzungsübergreifendes Koordinatensystem für IoT-Geräte (hier: Philips Hue) generiert. In der anschließenden Nutzungsphase fungiert das Smartphone als räumlicher Pointer, der Raycasts aussendet und bequem aus einer ergonomischen Haltung, beispielsweise auf Hüfthöhe, bedient werden kann.

Was erwartet die Zuhörer im Vortrag?
Der Vortrag bietet einen Einblick in den Lösungsansatz. Es wird demonstriert, wie die Interaktion systematisch in eine Setup- und eine Steuerungsphase unterteilt wurde und wie sich dieses Konzept mittels einer Model-View-Controller-Architektur (MVC) in Unity umsetzen ließ. Zudem wird beleuchtet, wie durch maßgeschneiderte Datenverarbeitung, wie durch den Verzicht auf externe Bibliotheken, eine latenzfreie Kommunikation zwischen Smartphone und Hardware realisiert werden konnte.

Ausblick und Future Work:
* **Markerloses Tracking:** Evaluation von Spatial Anchors zur Erreichung absoluter Ortsunabhängigkeit.
* **Okklusions-Management:** Algorithmische Adressierung der Verdeckung virtueller Objekte durch physische Hindernisse.
* **Protokoll-Erweiterung:** Migration der Systemarchitektur auf den herstellerübergreifenden Smart-Home-Standard *Matter*.

## Weiterführendes Material & Literatur
* [Unity AR Foundation Dokumentation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@5.1/manual/index.html)
* [Philips Hue Developer Program](https://developers.meethue.com/)
* Tailor Twist: Assessing Rotational Mid-Air Interactions for Augmented Reality
