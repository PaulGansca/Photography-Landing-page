//Animate smooth scroll;

const button = document.getElementById("view-work");
const images = document.getElementById("destination");

button.addEventListener('click', () => {
    images.scrollIntoView({
        behavior: 'smooth'
    });
    console.log("jump smooth")
});