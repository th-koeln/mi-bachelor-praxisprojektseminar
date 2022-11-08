---
nachname: Eichler
vorname: Leonie
datum: 2022-04-26
uhrzeit: 08-30
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: fv
thema: Automatisierte Oberflächentests für die S-Erleben-Website der Kreissparkasse Köln
kooperationspartner: Oevermann Networks GmbH
teaserimage: eichler-leonie-teaserimage.png
stichworte: Selenium, Test, Webanwendung
quelle-bildrechte-teaser: Leonie Eichler
hinweise:
weiterfuehrende-themen: Vergleich von Testtools für Webanwendungen | Vergleich von Testframeworks für Webanwendungen | Erstellung von Tests für die neue Website | Nutzung von der Selenium IDE und Grid


---

## Abstract

Das manuelle Testen von Webanwendungen ist zeitaufwendig. Für die S-Erleben-Website der Kreissparkasse Köln kann dies je nach Bereich einige Minuten beanspruchen.
Aus diesem Grund ist das Ziel dieses Praxisprojekts automatisierte Oberflächentests für die zuvor genannte Webanwendung zu implementieren und in das bestehende Projekt zu integrieren. Mittels dieser sollen schneller und häufiger Fehler gefunden und dadurch die Softwarequalität verbessert werden.
Damit dieses Ziel erreicht werden kann, wurden die Anforderungen an die zu implementierenden Tests, die sich unter anderem aus dem Projektkontext ergeben haben, ausformuliert.
Unter der Berücksichtigung der Anforderungen wurden die Tests für die fünf geforderten Bereiche mit Selenium, einem Open Source Automatisierungstool für Webanwendungen, in C# implementiert. Als Testframework wurde MSTest von Microsoft verwendet.
Durch die Integration der anforderungskonformen Tests in die Azure DevOps Release-Pipeline des Projekts werden die Tests automatisiert nach jedem Release der Software ausgeführt. Die anschließende Auswertung ergab, dass Tests aufgrund der Implementierung, durch Änderungen der Website oder wegen tatsächlichen Problemen mit der Website fehlgeschlagen sind. Mittels einer Anpassung der Tests kann die Wahrscheinlichkeit, dass diese aufgrund der ersten beiden Optionen fehlschlagen, verringert werden. Die Entdeckung von Problemen in Zusammenhang mit der Website, wie Serverfehler oder nicht funktionsfähige Elemente, zeigt, dass das Ziel erreicht wurde. Da diese Fehler umgehend gemeldet und behoben werden, sorgen die Tests für eine erhöhte Qualität der Webanwendung.

## Material & weiterführende Infos
Falls Sie auf Materialien, z.B. ein Git-Repo verlinken wollen, dann nutzen Sie bitte diesen Abschnitt.
- [Praxisprojekt:](https://github.com/Zalenea/Praxisprojekt/blob/main/praxisprojekt.pdf)
