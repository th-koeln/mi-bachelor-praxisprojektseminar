---
nachname: Johne
vorname: Paul
datum: 2023-10-31
uhrzeit: 11-30
raum:  3.216
betreuer: wk, ff
thema: Entwicklung eines plattformunabhängigen Echtzeit-Renderers mit der Vulkan API in C++
kooperationspartner: Technische Hochschule Köln
teaserimage: johne-paul-teaserimage.png
stichworte: Computergrafik, Rendering, Vulkan SDK, Grafik-Engine, Low-Level Programmierung
quelle-bildrechte-teaser: Paul Johne
weiterfuehrende-themen: Gestaltung von Softwarearchitekturen für Grafik-Engines | Einblick in den Aufbau von Softwareprojekten mit Build Systemen | Entwicklung mit der Vulkan API in Python | GPU-Berechnungen mit CUDA
---

## Abstract

Wir alle benutzen eine Vielzahl an Anwendungen im Alltag, die Daten visualisieren, egal ob es sich dabei um einen Webbrowser oder doch nur 
um die IDE für das nächste Softwareprojekt handelt. Doch wie entsteht das Bild, welches auf dem Bildschirm präsentiert wird? Um diese Aufgabe 
kümmert sich die Grafikschnittstelle der jeweiligen Software. Was Entwicklungstools wie Unity und Android Studio bereits im Hintergrund 
für das eigene Softwareprojekt regeln, wird je Fall auch manuell gehandhabt. 

Die Vulkan API, der logische Nachfolger von OpenGL, bietet als Low-Level Grafikschnittstelle das Rendern von einzelnen Frames auf einer beliebigen 
GPU an. Gerade die Probleme, welche mit älteren Grafikschnittstellen aufgetreten sind, sollen durch diese moderne API gelöst werden.
Die Vulkan API überlässt dem Softwareentwickler mehr Kontrolle, jedoch damit auch mehr Verantwortung bei der Entwicklung. 

Durch die vorhandene Komplexität ist der Einstieg nicht besonders linear und leicht. Ziel des Praxisprojektes war somit das Schaffen 
einer Einstiegsquelle in die Arbeit mit der Vulkan API, welche die Inhalte nicht nur an der Oberfläche, sondern tiefergehend behandelt, 
um dem Anspruch der API gerecht zu werden. Dazu wurde die PJEngine entwickelt, die weitere bestehende Technologien wie CMake und GLFW 
in den Vulkan Kontext integriert, um einen plattformunabhängigen Echtzeichtrenderer zu realisieren. 

Die PJEngine bietet die Echtzeitdarstellung einer beliebigen FBX Datei mit eingebetteter Textur in einem VSync und Performance Modus. 
Der Vortrag gewährt einen Einblick in den Projektaufbau und in die Vulkan API auf einer größtenteils bildlichen Ebene.

## Material & weiterführende Infos

Das im Vortrag besprochene Softwareprojekt lässt sich im [PJEngine Github Repo](https://github.com/Paul-Johne/PJEngine/tree/Praxisprojekt) mitsamt 
der beigefügten Ausarbeitung finden. Um einen tiefergehenden Einblick in die Arbeit mit der Vulkan API zu erhalten, empfiehlt es sich Kapitel 3 
der [Ausarbeitung](https://github.com/Paul-Johne/PJEngine/blob/Praxisprojekt/PDFs/pjohne_ausarbeitung_final_05092023.pdf) zu lesen.

Die offizielle Vulkan-Spezifikation lässt sich unter folgendem [Link](https://registry.khronos.org/vulkan/specs/1.3/html/) finden. 
Ein aktuelles, spannendes Projekt, welches die Vulkan API nutzt, stellt die [VulkanMod](https://github.com/xCollateral/VulkanMod) dar, welche 
den OpenGL Renderer von Minecraft gegen einen Vulkan Renderer austauscht.
