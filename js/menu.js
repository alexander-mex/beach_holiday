function changeMenu(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    section.classList.toggle('active');
    toggleMenu.classList.toggle('active');
}

const getDivToggle = document.querySelector('.toggle');
getDivToggle.onclick = changeMenu;