import book from './book.jpg'

export default function booking() {
    const divContent = document.querySelector('#content');
    const divBooking = document.createElement('div');

    const headerDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const spanHeading = document.createElement('h2');
    const bookContentdiv = document.createElement('div');
    const bookSubContentdiv = document.createElement('div');
    const bookParagraph = document.createElement('p');
    const bookImg = document.createElement('img');
    
    
    //form
    const bookForm = document.createElement('form');
    bookForm.classList.add('bookForm');

    


    document.body.classList.add('booking-page');

    divBooking.classList.add('booking');

    heading.textContent = 'Book a';
    spanHeading.textContent = ' Table';
    spanHeading.classList.add('span');

    heading.style.display = 'inline';
    spanHeading.style.display = 'inline';

    headerDiv.appendChild(heading);
    headerDiv.appendChild(spanHeading);
    headerDiv.classList.add('bookHeader')

    bookParagraph.textContent = `Reserve your table with ease! Fill out the form below to book a spot at our restaurant and enjoy a delicious meal in a cozy, inviting atmosphere. Whether you're planning a special celebration or a casual outing, we’ll make sure your experience is unforgettable.`;

    bookImg.src = book;


    bookSubContentdiv.style.display = 'flex';
    bookSubContentdiv.style.flexDirection = 'column';
    // bookSubContentdiv.style.color = 'aliceblue'

    //form styling
    bookForm.style.display = 'flex';
    bookForm.style.flexDirection = 'column';

    const guest_Name_label = document.createElement('label');
    const guest_Name_Input = document.createElement('input');

    guest_Name_label.setAttribute('for', 'guest_Name');
    guest_Name_label.textContent = 'Name'
    
    const attributes = {
        type : 'text',
        id : 'guest_Name',
        placeholder : '',
        required : true,
        autocomplete : 'off',  
    }


    for(let key in attributes){
        guest_Name_Input.setAttribute(key, attributes[key]);
        
    }

    bookForm.appendChild(guest_Name_label);
    bookForm.appendChild(guest_Name_Input);

    const guest_number_label = document.createElement('label');
    const guest_number_Input = document.createElement('input');
    guest_number_Input.classList.add('telephoneInput');

    guest_number_label.setAttribute('for', 'guest_number');
    guest_number_label.textContent = 'Telephone'
    
    const numberAttributes = {
        type : 'number',
        id : 'guest_number',
        placeholder : '',
        required : true   
    }


    for(let key in numberAttributes){
        guest_number_Input.setAttribute(key, numberAttributes[key]);
    }

    bookForm.appendChild(guest_number_label);
    bookForm.appendChild(guest_number_Input);

    const guest_count_label = document.createElement('label');
    const guest_count_input = document.createElement('input');

    guest_count_label.setAttribute('for', 'guest_count');
    guest_count_label.textContent = 'Guest Count'
    
    const countAttributes = {
        type : 'number',
        id : 'guest_count',
        placeholder : '',
        required : true   
    }


    for(let key in countAttributes){
        guest_count_input.setAttribute(key, countAttributes[key]);
    }

    bookForm.appendChild(guest_count_label);
    bookForm.appendChild(guest_count_input);

    const guest_time_label = document.createElement('label');
    const guest_time_input = document.createElement('input');

    guest_time_label.setAttribute('for', 'guest_time');
    guest_time_label.textContent = 'Time'
    
    const timeAttributes = {
        type : 'time',
        id : 'guest_time',
        placeholder : '',
        required : true   
    }


    for(let key in timeAttributes){
        guest_time_input.setAttribute(key, timeAttributes[key]);
    }

    bookForm.appendChild(guest_time_label);
    bookForm.appendChild(guest_time_input);



    const formBtn = document.createElement('button');
    formBtn.textContent = 'Submit'
    formBtn.classList.add('formBtn');
    // formBtn.addEventListener('click', (e)=>{
    //     e.preventDefault();
    // })

    bookForm.appendChild(formBtn);

    

    





    bookSubContentdiv.appendChild(bookParagraph);
    bookSubContentdiv.appendChild(bookForm);

    bookContentdiv.appendChild(bookSubContentdiv);
    bookContentdiv.appendChild(bookImg);
    bookContentdiv.classList.add('bookContent')

    divBooking.appendChild(headerDiv);
    divBooking.appendChild(bookContentdiv);

    divContent.appendChild(divBooking);
}
