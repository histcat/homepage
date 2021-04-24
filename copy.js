function copy(){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', "awa@outlook.hu");
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("已复制到剪贴板");
}
