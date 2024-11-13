import beefCurry from './menu/beef.jpg';
import soupCurry from './menu/soup.jpg';
import burger from './menu/burger.jpg';
import burgerJumbo from './menu/burgerJumbo.jpg';
import nachos from './menu/nachos.jpg';
import veggies from './menu/veggies.jpg';

export default function menuPage(){
    const divContent = document.querySelector('#content');
    const menuHeading = document.createElement('h3');

    const menu1Div = document.createElement('div');
    const beefCurryImg = document.createElement('img');
    const menu1DivContent = document.createElement('div');
    const menu1FoodTitle  = document.createElement('h4');
    const menu1FoodParagraph = document.createElement('p');
    const foodBuyDiv = document.createElement('div');
    const menu1FoodPrice = document.createElement('h4');
    const menu1Button = document.createElement('button');
    

    const menu2Div = document.createElement('div');
    const soupCurryImg = document.createElement('img');
    const menu2DivContent = document.createElement('div');
    const menu2FoodTitle  = document.createElement('h4');
    const menu2FoodParagraph = document.createElement('p');
    const foodBuyDiv2 = document.createElement('div');
    const menu2FoodPrice = document.createElement('h4');
    const menu2Button = document.createElement('button');


    const menu3Div = document.createElement('div');
    const burgerImg = document.createElement('img');
    const menu3DivContent = document.createElement('div');
    const menu3FoodTitle  = document.createElement('h4');
    const menu3FoodParagraph = document.createElement('p');
    const foodBuyDiv3 = document.createElement('div');
    const menu3FoodPrice = document.createElement('h4');
    const menu3Button = document.createElement('button');

    const menu4Div = document.createElement('div');
    const burgerJumboImg = document.createElement('img');
    const menu4DivContent = document.createElement('div');
    const menu4FoodTitle  = document.createElement('h4');
    const menu4FoodParagraph = document.createElement('p');
    const foodBuyDiv4 = document.createElement('div');
    const menu4FoodPrice = document.createElement('h4');
    const menu4Button = document.createElement('button');

    const menu5Div = document.createElement('div');
    const nachoImg = document.createElement('img');
    const menu5DivContent = document.createElement('div');
    const menu5FoodTitle  = document.createElement('h4');
    const menu5FoodParagraph = document.createElement('p');
    const foodBuyDiv5 = document.createElement('div');
    const menu5FoodPrice = document.createElement('h4');
    const menu5Button = document.createElement('button');

    const menu6Div = document.createElement('div');
    const veggiesImg = document.createElement('img');
    const menu6DivContent = document.createElement('div');
    const menu6FoodTitle  = document.createElement('h4');
    const menu6FoodParagraph = document.createElement('p');
    const foodBuyDiv6 = document.createElement('div');
    const menu6FoodPrice = document.createElement('h4');
    const menu6Button = document.createElement('button');
    

    document.body.classList.add('menu-page');

    
    menuHeading.textContent = 'Explore our exclusive dishes';
    divContent.appendChild(menuHeading);

    menuHeading.classList.add('menuHeader') 

    menu1Div.classList.add('menuDiv');

    beefCurryImg.src = beefCurry;

    menu1FoodTitle.textContent = "Spicy Beef Curry";

    menu1FoodParagraph.textContent = "Experience the heat of our spicy beef curry—tender beef simmered in a rich, aromatic sauce with a perfect blend of spices for a bold, flavorful kick."

    menu1DivContent.classList.add('foodContent');
    menu1DivContent.appendChild(menu1FoodTitle);
    menu1DivContent.appendChild(menu1FoodParagraph);

    foodBuyDiv.classList.add('foodBuyDiv');
    menu1FoodPrice.textContent = '$ 10';
    menu1Button.textContent = 'Add to Cart';

    foodBuyDiv.appendChild(menu1FoodPrice);
    foodBuyDiv.appendChild(menu1Button);


    menu1Div.appendChild(beefCurryImg);
    menu1Div.appendChild(menu1DivContent);
    menu1Div.appendChild(foodBuyDiv);

    menu2Div.classList.add('menuDiv');
    soupCurryImg.src = soupCurry;
    menu2FoodTitle.textContent = 'Special Spicy Soup';
    menu2FoodParagraph.textContent = 'Our Spicy Soup is a fiery blend of fresh herbs, chili peppers, and bold spices—perfect for those who love a kick with every bite!';

    menu2DivContent.classList.add('foodContent');
    menu2DivContent.appendChild(menu2FoodTitle);
    menu2DivContent.appendChild(menu2FoodParagraph);

    foodBuyDiv2.classList.add('foodBuyDiv');
    menu2FoodPrice.textContent = '$ 8';
    menu2Button.textContent =  'Add to Cart';

    foodBuyDiv2.appendChild(menu2FoodPrice);
    foodBuyDiv2.appendChild(menu2Button);

    menu2Div.appendChild(soupCurryImg);
    menu2Div.appendChild(menu2DivContent);
    menu2Div.appendChild(foodBuyDiv2);

    
    menu3Div.classList.add('menuDiv');
    burgerImg.src = burger;
    menu3FoodTitle.textContent = 'Spicy Beef Burger';
    menu3FoodParagraph.textContent = 'Our Spicy Beef Burger delivers a fiery punch with a juicy beef patty, topped with spicy sauce, fresh jalapeños, and zesty seasonings—perfect for heat lovers!';

    menu3DivContent.classList.add('foodContent');
    menu3DivContent.appendChild(menu3FoodTitle);
    menu3DivContent.appendChild(menu3FoodParagraph);

    foodBuyDiv3.classList.add('foodBuyDiv');
    menu3FoodPrice.textContent = '$ 9.5';
    menu3Button.textContent =  'Add to Cart';

    foodBuyDiv3.appendChild(menu3FoodPrice);
    foodBuyDiv3.appendChild(menu3Button);

    menu3Div.appendChild(burgerImg);
    menu3Div.appendChild(menu3DivContent);
    menu3Div.appendChild(foodBuyDiv3);

    menu4Div.classList.add('menuDiv');
    burgerJumboImg.src = burgerJumbo;
    menu4FoodTitle.textContent = 'Spicy Beef Burger Jumbo';
    menu4FoodParagraph.textContent = 'Our Jumbo Spicy Beef Burger is a flavor-packed giant! With a thick, juicy beef patty, extra layers of spicy sauce, fresh jalapeños, and bold seasonings, this burger is made to satisfy big appetites and serious spice lovers!';

    menu4DivContent.classList.add('foodContent');
    menu4DivContent.appendChild(menu4FoodTitle);
    menu4DivContent.appendChild(menu4FoodParagraph);

    foodBuyDiv4.classList.add('foodBuyDiv');
    menu4FoodPrice.textContent = '$ 15';
    menu4Button.textContent =  'Add to Cart';

    foodBuyDiv4.appendChild(menu4FoodPrice);
    foodBuyDiv4.appendChild(menu4Button);

    menu4Div.appendChild(burgerJumboImg);
    menu4Div.appendChild(menu4DivContent);
    menu4Div.appendChild(foodBuyDiv4);

    menu5Div.classList.add('menuDiv');
    nachoImg.src = nachos;
    menu5FoodTitle.textContent = 'Loaded Nachos';
    menu5FoodParagraph.textContent = 'Crispy tortilla chips piled with melted cheese, spicy beef, jalapeños, and fresh toppings—perfect for sharing!';
    menu5DivContent.classList.add('foodContent');
    menu5DivContent.appendChild(menu5FoodTitle);
    menu5DivContent.appendChild(menu5FoodParagraph);

    foodBuyDiv5.classList.add('foodBuyDiv');
    menu5FoodPrice.textContent = '$ 6';
    menu5Button.textContent =  'Add to Cart';

    foodBuyDiv5.appendChild(menu5FoodPrice);
    foodBuyDiv5.appendChild(menu5Button);

    menu5Div.appendChild(nachoImg);
    menu5Div.appendChild(menu5DivContent);
    menu5Div.appendChild(foodBuyDiv5);


    menu6Div.classList.add('menuDiv');
    veggiesImg.src = veggies;
    menu6FoodTitle.textContent = 'Grilled Veggies';
    menu6FoodParagraph.textContent = ' A smoky, savory mix of fire-grilled peppers, zucchini, and onions, lightly spiced and full of flavor.';
    menu6DivContent.classList.add('foodContent');
    menu6DivContent.appendChild(menu6FoodTitle);
    menu6DivContent.appendChild(menu6FoodParagraph);

    foodBuyDiv6.classList.add('foodBuyDiv');
    menu6FoodPrice.textContent = '$ 5';
    menu6Button.textContent =  'Add to Cart';

    foodBuyDiv6.appendChild(menu6FoodPrice);
    foodBuyDiv6.appendChild(menu6Button);

    menu6Div.appendChild(veggiesImg);
    menu6Div.appendChild(menu6DivContent);
    menu6Div.appendChild(foodBuyDiv6);


    
    
    
    
    divContent.appendChild(menu1Div);
    divContent.appendChild(menu2Div);
    divContent.appendChild(menu3Div);
    divContent.appendChild(menu4Div);
    divContent.appendChild(menu5Div);
    divContent.appendChild(menu6Div);
    
    
    
}