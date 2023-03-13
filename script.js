const headerIcon = document.querySelector(".header__icon");
const headerBody = document.querySelector(".header__body");

let headerLinks = document.querySelectorAll(".header__link");
if (headerLinks.length > 0) {
    headerLinks.forEach((headerLink) => {
        headerLink.addEventListener("click", onheaderLinkClick)
    });

    function onheaderLinkClick(e) {
        if (headerBody.classList.contains('_active')) {
            headerBody.classList.remove('_active');
            document.body.classList.remove('_lock');
            headerIcon.classList.remove('_active');
        }
    }
}



if (headerIcon) {
    headerIcon.addEventListener("click", () => {
        headerIcon.classList.toggle("_active");
        headerBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    })
}