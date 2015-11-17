---
title:  "xmbd - Cross Provider Media Embedding"
date:   2013-10-13 14:20:10 +0100
categories: tech
tags:
    - JavaScript
---
Ein ziemlich kurzer Projekttitel für das, was dieses kleine möchtegern-jQuery-Plugin kann.

xmbd dient dazu eine vereinheitlichte Abstraktion für verschiedene Medienanbieter anzubieten. Dazu zählen Einbetten, Events & Methoden für z.B: YouTube, Vimeo oder SoundCloud.

<!-- more -->

Das Projekt ist entstanden, weil ich für SynergyTube eine API brauche, die all die verschiedenen Methoden und Events von Medienanbietern einheitlich anbietet.  
Im Moment sieht in der [GitHub-Repo](https://github.com/screeny05/xmbd) noch vieles nach Spaghetti aus, aber ich verspreche, dass sich das verbessern wird. Die Hauptsache ist, dass alles Funktioniert wie es sollte und Dokumentiert ist. *Danke QUnit*.

Beispiel zum erstellen einer Playlist mit verschiedenen Providern:

{% highlight javascript %}
var playlist = [
  {
    provider: 'youtube',
    id: 'gwvXtfRjonc'
  },
  {
    provider: 'vimeo',
    id: '75423505'
  },
  {
    provider: 'youtube',
    id: 'sxpLiQgdTI0'
  }
];
var opts = {
  autoplay: true
};

var player = $('#player').xmbd();
var index = 0;

var embedNext = function(){
    player.embed(playlist[index].provider, playlist[index].id, opts);
    index += 1;
    if(index === playlist.length){
        index = 0;
    }
};

player.on('vEnded', embedNext);
embedNext();
{% endhighlight %}
[Auf jsFiddle ansehen.](http://jsfiddle.net/KtUH6/3)

Weitere Beispiele findet ihr auf der [Examples-Seite](https://screeny05.github.io/xmbd/examples.html) auf GitHub-Pages.

Welche Events und Methoden euch unter welchen Providern zur verfügung stehen findet ihr in der Readme.

Da xmbd swfobjects einbettet braucht ihr außer [jQuery](http://jquery.com/download/) natürlich noch [swfobject](https://code.google.com/p/swfobject/downloads/list). (Beides findet ihr auch unter den [*Google Hosted Libraries*](https://developers.google.com/speed/libraries/devguide?hl=de))

Falls ihr Probleme habt oder die Dokumentation als unzureichend und komisch erachtet, öffnet einfach ein Issue dafür.

**Achtung:** Falls Ihr vorhabt xmbd produktiv zu benutzen, dann seid gewarnt, dass es *noch* keine Unit-Tests gibt und sich die API jederzeit ändern kann, bis ein Stable-Release erschienen ist.

**Update:** Es gibt jetzt endlich Unit-Tests mit QUnit. Zum Erstellen Benötigt ihr GruntJS, nähere Informationen zum Build-Prozess gibt es in der [README.md](https://github.com/screeny05/xmbd/blob/master/README.md). Zusätzlich findet ihr den aktuellen Build-Status immer unter [Travis](https://travis-ci.org/screeny05/xmbd) oder hier:

[![Build Status](https://travis-ci.org/screeny05/xmbd.png?branch=master)](https://travis-ci.org/screeny05/xmbd)

Außerdem gibt es xmbd jetzt in Bower, ganz einfach zu installieren mit: `bower install xmbd`.
