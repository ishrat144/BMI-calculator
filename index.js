
const checkBmi = document.getElementById("cal");
checkBmi.addEventListener('click', ()=>{
    let weight =document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    //convert height into inches
    height=height*12;
    //convert height into meter
    height=height*0.025;
    let bmiVal=weight/(height*height);

    let result=document.getElementById("result");
    result.value=bmiVal;
});