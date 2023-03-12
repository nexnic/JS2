
// Import file´s 
    // BASE
        // Dom Controller 
            import {navProfileImage , feed} from '../base/domcontroller.mjs';
    // Components
        // Nav
            import {BuildNav} from '../components/nav.mjs';
        // Fetch 
            import {fetchToken} from '../components/fetch.mjs';
        // Tools
            import {FetchResult , RemoveLocalStore} from '../components/tools.mjs';
        // POST 
            import { ShowFeed } from '../components/post.mjs'
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
// Build nav 
BuildNav()
// 

export function feedPost() {
    fetchToken('test', 3, 'GET');
    FetchResult('postData');
    ShowFeed()
}
feedPost()


btnProfile.addEventListener('click', (event)=> Profilebtn())

btnSettings.addEventListener('click', (event) => Profilebtn())

btnLogout.addEventListener('click', (event) => signoutbtn())

 
