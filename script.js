const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
var read ;


buttons.forEach((items) =>{
    items.onclick = () => { 
        if (read == "water"){
            display.innerText ='';
            read ="jay";
        }
     
        if (items.id =='clear'){
            display.innerText ='';
        }
        else if (items.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }else if (display.innerText != '' && items.id == 'equal'){
            display.innerText = eval(display.innerText);
            read = "water";
           //read++;
        }
      
        else if (display.innerText == '' && items.id =='equal'){
            display.innerText = 'Empty!';
            setTimeout(() =>(display.innerText = ''),2000);
        }else{
            //display.innerText == items.id;
            display.innerText += items.id
          }   
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler.icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}