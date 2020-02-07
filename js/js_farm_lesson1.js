var credit1 = document.getElementById("credit");
var yasai1 = 10;    
var yasai2 = 50;
var yasai3 = 100;
var yasai4 = 200;
var btn1 = 0;
var btn2 = 0;
var btn3 = 0;
var btn4 = 0;
var bardEatCount =  0;
var pigEatCount =  0;
var cowEatCount =  0;
var feed1 = document.getElementById("feed1");
var feed2 = document.getElementById("feed2");
var feed3 = document.getElementById("feed3");
var feed4 = document.getElementById("feed4");

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


// 餌の購入
document.getElementById("btn1").onclick = function() {
    buyVegetable(yasai1);

    // 餌の在庫数
    if (document.getElementById("feed1").innerHTML === '') {
        document.getElementById("feed1").innerHTML = 0;
    }
    // 現在の在庫数
    var feedStock = parseInt(feed1.innerHTML);
    // 購入すると在庫に加算されていく
    feed1.innerHTML = feedStock + 1;
}

document.getElementById("btn2").onclick = function() {
    buyVegetable(yasai2);

    if (document.getElementById("feed2").innerHTML === '') {
        document.getElementById("feed2").innerHTML = 0;
    }
    var feedStock = parseInt(feed2.innerHTML);
    feed2.innerHTML = feedStock + 1;
}

document.getElementById("btn3").onclick = function() {
    buyVegetable(yasai3);

    if (document.getElementById("feed3").innerHTML === '') {
        document.getElementById("feed3").innerHTML = 0;
    }
    var feedStock = parseInt(feed3.innerHTML);
    feed3.innerHTML = feedStock + 1;
}

document.getElementById("btn4").onclick = function() {
    buyVegetable(yasai4);

    if (document.getElementById("feed4").innerHTML === '') {
        document.getElementById("feed4").innerHTML = 0;
    }
    var feedStock = parseInt(feed4.innerHTML);
    feed4.innerHTML = feedStock + 1;
}

function buyVegetable(vegetablePrice) {

    var creditValue = parseInt(credit.innerHTML);
    if (creditValue < vegetablePrice) {
        alert("所持金が不足しています");
        return false;
    }
    credit.innerHTML = credit.innerHTML - vegetablePrice;
}

// 各動物に与えられる餌量制限の実装
var bard = document.getElementById("bard");
var pig = document.getElementById("pig");
var cow = document.getElementById("cow");

document.getElementById("button5").onclick = function() {

    while( bard <= 2 ) {
        bard++;
    }

    while( pig <= 4 ) {
        pig++;
    }

    while( cow <= 5 ) {
        cow++;
    }

    if( bard <= 2 ) {
        console.log("ありがとう！");
    } else if( bard < 2 ) {
        console.log("もう食べられない..");
    }

    if( pig <= 4 ) {
        console.log("ありがとう！");
    } else if( pig < 4 ) {
        console.log("もう食べられない..");
    }

    if( cow <= 5 ) {
        console.log("ありがとう！");
    } else if( cow < 5 ) {
        console.log("もう食べられない..");
    }
}

// 餌の種類によって与えられるものと与えられないものがある処理の実装
document.getElementById("button5").onclick = function() {
    var coiceVegetable = document.getElementById("coiceVegetable").value;
    var choiceAnimal = document.getElementById("choiceAnimal").value;

    if (choiceAnimal === 'にわとり') {
        // 餌をあげる前にお腹いっぱいかのカウント判定処理
        if (bardEatCount >= 2 ) {
            alert("もう食べられない..");
            return  false;
        // } else if (bardEatCount >= ){
        }

        // 餌をあげる
        bard.innerHTML = "美味しい〜";

        // 餌をあげたのでカウントをする
        bardEatCount++;

    } else if (choiceAnimal === '豚') {
        if (pigEatCount >= 4) {
            alert("もう食べられない..");
            return  false;
        }
        if (coiceVegetable === '小麦') {
            pig.innerHTML = "まずい..";
        } else {
            pig.innerHTML = "美味しい〜";
        }
        pigEatCount++;
    } else if (choiceAnimal === '牛') {
        if (cowEatCount >= 5) {
            alert("もう食べられない..");
            return  false;
        }
        if (coiceVegetable === 'トマト') {
            cow.innerHTML = "美味しい〜";
        } else {
            cow.innerHTML = "まずい..";
        }
        cowEatCount++;
    }
}
