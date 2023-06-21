---
nachname: Wolf
vorname: Domenic David
datum: 2023-06-27
uhrzeit: 11-00
raum:  Raum 3.216
betreuer: dgaida
thema: Optimierungspotentiale und Entwicklung von Embedded Machine Learning Modellen zur Spracherkennung
kooperationspartner: FERCHAU Automotive
teaserimage: wolf-domenic-teaserimage.png
stichworte: Spracherkennung, Künstliche Intelligenz, Embedded, Edge Device 
quelle-bildrechte-teaser: Domenic Wolf 
weiterfuehrende-themen: 
---

## Abstract

Ob "Hi Siri", "Ok Google" oder "Hey Mercedes", Sprachassistenten erlangen einen immer höhere Stellenwert in unserem Alltag.
In vielen Fällen sind diese Sprachassistenten jedoch mit dem Internet verbunden um die erforderliche Leistung zu erbringen. 
Sprachassistenten finden sich aber auch in eingebetteten Systemen wie Autos oder Flugzeugen, die nur über eine begrenzte Leistung verfügen, 
weshalb hier die Auswahl des richtigen Modells von großer Bedeutung ist.

Um die Frage zu beantworten wie Sprachassistenten auf eingebetteten Systemen eingesetzt werden können, wurden verschiedene Ansätze und Optimierungsmöglichkeiten untersucht, 
verschiedene Publikationen ausgewertet sowie mehrere Modelle entwickelt, 
optimiert und auf Vor- und Nachteile untersucht.

Die quantitative Literaturrecherche zeigte dabei den positiven Einfluss von Transformer-basierten Modellen
auf das Anwendungsgebiet der Spracherkennung in eingebetteten Systemen, die dadurch deutlich verbessert werden konnten. 
Des Weiteren konnte das Optimierungspotential von Tensorflow Lite aufgezeigt werden, welches die Größe und Geschwindigkeit der Modelle stark optimieren konnte, 
jedoch die Genauigkeit dabei minimiert wurde.

Dies zeigt, dass das Einsatzgebiet der künstlichen Intelligenz für verschiedene Anwendungsbereiche außerhalb der Cloud bereit ist, 
solange die damit verbundene Reduktion der Prognosesicherheit akzeptabel ist.
Der Code der Modelle ist verfügbar unter: https://github.com/Splashpixx/Praxisprojekt

### Ausblick

Die Arbeit zeigte unter anderem die Vorteile von Transformer-basierten Modellen gegenüber RNN/LSTM-Modellen sowie deren Optimierungsmöglichkeiten 
für den Einsatz in eingebetteten Systemen. Im Hinblick auf die Genauigkeit von Transformer-basierten Modellen stellt sich die Frage, 
ob mit Hilfe eines Transformers als Diskriminator ein Generative Adversarial Network erzeugt werden kann, um den Aufrufbefehl eines Sprachassistenten zu modifizieren. 
Um diese Frage beantworten zu können, sind detaillierte Tests und Vergleiche existierender Modelle sowie die Untersuchung verschiedener 
Generative Adversarial Network Modelle zur Generierung von Spektrogrammen notwendig.

Es zeigt sich, dass Sprachassistenten für eingebettete Systeme durch die Entwicklung des Themenfeldes respektable Fortschritte gemacht haben, 
die Anwendungsbereiche ermöglichen, die bisher aufgrund von Hintergrundgeräuschen, 
fehlender Hardware oder begrenzter Speicherkapazität als kritisch erwiesen hätten. 

