function loadScript(src) {
    var script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}

loadScript('text-animation.js');
loadScript('other-anim.js');
loadScript('image-animation.js');