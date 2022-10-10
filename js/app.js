// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.


const initPickerCanvas = () => {
    var file = document.getElementById('selectedImage');
    var result = document.getElementById('loadedImage');

    file.addEventListener('change', (e) => {
        var fileData = e.target.files[0];

        if (!fileData.type.match('image.*')) {
            return;
        }

        var reader = new FileReader();
        reader.onload = function () {
            var img = document.createElement('img');
            img.src = reader.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const canvasWidth = img.naturalWidth;
                const canvasHeight = img.naturalHeight;

                canvas.onclick = function (mouseEvent) {
                    const imgData = ctx.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
                    const rgba = imgData.data;
                    const rgbaVal = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + (rgba[3] / 255) + ")";

                    const clickedRgbaElem = document.getElementById('clickedRgba');
                    clickedRgbaElem.innerText = rgbaVal;
                    clickedRgbaElem.style.color = rgbaVal;

                    const hsl = rgb2hsl(rgba);
                    const hslaVal = "hsla(" + Math.round(hsl[0]) + ", " + Math.round(hsl[1] * 100) + "%, " + Math.round(hsl[2] * 100) + "%, " + (Math.round((rgba[3] / 255) * 100) / 100) + ")";
                    const clickedHslaElem = document.getElementById('clickedHsla');
                    clickedHslaElem.innerText = hslaVal;
                    clickedHslaElem.style.color = rgbaVal;

                    const hsv = rgb2hsv(rgba);
                    const hsvaVal = "hsva(" + Math.round(hsv[0]) + ", " + Math.round(hsv[1] * 100) + "%, " + Math.round(hsv[2] * 100) + "%, " + (Math.round((rgba[3] / 255) * 100) / 100) + ")";
                    const clickedHsvaElem = document.getElementById('clickedHsva');
                    clickedHsvaElem.innerText = hsvaVal;
                    clickedHsvaElem.style.color = rgbaVal;

                    const canvas2 = document.getElementById('clickedColor');
                    const context2 = canvas2.getContext('2d');
                    context2.clearRect(0, 0, canvas2.width, canvas2.height);

                    context2.beginPath();
                    context2.fillStyle = rgbaVal;
                    context2.fillRect(0, 0, canvas2.width, canvas2.height);
                }

                const writeWidth = result.clientWidth;
                const writeHeight = canvasHeight * (writeWidth / canvasWidth);
                canvas.width = writeWidth;
                canvas.height = writeHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, writeWidth, writeHeight);

                result.innerHTML = '';
                result.appendChild(canvas);
            }
        }
        reader.readAsDataURL(fileData);
    }, false);
}

const initColorJs = () => {
    var sliderPicker = new iro.ColorPicker("#sliderPicker", {
        width: 250,
        color: "rgb(255, 0, 0)",
        borderWidth: 1,
        borderColor: "#fff",
        layout: [
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'hue'
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'saturation'
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value'
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'alpha'
                }
            },
        ]
    });

    sliderPicker.on('color:change', function (color) {
        if (color.index === 0) {
            // console.log(color, color.index, color.hexString);
            const pickedHslaElem = document.getElementById('pickedHsla');
            pickedHslaElem.innerText = color.hslaString;
            pickedHslaElem.style.color = color.rgbaString;

            const pickedHsvaElem = document.getElementById('pickedHsva');
            const hsvaString = "hsva(" + Math.round(color.hsva.h) + ", " + color.hsva.s + "%, " + color.hsva.v + "%, " + color.hsva.a + ")";
            pickedHsvaElem.innerText = hsvaString;
            pickedHsvaElem.style.color = color.rgbaString;

            const pickedRgbaElem = document.getElementById('pickedRgba');
            pickedRgbaElem.innerText = color.rgbaString;
            pickedRgbaElem.style.color = color.rgbaString;

            const canvas = document.getElementById('pickedColor');
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.beginPath();
            context.fillStyle = color.rgbaString;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    });
}

const initListJs = () => {
    new List('color-list', {
        valueNames: ['number', 'name', 'code', 'complementary', 'invert']
    });

    new List('gray-list', {
        valueNames: ['number', 'code']
    });
}

const loadColorTable = () => {
    const tableElem = document.getElementById('color-table');

    colors.forEach((item, index) => {
        var trElem = tableElem.tBodies[0].insertRow(-1);

        var cellNum = trElem.insertCell(0);
        cellNum.appendChild(document.createTextNode(index));
        cellNum.style.cssText = "text-align: right;";
        cellNum.setAttribute("class", "number");

        var cellName = trElem.insertCell(1);
        cellName.appendChild(document.createTextNode(item.colorname));
        cellName.style.cssText = "background-color: " + item.colorname + "; color: " + (isDark(item.colorcode) ? 'white' : 'black') + ";";
        cellName.setAttribute("class", "name");

        var cellCode = trElem.insertCell(2);
        cellCode.appendChild(document.createTextNode(item.colorcode));
        cellCode.style.cssText = "background-color: " + item.colorname + "; color: " + (isDark(item.colorcode) ? 'white' : 'black') + ";";
        cellCode.setAttribute("class", "code");

        var cellComp = trElem.insertCell(3);
        cellComp.appendChild(document.createTextNode(item.complementary));
        cellComp.style.cssText = "background-color: " + item.complementary + "; color: " + (isDark(item.complementary) ? 'white' : 'black') + ";";
        cellComp.setAttribute("class", "complementary");

        var cellInve = trElem.insertCell(4);
        cellInve.appendChild(document.createTextNode(item.invert));
        cellInve.style.cssText = "background-color: " + item.invert + "; color: " + (isDark(item.invert) ? 'white' : 'black') + ";";
        cellInve.setAttribute("class", "invert");
    });
}

const loadGrayTable = () => {
    const tableElem = document.getElementById('gray-table');

    grays.forEach((item, index) => {
        var trElem = tableElem.tBodies[0].insertRow(-1);

        var cellNum = trElem.insertCell(0);
        cellNum.appendChild(document.createTextNode(index));
        cellNum.style.cssText = "text-align: right;";
        cellNum.setAttribute("class", "number");

        var cellCode = trElem.insertCell(1);
        cellCode.appendChild(document.createTextNode(item.colorcode));
        cellCode.style.cssText = "background-color: " + item.colorcode + "; color: " + (isDark(item.colorcode) ? 'white' : 'black') + ";";
        cellCode.setAttribute("class", "code");
    });
}

const loadGradationTable = () => {
    const tbodyElem = document.getElementById('gradation-tbody');
    tbodyElem.innerHTML = '';

    const tableElem = document.getElementById('gradation-table');
    const colors = generateGradation(
        document.getElementById('cStart').value,
        document.getElementById('cEnd').value,
        document.getElementById('num').value
    );

    colors.forEach((item, index) => {
        var trElem = tableElem.tBodies[0].insertRow(-1);

        var cellNum = trElem.insertCell(0);
        cellNum.appendChild(document.createTextNode(index));
        cellNum.style.cssText = "text-align: right;";
        cellNum.setAttribute("class", "number");

        var cellCode = trElem.insertCell(1);
        cellCode.appendChild(document.createTextNode(item));
        cellCode.style.cssText = "background-color: " + item + "; color: " + (isDark(item) ? 'white' : 'black') + ";";
        cellCode.setAttribute("class", "code");
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    loadColorTable();
    loadGrayTable();

    initPickerCanvas();
    initColorJs();
    initListJs();

    loadGradationTable();
    document.getElementById('cStart').addEventListener('change', (event) => {
        loadGradationTable();
    });
    document.getElementById('cEnd').addEventListener('change', (event) => {
        loadGradationTable();
    });
    document.getElementById('num').addEventListener('change', (event) => {
        loadGradationTable();
    });
});
