// Import file 
    // BASE 
        // Dom Controller 
            import { btnProfile, btnSettings, btnLogout, formsmSearch, Searchinput } from './domcontroller.mjs';
    // Components 
        // Button 
            import {Profilebtn, signoutbtn} from '../components/button.mjs';
        // Navigation
        // Fetch 
            import {fetchToken} from '../components/fetch.mjs';




// Event Lostener

btnProfile.addEventListener('click', (event)=> Profilebtn())

btnSettings.addEventListener('click', (event) => Profilebtn())

btnLogout.addEventListener('click', (event) => signoutbtn())

formsmSearch.addEventListener("keypress", function(event) {
    if(event.key === 'Enter') {
        let data = formsmSearch.elements['Search'].value
        console.log(data);
        event.preventDefault();
    }
    
})

function ShowComments(value1) {
    let PostId = value1
    console.log(PostId);
}