const grid = document.querySelector(".grid");

// show function
function showList()
{
    let x = localStorage.getItem("links");
    if (x == null) {
        title = [];
    } else {
        title = JSON.parse(x);
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