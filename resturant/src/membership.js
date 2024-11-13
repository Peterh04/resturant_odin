import membershipPic from './membership.jpg'
export default function membership () {
    const contentDiv = document.querySelector('#content');
    const headerDiv = document.createElement('div');
    const heading =document.createElement('h2');
    const spanHeading  = document.createElement('h2');
    const membershipDiv  = document.createElement('div');
    const membershipContentDiv = document.createElement('div');
    const membershipParagraph = document.createElement('p');
    const membershipImg = document.createElement('img');

    heading.textContent = 'Stay in the loop -';
    spanHeading.textContent = 'Taste the Best First!';
    spanHeading.classList.add('span')

    spanHeading.style.display ='inline';
    heading.style.display ='inline';

    headerDiv.appendChild(heading);
    headerDiv.appendChild(spanHeading);
    headerDiv.classList.add('membershipHeaderDiv');

    membershipDiv.classList.add('membershipDiv')
    membershipDiv.style.display ='flex';
    
    
    membershipImg.src = membershipPic;

    membershipContentDiv.classList.add('membershipContentDiv')

    membershipParagraph.textContent = 'Subscribe to our newsletter and be the first to know about our seasonal dishes, special offers, and exclusive events. Plus, enjoy a surprise treat when you sign up!';

    membershipContentDiv.appendChild(membershipParagraph);

    membershipDiv.appendChild(membershipContentDiv);
    membershipDiv.appendChild(membershipImg);


    //form 
    const membershipForm = document.createElement('form');
    membershipForm.classList.add('membershipForm');

    membershipForm.style.display = 'flex';
    membershipForm.style.flexDirection = 'column';


    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'user_name');
    nameLabel.textContent = 'Name'

    const nameInput = document.createElement('input');
    const nameInputAttrubutes = {
        id : 'user_name',
        placeholder : '',
        required : true,
        autcomplete : 'off'
    }

    for(let key in nameInputAttrubutes){
        nameInput.setAttribute(key, nameInputAttrubutes[key]);
    }

    membershipForm.appendChild(nameLabel);
    membershipForm.appendChild(nameInput);


    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'user_email');
    emailLabel.textContent = 'Email';


    const emailInput = document.createElement('input');
    const emailInputAttributes = {
        id : 'user_email',
        required : true,
    }

    for(let key in emailInputAttributes){
        emailInput.setAttribute(key, emailInputAttributes[key]);
    };


    membershipForm.appendChild(emailLabel);
    membershipForm.appendChild(emailInput);

    const dishLabel = document.createElement('label');
    dishLabel.setAttribute('for', 'user_dish');
    dishLabel.textContent ='Favourite Dish';

    const dishDropdown = document.createElement('select');
    const dishDropdownAttributes = {
        id : 'user_dish',
    }

    const food1 = document.createElement('option');
    food1.value = 'Spicy Beef Curry'
    food1.textContent = 'Spicy Beef Curry';

    dishDropdown.appendChild(food1);

    const food2 = document.createElement('option');
    food2.value = 'Special Spicy Soup'
    food2.textContent = 'Special Spicy Soup';

    dishDropdown.appendChild(food2);

    
    const food3 = document.createElement('option');
    food3.value = 'Spicy Beef Burger Jumbo'
    food3.textContent = 'Spicy Beef Burger Jumbo';

    dishDropdown.appendChild(food3);

    const food4 = document.createElement('option');
    food4.value = 'Spicy Beef Burger'
    food4.textContent = 'Spicy Beef Burger';

    dishDropdown.appendChild(food4);

    const food5 = document.createElement('option');
    food5.value = 'Loaded Nachos'
    food5.textContent = 'Loaded Nachos';

    dishDropdown.appendChild(food5);

    const food6 = document.createElement('option');
    food6.value = 'Grilled Veggies'
    food6.textContent = 'Grilled Veggies';

    dishDropdown.appendChild(food6);

    
    membershipForm.appendChild(dishLabel);
    membershipForm.appendChild(dishDropdown);
    
    
    const membershipFormBtn = document.createElement('button');
    membershipFormBtn.textContent = 'Subscribe Now';
    membershipFormBtn.classList.add('membershipFormBtn');
    membershipFormBtn.addEventListener('click', (e)=>{
        e.preventDefault(); 
    })
    membershipForm.appendChild(membershipFormBtn);

    const membershipCheckboxDiv = document.createElement('div');
    membershipCheckboxDiv.style.display = 'flex';
    membershipCheckboxDiv.classList.add('membershipCheckboxDiv');

    const specialOffers = document.createElement('input');
    const specialOffersAttributes = {
        type : 'checkbox',
        required : true,
    }
    for (let key in specialOffersAttributes){
        specialOffers.setAttribute(key, specialOffersAttributes[key]);
    }

    const specialOffersLabel = document.createElement('label');
    specialOffersLabel.textContent = `Yes, I’d like to receive updates on special offers and discounts.`

    membershipCheckboxDiv.appendChild(specialOffers);
    membershipCheckboxDiv.appendChild(specialOffersLabel);
  

    membershipForm.appendChild(membershipCheckboxDiv);


    const privacyNote = document.createElement('p');
    privacyNote.textContent = 'We respect your privacy and never share your information.';

    membershipForm.appendChild(privacyNote);

    






    membershipContentDiv.appendChild(membershipForm);

    




    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(membershipDiv)

}