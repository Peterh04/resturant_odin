const offerDiv = document.createElement('div')
const todaysOffer = document.createElement('div');
const offerTitle = document.createElement('h5');
const offerHeading = document.createElement('h3');
const spanOfferHeading = document.createElement('span');

const offerpargraph = document.createElement('p');
import offerImg from './offer.jpg';
const headerImage = document.createElement('img');

const bookBtn = document.createElement('button');
bookBtn.textContent = 'Book a table'

headerImage.src= offerImg
headerImage.classList.add('offerImg')



todaysOffer.classList.add('offerDivContent');
offerTitle.textContent = 'Limited offer';
todaysOffer.appendChild(offerTitle);





spanOfferHeading.textContent = '$10';
spanOfferHeading.classList.add('spanOfferHeading')
offerHeading.textContent = ' discount every week';



spanOfferHeading.style.display = 'inline';
offerHeading.style.display = 'inline';


offerpargraph.textContent = "Indulge in our exclusive dining deals! Enjoy fantastic discounts on select dishes, with up to 50% off on customer favorites. This limited-time offer is your chance to savor gourmet flavors at unbeatable prices. Join us for an unforgettable dining experience and make the most of these delicious savings!"


todaysOffer.appendChild(spanOfferHeading);
todaysOffer.appendChild(offerHeading);
todaysOffer.appendChild(offerpargraph);
todaysOffer.appendChild(bookBtn)



offerDiv.classList.add('offerDiv')
offerDiv.appendChild(headerImage);
offerDiv.appendChild(todaysOffer);


export default offerDiv

