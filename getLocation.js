module.exports=(el)=>{
    let boundsarr = el.getAttribute('bounds').replace('][', ',').replace('[', '').replace(']', '').split(',');
    const x = (+boundsarr[0] + +boundsarr[2]) / 2;
    const y = (+boundsarr[1] + +boundsarr[3]) / 2;
    return [x, y];
}