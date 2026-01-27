---
nachname: Regnery
vorname: Florian
datum: 2026-02-04
uhrzeit: 11-30
raum: 3.216 
betreuer: ad
thema: Responsive refactoring of an existing Angular web application 
kooperationspartner: TH Köln
teaserimage: regnery-florian-teaserimage.jpg
stichworte: Frontend-Development, Angular, UI/UX, state, mobile screen, cross-platform 
quelle-bildrechte-teaser: Florian Regnery, Angular(Google)
---

## Abstract
Mobile viewports have become a necessity for most applications, as a significant and growing number of web users access the internet using mobile devices. Even applications that are primarily intended to be used on desktop devices benefit from a mobile viewport, as Google considers mobile performance first when evaluating indexing (SEO).

Longstanding applications may have accumulated complex UI designs throughout their existence and struggle to transform their existing design into a mobile UI while keeping full functionality and ease of use. But even complex UI designs can be broken down into a defined list of semantic components.

This presentation explains the process of breaking down a desktop UI design into its components and refactoring them responsively to fit a mobile screen. We begin by examining a screenshot from an existing application, then divide its UI into components, before refactoring them as mobile components, ensuring that all functionality is kept. 

The application examined is a web application, which has been developed at TH-Koeln for the past five years. The application has been developed using the Angular framework, utilizing RxJS for reactive state management. While these concepts are presented in a technology-agnostic context, Angular-based code examples will be shown to demonstrate these concepts in practice.

After explaining both design decisions and technical implementations, the listener will acquire the knowledge so they can start implementing mobile viewports for existing desktop applications.

## Materialien
- [MocogiUI(the examined application) Github Repositoy](https://github.com/THK-ADV/mocogi-ui)
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [Angular](https://angular.dev/overview)
- [Material Design Components](https://m2.material.io/design/introduction)
- [What is a PWA?](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)

## Weiterführende Themen
* Implementation of further screens for MocogiUI
* Comparing methods of creating multi-platform applications using a singular code base