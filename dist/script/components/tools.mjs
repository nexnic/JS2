

export function Redirect(value1){
    window.location.href = `${value1}`;
}

export function StorageRemove(value1) {
    localStorage.removeItem(`${value1}`);
}

export function cleanLocalStorage() {
    localStorage.clear()
    if(localStorage){
        return true
    }else {
        return false
    }
}

export function timeData(){

}

export function FetchResult(value1){
    let storage = localStorage.getItem('result');
    localStorage.setItem(`${value1}`, storage)
}