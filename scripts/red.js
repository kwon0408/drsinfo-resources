var sear = window.location.search.substr(1);
var dp = $.deparam(sear);
var x = Object.keys(dp)[0]; // drs.obin.kr/?username
var par = (x == undefined? "https://dancerush-info.herokuapp.com": "https://dancerush-info.herokuapp.com/user/" + x);
// document.getElementById("uname").textContent = "If not redirected, click <a href=\"" + par + "\">here</a>.";
document.write("If not redirected, click <a href=\"" + par + "\">here</a>.");
window.location.href = par;