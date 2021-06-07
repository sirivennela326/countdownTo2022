
var des = new Date(2021, 10, 26).getTime();
var now = new Date().getTime();

var res = des - now;
//alert(res);

var days = Math.floor(res/(24*60*60*1000));

var hours = Math.floor((res % (1000 * 24 * 60 * 60)) / (1000 * 60 *60));

var min = Math.floor((res % (1000*60*60)) / (1000*60));

var sec = Math.floor((res % (1000*60)) / (1000));

var x = document.getElementsByClassName("d");
x[0].innerHTML = days;

var y = document.getElementsByClassName("h");
y[0].innerHTML = hours;

var z = document.getElementsByClassName("m");
z[0].innerHTML = min;

var a = document.getElementsByClassName("s");
a[0].innerHTML = sec;


