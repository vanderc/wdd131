document.addEventListener("DOMContentLoaded", function() {
    const showMenu = document.getElementById('show-menu');
    const hideMenu = document.getElementById('hide-menu');
    const linkFlex = document.querySelector('.link-flex');

    showMenu.addEventListener('click', function() {
        linkFlex.classList.add('active');
    });

    hideMenu.addEventListener('click', function() {
        linkFlex.classList.remove('active');
    });
});


let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;