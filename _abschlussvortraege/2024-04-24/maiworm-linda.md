---
nachname: Maiworm
vorname: Linda
datum: 2024-04-24
uhrzeit: 10-00
raum:  3.215
betreuer: sk
thema: Single Sign-On Automation
kooperationspartner: TH Köln
teaserimage: maiworm-linda-teaserimage.png
stichworte: Single Sign-On, Authentifizierung, Autorisierung, Web Automation, Web Security, Shepherd
quelle-bildrechte-teaser: Linda Maiworm
hinweise:
weiterfuehrende-themen: Umsetzung einer generischen SSO-Erweiterung für das Shepherd Framework | Automatisierte Button-Erkennung auf Basis von Machine Learning | Optimierung/Ausbau von automatisierten Registrierungsprozessen
---

## Abstract

Die Automatisierung des Single Sign-On-Prozesses (SSO) ist aus vielen Gründen eine anspruchsvolle und ethisch fragwürdige Aufgabe, aber sie ist auch wichtiger denn je. Frühere Versuche, eine SSO-Erweiterung für das Shepherd-Framework zu implementieren, waren nur bedingt erfolgreich. Eine umfassende Untersuchung früherer Ansätze zur SSO-Automatisierung hat die größten Herausforderungen in dieser Angelegenheit aufgezeigt: Studien zum SSO-Vorkommen im Web führen häufig zu falsch-negativen Ergebnissen, und die Identifizierung und Abdeckung aller unterstützten Identity Provider (IdPs) ist eine gewaltige Aufgabe. Die SSO-Unterstützung kann plötzlich eingestellt werden, wodurch zuvor gesammelte Daten obsolet werden. Ghasemisharif et al. stellten in ihrer Arbeit über den Grad der Einhaltung von Sicherheitspraktiken und -richtlinien durch Websites fest, dass die meisten Schwachstellen auf Fehler in der SSO-Implementierung zurückzuführen sind und dass es nicht ausreicht, die zugrunde liegenden SSO-Protokolle zu untersuchen. Darüber hinaus haben verschiedene Ansätze in der Vergangenheit gezeigt, dass die vollautomatische Erstellung von Benutzerkonten komplex ist und auch ethische Fragen aufwirft, die berücksichtigt werden müssen.

Mit dieser Arbeit möchte ich den Grundstein für zukünftige Arbeiten am Shepherd-Projekt im Kontext der Single Sign-On-Automatisierung legen, indem ich den aktuellen Stand des Frameworks vorstelle und eine Zusammenfassung verwandter Ansätze sowie deren Stärken und Tücken liefere.


## Material & weiterführende Infos
- [The Shepherd Project](https://bkrumnow.github.io/shepherd/)
- [Single Sign-On](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Single-Sign-On/single-sign-on_node.html)
- Paper: [SSOScan: Automated Testing of Web Applications for Single Sign-On Vulnerabilities](https://www.usenix.org/conference/usenixsecurity14/technical-sessions/presentation/zhou)
- Paper: [Towards Automated Auditing for Account and Session Management Flaws in Single Sign-On Deployments](https://ieeexplore.ieee.org/document/9833753)