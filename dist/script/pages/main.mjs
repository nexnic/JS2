
// Import file´s 
    // BASE
        // Dom Controller 
            import {navProfileImage} from '../base/domcontroller.mjs';
    // Components
        // Nav
            import {BuildNav} from '../components/nav.mjs';
        // Fetch 
            import {fetchToken} from '../components/fetch.mjs';
        // Tools
            import {FetchResult , RemoveLocalStore} from '../components/tools.mjs';
        // POST 
            import { ShowFeed } from '../components/post.mjs'

// Build nav 
BuildNav()
// 

export function feedPost() {
    fetchToken('test', 3, 'GET');
    FetchResult('post');
    RemoveLocalStore('result');
    ShowFeed()

}
feedPost()