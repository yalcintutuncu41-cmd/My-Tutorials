function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status ===200){
            document.write(JSON.parse(xhr.response))
        }
    })
    xhr.open("GET", url);
    xhr.send();
}
getData("https://jsonplaceholder.typicode.com/posts");
