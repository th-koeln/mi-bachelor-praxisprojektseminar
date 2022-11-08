---
nachname: Thimm, Thometzki
vorname: Caterina, Nico
datum: 2022-03-29
uhrzeit: 9-00
raum:  https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias) Präsentation
betreuer: mb
thema: Eine explorative Untersuchung der Umsetzung plattformübergreifender Applikationen mit Kotlin Multiplatform
kooperationspartner: TH Köln
teaserimage: image.jpg
stichworte: Mobile-Development, Frontend-Development, Kotlin, Multiplatform
quelle-bildrechte-teaser: Nico Thometzki
hinweise:
weiterfuehrende-themen: Entwicklung eines plattformübergreifenden UI-Frameworks für Kotlin Multiplatform | Full-Stack Webentwicklung in Kotlin Multiplatform
---

## Abstract
Bei der Entwicklung von plattformübergreifenden Applikationen werden heutzutage immer mehr Ressourcen wie Zeit und Personal benötigt. Aus diesem Grund verwenden Softwareunternehmen vermehrt Frameworks, in denen die Geschäftslogik in einer Codebasis geteilt wird. Somit muss die Geschäftslogik einer Applikation lediglich einmal definiert werden. Der Compiler übersetzt anschließend den Code in die jeweilige native Sprache.

Das Softwareunternehmen JetBrains entwickelte für diesen Anwendungsfall das Multiplattform-Plugin “Kotlin Multiplatform”, das auf der Programmiersprache Kotlin basiert. Durch Einbindung des Plugins kann die Geschäftslogik einer Applikation zwischen mehreren Projekten geteilt werden.

Das Ziel des Praxisprojekts war die Untersuchung, inwiefern die Umsetzung von plattformübergreifenden Applikationen mit Kotlin Multiplatform möglich ist. Hierfür wurde exemplarisch eine Applikation entwickelt, mit der verschiedene Funktionalitäten, wie generelles Networking, die Anbindung an eine Datenbank, die Erstellung von User Interfaces und eines geteilten Stores, kombiniert mit dem Multiplattform-Plugin getestet wurden. Der Fokus wurde auf das Aufsetzen von Kotlin Multiplatform Projekten, sowie die architekturelle Gestaltung der Applikationen gelegt.

Das Ergebnis zeigte, dass Kotlin Multiplatform für die Entwicklung plattformübergreifender Applikationen geeignet ist. Dies konnte durch das Erzeugen einer App für die Plattformen Android und Desktop-Native, sowie Ansätzen für eine mobile iOS-Applikation, mit einer geteilten Geschäftslogik bewiesen werden. Im Gegensatz zu Frameworks wie Flutter, die sich auf die Konzipierung einer geteilten Benutzeroberfläche fokussieren, liegt der Fokus bei Kotlin Multiplatform auf der Erzeugung einer geteilten Geschäftslogik. Diese kann dann in Applikationen verschiedener Plattformen eingebunden werden, wodurch mehrere (unabhängige) Applikationen mit derselben Geschäftslogik entstehen. Für die Entwicklung mit Kotlin Multiplatform stellt JetBrains jedoch wenige und unvollständige Dokumentationen zur Verfügung. Die schriftliche Ausarbeitung des Praxisprojektes kann hierfür als Informationsquelle bei der Erstellung weiterer Applikationen mit Kotlin Multiplatform genutzt werden.

Folgende weiterführenden Arbeiten ließen sich am Praxisprojekt anschließen:
- Die Umsetzung einer Full-Stack Kotlin Multiplatform Applikation. Hierbei kann der Kotlin Code im Frontend und im Backend wiederverwendet werden.
- Die Konzipierung und Entwicklung eines plattformübergreifenden UI-Frameworks. Dadurch könnten Benutzeroberflächen ebenfalls geteilt werden und müssen nicht nativ entwickelt werden.


## Material & weiterführende Infos
- [https://kotlinlang.org/docs/multiplatform.html](https://kotlinlang.org/docs/multiplatform.html)
- [Repo zum Praxisprojekt Seminar](https://github.com/nthometzki/KMM)
