let about=function(){
    let aboutContainer=document.createElement("div");
    
    let heading= document.createElement("div");
    heading.textContent="THE TANDOOR";
    heading.classList.add("heading");
    aboutContainer.appendChild(heading);

    let contentContainer=document.createElement("div");
    aboutContainer.appendChild(contentContainer);


    let imgContainer=document.createElement("div")
    imgContainer.innerHTML='<img src="./images/butterChicken.jpeg" alt="Butter Chicken">';
    contentContainer.appendChild(imgContainer);

    let textContentContainer=document.createElement("div");
    textContentContainer.innerHTML='<h1>ABOUT</h1><p>This restaurant was opened in 1920 and has since been the best restaurant in town because of our traditional and unchanged recipee</p>';
    contentContainer.appendChild(textContentContainer);
    

    aboutContainer.classList.add("about");
    contentContainer.classList.add("aboutContentContainer");
    imgContainer.classList.add("aboutImage");

    return aboutContainer;
}

let aboutContainer=about();
export {aboutContainer};