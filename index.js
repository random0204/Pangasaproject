function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.querySelector('ul').style.display = nav.querySelector('ul').style.display === 'block' ? 'none' : 'block';
}

function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

