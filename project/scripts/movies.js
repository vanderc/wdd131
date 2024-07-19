let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
    const showMenu = document.getElementById('showMenu');
    const hideMenu = document.getElementById('hideMenu');
    const linkFlex = document.querySelector('.linkFlex');
  
    showMenu.addEventListener('click', function() {
        linkFlex.classList.add('active');
    });
  
    hideMenu.addEventListener('click', function() {
        linkFlex.classList.remove('active');
    });
  });
