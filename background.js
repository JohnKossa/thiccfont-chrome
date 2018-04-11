function convert_to_japanese(){
    chrome.tabs.executeScript({code:"\n"+
        "    map = {'a':'卂','b':'乃','c':'匚','d':'刀','e':'乇','f':'下','g':'厶','h':'卄','i':'工','j':'丁','k':'长','l':'乚','m':'从','n':'𠘨','o':'口','p':'尸','q':'㔿','r':'尺','s':'丂','t':'丅','u':'凵','v':'リ','w':'山','x':'乂','y':'丫','z':'乙'};\n" +
        "    supportedElementTypes = ['input', 'textarea'];\n"+
        "    activeElement = document.activeElement;\n"+
        "    if(activeElement && supportedElementTypes.indexOf(activeElement.tagName.toLowerCase())=== -1){\n" +
        "        alert(\"active element type mismatch: \"+activeElement.tagName);\n" +
        "    }\n" +
        "    activeElement.value = activeElement.value.split('').map(e => map[e] || e).join('');\n" +
        "    activeElement.dispatchEvent(new Event('input',{bubbles: true}))\n"
    }, ()=>{});
}

chrome.commands.onCommand.addListener(function(command) {
    switch (command){
        case 'to-japanese':
            convert_to_japanese();
    }
});
