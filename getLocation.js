function getLocation(el) {
    let boundsarr = el.getAttribute('bounds').replace('][', ',').replace('[', '').replace(']', '').split(',');
    const x = (+boundsarr[0] + +boundsarr[1]) / 2;
    const y = (+boundsarr[2] + +boundsarr[3]) / 2;
    return [x, y];
}

module.exports = { getLocation };