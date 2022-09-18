const titleInput = document.querySelector(".title");
const linkInput = document.querySelector(".link");
const addBtn = document.querySelector(".addBtn");
const grid = document.querySelector(".grid");


let linkImage = [
    {
        title:"Instagram",
        image:"https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg"
    }
];

// `<div class="card">
// <a href="${element.link}" target="_blank">
//     <img src="${element.src}">
//     <span>${element.title}</span>
// </a>
// </div>`

localStorage.setItem("logos", JSON.stringify(linkImage));

// show function (aditi)
function showList()
{
    let x = localStorage.getItem("links");
    if (x == null) {
        title = [];
    } else {
        title = JSON.parse(x);
    }
    var emptyStr = "";
    title.forEach((element, index)=>{
        emptyStr += `<div class="card">
        <a href=${element.link} target="_blank">
            <h3>${element.title}</h3>
        </a>
        <button onclick="deleteLink(${index})"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;
    });
    grid.innerHTML = emptyStr;
}

showList();
// add function (tushar)
addBtn.onclick = () => {
    console.log("Add");
    let getLogoData = localStorage.getItem("logos");
    if (getLogoData == null) {
        logoArray = [];
    } else {
        logoArray = JSON.parse(getLogoData);
    }

    let array = localStorage.getItem("links");
    if (array == null){
        linksArray = [];
    }
    else{
        linksArray = JSON.parse(array);
    }

    let userEnteredTitle = titleInput.value;
    let userEnteredLink = linkInput.value;

    let selectedImage = logoArray.filter((item)=>{
        if (item.title.toLowerCase().includes(userEnteredTitle.toLowerCase())){
            return item
        }
    })

    if (selectedImage.length == 0){
        linksArray.push(
            {
                title : userEnteredTitle,
                link : userEnteredLink,
                src : "https://cdn-icons-png.flaticon.com/512/2065/2065157.png"
            }
        )
    }
    else{
        linksArray.push(
            {
                title : userEnteredTitle,
                link : userEnteredLink,
                src : selectedImage[0].image
            }
        )
    }
    localStorage.setItem("links", JSON.stringify(linksArray));

    showList();
}
// delete function (akshat)

const deleteLink = (index) => {
  var data = localStorage.getItem("links");
  linksArray = JSON.parse(data);
  linksArray.splice(index, 1);
  localStorage.setItem("links", JSON.stringify(linksArray));
  showList();
}

//username and Bio
const navName = document.querySelector('nav h1');
const Pedhname = document.querySelector('.username h1');
const usernamePencil = document.querySelector('.username img');
const usernameDetails = document.querySelector('.username');
const usernameInputBox = document.querySelector('.usernameInput');
const usernameSaveButton = document.querySelector('.usernameInput img');
const usernameInputValue = document.querySelector('.usernameInput input');

const bioPara = document.querySelector('.bio p');
const bioPencil = document.querySelector('.bio img');
const bioDetails = document.querySelector('.bio');
const bioInputBox = document.querySelector('.bioInput');
const bioSaveButton = document.querySelector('.bioInput img');
const bioInputValue = document.querySelector('.bioInput input');

usernamePencil.onclick = () => {
    usernameDetails.style.display="none";
    usernameInputBox.style.display="flex";
}

bioPencil.onclick = () => {
    bioDetails.style.display = "none";
    bioInputBox.style.display = "flex";
}

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

bioSaveButton.onclick = () => {
    bioDetails.style.display = "flex";
    bioInputBox.style.display = "none";
    localStorage.setItem("bio", JSON.stringify(bioInputValue.value));
    showBio();
}

usernameSaveButton.onclick = () => {
    usernameDetails.style.display="flex";
    usernameInputBox.style.display="none";
    localStorage.setItem("username",JSON.stringify(usernameInputValue.value));
    showUsername();
}
showBio();
showUsername();

