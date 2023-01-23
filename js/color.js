// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.


const colors = [
    { "colorname": "AliceBlue", "colorcode": "#F0F8FF", "complementary": "#FFF7F0", "invert": "#0F0700" },
    { "colorname": "AntiqueWhite", "colorcode": "#FAEBD7", "complementary": "#D7E6FA", "invert": "#051428" },
    { "colorname": "Aqua", "colorcode": "#00FFFF", "complementary": "#FF0000", "invert": "#FF0000" },
    { "colorname": "Aquamarine", "colorcode": "#7FFFD4", "complementary": "#FF7FAA", "invert": "#80002B" },
    { "colorname": "Azure", "colorcode": "#F0FFFF", "complementary": "#FFF0F0", "invert": "#0F0000" },
    { "colorname": "Beige", "colorcode": "#F5F5DC", "complementary": "#DCDCF5", "invert": "#0A0A23" },
    { "colorname": "Bisque", "colorcode": "#FFE4C4", "complementary": "#C4DFFF", "invert": "#001B3B" },
    { "colorname": "Black", "colorcode": "#000000", "complementary": "#000000", "invert": "#FFFFFF" },
    { "colorname": "BlanchedAlmond", "colorcode": "#FFEBCD", "complementary": "#CDE1FF", "invert": "#001432" },
    { "colorname": "Blue", "colorcode": "#0000FF", "complementary": "#FFFF00", "invert": "#FFFF00" },
    { "colorname": "BlueViolet", "colorcode": "#8A2BE2", "complementary": "#83E22B", "invert": "#75D41D" },
    { "colorname": "Brown", "colorcode": "#A52A2A", "complementary": "#2AA5A5", "invert": "#5AD5D5" },
    { "colorname": "BurlyWood", "colorcode": "#DEB887", "complementary": "#87ADDE", "invert": "#214778" },
    { "colorname": "CadetBlue", "colorcode": "#5F9EA0", "complementary": "#A0615F", "invert": "#A0615F" },
    { "colorname": "Chartreuse", "colorcode": "#7FFF00", "complementary": "#8000FF", "invert": "#8000FF" },
    { "colorname": "Chocolate", "colorcode": "#D2691E", "complementary": "#1E87D2", "invert": "#2D96E1" },
    { "colorname": "Coral", "colorcode": "#FF7F50", "complementary": "#50D0FF", "invert": "#0080AF" },
    { "colorname": "CornflowerBlue", "colorcode": "#6495ED", "complementary": "#EDBC64", "invert": "#9B6A12" },
    { "colorname": "Cornsilk", "colorcode": "#FFF8DC", "complementary": "#DCE3FF", "invert": "#000723" },
    { "colorname": "Crimson", "colorcode": "#DC143C", "complementary": "#14DCB4", "invert": "#23EBC3" },
    { "colorname": "Cyan", "colorcode": "#00FFFF", "complementary": "#FF0000", "invert": "#FF0000" },
    { "colorname": "DarkBlue", "colorcode": "#00008B", "complementary": "#8B8B00", "invert": "#FFFF74" },
    { "colorname": "DarkCyan", "colorcode": "#008B8B", "complementary": "#8B0000", "invert": "#FF7474" },
    { "colorname": "DarkGoldenRod", "colorcode": "#B8860B", "complementary": "#B3DB8", "invert": "#4779F4" },
    { "colorname": "DarkGray", "colorcode": "#A9A9A9", "complementary": "#A9A9A9", "invert": "#565656" },
    { "colorname": "DarkGreen", "colorcode": "#006400", "complementary": "#640064", "invert": "#FF9BFF" },
    // { "colorname": "DarkGrey", "colorcode": "#A9A9A9", "complementary": "#A9A9A9", "invert": "#565656" },
    { "colorname": "DarkKhaki", "colorcode": "#BDB76B", "complementary": "#6B71BD", "invert": "#424894" },
    { "colorname": "DarkMagenta", "colorcode": "#8B008B", "complementary": "#008B00", "invert": "#74FF74" },
    { "colorname": "DarkOliveGreen", "colorcode": "#556B2F", "complementary": "#452F6B", "invert": "#AA94D0" },
    { "colorname": "DarkOrange", "colorcode": "#FF8C00", "complementary": "#0073FF", "invert": "#0073FF" },
    { "colorname": "DarkOrchid", "colorcode": "#9932CC", "complementary": "#65CC32", "invert": "#66CD33" },
    { "colorname": "DarkRed", "colorcode": "#8B0000", "complementary": "#008B8B", "invert": "#74FFFF" },
    { "colorname": "DarkSalmon", "colorcode": "#E9967A", "complementary": "#7ACDE9", "invert": "#166985" },
    { "colorname": "DarkSeaGreen", "colorcode": "#8FBC8F", "complementary": "#BC8FBC", "invert": "#704370" },
    { "colorname": "DarkSlateBlue", "colorcode": "#483D8B", "complementary": "#808B3D", "invert": "#B7C274" },
    { "colorname": "DarkSlateGray", "colorcode": "#2F4F4F", "complementary": "#4F2F2F", "invert": "#D0B0B0" },
    // { "colorname": "DarkSlateGrey", "colorcode": "#2F4F4F", "complementary": "#4F2F2F", "invert": "#D0B0B0" },
    { "colorname": "DarkTurquoise", "colorcode": "#00CED1", "complementary": "#D10300", "invert": "#FF312E" },
    { "colorname": "DarkViolet", "colorcode": "#9400D3", "complementary": "#3FD300", "invert": "#6BFF2C" },
    { "colorname": "DeepPink", "colorcode": "#FF1493", "complementary": "#14FF80", "invert": "#00EB6C" },
    { "colorname": "DeepSkyBlue", "colorcode": "#00BFFF", "complementary": "#FF4000", "invert": "#FF4000" },
    { "colorname": "DimGray", "colorcode": "#696969", "complementary": "#696969", "invert": "#969696" },
    // { "colorname": "DimGrey", "colorcode": "#696969", "complementary": "#696969", "invert": "#969696" },
    { "colorname": "DodgerBlue", "colorcode": "#1E90FF", "complementary": "#FF8D1E", "invert": "#E16F00" },
    { "colorname": "FireBrick", "colorcode": "#B22222", "complementary": "#22B2B2", "invert": "#4DDDDD" },
    { "colorname": "FloralWhite", "colorcode": "#FFFAF0", "complementary": "#F0F5FF", "invert": "#00050F" },
    { "colorname": "ForestGreen", "colorcode": "#228B22", "complementary": "#8B228B", "invert": "#DD74DD" },
    { "colorname": "Fuchsia", "colorcode": "#FF00FF", "complementary": "#00FF00", "invert": "#00FF00" },
    { "colorname": "Gainsboro", "colorcode": "#DCDCDC", "complementary": "#DCDCDC", "invert": "#232323" },
    { "colorname": "GhostWhite", "colorcode": "#F8F8FF", "complementary": "#FFFFF8", "invert": "#070700" },
    { "colorname": "Gold", "colorcode": "#FFD700", "complementary": "#0028FF", "invert": "#0028FF" },
    { "colorname": "GoldenRod", "colorcode": "#DAA520", "complementary": "#2055DA", "invert": "#255ADF" },
    { "colorname": "Gray", "colorcode": "#808080", "complementary": "#808080", "invert": "#7F7F7F" },
    { "colorname": "Green", "colorcode": "#008000", "complementary": "#800080", "invert": "#FF7FFF" },
    { "colorname": "GreenYellow", "colorcode": "#ADFF2F", "complementary": "#812FFF", "invert": "#5200D0" },
    // { "colorname": "Grey", "colorcode": "#808080", "complementary": "#808080", "invert": "#7F7F7F" },
    { "colorname": "HoneyDew", "colorcode": "#F0FFF0", "complementary": "#FFF0FF", "invert": "#0F000F" },
    { "colorname": "HotPink", "colorcode": "#FF69B4", "complementary": "#69FFB4", "invert": "#00964B" },
    { "colorname": "IndianRed", "colorcode": "#CD5C5C", "complementary": "#5CCDCD", "invert": "#32A3A3" },
    { "colorname": "Indigo", "colorcode": "#4B0082", "complementary": "#378200", "invert": "#B4FF7D" },
    { "colorname": "Ivory", "colorcode": "#FFFFF0", "complementary": "#F0F0FF", "invert": "#00000F" },
    { "colorname": "Khaki", "colorcode": "#F0E68C", "complementary": "#8C96F0", "invert": "#0F1973" },
    { "colorname": "Lavender", "colorcode": "#E6E6FA", "complementary": "#FAFAE6", "invert": "#191905" },
    { "colorname": "LavenderBlush", "colorcode": "#FFF0F5", "complementary": "#F0FFFA", "invert": "#000F0A" },
    { "colorname": "LawnGreen", "colorcode": "#7CFC00", "complementary": "#8000FC", "invert": "#8303FF" },
    { "colorname": "LemonChiffon", "colorcode": "#FFFACD", "complementary": "#CDD2FF", "invert": "#000532" },
    { "colorname": "LightBlue", "colorcode": "#ADD8E6", "complementary": "#E6BBAD", "invert": "#522719" },
    { "colorname": "LightCoral", "colorcode": "#F08080", "complementary": "#80F0F0", "invert": "#0F7F7F" },
    { "colorname": "LightCyan", "colorcode": "#E0FFFF", "complementary": "#FFE0E0", "invert": "#1F0000" },
    { "colorname": "LightGoldenRodYellow", "colorcode": "#FAFAD2", "complementary": "#D2D2FA", "invert": "#05052D" },
    { "colorname": "LightGray", "colorcode": "#D3D3D3", "complementary": "#D3D3D3", "invert": "#2C2C2C" },
    { "colorname": "LightGreen", "colorcode": "#90EE90", "complementary": "#EE90EE", "invert": "#6F116F" },
    // { "colorname": "LightGrey", "colorcode": "#D3D3D3", "complementary": "#D3D3D3", "invert": "#2C2C2C" },
    { "colorname": "LightPink", "colorcode": "#FFB6C1", "complementary": "#B6FFF4", "invert": "#00493E" },
    { "colorname": "LightSalmon", "colorcode": "#FFA07A", "complementary": "#7AD9FF", "invert": "#005F85" },
    { "colorname": "LightSeaGreen", "colorcode": "#20B2AA", "complementary": "#B22028", "invert": "#DF4D55" },
    { "colorname": "LightSkyBlue", "colorcode": "#87CEFA", "complementary": "#FAB387", "invert": "#783105" },
    { "colorname": "LightSlateGray", "colorcode": "#778899", "complementary": "#998877", "invert": "#887766" },
    // { "colorname": "LightSlateGrey", "colorcode": "#778899", "complementary": "#998877", "invert": "#887766" },
    { "colorname": "LightSteelBlue", "colorcode": "#B0C4DE", "complementary": "#DECAB0", "invert": "#4F3B21" },
    { "colorname": "LightYellow", "colorcode": "#FFFFE0", "complementary": "#E0E0FF", "invert": "#00001F" },
    { "colorname": "Lime", "colorcode": "#00FF00", "complementary": "#FF00FF", "invert": "#FF00FF" },
    { "colorname": "LimeGreen", "colorcode": "#32CD32", "complementary": "#CD32CD", "invert": "#CD32CD" },
    { "colorname": "Linen", "colorcode": "#FAF0E6", "complementary": "#E6F0FA", "invert": "#050F19" },
    { "colorname": "Magenta", "colorcode": "#FF00FF", "complementary": "#00FF00", "invert": "#00FF00" },
    { "colorname": "Maroon", "colorcode": "#800000", "complementary": "#008080", "invert": "#7FFFFF" },
    { "colorname": "MediumAquaMarine", "colorcode": "#66CDAA", "complementary": "#CD6689", "invert": "#993255" },
    { "colorname": "MediumBlue", "colorcode": "#0000CD", "complementary": "#CDCD00", "invert": "#FFFF32" },
    { "colorname": "MediumOrchid", "colorcode": "#BA55D3", "complementary": "#6ED355", "invert": "#45AA2C" },
    { "colorname": "MediumPurple", "colorcode": "#9370DB", "complementary": "#B8DB70", "invert": "#6C8F24" },
    { "colorname": "MediumSeaGreen", "colorcode": "#3CB371", "complementary": "#B33C7E", "invert": "#C34C8E" },
    { "colorname": "MediumSlateBlue", "colorcode": "#7B68EE", "complementary": "#DBEE68", "invert": "#849711" },
    { "colorname": "MediumSpringGreen", "colorcode": "#00FA9A", "complementary": "#FA0060", "invert": "#FF0565" },
    { "colorname": "MediumTurquoise", "colorcode": "#48D1CC", "complementary": "#D1484D", "invert": "#B72E33" },
    { "colorname": "MediumVioletRed", "colorcode": "#C71585", "complementary": "#15C757", "invert": "#38EA7A" },
    { "colorname": "MidnightBlue", "colorcode": "#191970", "complementary": "#707019", "invert": "#E6E68F" },
    { "colorname": "MintCream", "colorcode": "#F5FFFA", "complementary": "#FFF5FA", "invert": "#0A0005" },
    { "colorname": "MistyRose", "colorcode": "#FFE4E1", "complementary": "#E1FCFF", "invert": "#001B1E" },
    { "colorname": "Moccasin", "colorcode": "#FFE4B5", "complementary": "#B5D0FF", "invert": "#001B4A" },
    { "colorname": "NavajoWhite", "colorcode": "#FFDEAD", "complementary": "#ADCEFF", "invert": "#002152" },
    { "colorname": "Navy", "colorcode": "#000080", "complementary": "#808000", "invert": "#FFFF7F" },
    { "colorname": "OldLace", "colorcode": "#FDF5E6", "complementary": "#E6EEFD", "invert": "#020A19" },
    { "colorname": "Olive", "colorcode": "#808000", "complementary": "#000080", "invert": "#7F7FFF" },
    { "colorname": "OliveDrab", "colorcode": "#6B8E23", "complementary": "#46238E", "invert": "#9471DC" },
    { "colorname": "Orange", "colorcode": "#FFA500", "complementary": "#005AFF", "invert": "#005AFF" },
    { "colorname": "OrangeRed", "colorcode": "#FF4500", "complementary": "#00BAFF", "invert": "#00BAFF" },
    { "colorname": "Orchid", "colorcode": "#DA70D6", "complementary": "#70DA74", "invert": "#258F29" },
    { "colorname": "PaleGoldenRod", "colorcode": "#EEE8AA", "complementary": "#AAB0EE", "invert": "#111755" },
    { "colorname": "PaleGreen", "colorcode": "#98FB98", "complementary": "#FB98FB", "invert": "#670467" },
    { "colorname": "PaleTurquoise", "colorcode": "#AFEEEE", "complementary": "#EEAFAF", "invert": "#501111" },
    { "colorname": "PaleVioletRed", "colorcode": "#DB7093", "complementary": "#70DBB8", "invert": "#248F6C" },
    { "colorname": "PapayaWhip", "colorcode": "#FFEFD5", "complementary": "#D5E5FF", "invert": "#00102A" },
    { "colorname": "PeachPuff", "colorcode": "#FFDAB9", "complementary": "#B9DEFF", "invert": "#002546" },
    { "colorname": "Peru", "colorcode": "#CD853F", "complementary": "#3F87CD", "invert": "#327AC0" },
    { "colorname": "Pink", "colorcode": "#FFC0CB", "complementary": "#C0FFF4", "invert": "#003F34" },
    { "colorname": "Plum", "colorcode": "#DDA0DD", "complementary": "#A0DDA0", "invert": "#225F22" },
    { "colorname": "PowderBlue", "colorcode": "#B0E0E6", "complementary": "#E6B6B0", "invert": "#4F1F19" },
    { "colorname": "Purple", "colorcode": "#800080", "complementary": "#008000", "invert": "#7FFF7F" },
    { "colorname": "RebeccaPurple", "colorcode": "#663399", "complementary": "#669933", "invert": "#99CC66" },
    { "colorname": "Red", "colorcode": "#FF0000", "complementary": "#00FFFF", "invert": "#00FFFF" },
    { "colorname": "RosyBrown", "colorcode": "#BC8F8F", "complementary": "#8FBCBC", "invert": "#437070" },
    { "colorname": "RoyalBlue", "colorcode": "#4169E1", "complementary": "#E1B941", "invert": "#BE961E" },
    { "colorname": "SaddleBrown", "colorcode": "#8B4513", "complementary": "#13598B", "invert": "#74BAEC" },
    { "colorname": "Salmon", "colorcode": "#FA8072", "complementary": "#72ECFA", "invert": "#057F8D" },
    { "colorname": "SandyBrown", "colorcode": "#F4A460", "complementary": "#60B0F4", "invert": "#0B5B9F" },
    { "colorname": "SeaGreen", "colorcode": "#2E8B57", "complementary": "#8B2E62", "invert": "#D174A8" },
    { "colorname": "SeaShell", "colorcode": "#FFF5EE", "complementary": "#EEF8FF", "invert": "#000A11" },
    { "colorname": "Sienna", "colorcode": "#A0522D", "complementary": "#2D7BA0", "invert": "#5FADD2" },
    { "colorname": "Silver", "colorcode": "#C0C0C0", "complementary": "#C0C0C0", "invert": "#3F3F3F" },
    { "colorname": "SkyBlue", "colorcode": "#87CEEB", "complementary": "#EBA487", "invert": "#783114" },
    { "colorname": "SlateBlue", "colorcode": "#6A5ACD", "complementary": "#BDCD5A", "invert": "#95A532" },
    { "colorname": "SlateGray", "colorcode": "#708090", "complementary": "#908070", "invert": "#8F7F6F" },
    // { "colorname": "SlateGrey", "colorcode": "#708090", "complementary": "#908070", "invert": "#8F7F6F" },
    { "colorname": "Snow", "colorcode": "#FFFAFA", "complementary": "#FAFFFF", "invert": "#000505" },
    { "colorname": "SpringGreen", "colorcode": "#00FF7F", "complementary": "#FF0080", "invert": "#FF0080" },
    { "colorname": "SteelBlue", "colorcode": "#4682B4", "complementary": "#B47846", "invert": "#B97D4B" },
    { "colorname": "Tan", "colorcode": "#D2B48C", "complementary": "#8CAAD2", "invert": "#2D4B73" },
    { "colorname": "Teal", "colorcode": "#008080", "complementary": "#800000", "invert": "#FF7F7F" },
    { "colorname": "Thistle", "colorcode": "#D8BFD8", "complementary": "#BFD8BF", "invert": "#274027" },
    { "colorname": "Tomato", "colorcode": "#FF6347", "complementary": "#47E3FF", "invert": "#009CB8" },
    { "colorname": "Turquoise", "colorcode": "#40E0D0", "complementary": "#E04050", "invert": "#BF1F2F" },
    { "colorname": "Violet", "colorcode": "#EE82EE", "complementary": "#82EE82", "invert": "#117D11" },
    { "colorname": "Wheat", "colorcode": "#F5DEB3", "complementary": "#B3CAF5", "invert": "#0A214C" },
    { "colorname": "White", "colorcode": "#FFFFFF", "complementary": "#FFFFFF", "invert": "#000000" },
    { "colorname": "WhiteSmoke", "colorcode": "#F5F5F5", "complementary": "#F5F5F5", "invert": "#0A0A0A" },
    { "colorname": "Yellow", "colorcode": "#FFFF00", "complementary": "#0000FF", "invert": "#0000FF" },
    { "colorname": "YellowGreen", "colorcode": "#9ACD32", "complementary": "#6532CD", "invert": "#6532CD" }
];

const grays = [
    { "colorcode": "#000000" },
    { "colorcode": "#080808" },
    { "colorcode": "#101010" },
    { "colorcode": "#181818" },
    { "colorcode": "#202020" },
    { "colorcode": "#282828" },
    { "colorcode": "#303030" },
    { "colorcode": "#383838" },
    { "colorcode": "#404040" },
    { "colorcode": "#484848" },
    { "colorcode": "#505050" },
    { "colorcode": "#585858" },
    { "colorcode": "#606060" },
    { "colorcode": "#686868" },
    { "colorcode": "#696969" },
    { "colorcode": "#707070" },
    { "colorcode": "#787878" },
    { "colorcode": "#808080" },
    { "colorcode": "#888888" },
    { "colorcode": "#909090" },
    { "colorcode": "#989898" },
    { "colorcode": "#A0A0A0" },
    { "colorcode": "#A8A8A8" },
    { "colorcode": "#A9A9A9" },
    { "colorcode": "#B0B0B0" },
    { "colorcode": "#B8B8B8" },
    { "colorcode": "#BEBEBE" },
    { "colorcode": "#C0C0C0" },
    { "colorcode": "#C8C8C8" },
    { "colorcode": "#D0D0D0" },
    { "colorcode": "#D3D3D3" },
    { "colorcode": "#D8D8D8" },
    { "colorcode": "#DCDCDC" },
    { "colorcode": "#E0E0E0" },
    { "colorcode": "#E8E8E8" },
    { "colorcode": "#F0F0F0" },
    { "colorcode": "#F5F5F5" },
    { "colorcode": "#F8F8F8" },
    { "colorcode": "#FFFFFF" }
];


const toHex = (val) => {
    return (('00' + val.toString(16).toUpperCase()).substr(-2));
}

const code2Rgba = (code, alpha = 255) => {
    let result = [];
    result[0] = parseInt(code.substring(1, 3), 16);
    result[1] = parseInt(code.substring(3, 5), 16);
    result[2] = parseInt(code.substring(5, 7), 16);
    result[3] = alpha;
    return result;
}

const colorName2Code = (colorName) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext('2d');

    context.fillStyle = colorName;
    context.fillRect(0, 0, 1, 1);
    const img = context.getImageData(0, 0, 1, 1);
    const px = img.data;
    // const rgb = [px[0], px[1], px[2]];
    const rgb = '#' + toHex(px[0]) + toHex(px[1]) + toHex(px[2]);
    return rgb;
}

const getY = (colorVal) => {
    const color = (colorVal.includes('#')) ? colorVal.substr(-6, 6) : colorName2Code(colorVal).substr(-6, 6)
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const y = (r * 299 + g * 587 + b * 114) / 2550;
    // console.log(color, 'y', y, 'r', r, 'g', g, 'b', b);
    return y;
}

const isDark = (colorVal) => {
    const y = getY(colorVal);
    return (y < 50);
}

const generateGradation = (cStart, cEnd, num) => {
    const rainbow = new Rainbow();
    rainbow.setNumberRange(1, num);
    rainbow.setSpectrum(cStart, cEnd);
    const colors = [];
    for (var i = 1; i <= num; i++) {
        var hexColour = rainbow.colourAt(i);
        colors.push('#' + hexColour);
    }
    return colors;
}

const rgb2hsl = (rgb) => {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;

    var h = 0;
    var l = (max + min) / 2;
    var s = diff / (1 - (Math.abs(max + min - 1)));

    switch (min) {
        case max:
            h = 0;
            break;
        case r:
            h = (60 * ((b - g) / diff)) + 180;
            break;
        case g:
            h = (60 * ((r - b) / diff)) + 300;
            break;
        case b:
            h = (60 * ((g - r) / diff)) + 60;
            break;
    }

    return [h, s, l];
}

const rgb2hsv = (rgb) => {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;

    var h = 0;

    switch (min) {
        case max:
            h = 0;
            break;

        case r:
            h = (60 * ((b - g) / diff)) + 180;
            break;

        case g:
            h = (60 * ((r - b) / diff)) + 300;
            break;

        case b:
            h = (60 * ((g - r) / diff)) + 60;
            break;
    }

    var s = max == 0 ? 0 : diff / max;
    var v = max;

    return [h, s, v];
}