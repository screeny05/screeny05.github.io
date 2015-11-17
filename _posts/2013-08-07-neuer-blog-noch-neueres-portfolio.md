---
title:  "Neuer Blog, noch neueres Portfolio"
date:   2013-08-07 18:53:29 +0100
categories: tech
tags:
    - Webdesign
    - Showcase
    - node.js
coverimage: https://scn.cx/assets/img/portfolio.jpg
---
Mein Zweiter Versuch ein Responsive Webdesign auf die Beine zu stellen ist vielleicht nicht so aufwendig wie die Website der [*Electronic Music Friends*](/article/electronic-music-friends-die-erste), aber dafür schön einfach gehalten.

<!-- more -->

Die Web-Anwendung ist mit node.js geschrieben. Ich habe mir dafür extra eine Einführung in Express und Handlebars angetan.

Im Hintergrund wird jeder Blogpost einfach in Markdown geschrieben und in einen eigenen Ordner dafür abgelegt. So Erhalten auch die Leser des Blogs zugriff auf die Source-Files. Dazu findet ihr unter jedem Post neben dem Share-Button einen Source-Button.

Der gesamte Code ist auf GitHub [&ouml;ffentlich verf&uuml;gbar](https://github.com/screeny05/localcraft.de). (Zum rumspielen als Public Domain)

**Eventuelles Todo:**

1. Caching - Redis?
2. If-Modified-Since Header benutzen.
3. Pagination
4. Ein paar Markdown-Bugs beim Rendern beheben
5. Metadaten effizienter auslesen
6. Eine funktionierende Share-Funktion
7. Eine Art *Plugin-System*
8. Ein Style-System <span class="muted">| Um Himmels Willen, das ganze muss erst mal Stabil laufen...</span>
9. Mehr Listen!
