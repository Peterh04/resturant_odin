import "./style.css"
import pastaImg from './pasta.jpg'
import offerDiv from "./todayOffers";

export default function homePage() {
    
    const divContent = document.querySelector('#content');
    const exploreDiv = document.createElement('div');
    const exploreDivContent = document.createElement('div')
    const mainHeader = document.createElement('h3');
    const mainHeaderParagraph = document.createElement('p')
    const exploreBtn = document.createElement('button');
    const headerImage = document.createElement('img');
    
    exploreDiv.classList.add('exploreDiv')
    
    headerImage.classList.add('headerImg')
    
    headerImage.src= pastaImg
    
    exploreDivContent.classList.add('exploreDivContent');
    
    
    
    mainHeader.textContent = "Pure exotic taste";
    mainHeaderParagraph.textContent = "Discover the world on your plate! Our restaurant brings you bold, authentic flavors crafted with the finest ingredients and spices. Dive into an unforgettable dining experience where every bite is an adventure in taste.";
    
    exploreBtn.textContent = 'Explore Menu';
    exploreBtn.classList.add('exploreBtn')
    
    
    exploreDivContent.appendChild(mainHeader);
    exploreDivContent.appendChild(mainHeaderParagraph);
    exploreDivContent.appendChild(exploreBtn);
    
    exploreDiv.appendChild(exploreDivContent);
    exploreDiv.appendChild(headerImage)
    
    
    
    
    divContent.appendChild(exploreDiv);
    divContent.appendChild(offerDiv);

    
};

