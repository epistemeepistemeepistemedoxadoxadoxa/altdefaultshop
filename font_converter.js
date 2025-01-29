// font-converter.js
const fs = require('fs');
const path = require('path');

// Function to convert font file to Base64
function convertFontToBase64(fontPath) {
    const fontBuffer = fs.readFileSync(fontPath);
    return fontBuffer.toString('base64');
}

// Function to generate @font-face declaration with Base64
function generateFontFace(fontFamily, woff2Base64, options = {}) {
    const {fontWeight, fontStyle, fontDisplay, webkitFontSmoothing} = options;
    
    let css = `@font-face {\n`;
    css += `    font-family: '${fontFamily}';\n`;
    css += `    src: url(data:application/x-font-woff2;charset=utf-8;base64,${woff2Base64}) format('woff2');\n`;
    
    if (fontWeight) css += `    font-weight: ${fontWeight};\n`;
    if (fontStyle) css += `    font-style: ${fontStyle};\n`;
    if (fontDisplay) css += `    font-display: ${fontDisplay};\n`;
    if (webkitFontSmoothing) css += `    -webkit-font-smoothing: ${webkitFontSmoothing};\n`;
    
    css += `}\n\n`;
    return css;
}

// Function to process all fonts
function processFonts() {
    const fontDefinitions = [
        {
            family: 'MetaballTimes',
            file: 'MetaballTimesCaps-Regular.woff2'
        },
        {
            family: 'MetaballveticaNeueLTStdCn',
            file: 'MetaballveticaNeueLTStdCn-Regular.woff2',
            options: {
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontDisplay: 'swap'
            }
        },
        {
            family: 'SerifDiamond',
            file: 'SerifDiamond-Regular.woff2'
        },
        {
            family: 'CommAlt',
            file: 'CommunityAlternative-Regular.woff2'
        },
        {
            family: 'TacMono',
            file: 'TacMono-Regular.woff2'
        },
        {
            family: 'GaramondCluster',
            file: 'Serif_Cluster.woff2'
        },
        {
            family: 'DashDot',
            file: 'Million_Underscore_Script.woff2'
        },
        {
            family: 'StarBlock',
            file: 'StarBlock-Regular.woff2'
        },
        {
            family: 'PixelBrukt',
            file: 'PixelBrukt-Regular.woff2'
        },
        {
            family: 'Tac3',
            file: 'Tac3Diamond-Regular.woff2'
        },
        {
            family: 'MonolineColant',
            file: 'MonolineColant-Regular.woff2',
            options: {
                fontWeight: '400',
                webkitFontSmoothing: 'antialiased'
            }
        },
        {
            family: 'Yor',
            file: 'Yorick_Monoline.woff2',
            options: {
                fontWeight: '400',
                webkitFontSmoothing: 'antialiased'
            }
        },
        {
            family: 'Bibli',
            file: 'BiblioMonoline-Regular.woff2',
            options: {
                fontWeight: '400',
                webkitFontSmoothing: 'antialiased'
            }
        },
        {
            family: 'EttaEXP',
            file: 'Etta_Mono_Exp.woff2',
            options: {
                fontWeight: '400',
                webkitFontSmoothing: 'antialiased'
            }
        }
    ];

    let cssOutput = '/* Base64 Encoded Font-face declarations */\n\n';

    fontDefinitions.forEach(def => {
        const fontPath = path.join(__dirname, def.file);
        try {
            const base64Data = convertFontToBase64(fontPath);
            cssOutput += generateFontFace(def.family, base64Data, def.options);
        } catch (error) {
            console.error(`Error processing ${def.file}: ${error.message}`);
        }
    });

    // Write the output to a new CSS file
    fs.writeFileSync('fonts-base64.css', cssOutput);
    console.log('Font conversion complete! Check fonts-base64.css');
}

processFonts();