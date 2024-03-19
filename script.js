// generate a random color 

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){  // because hex color ki value bhi to 6 hoti hai----0 se 5 tk count kar lega
                   color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
    let intervalId;
 const startChangingColor = function(){
     if(!intervalId){
               intervalId =  setInterval(changeBgColor,1000)

     }
    function changeBgColor(){
               document.body.style.backgroundColor = randomColor();
        }
     };

const stopchangingColor = function(){
         clearInterval(intervalId);
         intervalId = null;
};

  
document.querySelector('#start').addEventListener('click',startChangingColor);


document.querySelector('#stop').addEventListener('click',stopchangingColor);
