let ready = fn => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
let jsonp = (url, fn) => {
    let fnName = Math.floor(Math.random() * 1000);

    url = `https://jsonp.afeld.me/?url=${window.encodeURIComponent(url)}&callback=${fnName}`;

    let $head = document.getElementsByTagName('head')[0];
    let $script = document.createElement('script');
    $script.type= 'text/javascript';
    $script.src = url;

    window[fnName] = data => {
        fn(data);
        delete window[fnName];
        $script = null;
        $head.removeChild($script);
    };

    $head.appendChild($script);
}

ready(function(){
    let requestUrl = 'http://cpv2api.com/pens/popular/screeny05';
    requestUrl =
    window.onCodepenData = data => {
        console.log(data);
    };
});
