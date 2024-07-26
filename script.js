document.addEventListener('DOMContentLoaded', () => {
    var toggle_icon = document.getElementById("toogle-icon");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const timeline_heading = document.getElementById("timeline-heading");
    const timeline_contents = document.querySelectorAll(".timeline-content"); // Select all timeline-content elements
  
    console.log("toogle"+toggle_icon)
    console.log("side"+sidebar)
    console.log("main"+main)
    console.log("head"+timeline_heading)
    console.log("content"+timeline_contents)
    // Media queries
    const mediaQuery992 = window.matchMedia("(max-width: 992px)");
    const mediaQuery768 = window.matchMedia("(max-width: 768px)");
  
    toggle_icon.addEventListener('click', () => {
        console.log(toggle_icon, sidebar.style.width);
  
        if (mediaQuery768.matches) {
            if (sidebar.style.width === "30%") {
                sidebar.style.width = "0%";
                main.style.width = "100%";
            } else {
                sidebar.style.width = "30%";
                main.style.width = "100%";
            }
            timeline_heading.classList.add('d-none');
            timeline_contents.forEach(content => content.classList.add('d-none')); // Hide all timeline contents
        } else if (mediaQuery992.matches) {
            sidebar.style.width = sidebar.style.width === "30%" ? "10%" : "30%";
            main.style.width = "90%";
            timeline_heading.classList.add('d-none');
            timeline_contents.forEach(content => content.classList.add('d-none')); // Hide all timeline contents
        } else {
            sidebar.style.width = sidebar.style.width === "30%" ? "10%" : "30%";
            main.style.width = sidebar.style.width === "10%" ? "90%" : "70%";
            const shouldHide = sidebar.style.width === "10%";
            timeline_heading.classList.toggle('d-none', shouldHide);
            timeline_contents.forEach(content => content.classList.toggle('d-none', shouldHide)); // Toggle visibility for all timeline contents
        }
  
        console.log("width: " + sidebar.style.width);
    });
  
    // Apply styles based on screen width
    function handleMediaQueryChange() {
        if (mediaQuery768.matches) {
            sidebar.style.width = "0%";
            main.style.width = "100%";
            timeline_heading.classList.add('d-none');
            timeline_contents.forEach(content => content.classList.add('d-none')); // Hide all timeline contents
        } else if (mediaQuery992.matches) {
            sidebar.style.width = "10%";
            main.style.width = "90%";
            timeline_heading.classList.add('d-none');
            timeline_contents.forEach(content => content.classList.add('d-none')); // Hide all timeline contents
        } else {
            sidebar.style.width = "30%";
            main.style.width = "70%";
            timeline_heading.classList.remove('d-none');
            timeline_contents.forEach(content => content.classList.remove('d-none')); // Show all timeline contents
        }
    }
  
    // Add listener for changes in the viewport size
    mediaQuery992.addEventListener("change", handleMediaQueryChange);
    mediaQuery768.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();
    console.log(sidebar.style.width);
});
