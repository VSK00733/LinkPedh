const titleInput = document.getElementsByClassName("title");
const linkInput = document.getElementsByClassName("link");
const addBtn = document.getElementsByClassName("addBtn");
let linkImage = [
    {
        title:"Instagram",
        image:"https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg"
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
]
// show function (aditi)

// add function (tushar)
function addBtn(){
    let array = localStorage.getItem("links")
    if (array == null){
        linksArray = []
    }
    else{
        linksArray = JSON.parse(array)
    }

    let userEnteredTitle = titleInput.value;
    let userEnteredLink = linkInput.value;
    let selectedImage = linkImage.filter((item)=>{
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

    show()
}
// delete function (akshat)

const deleteLink = (index) => {
  var data = localStorage.getItem("links");
  linksArray = JSON.parse(data);
  linksArray.splice(index, 1);
  localStorage.setItem("links", JSON.stringfy(linksArray));
  show();
}
