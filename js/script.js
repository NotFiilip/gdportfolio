// Grab the necessary elements
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");
const menuItems = document.querySelectorAll("nav a"); // Get all menu items

// Function to toggle the menu and icons
function toggleMenu() {
    nav.classList.toggle("show-menu");  // Toggle the show-menu class on the nav
    if (nav.classList.contains("show-menu")) {
        menuIcon.style.display = "none";  // Hide the burger icon when menu is open
        closeIcon.style.display = "block"; // Show the close (X) icon
    } else {
        menuIcon.style.display = "block";  // Show the burger icon when menu is closed
        closeIcon.style.display = "none";   // Hide the close (X) icon
    }
}

// Event listeners for opening and closing the menu
menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

// Close the menu on window resize if in desktop mode
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("show-menu"); // Remove the show-menu class
        menuIcon.style.display = "none";     // Hide the burger icon
        closeIcon.style.display = "none";    // Hide the close icon
    } else {
        menuIcon.style.display = "block";    // Show the burger icon again
    }
});

// Add click event listener to menu items
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("show-menu"); // Close the menu
        menuIcon.style.display = "block";    // Show the burger icon
        closeIcon.style.display = "none";    // Hide the close icon
    });
});
