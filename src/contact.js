let contact=function(){
    let contactContainer=document.createElement("div");
    
    let heading= document.createElement("div");
    heading.textContent="THE TANDOOR";
    heading.classList.add("heading");
    contactContainer.appendChild(heading);

    let contentContainer=document.createElement("div");
    contactContainer.appendChild(contentContainer);


    let imgContainer=document.createElement("div")
    imgContainer.innerHTML='<img src="./images/tandoor.jpeg" alt="Butter Chicken">';
    contentContainer.appendChild(imgContainer);

    let textContentContainer=document.createElement("div");
    textContentContainer.innerHTML='<h1>CONTACT</h1><p>Phone:9456313207</p><p>Email:apsb@gmail.com</p>';
    contentContainer.appendChild(textContentContainer);
    

    contactContainer.classList.add("about");
    contentContainer.classList.add("aboutContentContainer");
    imgContainer.classList.add("aboutImage");

    return contactContainer;
}

let contactContainer=contact();
export {contactContainer};