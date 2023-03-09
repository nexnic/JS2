
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
                        <div class="btn-group-toole" data-toggle="button">
                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                                Follow
                            </button>
                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" id="${sm.id}" onclick="ShowComments(${sm.id})">
                                Read comments ${sm._count.comments}
                            </button>
                        </div>
                    </div> 
                </div>
            `
        }
    });
}

/* 
    <img src="./dist/assest/Default_profile.svg" alt="" class="bg-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"/> 
                            <p class="small lh-sm">
                                <strong class="d-block text-gray-dark">
                                @Username
                                </strong>
                                Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
                            </p>
                        
                        <form method="post" id="comment" class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="comment" aria-label="comment" aria-describedby="basic-addon2">
                        </form>
                        <div class="d-flex text-muted pt-3">
                        <a class="nav-link"  href="#">Follow</a>
                        </div>
*/