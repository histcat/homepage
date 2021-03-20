function copy(){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', "jessejeson@163.com");
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("Copied to clipboard.");
}
