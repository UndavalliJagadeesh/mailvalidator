var regEx =
    /^[0-9a-z]{4,16}@[a-z]{4,16}(\.[a-z]{2,6}|\.[a-z]{2,8}\.[a-z]{2,8}|\-[a-z]{2,8}\.[a-z]{2,6})$/,
  arr = [
    "- Username should be of length 4-16",
    "- Username can have alphabets and numbers -> a-z, 0-9",
    "- Mail server should be of the length 4-16",
    "- Mail server can have alphabets and numbers -> a-z, 0-9 and -",
    "- Domain should be of length 2-6",
    "- Domain should contain only alphabets -> a-z",
  ];
function mailValidate() {
  var e = document.getElementById("mail").value.trim().toLowerCase();
  "" === e
    ? eValidate(prompt("Enter the mail").trim().toLowerCase())
    : e.match(regEx)
    ? ((document.querySelector("button").style.backgroundColor = "green"),
      (document.querySelector("#mail").style.borderBottomColor = "green"),
      (document.querySelector("#mail").style.color = "green"),
      (document.querySelector("button").innerHTML = "Valid Email"))
    : ((document.querySelector("button").style.backgroundColor = "red"),
      (document.querySelector("#mail").style.borderBottomColor = "red"),
      (document.querySelector("#mail").style.color = "red"),
      (document.querySelector("button").innerHTML = "Error"),
      show_alert(arr));
}
function eValidate(e) {
  (document.querySelector("#mail").value = e),
    e.match(regEx)
      ? ((document.querySelector("button").style.backgroundColor = "green"),
        (document.querySelector("#mail").style.borderBottomColor = "green"),
        (document.querySelector("#mail").style.color = "green"),
        (document.querySelector("button").innerHTML = "Valid Email"))
      : ((document.querySelector("button").style.backgroundColor = "red"),
        (document.querySelector("#mail").style.color = "red"),
        (document.querySelector("#mail").style.borderBottomColor = "red"),
        (document.querySelector("button").innerHTML = "Error"),
        show_alert(arr));
}
function show_alert(e) {
  alert(e.join("\n"));
}
