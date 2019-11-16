var credit = document.getElementById("credit");

document.getElementById("btn").onclick = function() {
    credit.innerHTML = document.getElementById("getmoney").value;

    // credit.innerHTML = parseInt(credit.innerHTML) + parseInt(document.getElementById("getmoney").value);
    // alert(credit.innerHTML);
}

var yasai1 = 10;
var yasai2 = 50;
var yasai3 = 100;
var yasai4 = 200;

document.getElementById("btn1").onclick = function() {
    credit.innerHTML = credit.innerHTML - yasai1;
}

document.getElementById("btn2").onclick = function() {
    credit.innerHTML = credit.innerHTML - yasai2;
}

document.getElementById("btn3").onclick = function() {
    credit.innerHTML = credit.innerHTML - yasai3;
}

document.getElementById("btn4").onclick = function() {
    credit.innerHTML = credit.innerHTML - yasai4;
}



// var i = 1 ;

// for( var i = 1; i <= 50; i++ ) {

//     var sum = i * 1;

//     document.getElementById("btn1").onclick = function() {
//         document.getElementById("yasai1").innerHTML = sum;
//     }

//     document.getElementById("btn2").onclick = function() {
//         document.getElementById("yasai2").innerHTML = sum;
//     }

//     document.getElementById("btn3").onclick = function() {
//         document.getElementById("yasai3").innerHTML = sum;
//     }

//     document.getElementById("btn4").onclick = function() {
//         document.getElementById("yasai4").innerHTML = sum;
//     }

// }







// for( var h = 1; h <= 5; h++ ){
//     var i = h * 2;
//     console.log(i);
// }