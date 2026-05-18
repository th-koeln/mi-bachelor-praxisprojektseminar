---
nachname: Nguyen
vorname: Uoc Linh Tony
datum: 2026-05-20
uhrzeit: 10-00
raum: 3.217
betreuer: mb
thema: Entwicklung eines IoT-basierten Retrofit-Systems mit Integration von Single Sign-On am Campus Gummersbach der TH-Köln
kooperationspartner: TH Köln
teaserimage: nguyen-uoc_linh_tony-teaserimage.jpg
stichworte: Retrofit, Internet of Things, elektrische Schließanlage, Single Sign-On, Keycloak, OpenID Connect, Authentifizierung, Autorisierung
quelle-bildrechte-teaser: Teaserbild erstellt mit Image Creator von Microsoft Designer
---

## Abstract

Im Zuge technologischer Wandlungsprozesse und kontinuierlicher Modernisierungen stoßen bestehende Systeme häufig an ihre Grenzen. Anstatt sie vollständig zu ersetzen, können sogenannte Retrofits bestehende Systeme um zusätzliche Funktionalitäten erweitern, ohne sie grundlegend zu verändern. Dadurch wird nicht nur die Lebensdauer verlängert, sondern auch Raum für Innovationen geschaffen.

Dieses Praxisprojekt beschäftigt mit sich der Entwicklung eines solchen Retrofit-Systems, das das Internet der Dinge (Internet of Things, IoT) mit Single Sign-On (SSO) verbindet. Das Ziel ist die Erstellung eines funktionalen Prototyps, der am Campus Gummersbach der Technischen Hochschule Köln erprobt wird. Hierbei wird das bestehende System elektronischer Schließanlagen des Herstellers Simons-Voss untersucht, die mittels Transponder bedient werden. Anstelle der direkten Transponderbedienung sollen die Nutzenden künftig die Schließanlagen über eine mobile Webapplikation steuern können. Zur Identitätsprüfung wird das bereits an der Hochschule eingesetzte Identitäts- und Zugriffsmanagementsystem Keycloak in die Anwendung integriert. Nach erfolgreicher Authentifizierung und Autorisierung sendet die Applikation ein Signal an einen Mikrocontroller an der jeweiligen Tür, der über einen eigens angefertigten Transponder die elektronische Schließanlage aktiviert.

Im Hinblick auf eine weiterführende Ausarbeitung des Projekts könnte das Retrofit-System mit zusätzlichen Funktionalitäten, wie bspw. Raumtemperatur- und Luftqualitätsüberwachung oder einem Raumbelegungsplan, erweitert werden. Bisher wurde im Rahmen des Praxisprojekts die Integration des Prototyps in den Keycloak der Hochschule simuliert. Die tatsächliche Implementierung wird wahrscheinlich neue Herausforderungen mit sich bringen, die als Untersuchungsgegenstände einer Abschlussarbeit behandelt werden können.

## Teaservideo
Hinweis: Sciebo bietet keine öffentlichen Links mehr an. Nutzen Sie daher die Zeichenkette: C3qL4wbrba
- [hier zum Sciebo](https://th-koeln.sciebo.de/s/o3w2Y53DLaYAZYG)

## Weiterführendes Material
- [Proximity access control devices, systems and related methods](https://patents.google.com/patent/WO2016019474A1/en)
- [Keycloak Server Administration Guide](https://www.keycloak.org/docs/latest/server_admin/index.html)
- [OpenID Connect Core 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-core-1_0.html)

## Literatur
- Adryan, B. et al. (2017), „The technical foundations of IoT“, Norwood, Artech House
- Tanenbaum, Andrew S., & van Steen, Maarten (2008), „Verteilte Systeme - Prinzipien und Paradigmen“, 2.Aufl, München, Pearson Studium

