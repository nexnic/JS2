
// Import file´s 
    // BASE
        // Dom Controller 
            import {navProfileImage} from '../base/domcontroller.mjs';
    // Components
        // Nav
            import {BuildNav} from '../components/nav.mjs';
        // Fetch 
            import {fetchToken} from '../components/fetch.mjs';



// Build nav 
BuildNav()
// 

export function feedPost() {
    fetchToken('test', 3, 'GET');
    let localData = localStorage.getItem('result')
    let Post = JSON.parse(localData);
    
}
feedPost()