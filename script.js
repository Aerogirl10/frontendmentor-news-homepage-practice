
document.addEventListener("DOMContentLoaded", function (event) {
    var openMenu = document.getElementById('open-menu');
    let menu = document.getElementById('menu');
    let closeMenu = document.getElementById('close-menu');
    // Your code to run since DOM is loaded and ready
    openMenu.addEventListener('click', function (e) {
        menu.classList.toggle('show');
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
    });

    closeMenu.addEventListener('click', function (e) {
        menu.classList.toggle('show');
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    });


    window.addEventListener('resize', function(event) {


        if (window.innerWidth > 374) {
            openMenu.style.display = 'none';
            closeMenu.style.display = 'none';
        } else{
            openMenu.style.display = 'none';
        }

    }, true);
});

