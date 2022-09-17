const titleInput = document.getElementsByClassName("title");
const linkInput = document.getElementsByClassName("link");
const addBtn = document.getElementsByClassName("addBtn");
let linkImage = [
    {
        title:"Instagram",
        image:"https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg"
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
