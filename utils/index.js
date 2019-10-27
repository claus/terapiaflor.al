export function testIfSupportsPassive() {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() { // eslint-disable-line getter-return
                supportsPassive = true;
            },
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {}
    return supportsPassive;
}
