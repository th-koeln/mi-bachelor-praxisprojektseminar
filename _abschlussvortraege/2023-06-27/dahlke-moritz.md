---
nachname: Dahlke
vorname: Moritz
datum: 2023-06-27
uhrzeit: 11-30
raum: 3.216
betreuer: cn
thema: Entwicklung einer Text-to-Speech-Lösung für die WoltLab Suite Community Software zur Erhöhung der Barrierefreiheit
kooperationspartner: TH Köln
teaserimage: dahlke-moritz-teaser.webp
stichworte: Webentwicklung, Webframeworks, Künstliche Intelligenz, Sprachsynthese, Barrierefreiheit, User Experience
quelle-bildrechte-teaser: Foto von <a href="https://unsplash.com/fr/@farreal">Dan Farrell</a> auf <a href="https://unsplash.com/de/fotos/FnR2U1lXsBQ">Unsplash</a>
---

## Abstract

Internetauftritte, wie Zeitungen und Nachrichtenagenturen, bieten zur Erhöhung der Barrierefreiheit und Nutzererfahrung zunehmend Möglichkeiten an, Textinhalte wie Artikel mittels Text-to-Speech-Technologie auch im Audioformat anhören zu können.  

Das Ziel der vorliegenden Arbeit war es, zu überprüfen, wie ein solches Angebot umgesetzt werden kann und dazu die Frage zu beantworten, welche Text-to-Speech-Systeme es gibt und darüber hinaus, welche sich am besten für die Integration in die WoltLab Suite, einem Content-Management-System mit Möglichkeit zur Veröffentlichung von Textartikeln, am besten eignet. Zur Erreichung dieses Ziels wurden verschiedene Text-to-Speech-Systeme miteinander verglichen und die Auswahl für ein System getroffen, welches sich zur Nutzung in einem für die WoltLab Suite konzipierten Plugin eignet. Das Plugin wurde anschließend implementiert und ermöglicht die automatische Transkription von veröffentlichten Textartikeln.  

Der Vergleich verschiedener Text-to-Speech-Systeme hat ergeben, dass sich der Google Cloud Text-to-Speech Service ideal für die Integration in die WoltLab Suite eignet und die Fertigstellung des Plugins zeigt, dass und wie die Barrierefreiheit und Nutzererfahrung für Website-Besucher verbessert werden kann.  

## Vorschläge für weitere Arbeiten im Themenfeld

Diese Arbeit hat gezeigt, dass und wie sich die Barrierefreiheit und Nutzererfahrung bei der Aufnahme von Textinhalten auf Websites mit Mitteln wie Text-to-Speech Services verbessern lässt, lässt jedoch die Frage offen und stellt lediglich eine Hypothese darüber auf, wie nützlich das Audio-Angebot tatsächlich ist, insbesondere für Benutzer, die bereits von anderen Lösungen zur Sprachsynthese von Text Gebrauch machen. Wie groß der Nutzen dieses Angebots wirklich ist, kann nur durch eine weitreichende Repräsentativbefragung, einschließlich der Befragung von Menschen mit Sehbeeinträchtigungen und Blinden, festgestellt werden.  

Ebenfalls nicht abschließend geklärt wurde die Frage, welches Text-to-Speech-System sich nun wirklich am besten für die Integration in die WoltLab Suite oder vergleichbare CMS-Software eignet, weshalb weitere Forschungsarbeiten zur Erweiterung dieses Plugins um weitere Text-to-Speech Services, wie bspw. Amazon Polly oder Microsoft Azure TTS, oder auch zur Implementierung eines vergleichbaren Plugins für andere Software denkbar sind, um die Ergebnisse miteinander vergleichen zu können.  

Darüber hinaus werden die Audiodateien im entwickelten Plugin mit einem HTML5 Audio-Element dargestellt, welches prinzipiell zwar vollständig barrierefrei ist, dessen Benutzeroberfläche aber vom verwendeten Webbrowser abhängig ist. Zum heutigen Stand bietet die Benutzeroberfläche in Mozilla Firefox standardmäßig bspw. keine Möglichkeit, die Wiedergabegeschwindigkeit der Audio-Ausgabe zu verändern, ganz im Gegensatz zu allen auf Chromium basierenden Webbrowsern, welche zudem auch eine eigene Download-Möglichkeit bereitstellen. Die Verwendung von unterschiedlichen Webbrowsern führt damit also bei Benutzern automatisch zu Unterschieden in der Benutzererfahrung. Daraus ergibt sich die Möglichkeit zur Untersuchung und Bewertung des verwendeten Audio-Players und die Frage, ob es alternative Audio-Player gibt und welcher sich zur barrierefreien Einbindung von Audiodateien auf Websites, für eine gleichartige Benutzererfahrung, am besten eignet.  

## Weitere Informationen
- [Beschreibung und Vorschau des Plugins im Plugin-Store der WoltLab GmbH](https://www.woltlab.com/pluginstore/file/7435-text-to-speech-core-audio-artikel/)
- [GitHub Repository mit vollständigem Quellcode](https://github.com/DMedia-Development/WSC-TTS-Core)  
