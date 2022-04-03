function showMenu() {
    let transformHeadline = document.querySelector('#headline');
    let showMenu = document.querySelector('#responsive-menu');
    transformHeadline.classList.remove("headline-transition-out");
    transformHeadline.classList.remove("headline-transition");

    if (showMenu.classList.contains("show-responsive-menu")) {
        transformHeadline.classList.add("headline-transition-out");
        showMenu.classList.remove("show-responsive-menu");
    } else if (!showMenu.classList.contains("show-responsive-menu")) {
        transformHeadline.classList.add("headline-transition");
        showMenu.classList.add("show-responsive-menu");
    }
}

function hideMenu() {
    let transformHeadline = document.querySelector('#headline');
    let showMenu = document.querySelector('#responsive-menu');
    transformHeadline.classList.remove("headline-transition-out");
    transformHeadline.classList.remove("headline-transition");

    showMenu.classList.remove("show-responsive-menu");
    transformHeadline.classList.add("headline-transition-out");
}