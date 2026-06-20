// SIGNUP

function signup(){

let username =
document.getElementById(
"newUsername"
).value;

let password =
document.getElementById(
"newPassword"
).value;

let confirm =
document.getElementById(
"confirmPassword"
).value;


if(
password !== confirm
){

alert(
"Passwords do not match!"
);

return;

}


localStorage.setItem(
"username",
username
);

localStorage.setItem(
"password",
password
);

alert(
"Signup Successful!"
);

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
"splash.html";

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
trailer:"https://www.youtube.com/embed/g3JUbgOHgdw?si=bqRefWvPH5dNNbyK",
category:"Action",
rating:"8.0",
year:"2024",
description:"Pushpa continues his rise in the red sandalwood smuggling empire while facing powerful enemies.",
trending:true
},

{

name:"Salaar",

image:"images/salaar.jpg",
trailer:"https://www.youtube.com/embed/4GPvYMKtrtI?si=OrzXTSv8ZhQQNe9M",
category:"Action",
rating:"8.2",
year:"2023",
description:"An intense action drama about friendship, power, and survival in a violent world.",
trending:true
},

{

name:"Devara",

image:"images/devara.jpg",
trailer:"https://www.youtube.com/embed/rc61YHl1PFY?si=08PoOqH5IbQnE2-s",
category:"Action",
rating:"7.8",
year:"2024",
description:"A fearless man fights for justice and protects his people against powerful forces.",
trending:true

},

{
name:"Arjun Reddy",
image:"images/arjun reddy.jpg",
trailer:"https://www.youtube.com/embed/aozErj9NqeE?si=vkYCk3Q5g1w6qqfm",
category:"Romance",
rating:"8.1",
year:"2017",
description:"A brilliant surgeon struggles with heartbreak, anger, and self-destruction."
},

{
name:"Coolie",
image:"images/coolie.jpg",
trailer:"https://www.youtube.com/embed/l8qlUDRSaTU?si=vY1Pd7ZhfAzonCzr",
category:"Action",
rating:"7.2",
year:"2025",
description:"Deva, a former gold smuggler, seeks to regain his past glory by reviving his old gang with stolen technology hidden in vintage golden watches, leading to unintended consequences."
},

{
name:"Daaku Maharaaj",
image:"images/daaku maharaaj.jpg",
trailer:"https://www.youtube.com/embed/fNDRSver0uM?si=kgDSQkdrCgwNFPwq",
category:"Action",
rating:"7.2",
year:"2025",
description:"A daring robber, striving for survival and establishing his own territory amid conflicts with powerful adversaries, battling to become a king without a kingdom."
},
{
name:"Vikram",
image:"images/vikram.jpg",
trailer:"https://www.youtube.com/embed/WC5X3i0B4cg?si=mi8H4OWEeY67BbAv",
category:"Action",
rating:"8.3",
year:"2022",
description:"A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai."
},
{
name:"Ninu Kori",
image:"images/ninu kori.jpg",
trailer:"https://www.youtube.com/embed/Ia6EXfqKiV4?si=_iWPNYtIHK0Pwu33",
category:"Romance",
rating:"7.5",
year:"2017",
description:"Pallavi invites Uma, her ex-boyfriend, to stay at her home with her husband to convince him that she is happy in her marriage. Uma tries to create a rift between them, hoping to win Pallavi back"
},

{
name:"Premalu",
image:"images/premalu.jpg",
trailer:"https://www.youtube.com/embed/tQyEDwnwwsA?si=UWdO3La_C2c2ax8F",
category:"Romance",
rating:"7.8",
year:"2024",
description:"Having been rejected once, Sachin, a young man, falls for Reenu, a girl he meets during a wedding and sets out to win her over."
},
{
name:"Ye Maya Chesave",
image:"images/ye maya chesave.jpg",
trailer:"https://www.youtube.com/embed/71jqdKpSYLM?si=4G79tM0Ldpopnq9n",
category:"Romance",
rating:"7.7",
year:"2010",
description:"Karthik, an engineering graduate, wants to make films. He falls in love with Jessie, his neighbour, but her father opposes their relationship due to religious differences."
},


{
name:"Couple Friendly",
image:"images/couple friendly.jpg",
trailer:"https://www.youtube.com/embed/exz-qgT2n4E",
category:"Romance",
rating:"7.2",
year:"2025",
description:"A youthful romantic entertainer exploring modern relationships and friendships."
},

{
name:"Ee Nagaraniki Amaindhi",
image:"images/ee nagaraniki amaindhi.jpg",
trailer:"https://www.youtube.com/embed/wERgpPK44w0?si=tzXA8je2B1E8ZhHd",
category:"Drama",
rating:"8.0",
year:"2018",
description:"Four friends embark on a memorable journey while chasing their filmmaking dreams."
},

{
name:"Dalapathi",
image:"images/dalapathi.jpg",
trailer:"https://www.youtube.com/embed/-0UtUosywAI?si=lwoJY9p_OOfVwc25",
category:"Drama",
rating:"8.5",
year:"1991",
description:"An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives."
},

{
name:"MS Dhoni: The Untold Story",
image:"images/ms dhoni.jpg",
trailer:"https://www.youtube.com/embed/SiZbhos1LPA?si=nYsHRIxs5NuJhzUM",
category:"Drama",
rating:"8.0",
year:"2016",
description:"The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team."
},


{
name:"Jersey",
image:"images/jersey.jpg",
trailer:"https://www.youtube.com/embed/AjAe_Q1WZ_8",
category:"Drama",
rating:"8.5",
year:"2019",
description:"A former cricketer returns to the game to fulfill his son's dream and prove himself."
},

{
name:"Kantara",
image:"images/kantara.jpg",
trailer:"https://www.youtube.com/embed/Mo-fv7b77t8?si=OMs-5ul3xmL0C6OY",
category:"Drama",
rating:"8.1",
year:"2022",
description:"When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice."
},

{
name:"Hi Nanna",
image:"images/hi nanna.jpg",
trailer:"https://www.youtube.com/embed/Iz97_kxHaSc",
category:"Drama",
rating:"8.3",
year:"2023",
description:"A touching father-daughter story filled with love, emotions, and second chances."
},

{
name:"Kushi",
image:"images/kushi.jpg",
trailer:"https://www.youtube.com/embed/KFHXCvvxL1U",
category:"Romance",
rating:"7.6",
year:"2023",
description:"A romantic drama about love, family values, and overcoming differences."
},


{
name:"Kalki 2898-AD",
image:"images/kalki 2898-ad.jpg",
trailer:"https://www.youtube.com/embed/y1-w1kUGuz8",
category:"Sci-Fi",
rating:"8.4",
year:"2024",
description:"A futuristic sci-fi epic set in a dystopian world inspired by mythology.",
trending:true
},
{
name:"Mirai",
image:"images/mirai.jpg",
trailer:"https://www.youtube.com/embed/nsqHCfO1ayQ?si=ywTIIeCN0PgoAe9m",
category:"Sci-Fi",
rating:"7.0",
year:"2025",
description:"When a vicious villain sets out to claim nine sacred books that hold the secret to immortality, the guardian of the ninth book ties a happy-go-lucky orphan's destiny to the quest to protect them."
},
{
name:"24",
image:"images/24.jpg",
trailer:"https://www.youtube.com/embed/IRsYCJflOfs?si=bfKZXOwsk8mHnLA7",
category:"Sci-Fi",
rating:"7.9",
year:"2016",
description:"A scientist invents a time-travelling watch, which his evil twin brother wants to get hold of. Years later, the scientist's son battles his uncle, who is still desperately in search of the watch."
},

{
name:"Pokiri",
image:"images/pokiri.jpg",
trailer:"https://www.youtube.com/embed/nIMKcGkP8yU?si=gS3AMonoEkBdurPG",
category:"Action",
rating:"8.1",
year:"2006",
description:"An undercover cop infiltrates the criminal underworld to destroy it from within."
},

{
name:"KGF Chapter-1",
image:"images/kgf 1.jpg",
trailer:"https://www.youtube.com/embed/MwBsVFvxdYg?si=tqL2Dn4EfTR8DyZY",
category:"Action",
rating:"8.1",
year:"2018",
description:"Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia."
},
{
name:"KGF Chapter-2",
image:"images/kgf 2.jpg",
trailer:"https://www.youtube.com/embed/bDTUFufX-1s?si=6C9KS-AOv93LL_ms",
category:"Action",
rating:"8.2",
year:"2022",
description:"Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mother's wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen."
},

{
name:"Padi Padi Leche Manasu",
image:"images/padi padi leche manasu.jpg",
trailer:"https://www.youtube.com/embed/O7oOl5oyTQg",
category:"Romance",
rating:"7.5",
year:"2018",
description:"A romantic journey between two individuals learning the meaning of love and commitment."
},

{
name:"Majili",
image:"images/majili.jpg",
trailer:"https://www.youtube.com/embed/R9VF3m7UiLw?si=jxFrCadIHpow6UM0",
category:"Romance",
rating:"7.3",
year:"2019",
description:"Poorna, an aspiring cricketer, falls into a deep depression after being abandoned by his lover, Anshu. Despite this, he is forced to marry his neighbour Sravani, who secretly has feelings for him."
},

{
name:"Shambala",
image:"images/shambala.jpg",
trailer:"https://www.youtube.com/embed/_pCu3pf_FzE?si=--wYs3wtZ4XnFMq7",
category:"Horror",
rating:"7.0",
year:"2025",
description:"A Mystical World is a 2025 Indian Telugu-language supernatural horror thriller film written and directed by Ugandhar Muni. It starred Aadi Saikumar and Archana Iyer. The film has music composed by Sricharan Pakala, cinematography by Praveen K. Bangarri, and editing by Shravan Katikaneni."
},

{
name:"Eesha",
image:"images/eesha.jpg",
trailer:"https://www.youtube.com/embed/EOvmEb4ULAk?si=TvDDgejDrMfTbTe6",
category:"Horror",
rating:"7.5",
year:"2025",
description:"When four childhood friends attempt to disprove superstition, they cross paths with a powerful spiritual figure whose unsettling revelations shake their understanding of life, death, and the unknown."
},
{
name:"Rakasa",
image:"images/rakasa.jpg",
trailer:"https://www.youtube.com/embed/MeGrHazybIY?si=a9WQlsMwsnf88FVV",
category:"Horror",
rating:"7.0",
year:"2026",
description:"Returning home after a decade, an NRI chasing romance inadvertently awakens an ancient darkness long feared by his village. As the threat intensifies, love turns deadly and life hangs in the balance."
},
{
name:"1920 Horrors of the Heart",
image:"images/1920 horrors of the heart.jpg",
trailer:"https://www.youtube.com/embed/cLthAiz_PnQ?si=v7eZfKKLnd5D_2Rb",
category:"Horror",
rating:"7.0",
year:"2023",
description:"A young girl walks into a world of darkness is search of revenge but darkness consumes her making her a victim of that very revenge."
},
{
name:"Dune Part-1",
image:"images/dune 1.jpg",
trailer:"https://www.youtube.com/embed/n9xhJrPXop4?si=JDkjHhjBCkB4mYDe",
category:"Sci-Fi",
rating:"8.0",
year:"2021",
description:"Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource."
},

{
name:"Dune Part-2",
image:"images/dune 2.jpg",
trailer:"https://www.youtube.com/embed/Way9Dexny3w?si=7NE5uHTIdjz0tHGf",
category:"Sci-Fi",
rating:"8.4",
year:"2024",
description:"Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future."
},
{
name:"Interstellar",
image:"images/interstellar.jpg",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E?si=J73MUwQcX47DvjUl",
category:"Sci-Fi",
rating:"8.7",
year:"2014",
description:"In a dystopian future where Earth has become near-uninhabitable, a team of astronauts embark on a mission to find a new home for humanity."
},

{
name:"Shyam Singha Roy",
image:"images/shyam singha roy.jpg",
trailer:"https://www.youtube.com/embed/3YGqoG3engk?si=A6h_hXqDM-hTlufI",
category:"Sci-Fi",
rating:"8.2",
year:"2021",
description:"A reincarnation mystery that connects art, justice, and destiny across generations."
}, 
{
name:"Avatar: The Way of Water",
image:"images/avatar.jpg",
trailer:"https://www.youtube.com/embed/Gisg5Bjhk14?si=iEWKU_u3C0Fae77L",
category:"Sci-Fi",
rating:"7.5",
year:"2022",
description:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
}, 
{
name:"Avatar: Fire and Ash",
image:"images/avatar fire.jpg",
trailer:"https://www.youtube.com/embed/6VmJ_VCjCG0?si=If96nnFhlDlDC8Bf",
category:"Sci-Fi",
rating:"7.2",
year:"2025",
description:"Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges."
}, 


{
name:"They Call Him OG",
image:"images/they call him og.jpg",
trailer:"https://www.youtube.com/embed/7Y5q41D8_hs?si=64agl3ks4cDoUGMG",
category:"Action",
rating:"8.0",
year:"2025",
description:"A feared gangster returns to settle unfinished scores and reclaim his legacy.",
trending:true
},

{
name:"Sita Ramam",
image:"images/sita ramam.jpg",
trailer:"https://www.youtube.com/embed/Ljk6tGZ1l3A?si=BZHu4zCjggHvgrVT",
category:"Romance",
rating:"8.6",
year:"2022",
description:"A beautiful love story that unfolds through letters, sacrifice, and destiny."
},
{
name:"Andala Rakshasi",
image:"images/andala rakshasi.jpg",
trailer:"https://www.youtube.com/embed/3ELM8ib6oRU?si=MXeJjeYYV_t8ToAm",
category:"Romance",
rating:"7.8",
year:"2012",
description:"A poetic love triangle filled with emotions, destiny, and heartbreak."
},

{
name:"The Nun",
image:"images/the nun.jpg",
trailer:"https://www.youtube.com/embed/cWZoguoB9Mk?si=9fO5wQMxFTlVOrWb",
category:"Horror",
rating:"6.5",
year:"2018",
description:"A priest and a novice investigate a demonic presence at a remote monastery."
},
{
name:"Masooda",
image:"images/masooda.jpg",
trailer:"https://www.youtube.com/embed/Hpfn0llr1EE?si=9Y9yorQ_GhT79xJ_",
category:"Horror",
rating:"7.7",
year:"2022",
description:"A chilling supernatural thriller involving possession, faith, and courage."
},

{
name:"Tumbbad",
image:"images/tumbbad.jpg",
trailer:"https://www.youtube.com/embed/ZjuhALyNgss?si=XraO01HU0HE1fEKE",
category:"Horror",
rating:"8.3",
year:"2018",
description:"A visually stunning horror-fantasy about greed, mythology, and hidden treasure."
},

{
name:"Annabelle",
image:"images/annabelle.jpg",
trailer:"https://www.youtube.com/embed/8FyBN7jw108?si=Y_9Fww6VNfBMOZcR",
category:"Horror",
rating:"6.4",
year:"2014",
description:"A possessed doll unleashes terrifying supernatural events on a young family."
},

{
name:"The Conjuring",
image:"images/the conjuring.jpg",
trailer:"https://www.youtube.com/embed/1IPlJP8O8dg?si=1uj1nziXn1QYIim9",
category:"Horror",
rating:"8.0",
year:"2013",
description:"Paranormal investigators confront a dark and terrifying supernatural force.",
trending:true
},

{
name:"The Possession",
image:"images/the possession.jpg",
trailer:"https://www.youtube.com/embed/WVjggWQRlQQ?si=OEf1IPYyDI7QpGD4",
category:"Horror",
rating:"5.9",
year:"2012",
description:"A young girl becomes possessed after opening a mysterious ancient box.",
trending:true
},
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

<img src="${movie.image}"
onclick="showMovieDetails('${movie.name}')">

<h3>${movie.name}</h3>

</div>

`;
});

}
displayMovies();
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

<img
src="${movie.image}"

onclick="showMovieDetails('${movie.name}')">

<h3>${movie.name}</h3>

</div>

`;

});

}


function playTrailer(link,name){

document.getElementById(
"trailerPopup"
).style.display="flex";

document.getElementById(
"trailerVideo"
).src = link;

let movie =
movies.find(
m => m.name === name
);

if(
movie &&
!continueWatching.some(
m => m.name === movie.name
)
){

continueWatching.push(movie);

displayContinueWatching();

}

}

function closeTrailer(){

document.getElementById(
"trailerPopup"
).style.display="none";

document.getElementById(
"trailerVideo"
).src = "";
}

let watchlist = [];


function addToWatchlist(name){

let movie =
movies.find(m =>

m.name === name

);

if(
!watchlist.some(
m => m.name === name
)
){

watchlist.push(movie);

displayWatchlist();

}
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
let continueWatching = [];

function removeFromWatchlist(name){

watchlist =
watchlist.filter(movie=>

movie.name !== name

);

displayWatchlist();

}

// HERO BANNER MOVIES

let heroMovies = [

{

title:"Pushpa 2",

image:"images/pushpa2 banner.jpg",
banner:"images/pushpa2-banner.jpg",

description:
"Pushpa returns with power and revenge."

},

{

title:"Jersey",

image:"images/jersey banner.jpg",
banner:"images/jersey-banner.jpg",
description:
"A cricketer's emotional comeback."

},

{

title:"Kalki 2898-AD",

image:"images/kalki 2898-ad banner.jpg",
banner:"images/kalki 2898-ad-banner.jpg",
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

`url('${heroMovies[currentHero].banner}')`;

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

function toggleLoginPassword(){

let password =
document.getElementById(
"password"
);

if(password.type==="password"){

password.type="text";

}else{

password.type="password";

}

}
function toggleSignupPassword(){

let pass =
document.getElementById(
"newPassword"
);

let confirm =
document.getElementById(
"confirmPassword"
);

if(
pass.type==="password"
){

pass.type="text";

confirm.type="text";

}else{

pass.type="password";

confirm.type="password";

}

}

function displayContinueWatching(){

let container =
document.getElementById(
"continueContainer"
);

container.innerHTML = "";

continueWatching.forEach(movie=>{

container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}">

<h3>${movie.name}</h3>

</div>

`;

});

}

function displayCategories(){

displayCategory(
"Action",
"actionContainer"
);

displayCategory(
"Drama",
"dramaContainer"
);

displayCategory(
"Horror",
"horrorContainer"
);

displayCategory(
"Romance",
"romanceContainer"
);

displayCategory(
"Sci-Fi",
"scifiContainer"
);
}

function displayCategory(
category,
containerId
){

let container =
document.getElementById(
containerId
);

container.innerHTML = "";

let filtered =
movies.filter(movie=>

movie.category===category

);

filtered.forEach(movie=>{
container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}"
onclick="showMovieDetails('${movie.name}')">

<h3>${movie.name}</h3>

</div>

</div>

`;
});

}

displayCategories();

function displayTrending(){

let container =
document.getElementById(
"moviesContainer"
);

container.innerHTML = "";

let trendingMovies =
movies.filter(movie=>

movie.trending===true

);

trendingMovies.forEach(movie=>{

container.innerHTML += `

<div class="movie-card">

<img src="${movie.image}">

</div>

`;

});

}
displayTrending();

function resetData(){

watchlist = [];

continueWatching = [];

displayWatchlist();

displayContinueWatching();

}

function showMovieDetails(name){

let movie =
movies.find(
m => m.name === name
);

document.getElementById(
"moviePopup"
).style.display="flex";

document.getElementById(
"popupPoster"
).src =
movie.image;

document.getElementById(
"popupTitle"
).innerHTML =
movie.name;

document.getElementById(
"popupRating"
).innerHTML =
"⭐ Rating: " +
movie.rating;

document.getElementById(
"popupYear"
).innerHTML =
"📅 Year: " +
movie.year;

document.getElementById(
"popupDescription"
).innerHTML =
movie.description;

document.getElementById(
"popupTrailer"
).onclick = function(){

closeMoviePopup();

playTrailer(
movie.trailer,
movie.name
);

};

if(
watchlist.some(
m => m.name === movie.name
)
){

document.getElementById(
"popupWatchlist"
).innerHTML =
"✅ Added";

}else{

document.getElementById(
"popupWatchlist"
).innerHTML =
"❤️ Add Watchlist";

}
document.getElementById(
"popupWatchlist"
).onclick = function(){

addToWatchlist(
movie.name
);

};
}

function closeMoviePopup(){

document.getElementById(
"moviePopup"
).style.display="none";

}

function showProfile(){

let username =
localStorage.getItem("username") || "Guest";

document.getElementById("profilePopup").style.display = "flex";

document.getElementById("profileName").innerHTML =
"Username: " + username;

let pic =
localStorage.getItem("profilePic");

if(pic){
document.getElementById("profileImage").src = pic;
}

}

function closeProfile(){
document.getElementById("profilePopup").style.display = "none";
}

function uploadProfile(event){

let file = event.target.files[0];

let reader = new FileReader();

reader.onload = function(){

localStorage.setItem("profilePic", reader.result);

document.getElementById("profileImage").src = reader.result;

};

reader.readAsDataURL(file);
}

function removeProfilePic(){

localStorage.removeItem(
"profilePic"
);

document.getElementById(
"profileImage"
).src =
"images/default-profile.png";

}
