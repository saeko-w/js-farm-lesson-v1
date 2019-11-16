var credit1 = document.getElementById("credit");
var yasai1 = 10;    
var yasai2 = 50;
var yasai3 = 100;
var yasai4 = 200;

// 所持金を入手
document.getElementById("btn").onclick = function() {
    if (document.getElementById("credit").innerHTML === '') {
        document.getElementById("credit").innerHTML = 0;
    }

    // 現在の所持金
    var creditValue = parseInt(credit1.innerHTML);
    // 入力情報を取得
    var chargeValue = parseInt(document.getElementById("charge-input").value);

    // 所持金に入力した金額を追加
    credit.innerHTML = creditValue + chargeValue;
}

document.getElementById("btn1").onclick = function() {
    buyVegetable(yasai1);
}

document.getElementById("btn2").onclick = function() {
    buyVegetable(yasai2);
}

document.getElementById("btn3").onclick = function() {
    buyVegetable(yasai3);
}

document.getElementById("btn4").onclick = function() {
    buyVegetable(yasai4);
}

function buyVegetable(vegetablePrice) {

    var creditValue = parseInt(credit.innerHTML);
    if (creditValue < vegetablePrice) {
        alert("所持金が不足しています");
        return false;
    }

    credit.innerHTML = credit.innerHTML - vegetablePrice;
}