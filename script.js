function jam() {
  let a = Number(document.getElementById("adad1").value);
  let b = Number(document.getElementById("adad2").value);
  document.getElementById("natije").innerHTML = "⭐ نتیجه: " + (a + b);
}
function tafrigh() {
  let a = Number(document.getElementById("adad1").value);
  let b = Number(document.getElementById("adad2").value);
  document.getElementById("natije").innerHTML = "⭐ نتیجه: " + (a - b);
}
function zarb() {
  let a = Number(document.getElementById("adad1").value);
  let b = Number(document.getElementById("adad2").value);
  document.getElementById("natije").innerHTML = "⭐ نتیجه: " + (a * b);
}
function taghsim() {
  let a = Number(document.getElementById("adad1").value);
  let b = Number(document.getElementById("adad2").value);
  if(b === 0) {
    document.getElementById("natije").innerHTML = "⚠️ تقسیم بر صفر ممنوع!";
  } else {
    document.getElementById("natije").innerHTML = "⭐ نتیجه: " + (a / b);
  }
}
