import homePage from './home';
import menuPage from './menu';
import bookingPage from './booking';
import membershipPage from './membership';
import offerMainPage from './offerMainPage'



const clearContent = () =>{
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
};


let loadHome = () =>{
    clearContent();
    homePage();
};

let loadMenu = () =>{
    clearContent();
    menuPage();
};

let loodBooking = () =>{
    clearContent();
    bookingPage();
}

let loadingMembership = () =>{
    clearContent();
    membershipPage();
}

let loadingofferMainPage = () =>{
    clearContent();
    offerMainPage();
} 

function setUpEventListeners (){
    document.querySelector('.menuBtn').addEventListener('click', loadMenu);
    document.querySelector('.bookingBtn').addEventListener('click', loodBooking);
    document.querySelector('.membershipBtn').addEventListener('click', loadingMembership);
    document.querySelector('.offerPageBtn').addEventListener('click', loadingofferMainPage);
}


function init(){
    setUpEventListeners();
    loadHome();
};

init();