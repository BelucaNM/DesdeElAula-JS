// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("iconModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    var iconList = document.querySelectorAll(".icon-list li");
    var selectedIconContainer = document.getElementById("selectedIcon");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    iconList.forEach(function(icon) {
        icon.onclick = function() {
            selectedIconContainer.innerHTML = icon.innerHTML;
            modal.style.display = "none";
        }
    });
});
