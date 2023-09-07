# Alexanders Realistiska Äventyr Genom Utbildning och Arbetslivet

Genom att använda 'vite' skapar jag en sida vars mål är att göra en interaktiv historia med grenande val. Med hjälp av HTML, css och Javascript ska detta uppfyllas (helt felfritt, såklart). Den ska vara komiskt belagd och långt från verklighetsanpassad. Med det sagt är målgruppen inriktad till vem som helst, i teorin, men i en icket-professionel närvaro. Alltså ska den inte användas som utbyte för ett vanligt CV, utan mer i stilen av ett spel (ifall det kan definieras sådan). ChatGPT ska vara föraren i att skapa självaste berättelsen men med mina mer specifika tillämpningar och prompter.

## Planering:
* Design
  * Figma
    * [Länk](https://www.figma.com/file/1KHWbNscSTll3ZbSbANCS2/Untitled?type=design&node-id=0%3A1&mode=design&t=F3MVHCVY1dsoh2yY-1)
* Skapa historia
  * ChatGPT
  * Introduktion
  * Indelningar
    * Namngivning + Introducerande val om karaktären ("character creation")
    * Ungdom + Utbildning
    * In i arbetsmarknaden 

## Dokumentation:

### September 6 | Onsdag - Eftermiddag
I stort sätt användes liknande tekniker till vad 'vite-project' först visade. Det finns en array med kommande scenarion, och beroende på valen förs man vidare till nästa scenario. Detta görs dynamiskt eftersom den återanvänder knappar och divar då den endast förnyar informationen på dessa medel. Framöver ska de faktiska valen färdigställas och en story ska vara gjord. Dessutom ska designen anpassas.

### September 7 | Torsday - Förmiddag
Det har skapats en introduktion till berättelsen och en gnutta story. Nu finns det möjligheten att dynamiskt utse knappar beroende på antalet val till scenariot. När man klickar på en knapp visas alla scenarion och dina val ovan. Sist men inte minst har jag anpassat css utseendet till hur figma ser ut. Framöver gäller det endast att utveckla alla dessa fronter samt fixa buggen med "history" när du klickar på ett val, då den ibland repeterar scenarion.

### September 7 | Torsdag - Eftermiddag
Efter feedback från Jens har jag omformaterat stora delar av min kod. Exempelvist genom att använda en JSON-fil för självaste berättelsen och genom att skapa knappar med hjälp av informationen denna JSON-fil kan ge. Nu är historiken på berättelsen finare. Framöver behöver jag ta bort gamla knappar som har använts redan, bygga på berättelsen och göra css:en finare och finare!!