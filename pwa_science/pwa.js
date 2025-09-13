let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let select = document.getElementById("kigou-select");
let kigou = "plus";
let eqaul = document.getElementById("eqaul");
let answer = document.getElementById("answer");

select.addEventListener("change", () => {
    kigou = select.value;
});

eqaul.addEventListener("click", () => {
    
    if (!isNaN(num1.value) && !isNaN(num2.value) && num1.value.trim() != "" && num2.value.trim() != "") {
    
        let ans = 0;

        if (kigou == "plus") {
            ans = Number(num1.value) + Number(num2.value);
        }
        else if (kigou == "mainasu") {            
            ans = Number(num1.value) - Number(num2.value);
        }
        else if (kigou == "kakeru") {
            ans = Number(num1.value) * Number(num2.value);
        }
        else {
            ans = Number(num1.value) / Number(num2.value);
        }
        
        answer.innerText = ans;
    }
    else {
        alert("数値を入力してください");
    }

});

// Service Worker の登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker registered:', reg))
    .catch(err => console.error('Service Worker registration failed:', err));
}