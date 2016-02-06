let $ = {
    ready(fn){
        if(document.readyState === 'loading'){
            return fn();
        }
        document.addEventListener('DOMContentLoaded', fn);
    },

    jsonp(url, fn, options = {}){
        options.useProxy = options.useProxy === true ? true : false;
        options.callbackParam = options.callbackParam || 'callback';

        let fnName = 'cb' + Math.floor(Math.random() * 1000);

        if(options.useProxy){
            url = `https://jsonp.afeld.me/?url=${window.encodeURIComponent(url)}&callback=${fnName}`;
        } else {
            url = (url.indexOf('?') === -1 ? url + '?' : url + '&') + options.callbackParam + '=' + fnName;
        }

        let $head = document.getElementsByTagName('head')[0];
        let $script = document.createElement('script');
        $script.type= 'text/javascript';
        $script.src = url;

        window[fnName] = data => {
            fn(data);
            delete window[fnName];
            $head.removeChild($script);
            $script = null;
        };

        $head.appendChild($script);
        return fnName;
    },

    removeChildren(el){
        while(el.firstChild){
            el.removeChild(el.firstChild);
        }
    },

    stripHtml(html){
        let divElement = document.createElement('div');
        divElement.innerHTML = html;
        return divElement.textContent || divElement.innerText || "";
    }
};

let renderListElement = function(title, description, url){
    let listElement = document.createElement('li');
    listElement.classList.add('list-element');

    let titleElement = document.createElement('a');
    titleElement.classList.add('element-title');
    titleElement.href = url;
    titleElement.textContent = title;

    let descriptionElement = document.createElement('span');
    descriptionElement.classList.add('element-description');
    descriptionElement.textContent = $.stripHtml(description);

    listElement.appendChild(titleElement);
    listElement.appendChild(descriptionElement);

    return listElement;
};

const $codepenList = document.querySelector('.js-target-codepen');
const $lastfmList  = document.querySelector('.js-target-lastfm');
const LIST_LIMIT = 6;

$.ready(function(){
    $.jsonp('http://cpv2api.com/pens/popular/screeny05', data => data.data.slice(0, LIST_LIMIT).forEach(pen => {
        $.removeChildren($codepenList);
        setTimeout(() => {
            $codepenList.appendChild(renderListElement(pen.title, pen.details ? pen.details : '—', pen.link));
        }, 0);
    }), {
        useProxy: true
    });
    $.jsonp('https://ws.audioscrobbler.com/2.0/?format=json&callback=_&api_key=8ec8e910eba21826608967bcdefb2343&method=user.getRecentTracks&user=screeny05', data => data.recenttracks.track.slice(0, LIST_LIMIT).forEach(track => {
        $.removeChildren($lastfmList);
        setTimeout(() => {
            $lastfmList.appendChild(renderListElement(track.name, track.artist['#text'], track.url));
        }, 0);
    }));
});
