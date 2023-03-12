
// Import file´s 
    // BASE
        // Dom Controller 
            import {navProfileImage , feed} from '../base/domcontroller.mjs';
    // Components
        // Nav
            import {BuildNav} from '../components/nav.mjs';
        // API POST 
            import {GetPost, AddPost} from '../API/post.mjs';
        // Method 
            import {MethodToken, MethodTokenBody} from '../API/methods.mjs'
        // {}
        // Variable 
            import { _token } from '../base/variable.mjs'
        // Error 
            import {ErrorMSgAPI} from '../components/error.mjs'
    // BASE 
        // Dom Controller 
        import { btnProfile, btnSettings, btnLogout, formsmSearch, Searchinput, btnNewPost, NewPOST } from '../base/domcontroller.mjs';
        // Components 
            // Button 
                import {Profilebtn, signoutbtn, NewPostbtn} from '../components/button.mjs';
            // Navigation
            // Fetch 
                import { metodPOST } from '../components/methods.mjs';
// Build nav 
BuildNav()


// 
const _user = JSON.parse(_token)
const {accessToken, name, email, banner, avatar}  = _user

btnProfile.addEventListener('click', (event)=> Profilebtn())

btnSettings.addEventListener('click', (event) => Profilebtn())

btnLogout.addEventListener('click', (event) => signoutbtn())

btnNewPost.addEventListener('click', (event) => NewPostbtn())

 

async function CheckAPIPOST(value1, value2){
    
    try {
        const postSaved = await GetPost(value1, value2)
        if(postSaved.type === 'Error'){
           let Errormsg= {
                title: userSaved.message.message
           }
           console.log(Errormsg)
           ErrorMSgAPI(Errormsg)
        }
        else{
            let PostData = JSON.stringify(postSaved)
            localStorage.setItem('Post', PostData)
            CreatPost(PostData)
        }
    }catch(error){
        console.log(error)
    }
}

function FirstTime(){
    const boot = localStorage.getItem('boot');
    if(boot){
        return
    }else {
        localStorage.setItem('boot', 'true');
        const Method = MethodToken('GET', accessToken)
        CheckAPIPOST(Method, 5)
    }
}
FirstTime()


function CreatPost(){

    let data = localStorage.getItem('Post')
    const value1 = JSON.parse(data)
    const MyPost = value1.filter((test) => {
        if(test.author.name == name ){
            
        }
    })
    
}

export function ShowFeed() {
    let dataI = localStorage.getItem('Post');
    let feedData = JSON.parse(dataI)
    console.log(feedData)
    const FeedFilter = feedData.filter(
        (data) => data.id && data.title && data.body && data.media
    )
    FeedFilter.forEach(sm => {
        feed.innerHTML += `
        <div class="card" style="width: 30rem;" id="${sm.id}">
            <img class="card-img-top" src="${sm.media}" alt="Image about ${sm.title}"> 
            <div class="card-header">
                ${sm.created}
            </div>
            <div class="card-body">
                <h5>
                    ${sm.title}
                </h5>
                <p>
                    ${sm.body}
                </p>
            </div>
        </div>
        `
    });
}

ShowFeed()


// toggelClass(signBTN, 'visually-hidden')
// 8
NewPOST.addEventListener('submit', (event) => {
    event.preventDefault();
    const type = 'POST'
    const formData = {}

    for(let i = 0; i < NewPOST.elements.length; i++){
        const element = NewPOST.elements[i];
        if(element.name){
           formData[element.name] = element.value;
        }
    }
    console.log(formData)
    if(!formData.title){
        ErrorMSg(8)
    }if(!formData.body){
        ErrorMSg(8)
    }if(formData.title && formData.body){
        let obj = MethodTokenBody(type, accessToken, formData)
        CheckAddPOST(obj, 6)
    }
    
})

async function CheckAddPOST(value1, value2){
    
    try {
        const postSaved = await AddPost(value1, value2)
        if(postSaved.type === 'Error'){
           let Errormsg= {
                title: userSaved.message.message
           }
           console.log(Errormsg)
           ErrorMSgAPI(Errormsg)
        }
        else{
            let PostData = JSON.stringify(postSaved)
            localStorage.setItem('addpost', PostData)
        }
    }catch(error){
        console.log(error)
    }
}