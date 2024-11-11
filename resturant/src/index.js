import homePage from './home';
import menuPage from './menu';
import bookingPage from './booking';



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

function setUpEventListeners (){
    document.querySelector('.menuBtn').addEventListener('click', loadMenu);
    document.querySelector('.bookingBtn').addEventListener('click', loodBooking);
}


function init(){
    setUpEventListeners();
    loadHome();
};

init();