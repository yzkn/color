// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.


window.addEventListener('DOMContentLoaded', (event) => {
    var tableElem = document.getElementById('color-list');

    colors.forEach((item, index) => {
        var trElem = tableElem.tBodies[0].insertRow(-1);

        var cellNum = trElem.insertCell(0);
        cellNum.appendChild(document.createTextNode(index));

        var cellName = trElem.insertCell(1);
        cellName.appendChild(document.createTextNode(item.colorname));
        cellName.style.cssText = "background-color: " + item.colorname + "; color: " + item.invert + ";";

        var cellCode = trElem.insertCell(2);
        cellCode.appendChild(document.createTextNode(item.colorcode));
        cellCode.style.cssText = "background-color: " + item.colorname + "; color: " + item.invert + ";";

        var cellComp = trElem.insertCell(3);
        cellComp.appendChild(document.createTextNode(item.complementary));
        cellComp.style.cssText = "color: " + item.colorname + "; background-color: " + item.complementary + ";";

        var cellInve = trElem.insertCell(4);
        cellInve.appendChild(document.createTextNode(item.invert));
        cellInve.style.cssText = "color: " + item.colorname + "; background-color: " + item.invert + ";";
    });
});
