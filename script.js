// SIGNUP

function signup(){

let username =
document.getElementById("newUsername").value;

let password =
document.getElementById("newPassword").value;

localStorage.setItem(
"username", username);

localStorage.setItem(
"password", password);

alert("Signup Successful!");

window.location.href =
"index.html";
}


// LOGIN

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let savedUser =
localStorage.getItem("username");

let savedPass =
localStorage.getItem("password");

if(username===savedUser &&
password===savedPass){

window.location.href =
"home.html";

}else{

alert("Invalid Login!");
}
}

// LOGOUT

function logout(){

window.location.href =
"index.html";
}


// MOVIES DATA

let movies = [

{

name:"Pushpa 2",

image:"images/pushpa 2.jpg",

trailer: "https://www.youtube.com/embed/g3JUbgOHgdw"

},

{

name:"Salaar",

image:"images/salaar.jpg",

trailer:"https://www.youtube.com/embed/4GPvYMKtrtI"

},

{

name:"Devara",

image:"images/devara.jpg",

trailer:"https://www.youtube.com/embed/rc61YHl1PFY"
},


{
name:"Animal",

image:"images/animal.jpg",

trailer:"https://www.youtube.com/embed/YD7b4gU0HWQ?si=Yb6wKK02nnkJdkam" 
},

{
name:"Arjun Reddy",

image:"images/arjun reddy.jpg",

trailer:"https://www.youtube.com/embed/aozErj9NqeE"
},

{
name:"Couple Friendly",

image:"images/couple friendly.jpg",

trailer:"https://www.youtube.com/embed/exz-qgT2n4E"
},

{
name:"Ee Nagaraniki Amaindhi",

image:"images/eenagaranikiamaindhi.jpg",

trailer:"https://www.youtube.com/embed/wERgpPK44w0?si=_c3wbFSFFX5YuQyr"
},

{
name:"Jersey",

image:"images/jersey.jpg",

trailer:"https://www.youtube.com/embed/AjAe_Q1WZ_8"
},

{
name:"Hi Nanna",

image:"images/hi nanna.jpg",

trailer:"https://www.youtube.com/embed/Iz97_kxHaSc"
},

{
name:"Kushi",

image:"images/kushi.jpg",

trailer:"https://www.youtube.com/embed/KFHXCvvxL1U"
},

{
name:"Kalki 2898-AD",

image:"images/kalki 2898-ad.jpg",

trailer:"https://www.youtube.com/embed/y1-w1kUGuz8"
},

{
name:"Pokiri",

image:"images/pokiri.jpg",

trailer:"https://www.youtube.com/embed/NgF0uJ71fr8?si=PhFNb_4vjfXP7Xk5" 
},

{
name:"They call him OG",

image:"images/theycallhimog.jpg",

trailer:"https://www.youtube.com/embed/7Y5q41D8_hs?si=y8z4p1zWCKW8IhTb"

},


{
name:"Padi Padi Leche Manasu",

image:"images/padi padi leche manasu.jpg",

trailer:"https://www.youtube.com/embed/O7oOl5oyTQg"
},

{
name:"Shyam Singha Roy",

image:"images/shyam singha roy.jpg",

trailer:"https://www.youtube.com/embed/3YGqoG3engk?si=DFcnvlTeZGJ0Ecs-" 
},

{
name:"Pizzodyssey",
trailer:"https://www.youtube.com/embed/8u6V8XxK6L4"
},

{
name:"Chico come universo",
trailer:"https://www.youtube.com/embed/6HfP9mK7h7A"
},

{
name:"#whatnext",
trailer:"https://www.youtube.com/embed/X4QJ7M0Q8Jc"
},

{
name:"La Storia",
trailer:"https://www.youtube.com/embed/tQ8V0LkP0n8"
},

{
name:"Bird Woman Sacajawea",
trailer:"https://www.youtube.com/embed/4J9fQ2R5Q2A"
},

{
name:"Alien Wars Judgement Day",
trailer:"https://www.youtube.com/embed/0z6xq7YwB1M"
},

{
name:"The Office",
trailer:"https://www.youtube.com/embed/LHOtME2DL4g"
},

{
name:"A Lion's Game",
trailer:"https://www.youtube.com/embed/f8m9T9pQ7l8"
},

{
name:"We're Alive: Scout's Honor",
trailer:"https://www.youtube.com/embed/3m7qL9b1Q8U"
},

{
name:"The Darkness",
trailer:"https://www.youtube.com/embed/4Qw3j5K2w7M"
}

];

// DISPLAY MOVIES

function displayMovies(){

let container =
document.getElementById(
"moviesContainer"
);

container.innerHTML = "";

movies.forEach(movie=>{

container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}">

<h3>${movie.name}</h3>

<button
onclick="playTrailer(
'${movie.trailer}',
'${movie.name}'
)">

Watch Trailer

</button>

<button
onclick="addToWatchlist(
'${movie.name}'
)">

❤️ Add to Watchlist

</button>

</div>

`;

});

}

// SEARCH MOVIES

function searchMovies(){

let input =
document.getElementById(
"searchInput"
).value.toLowerCase();

let container =
document.getElementById(
"moviesContainer"
);

container.innerHTML = "";

let filteredMovies =
movies.filter(movie=>

movie.name.toLowerCase()
.includes(input)

);

filteredMovies.forEach(movie=>{

container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}">

<h3>${movie.name}</h3>

<button
onclick="playTrailer(
'${movie.trailer}',
'${movie.name}'
)">

Watch Trailer

</button>

<button
onclick="addToWatchlist(
'${movie.name}'
)">

❤️ Add to Watchlist

</button>

</div>

`;

});

}
function playTrailer(link,name){

    

document.getElementById(
"trailerPopup"
).style.display = "flex";

document.getElementById(
"trailerVideo"
).src = link;

let movie =
movies.find(m=>

m.name === name

);

if(
!continueWatching.includes(movie)
){

continueWatching.push(movie);

displayContinueWatching();

localStorage.setItem(

"continueWatching",

JSON.stringify(
continueWatching
)

);

}

}
function closeTrailer(){

document.getElementById(
"trailerPopup"
).style.display = "none";

document.getElementById(
"trailerVideo"
).src = "";

}

let watchlist =

JSON.parse(
localStorage.getItem(
"watchlist"
)
) || [];


function addToWatchlist(name){

let movie =
movies.find(m=>m.name===name);

watchlist.push(movie);

displayWatchlist();


localStorage.setItem(

"watchlist",

JSON.stringify(
watchlist
)

);

}


function displayWatchlist(){

let container =
document.getElementById(
"watchlistContainer"
);

container.innerHTML = "";

watchlist.forEach(movie=>{

container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}">

<h3>${movie.name}</h3>

<button
onclick="removeFromWatchlist(
'${movie.name}'
)">

❌ Remove

</button>

</div>

`;

});

}

let continueWatching =

JSON.parse(
localStorage.getItem(
"continueWatching"
)
) || [];

function removeFromWatchlist(name){

watchlist =
watchlist.filter(movie=>

movie.name !== name

);

displayWatchlist();

localStorage.setItem(

"watchlist",

JSON.stringify(
watchlist
)

);

}

// HERO BANNER MOVIES

let heroMovies = [

{

title:"Pushpa 2",

image:"images/pushpa 2.jpg",

description:
"Pushpa returns with power and revenge."

},

{

title:"Jersey",

image:"images/jersey.jpg",

description:
"A cricketer's emotional comeback."

},

{

title:"Kalki 2898-AD",

image:"images/kalki 2898-ad.jpg",

description:
"A futuristic sci-fi epic."

}

];

let currentHero = 0;


function changeHero(){

let banner =
document.getElementById(
"heroBanner"
);

let title =
document.getElementById(
"heroTitle"
);

let desc =
document.getElementById(
"heroDescription"
);

banner.style.backgroundImage =

`url('${heroMovies[currentHero].image}')`;

title.innerText =

heroMovies[currentHero].title;

desc.innerText =

heroMovies[currentHero].description;

currentHero++;

if(
currentHero >=
heroMovies.length
){

currentHero = 0;
}

}

changeHero();

setInterval(
changeHero,
5000
);

function displayContinueWatching(){

let container =
document.getElementById(
"continueContainer"
);

container.innerHTML = "";

continueWatching.forEach(movie=>{

container.innerHTML += `

<div
class="movie-card"

onclick="playTrailer(
'${movie.trailer}',
'${movie.name}'
)">

<img src="${movie.image}">

<h3>${movie.name}</h3>

</div>

`;

});

}

getMovies();

displayWatchlist();

displayContinueWatching();

function resetData(){

localStorage.clear();

watchlist = [];

continueWatching = [];

displayWatchlist();

displayContinueWatching();

alert(
"Data Reset Successful!"
);

}

async function getMovies(){

const url =
'https://moviesdatabase.p.rapidapi.com/titles?year=2024&limit=10';

const options = {

method:'GET',

headers:{

'X-RapidAPI-Key':
'd9bafd81a1msh9165ac2151cb115p14127ajsn86356adb679a',

'X-RapidAPI-Host':
'moviesdatabase.p.rapidapi.com'

}

};

try{

const response =
await fetch(url,options);

const data =
await response.json();

console.log(data.results);

data.results.forEach(movie=>{

    
let trailerLink =
"https://www.youtube.com/embed/g3JUbgOHgdw";

if(movie.titleText?.text==="Pizzodyssey")
trailerLink=
"https://www.youtube.com/embed/8u6V8XxK6L4";

if(movie.titleText?.text==="The Office")
trailerLink=
"https://www.youtube.com/embed/LHOtME2DL4g";

if(movie.titleText?.text==="The Darkness")
trailerLink=
"https://www.youtube.com/embed/4Qw3j5K2w7M";

movies.unshift({

name:
movie.titleText?.text || "No Title",

image:
movie.primaryImage?.url ||
"https://via.placeholder.com/300x450",

trailer:
trailerLink

});

});

}

catch(error){

console.log(error);

}

}


