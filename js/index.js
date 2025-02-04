// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

let heroSection = document.querySelector(".hero");
let newHeroSection = document.createElement("section");
 
let heroHeadline = document.createElement("h1");
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
    
    let serviceHeadline = document.createElement("h2");
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


let facilitySection = document.querySelector(".facilities");
 
let facilityHeadline = document.createElement("h2")
facilityHeadline.textContent = facilities.headline;
facilitySection.append(facilityHeadline)
 
facilities.options.forEach(option => {
    let newFacility = document.createElement("section");
    newFacility.classList.add("facilites");
    newFacility.innerHTML = `
        <img src="${option.icon}">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>
       
        `;
 
    facilitySection.append(newFacility);
});

let sitesSection = document.querySelector(".sites");
 
let sitesHeadline = document.createElement("h2")
let sitesText = document.createElement("p")
let sitesBtn = document.createElement("button")
sitesHeadline.textContent = sites.headline;
sitesText.textContent = sites.text;
sitesBtn.innerHTML = `

    <img src="${sites.btnicon}">
    <p>Start</p>
`
sitesSection.append(sitesHeadline, sitesText, sitesBtn);

sites.places.forEach(place => {
    let newSite = document.createElement("section");
    newSite.classList.add("site--section");
    newSite.innerHTML = `
        <img src="${place.img}">
        <h2>${place.name}</h2>
        <p>${place.city}</p>
        <a href="#">View the Site</a>
        
       
        `;
 
    sitesSection.append(newSite);
});
let advantagesSection = document.querySelector(".advantages");

let advantageHeadline = document.createElement("h2")
advantageHeadline.textContent = "Our Advantages";
advantagesSection.append(advantageHeadline)


advantages.forEach(advantage => {
    let newAdvantage = document.createElement("section");
    newAdvantage.classList.add("advantage--section");
    newAdvantage.innerHTML = `
        <img src="${advantage.icon}">
        <h3>${advantage.headline}</h3>
        <p>${advantage.text}</p>
        
       
        `;
 
 advantagesSection.append(newAdvantage);
});




    
 
 