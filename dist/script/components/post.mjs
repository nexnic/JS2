
import {feed} from '../base/domcontroller.mjs'


export function CheckAfterPost(){
    let data = localStorage.getItem('post');
    if(data){
        return true
    }
} 


export function ShowFeed() {
    let feedData = JSON.parse(localStorage.getItem('result'));
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
