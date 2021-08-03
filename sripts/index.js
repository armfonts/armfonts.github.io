var changeText = function() {
    var text = document.getElementById("text").value;
    console.log(text);
    const list = [...document.getElementsByTagName("h1")]
    list.forEach(el=>el.innerText=text);    
}
