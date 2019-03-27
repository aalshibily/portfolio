var alpha = new Array(
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
);
function Captcha() {
  var i;
  for (i = 0; i < 6; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    var g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code =
    a + " " + b + " " + " " + c + " " + d + " " + e + " " + f + " " + g;
  document.getElementById("mainCaptcha").innerHTML = code;
  document.getElementById("mainCaptcha").value = code;
}
function ValidCaptcha() {
  var string1 = removeSpaces(document.getElementById("mainCaptcha").value);
  var string2 = removeSpaces(document.getElementById("txtInput").value);
  if (string1 == string2) {
    var one = "515";
    var two = "661";
    var three = "0415";
    var total = one + "-" + two + "-" + three;
    console.log(total);
    var num = document.getElementById("phonenum");
    num.innerText = total;
    var elem = document.getElementById("capt");
    elem.parentNode.removeChild(elem);
    return true;
  } else {
    document.getElementById("txtInput").value = "";
    alert("Humanity test failed...");
    Captcha();
    return false;
  }
}
function removeSpaces(string) {
  return string.split(" ").join("");
}
