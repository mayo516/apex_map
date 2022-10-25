// 5476d1d4a8c43143be45fac078893032
// const xhr = new XMLHttpRequest();

// fetch("https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032")
//     .then((res)=>console.log(res));

const p = document.querySelector("p");
const span = document.querySelector("span");

let  request = new XMLHttpRequest();
request.open('GET', "https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032");
request.send();
request.onload = ()=>{
    let map = JSON.parse(request.response);
    p.innerText =  `지금 맵은 ${map.current.map}`
    span.innerText =  `다음 맵은 ${map.next.map}`
    console.log(map);

}

