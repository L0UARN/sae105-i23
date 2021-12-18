window.addEventListener('load', () => {
    let size = 100.0;

    let cache = document.createElement('div');
    cache.style.zIndex = '999';
    cache.style.position = 'fixed';
    cache.style.bottom = '0';
    cache.style.left = '0';
    cache.style.width = '100%';
    cache.style.height = '100%';
    cache.style.backgroundColor = '#EEEEEE';
    document.getElementsByTagName('body')[0].appendChild(cache);

    setInterval(() => {
        cache.style.height = `${size}%`;
        size -= Math.random() / 8;
    }, 5)
});