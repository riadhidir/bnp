// document.querySelectorAll(".btn-primary").classList.add("rounded-0");
let elements = document.getElementsByClassName("btn-primary");
for(let i =0 ; i< elements.length ;i++){
    elements[i].classList.add("rounded-0" ,"text-light");
    
}


let t = document.getElementById("tmp");
t.addEventListener("click", function(){ document.getElementsByClassName('help-frame')[0].classList.toggle('temp') ; });

