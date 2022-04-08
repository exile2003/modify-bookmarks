
//const { JSDOM } = require('jsdom');

//const fs = require('fs');


let output = document.getElementById("output");
output.innerText = "Выберите файл"

let file, result, dom;

//let file = fs.readFileSync('bookmarks_1_27_22.html');

document.getElementById("initial").onchange = getFile;

 async function getFile(e) {
    file = await e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        output.innerHTML = e.target.result
        dom = e.target.result;
    }
        reader.readAsText(file);
    //result = await e.target.result;
    //let file2 = fs.readFileSync(file);
    //output.innerHTML = file2;
   // console.log(file, result)

    //const dom = new JSDOM(file);

    function tagCrawling(inputElement) {
        let element = inputElement;

        if (element.hasAttribute('ADD_DATE')) {

            var attributeValue = element.getAttribute('ADD_DATE');
            var div = document.createElement('div');
            var date = convertUnixTime(attributeValue);

            if (element.tagName == "H3") {
                element.style.whiteSpace = "pre-wrap";
                var currText = element.textContent;//div.textContent = date;
                element.innerHTML = currText + "   -  <span style='font-size: 16px; font-weight: normal; display:inline'>" + date + "</span>";
            } else div.textContent = "   " + date;

            div.style.display = "inline";
            div.style.whiteSpace = "pre-wrap";
            element.insertAdjacentElement('afterEnd', div);

        }

        if (element.hasChildNodes()) {
            let childNodes = element.children;
            for (var i = 0; i < childNodes.length; i++) {
                tagCrawling(childNodes[i]);
            }
            return;
        } else return;

    }


    function convertUnixTime(date) {
        var d = new Date();
        d.setTime(date * 1000);
        var dtt = (d.toString()).slice(0, 25);
        return dtt;
    }

    tagCrawling(document.getElementsByTagName('body')[0]);

    var header = "<!doctype html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'>        <title>Document</title>        </head>"

    fs.writeFileSync("bookmarks_1_27_22-result.html", header + document.body.outerHTML + "</html>");

}