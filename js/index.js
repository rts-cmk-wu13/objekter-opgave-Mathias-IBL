// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

let heroSection = document.querySelector(".hero");
let newHeroSection = document.createElement("section");
 
let heroHeadline = document.createElement("h2");
heroHeadline.textContent = hero.headline;
newHeroSection.append(heroHeadline);
 
 
let heroCopy = document.createElement("p");
heroCopy.textContent = hero.copy;
newHeroSection.append(heroCopy);
 
 
let heroImage = document.createElement("img");
heroImage.src = hero.image;
newHeroSection.append(heroImage);
 
let heroIcon = document.createElement("img");
heroIcon.src = hero.icon;
newHeroSection.append(heroIcon);
 
heroSection.append(newHeroSection);




let servicesSection = document.querySelector(".services");

services.forEach(service => {
    let newService = document.createElement("article");
    newService.classList.add("service");
    
    let serviceImage = document.createElement("img");
    serviceImage.src = service.illustration;
    newService.append(serviceImage);
    
    let serviceHeadline = document.createElement("h3");
    serviceHeadline.textContent = service.headline;
    newService.append(serviceHeadline);
 
    let serviceCopy = document.createElement("p");
    serviceCopy.textContent = service.text;
    newService.append(serviceCopy);

    let serviceLink = document.createElement("a");
    serviceLink.textContent = service.linktext;
    serviceLink.href = "#";
    newService.append(serviceLink);

 
 
    servicesSection.append(newService);
});
 
 