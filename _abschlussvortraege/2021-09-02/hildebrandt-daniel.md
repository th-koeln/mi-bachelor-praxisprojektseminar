---
nachname: Hildebrandt
vorname: Daniel 
datum: 2021-02-09
uhrzeit: 12-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: mb
thema: Erweiterung eines Systems zur Meldung von Laternenstörungen um ein Sprachinterface
kooperationspartner: Mobileapart GmbH
teaserimage: hildebrandt-daniel-teaserimage.png
stichworte: Voice Interfaces, Backend-Development, Geocoding
quelle-bildrechte-teaser:  https://www.pexels.com/de-de/foto/holz-natur-gebaude-trocken-5716717/ https://www.pexels.com/de-de/foto/weisser-und-silberner-runder-tragbarer-lautsprecher-4790268/ 
weiterfuehrende-themen: Lokalisieren von nicht eindeutig identifizierbaren Objekten auf einer Karte über ein Sprachinterface. | Validierung von Objekte auf einer Karte über ein Sprachinterface.
---

## Abstract

In dem Praxisprojekt soll untersucht werden, ob sich eine Web-App zum Melden von Laternenstörungen um ein Sprachinterface erweitern lässt, wobei der Fokus auf den technischen und architektonischen Bereich gesetzt wird. Die Angliederung des Sprachinterfaces soll ohne Änderung an bestehenden Strukturen erfolgen und nur als Erweiterung realisiert werden, um die Funktionalität des ursprünglichen Systems zu gewährleisten.

Dazu wurde ermittelt, welche Technologien innerhalb des ursprünglichen Systems genutzt wurden und welche für die Entwicklung des Sprachinterfaces verwendbar sind, wobei sich die Google Maps API und die Geodatenbank als potenziell nützlich herausstellten. Als Sprachinterface soll die von Amazon entwickelte Alexa dienen. Der Meldungsprozess über das Sprachinterface sollte dem der grafischen Web-App ähneln, um eine ähnliche Nutzererfahrung zu erzeugen. 
Aufbauend auf der Recherche des Laternenstörungssystems und der Alexa Developer Console ist ein Prototyp des Sprachinterfaces entwickelt worden. Dieses fragt den Nutzer nach der  Adresse der Laterne und erzeugt über die Google Maps API, durch Geocoding, eine Koordinate. Diese wird genutzt, um in der Geodatenbank eine Laterne in der Nähe der Koordinate zu ermitteln, um im Anschluss eine Störungsmeldung zu erstellen. 

Die mit dem Sprachinterface erzeugten Störungsmeldungen wurden validiert, indem die mit der Meldung verknüpften Laternen kontrolliert wurden. Wurde bei der Erstellung die falsche Laterne dem Störungsmeldungsobjekt verknüpft, war die Störungsmeldung fehlerhaft. Die Evaluation des Prototyps lieferte gemischte Ergebnisse. Wenn eine Laterne direkt einer Adresse zuzuordnen war bzw. sich unmittelbar in der Nähe dazu befand, dann wurde die korrekte Laterne der Störung zugeordnet. Aber wenn sich unmittelbar an der Adresse mehrere Laternen befanden, kam es zu fehlerhaften Zuordnungen. Ähnliche Probleme gab es bei Laternen die sich nicht in der Nähe zu lokalisierbaren Objekten befanden, z. B. Laternen an Landstraßen. 

Der Prototyp hat gezeigt, dass auf technischer Seite eine Umsetzbarkeit gegeben ist, wobei die aktuelle Fehlerquote für den Praxisbetrieb nicht den betrieblichen Anforderungen entspricht. Außerdem stellte es sich als problematisch heraus, eine Nutzervalidierung umzusetzen, da die visuelle Bestätigung über die Karte fehlt. Sollten für die ermittelten Probleme Lösungen erarbeitet werden, kann nach anschließender Validierung eine Praxistauglichkeit gegeben sein.
