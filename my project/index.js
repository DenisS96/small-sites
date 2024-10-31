const teksten = ["UI/UX designer", "Webdesigner", "Grafische designer"];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
const spanElement = document.getElementById("dynamischeTekst");


// Maak een element voor de laserpointer
const laserPointer = document.createElement('div');
laserPointer.classList.add('laser');
document.body.appendChild(laserPointer);

// Update de exacte positie van de laserpointer
document.addEventListener('mousemove', (event) => {
    // Stel de exacte positie van de laserpointer in zonder translate
    laserPointer.style.left = `${event.clientX}px`;
    laserPointer.style.top = `${event.clientY}px`;
});



function typeEffect() {
    const huidigeTekst = teksten[index];
    
    // Typen of wissen
    if (!isDeleting && letterIndex < huidigeTekst.length) {
        spanElement.textContent += huidigeTekst.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, 100); // Vertraging tussen letters
    } else if (isDeleting && letterIndex > 0) {
        spanElement.textContent = huidigeTekst.substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(typeEffect, 50); // Sneller wissen
    } else if (!isDeleting && letterIndex === huidigeTekst.length) {
        // Pauze na typen voordat we beginnen met wissen
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, 2000);
    } else if (isDeleting && letterIndex === 0) {
        // Wisselen naar de volgende tekst na wissen
        isDeleting = false;
        index = (index + 1) % teksten.length;
        setTimeout(typeEffect, 500);
    }
}

// Start de typ-animatie
typeEffect();


window.addEventListener('scroll', doorzichtigeHeader)


function doorzichtigeHeader(){
    if(window.scrollY> 50){
        document.querySelector("header").classList.add('header-scrolled');
    }else{
        document.querySelector("header").classList.remove('header-scrolled');
    }
}