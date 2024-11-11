export default function booking() {
    const divContent = document.querySelector('#content');
    const divBooking = document.createElement('div');

    const heading = document.createElement('h2');
    const spanHeading = document.createElement('h2');
    const bookParagraph = document.createElement('p');

    document.body.classList.add('booking-page');

    divBooking.classList.add('booking');

    heading.textContent = 'Book a';
    spanHeading.textContent = ' Table';
    spanHeading.classList.add('span');

    heading.style.display = 'inline';
    spanHeading.style.display = 'inline';

    bookParagraph.textContent = `Reserve your table with ease! Fill out the form below to book a spot at our restaurant and enjoy a delicious meal in a cozy, inviting atmosphere. Whether you're planning a special celebration or a casual outing, we’ll make sure your experience is unforgettable.`;

    divBooking.appendChild(heading);
    divBooking.appendChild(spanHeading);
    divBooking.appendChild(bookParagraph);

    divContent.appendChild(divBooking);
}
