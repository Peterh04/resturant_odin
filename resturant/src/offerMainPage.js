import veggies from './menu/veggies.jpg';
import soupCurry from './menu/nachos.jpg';


export default function offerPage(){
    const divContent = document.querySelector('#content');
    const offerHeadingDiv = document.createElement('div');

    divContent.classList.add('offerBody');


    
    const heading1 = document.createElement('h2');
    heading1.textContent = `Today's`;
    heading1.style.display = 'inline'

    const spanHeading = document.createElement('h2');
    spanHeading.classList.add('offerSpan');
    spanHeading.textContent = ' special'
    spanHeading.style.display = 'inline'

    const heading2 = document.createElement('h2');
    heading2.textContent = ` deals`;
    heading2.style.display = 'inline'

    offerHeadingDiv.classList.add('offerHeadingDiv');

    

    offerHeadingDiv.appendChild(heading1);
    offerHeadingDiv.appendChild(spanHeading);
    offerHeadingDiv.appendChild(heading2);

    //grid layout for the food
    const foodOffersGrid = document.createElement('div');
    foodOffersGrid.classList.add('offerFoodDiv');

    const veggieOfferDiv = document.createElement('div');
    veggieOfferDiv.classList.add('foodOfferDiv')
    const veggiesImg = document.createElement('img');
    veggiesImg.src = veggies;

    const veggieHeading = document.createElement('h3');
    veggieHeading.classList.add('foodOfferHeading')
    veggieHeading.textContent = 'Grilled Veggies';

    const veggieOriginalPrice = document.createElement('h3');
    veggieOriginalPrice.textContent = '$ 5';
    veggieOriginalPrice.classList.add('foodOriginalPrice');

    const veggieDiscountPrice = document.createElement('h3');
    veggieDiscountPrice.textContent = '$ 2';
    veggieDiscountPrice.classList.add('foodDiscountPrice');

    
    const soupOfferDiv = document.createElement('div');
    soupOfferDiv.classList.add('foodOfferDiv')
    const soupCurryImg = document.createElement('img');
    soupCurryImg.src = soupCurry;

    const soupHeading = document.createElement('h3');
    soupHeading.classList.add('foodOfferHeading')
    soupHeading.textContent = 'Loaded Nachos';

    const soupOriginalPrice = document.createElement('h3');
    soupOriginalPrice.textContent = '$ 6';
    soupOriginalPrice.classList.add('foodOriginalPrice');

    const soupDiscountPrice = document.createElement('h3');
    soupDiscountPrice.textContent = '$ 3';
    soupDiscountPrice.classList.add('foodDiscountPrice');




 
    
    veggieOfferDiv.appendChild(veggiesImg);
    veggieOfferDiv.appendChild(veggieHeading);
    veggieOfferDiv.appendChild(veggieOriginalPrice);
    veggieOfferDiv.appendChild(veggieDiscountPrice);

    
    soupOfferDiv.appendChild(soupCurryImg);
    soupOfferDiv.appendChild(soupHeading);
    soupOfferDiv.appendChild(soupOriginalPrice);
    soupOfferDiv.appendChild(soupDiscountPrice);

    foodOffersGrid.appendChild(veggieOfferDiv);
    foodOffersGrid.appendChild(soupOfferDiv);


    divContent.appendChild(offerHeadingDiv);
    divContent.appendChild(foodOffersGrid);
};
