---
nachname: Bock
vorname: Johannes
datum: 2022-02-01
uhrzeit: 12-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: mb
thema: tl:dr – Nachrichtenzusammenfassung auf einem mobilen Endgerät
kooperationspartner: TH Köln
teaserimage: bock-johannes_teaserimage.jpg
stichworte: Smartphone, tldr, Android, Python, Java, NLTK, Flask
quelle-bildrechte-teaser: Photo by [Utsav Srestha](https://unsplash.com/@utsavsrestha) on [Unsplash](https://unsplash.com/s/photos/newspaper)
hinweise:
weiterfuehrende-themen: Umsetzung der Textprozessierung auf dem Smartphone | Zusammenfassung für verschiedene Sprachen optimieren | Umsetzung mit Machine Learning Technologien
---

## Abstract

In den letzten Jahren hat die Anzahl der Nachrichten die wir täglich auf unsere Smartphones bekommen zugenommen. 
So ist die Anzahl der Menschen die einen social Messaging Dienst benutzen in den letzten Jahren immer weiter gestiegen. (1)
Durch die wachsende Anzahl an direkt aufeinanderfolgenden Terminen in Videokonferenzen durch die Pandemie ist die 
Möglichkeit wichtige Nachrichten zu verpassen gestiegen. An dieser Stelle soll ein Service unterstützen, mit dem Texte aus
dritten Apps ausgelesen werden können und durch die entwickelte App in einem kurzen Text zusammengefasst werden.

Ziel des Projektes ist eine Anwendung die auf Android Geräten lauffähig ist und über das Ausnutzen der Accessibility API 
Texte aus anderen Anwendungen wie News Apps von CNN oder der tagesschau auslesen kann. Diese Texte werden dann an einen 
entwickelten Backend Service über eine REST API gesandt und von dieser verarbeitet. Dabei kann eine Worcloud oder eine kurze
Zusammenfassung zurückgeliefert und auf dem Android Gerät dargestellt werden. Der Text wird ausschließlich in einer lokalen Datenbank 
gespeichert, damit sollen auch Datenschutz Aspekte mit bedacht werden, da auch sensible Inhalte wie private Chats an den 
Service gesandt werden können. 

Diese Zusammenfassungen unterstützen die Nutzer:innen dabei einen schnellen Überblick über die besprochenen Themen zu erhalten.
Im Anschluss können die Nutzer:innen selbst entscheiden, ob die Zusammenfassung oder die Wordcloud ausreichen, um den Inhalt
verstanden zu haben, oder der Text noch einmal gelesen werden muss. 

## Material & weiterführende Infos

* [Praxisprojekt Dokumentation zum Projekt](https://gitlab.com/Loemre/tldr-project/-/blob/main/bock-johannes-pp_tldr.pdf)
* [Fortführung der Android Anwendung für die Prozessierung auf dem Smartphone](https://gitlab.com/Loemre/tldr-project/-/tree/main/SumML)
* [Interpretee Android App Projekt Git](https://gitlab.com/Loemre/interpreter-public)
* [1 Nutzung von OTT Diensten](https://de.statista.com/infografik/22586/nutzung-von-ott-kommunikationsdiensten-diensten-in-deutschland/)