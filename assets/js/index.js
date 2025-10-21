/* section1 */
function ShowHambergerMenu() {
    if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

    {
        document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.add("fa-bars");
        document.getElementById("baricon").classList.remove("fa-times");
    } else {
        document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.remove("fa-bars");
        document.getElementById("baricon").classList.add("fa-times");
    }
}
/* section1 */

/* section10 */

function openticket(obj, obj1, obj3) {
    if (document.getElementById(obj).classList.contains('boxitemshow1'))

    {
        document.getElementById(obj).classList.remove("boxitemshow1");
        document.getElementById(obj).classList.add("boxitemshowclose1");
        document.getElementById(obj1).src = "./assets/img/add.png";
    } else {
        document.getElementById(obj).classList.add("boxitemshow1");
        document.getElementById(obj).classList.remove("boxitemshowclose1");
        document.getElementById(obj1).src = "./assets/img/minus-square.png";
    }

}
/* section10 */