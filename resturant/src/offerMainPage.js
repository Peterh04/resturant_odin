
export default function offerPage(){
    const divContent = document.querySelector('#content');
    const offerHeadingDiv = document.createElement('div');


    
    const heading1 = document.createElement('h2');
    heading1.textContent = `Today's`;

    offerHeadingDiv.appendChild(heading1);
    divContent.appendChild(offerHeadingDiv);
};
