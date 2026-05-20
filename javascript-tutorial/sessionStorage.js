sessionStorage.setItem("name", "John");
sessionStorage.setItem("age", "30");
sessionStorage.setItem("city", "New York");
sessionStorage.setItem("country", "USA");
localStorage.setItem("name", "Yalcin");


document.write(sessionStorage.getItem("name"));
sessionStorage.removeItem("age");
sessionStorage.clear();

let name = sessionStorage.getItem("city");
document.write("<br>");
document.write(typeof name);