const titleInput = document.querySelector(".title");
const linkInput = document.querySelector(".link");
const addBtn = document.querySelector(".addBtn");
const grid = document.querySelector(".grid");
const footer = document.querySelector(".footer");


let linkImage = [
    {
        title:"Instagram",
        image:"https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
    },
    {
        title:"Twitter",
        image:"https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
    },
    {
        title:"Facebook",
        image:"https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
    },
    {
        title:"Whatsapp",
        image:"https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
    },
    {
        title:"LinkedIn",
        image:"https://cdn-icons-png.flaticon.com/512/145/145807.png"
    },
    {
        title:"Portfolio",
        image:"https://cdn-icons-png.flaticon.com/512/1205/1205904.png"
    },
    {
        title:"Mail",
        image:"https://cdn-icons-png.flaticon.com/512/270/270021.png"
    },
    {
        title : "Github",
        image : "https://cdn-icons-png.flaticon.com/512/733/733609.png"
    }
];

localStorage.setItem("logos", JSON.stringify(linkImage));

// show function (aditi)
function showList()
{
    let x = localStorage.getItem("links");
    if (x == null || x==[]) {
        title = [
            {
                title: "LinkPedh",
                link: "https://mlsacbvp.github.io/LinkPedh/",
                src: "https://cdn-icons-png.flaticon.com/512/2913/2913520.png"
            },
            {
                title: "Text Jadoogar",
                link: "https://textify-gilt.vercel.app/",
                src: "https://cdn-icons-png.flaticon.com/512/3204/3204021.png"
            },
            {
                title: "Showflix",
                link: "https://mlsacbvp.github.io/ShowFlix/",
                src: "https://cdn-icons-png.flaticon.com/512/3364/3364355.png"
            },
            {
                title: "Review me",
                link: "https://review-me-bay.vercel.app/",
                src: "https://cdn-icons-png.flaticon.com/512/2973/2973781.png"
            },
            {
                title: "MLSAC Github",
                link: "https://github.com/mlsacbvp",
                src: "https://cdn-icons-png.flaticon.com/512/733/733609.png"
            }
        ];
        localStorage.setItem("links",JSON.stringify(title));
        return;
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

