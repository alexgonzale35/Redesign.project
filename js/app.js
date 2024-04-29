/*
 * Navigation Interactions
 * Toggle the mobile icon to show and hide the main navigation
 * Toggle the dropdown button to show and hide the dropdown content
*/
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggler = document.querySelector('.navbar-toggler');
    const navigation = document.querySelector(mobileToggler.getAttribute('data-target'));

    let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    
    mobileToggler.addEventListener('click', () => navigation.classList.toggle('collapse'))

    dropdownToggle.forEach((dropdown) => {
        dropdown.addEventListener('click', (toggler) => {
            let dropdownElement = dropdown.parentElement;
            dropdownElement.classList.toggle('collapse');
        })
    })
});


const reportWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowSize').innerHTML = `${width}px by ${height}px`;
}



document.addEventListener('DOMContentLoaded', () => {
    reportWindowSize();
    window.onresize = reportWindowSize;
});





document.querySelectorAll('.money').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.money').forEach(function(el) {
            el.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});

document.querySelectorAll('.time span').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.time span').forEach(function(el) {
            el.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});




