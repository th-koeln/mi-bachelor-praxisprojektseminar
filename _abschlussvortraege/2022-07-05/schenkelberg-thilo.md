---
nachname: Schenkelberg
vorname: Thilo
datum: 2022-07-05
uhrzeit: 10-30
raum: https://th-koeln.zoom.us/j/86224491085 (Passwort steht im Ilias)
betreuer: hk
thema: Raytracing im Produktionsrenderer (Methoden und Bottlenecks)
kooperationspartner: TH Köln
teaserimage: schenkelberg-thilo-teaserimage.png
stichworte: Rendering, Raytracing, Performance,
hinweise:
---

## Abstract

Das Monte Carlo Path Tracing basiert auf der Abschätzung des Integrals über die Beleuchtungsstärke von Oberflächen. Die performante Durchführung dieser Aufgabe ist ein breit gefächertes Forschungsgebiet und umfasst unter anderem die Optimierung der Effektivität der Monte Carlo-Methode durch die Reduktion der Varianz, die planvolle Organisation der Szenengeometrie in hierarchischen Datenstrukturen für eine Steigerung der Effizienz der Berechnung, sowie die Frage nach der optimalen Verteilung der Arbeitslast auf die eingesetzte Hardware.

Das Praxisprojekt 'Raytracing im Produktionsrenderer (Methoden und Bottlenecks)', untersucht einige der zum Einsatz kommenden Methoden für die genannten Forschungsgebiete im Produktionsrenderer 'Blender Cycles' auf ihre Effektivität und benennt darin erkennbare Bottlenecks, also Schwachstellen, die eine Steigerung der Performanz drosseln. Dabei sind einige dieser Bottlenecks auf eine nicht optimierte, 'langsame' Hardware zurückzuführen, andere Bottlenecks hingegen können als systematisch bezeichnet werden, also als Fehler im Design.

Insbesondere diese Bottlenecks, die nicht ausschließlich durch einen simplen Anstieg der Leistungsfähigkeit der Hardware behoben werden können, sprechen für die Überarbeitung bestehender, oder sogar die Implementation alternativer Methoden.

Die Untersuchung soll durch die Evaluation der Methoden am Beispiel verschiedener getesteter Szenen und den Vergleich mit alternativen Konfigurationen oder Vorgehensweisen erfolgen. Die Messung und Überwachung gelingt dabei durch Berechnungen an Render-Ergebnissen, durch einen im Rahmen des Praxisprojekts implementierten Profiler für das Monitoring von Datenstrukturen und der Performanz der Ausführung, sowie der Überwachung der Grafikkernel in NVIDIA-Software.

Insgesamt soll durch diese praktische Untersuchung zunächst eine Bewertung der Raytracing-Implementation und der verwendeten Methoden erfolgen und schlussendlich ein Leitfaden für die zukünftige Entwicklung des Produktionsrenderers entstehen.

## Vorschläge für weitere Arbeiten im Themenfeld

- Untersuchung der Nachbearbeitung durch AI-Denoising

- Einsatz von optimierter Grafikhardware und ihr Einfluss auf die Performanz (bspw. NVIDIA RTX)

## Material & weiterführende Infos
--
