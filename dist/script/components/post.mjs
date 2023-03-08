
import {feed} from '../base/domcontroller.mjs'


export function CheckAfterPost(){
    let data = localStorage.getItem('post');
    if(data){
        return true
    }
} 


export function ShowFeed() {
    let Neewsarray = JSON.parse(localStorage.getItem('post'));
    Neewsarray.forEach(sm => {
        console.log(sm)
        if(sm.title && sm.media && sm.body){
            feed.innerHTML += `
                <div class="card" style="width: 30rem;">
                    <img class="card-img-top" src="${sm.media}" alt="Image about ${sm.title}"> 
                    <div class="card-header">
                    ${sm.created}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            ${sm.title}
                        </h5>
                        <p class="card-text"> 
                            ${sm.body}
                        </p>
                        <form method="post" id="comment" class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="comment" aria-label="comment" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="submit">Add</button>
                                </div>
                        </form>
                    </div> 
                </div>

            `
        }
    });
}