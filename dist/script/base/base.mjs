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
            import { metodPOST } from '../components/methods.mjs';




// Event Lostener



formsmSearch.addEventListener("keypress", function(event) {
    if(event.key === 'Enter') {
        let data = formsmSearch.elements['Search'].value
        console.log(data);
        event.preventDefault();
    }
    
})

