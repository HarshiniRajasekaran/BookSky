// selecting popup and overlay button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,addbook,booktitle,bookauthor,shortdes

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book") 
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
})

function deletebook(event){
    event.target.parentElement.remove()
}