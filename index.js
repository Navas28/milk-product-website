//   ----------------------- Toggle the Navbar ----------------

//  This selects the element with the id from the HTML file:

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");  // why nav ? because nav icnluded all navlinks .nav show and hide

//   Open menu



menuIcon.addEventListener("click", () => {
    nav.classList.add("active"); // nav is hided. when you click the menu icon, the CSS style for nav.active { display: flex; } will work
    menuIcon.style.display = "none";  //  Hide the menu
    closeIcon.style.display = "block"; //   shows the close icon
});

//    summery => when click the menu icon, js add the class "active" to the nav element. at the time css for "nav.active"
//                is change "display none" to "display flex" . then navigation menu visible in the screen 



//      Close menu  

closeIcon.addEventListener("click", () => {
    nav.classList.remove("active");  // now nav is opened . when click the close icon js removes the active class form css. nav become hide.
    menuIcon.style.display = "block"; // show the menu
    closeIcon.style.display = "none"  //  hide the close icon
});



