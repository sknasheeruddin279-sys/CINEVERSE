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

trailer: "https://www.youtube.com/embed/g3JUbgOHgdw",
year:"2024",
rating:"8.5/10",
genre:"Action / Drama",
description:"Pushpa returns stronger with power, revenge and survival."

},

{

name:"Salaar",

image:"images/salaar.jpg",

trailer:"https://www.youtube.com/embed/4GPvYMKtrtI",
year:"2023",
rating:"8.7/10",
genre:"Action / Thriller",
description:"A violent friendship turns into an epic war of loyalty and power."
},

{

name:"Devara",

image:"images/devara.jpg",

trailer:"https://www.youtube.com/embed/rc61YHl1PFY"
year:"2024",
rating:"8.2/10",
genre:"Action / Drama",
description:"A fearless man fights against injustice in a dangerous coastal world."
},


{
name:"Animal",

image:"images/animal.jpg",

trailer:"https://www.youtube.com/embed/YD7b4gU0HWQ?si=Yb6wKK02nnkJdkam",
year:"2023",
rating:"8.1/10",
genre:"Action / Crime",
description:"A son's obsession with his father leads him into violence and chaos."
},

{
name:"Arjun Reddy",

image:"images/arjun reddy.jpg",

trailer:"https://www.youtube.com/embed/aozErj9NqeE",
year:"2017",
rating:"8.0/10",
genre:"Romance / Drama",
description:"A brilliant surgeon struggles with anger, heartbreak and self-destruction."
},

{
name:"Couple Friendly",

image:"images/couple friendly.jpg",

trailer:"https://www.youtube.com/embed/exz-qgT2n4E",
year:"2021",
rating:"7.5/10",
genre:"Romance / Comedy",
description:"A fun relationship drama exploring modern love and friendship."
},

{
name:"Ee Nagaraniki Amaindhi",

image:"images/eenagaranikiamaindhi.jpg",

trailer:"https://www.youtube.com/embed/wERgpPK44w0?si=_c3wbFSFFX5YuQyr",
year:"2018",
rating:"8.3/10",
genre:"Comedy / Drama",
description:"Four friends go on a trip that changes their lives forever."
},

{
name:"Jersey",

image:"images/jersey.jpg",

trailer:"https://www.youtube.com/embed/AjAe_Q1WZ_8",
year:"2019",
rating:"8.6/10",
genre:"Sports / Drama",
description:"A former cricketer returns to the game to fulfill his son's dream."
},

{
name:"Hi Nanna",

image:"images/hi nanna.jpg",

trailer:"https://www.youtube.com/embed/Iz97_kxHaSc",
year:"2023",
rating:"8.2/10",
genre:"Romance / Family",
description:"A touching father-daughter story filled with love and emotions."
},

{
name:"Kushi",

image:"images/kushi.jpg",

trailer:"https://www.youtube.com/embed/KFHXCvvxL1U",
year:"2023",
rating:"7.8/10",
genre:"Romance / Comedy",
description:"A couple faces love, marriage and family conflicts."
},

{
name:"Kalki 2898-AD",

image:"images/kalki 2898-ad.jpg",

trailer:"https://www.youtube.com/embed/y1-w1kUGuz8",
year:"2024",
rating:"8.8/10",
genre:"Sci-Fi / Action",
description:"A futuristic battle unfolds between destiny, technology and survival."
},

{
name:"Pokiri",

image:"images/pokiri.jpg",

trailer:"https://www.youtube.com/embed/NgF0uJ71fr8?si=PhFNb_4vjfXP7Xk5",
year:"2006",
rating:"8.0/10",
genre:"Action / Crime",
description:"An undercover cop enters the dangerous world of crime gangs."
},

{
name:"They call him OG",

image:"images/theycallhimog.jpg",

trailer:"https://www.youtube.com/embed/7Y5q41D8_hs?si=y8z4p1zWCKW8IhTb",
year:"2025",
rating:"8.5/10",
genre:"Action / Gangster",
description:"A feared gangster returns to settle unfinished scores."

},


{
name:"Padi Padi Leche Manasu",

image:"images/padi padi leche manasu.jpg",

trailer:"https://www.youtube.com/embed/O7oOl5oyTQg",
year:"2018",
rating:"7.7/10",
genre:"Romance / Drama",
description:"A beautiful love story between two people fighting emotional struggles."
},

{
name:"Shyam Singha Roy",

image:"images/shyam singha roy.jpg",

trailer:"https://www.youtube.com/embed/3YGqoG3engk?si=DFcnvlTeZGJ0Ecs-",
year:"2021",
rating:"8.3/10",
genre:"Fantasy / Drama",
description:"A filmmaker discovers a mysterious connection with his past life."
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
<button
onclick="showDetails(
'${movie.name}'
)">
ℹ️ Details
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

displayMovies();

displayWatchlist();

displayContinueWatching();

function resetData(){


localStorage.removeItem(
"watchlist"
);

localStorage.removeItem(
"continueWatching"
);
watchlist = [];

continueWatching = [];

displayWatchlist();

displayContinueWatching();

alert(
"Data Reset Successful!"
);

}

function showDetails(name){

let movie =
movies.find(m=>m.name===name);

alert(

"🎬 " + movie.name +

"\n\n⭐ Rating: " + movie.rating +

"\n🎭 Genre: " + movie.genre +

"\n📅 Year: " + movie.year +

"\n\n📝 " + movie.description

);

}

