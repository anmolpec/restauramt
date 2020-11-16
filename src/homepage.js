let homepage= function(){
    let homepageContainer=document.createElement("div");
    let heading= document.createElement("div");
    let imgContainer=document.createElement("div");
    let introInfo=document.createElement("div");
    homepageContainer.appendChild(heading);
    homepageContainer.appendChild(imgContainer);
    homepageContainer.appendChild(introInfo);

    heading.textContent="THE TANDOOR";

    introInfo.textContent="This restaurant offers the best tandoori chicken in the city";

    imgContainer.innerHTML='<img src="./images/tandoori.jpeg" alt="tandoori chicken">';

    homepageContainer.classList.add("homepage");
    heading.classList.add("heading");
    introInfo.classList.add("introInfo");
    
    
    return homepageContainer;
}

let homepageContainer=homepage();
export {homepageContainer};