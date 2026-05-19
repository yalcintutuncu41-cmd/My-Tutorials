//map fonksiyonu örneği

let isimler2 = [
    "Demet",
    "Ufuk",
    "Çağla",
    "Betül"
];


isimler2.map((isim, index) => {
    document.write(isim);
    document.write("<br>");
    document.write(index);
    document.write("<br>");
});