let myInput = document.getElementById("number_");
let myButton = document.getElementById("button_");
let cikis= document.getElementById("cikis")
let numbers = [];
let numberValue ;




myButton.addEventListener("click",()=>{
    // cikis.innerHTML="";

    if(myInput.value <9 && myInput.value>0){
        numberValue=myInput.value
       
        for(let i=0;i<numberValue;i++){


            for(let j=1; j<=7;j++){

                if((j==1) || (j==2)){
                   
                    numbers.push(Math.floor(Math.random()*90+1));
                    continue;  
                }
                


                // while ((j==6) & (numbers.slice(0,5).includes(numbers[i]))) {
                //     numbers.pop();
                //     numbers.push(Math.floor(Math.random()*90+1));
                // }


                let randomNumber=Math.floor(Math.random()*90+1)
                numbers.push(randomNumber);
             
            }
            let joker = numbers.pop();
            numbers.sort(function(a,b) {return a-b});

            numbers.push(joker);
             console.log(numbers);
             sentence= numbers.join("-")+"|"
          
             cikis.innerText= sentence ;
             numbers=[];

        }

    }
    else{
        alert("Please enter number between  1 to 8");
    }
   

})