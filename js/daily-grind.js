/* 
here is the information we'll need to change for each coffee 
image src
alt tag
day of week 
name of coffee 
color 
description*/




let myDate = new Date();
let myDay = myDate.getDay();
let today = " ";
let coffee = "",

function coffeeTemlate{
    let myReturn = " hi from the templete";

    myReturn += `<p>
    <img src="${coffee.pic}" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee" />
    <strong class="feature">Monday's Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, 
    which makes us wish it was always Fall, as this is one of our top sellers!</p>
    `;


}


switch(myDay){
    case 3:
        today = "Wednesday";
        coffee = {
            color:"Brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of drip coffee",
            day:"Wednesday",
            desc:~`sometimes you all you need is drip`


        };
    break;
}  
 console.log(coffee);
 document.getElementById("coffee-output").innerHML= coffeeTamlate;