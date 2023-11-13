let box = document.querySelector(".start-box");

function generateNumber( numMax){
    let num = Math.floor(Math.random()* numMax)+1;
    let numTwo = Math.floor(Math.random()* 2)+1;
    if( numTwo == 1){
        return num;
    }
    else{
        return num*-1;
    }
}


box.addEventListener('click',() => {
   let body = box.parentNode;
   body.removeChild(box);

   let ghostBox = document.createElement('div');
   ghostBox.classList = 'ghost-box';

   let clickBox = document.createElement('div');
   clickBox.classList = 'clickBox';
   ghostBox.append(clickBox);
   clickBox.innerText = '👻';
   body.append(ghostBox);

   ghostBox.addEventListener('mouseover', () =>{
    let leftAndRight = generateNumber( 1900 );
    let topAndBottom = generateNumber( 800 );
    ghostBox.style.cssText = "margin-left: "+leftAndRight+"px; margin-top: "+topAndBottom+"px;";
    })

    clickBox.addEventListener( 'click', () =>{
        alert("Okay -_-");
    })
})

