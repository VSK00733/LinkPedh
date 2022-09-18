const grid = document.querySelector(".grid");
const navName = document.querySelector('nav h1');
const Pedhname = document.querySelector('.profile_right h1');
const bioPara = document.querySelector('.profile_right p');
const footer = document.querySelector('.footer');
console.log(bioPara);
// show function
function showList()
{
    let x = localStorage.getItem("links");
    if (x == null) {
        title = [];
    } else {
        title = JSON.parse(x);
    }
    if(title.length > 6)
    {
        footer.style.position = "static";
        footer.style.marginTop = "1.5rem";
    }
    else
    {
        footer.style.position = "absolute";
        footer.style.marginTop = "0";
    }
    var emptyStr = "";
    title.forEach((element)=>{
        emptyStr += `<div class="card">
        <a href="${element.link}" target="_blank">
            <img src="${element.src}">
            <span>${element.title}</span>
        </a>
        </div>`;
    });
    grid.innerHTML = emptyStr;
}

showList()

const showUsername = () => 
{
    let username = localStorage.getItem("username");
    if(username==null)
    {
        Pedhname.innerHTML = "Username";
        navName.innerHTML = "Username";
    }
    else
    {
        Pedhname.innerHTML = JSON.parse(username);
        navName.innerHTML = JSON.parse(username);
    }
}

showUsername();

const showBio = () => {
    let storedBio = localStorage.getItem("bio");
    if(storedBio == null)
    {
        bioPara.innerHTML = "Bio";
    }
    else
    {
        bioPara.innerHTML = JSON.parse(storedBio);
    }
}

showBio();