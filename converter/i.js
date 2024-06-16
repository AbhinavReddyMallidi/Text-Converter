function convertToTxt() {
    const inputText = document.getElementById('inputText').value;
    const blob = new Blob([inputText], { type: 'text/plain' });
    saveAs(blob, 'output.txt');
}

function convertToHtml() {
    const inputText = document.getElementById('inputText').value;
    const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Text to HTML</title>
        </head>
        <body>
            <pre>${inputText}</pre>
        </body>
        </html>
    `;
    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    saveAs(blob, 'output.html');
}

function convertToJs() {
    const inputText = document.getElementById('inputText').value;
    const jsCode = `const text = \`${inputText}\`;`;
    const blob = new Blob([jsCode], { type: 'text/javascript' });
    saveAs(blob, 'output.js');
}

function convertToSvg() {
    const inputText = document.getElementById('inputText').value;
    const svgTemplate = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="30">${inputText}</text>
        </svg>
    `;
    const blob = new Blob([svgTemplate], { type: 'image/svg+xml' });
    saveAs(blob, 'output.svg');
}

// saveAs function for saving the file
function saveAs(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
