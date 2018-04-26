/**
 * @description Detects current Navigation location
 */
if (window.location.href.indexOf("index") > -1) {
    SetActiveNavMenu('a[title^=V1a]');
}

if (window.location.href.indexOf("index_v1b") > -1) {
    SetActiveNavMenu('a[title^=V1b]');
}

if (window.location.href.indexOf("index_v1c") > -1) {
    SetActiveNavMenu('a[title^=V1c]');
}

/**
 * @description Sets Active Navigation Menu
 * @param {*} navSelector 
 */
function SetActiveNavMenu(navSelector) {
    $('nav ul li a').removeClass('active');
    $(navSelector).addClass('active');
}