// Function to open a specific tab
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class "tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class "tablink" and remove the "active" class
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the clicked link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open the first tab (Eid Recipes) when the page loads
document.getElementsByClassName("tablink")[0].click();
