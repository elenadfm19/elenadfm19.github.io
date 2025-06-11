
/*We show the project picture when we hover over the project link*/
let p1 = document.getElementById('project1');
let p2 = document.getElementById('project2');
let p3 = document.getElementById('project3');
let p4 = document.getElementById('project4');
let p5 = document.getElementById('project5');
let p6 = document.getElementById('project6');
let projectPhoto = document.getElementById('project-photo');

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (!isTouchDevice()) {
    p1.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project1_photo.png';
    });
    p1.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });

    p2.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project2_photo.png';
    });
    p2.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });

    p3.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project3_photo.png';
    });
    p3.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });

    p4.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project4_photo.png';
    });
    p4.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });
    p5.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project5_photo.png';
    });
    p5.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });
    p6.addEventListener('mouseover', function () {
        projectPhoto.style.display = 'block';
        projectPhoto.src = './images/project6_photo.png';
    });
    p6.addEventListener('mouseout', function () {
        projectPhoto.style.display = 'none';
    });
}



/*We show the drop-down menu when we click on the menu logo for small screen sizes*/
let menuIcon = document.getElementById('menu');
let dropDownMenu = document.getElementById('drop-down');
let clicked = 0;

menuIcon.addEventListener('click', function () {
    if (clicked === 0) {
        dropDownMenu.style.display = 'block';
        clicked = 1;
    } else {
        dropDownMenu.style.display = 'none';
        clicked = 0;
    }
});
