const browserNameElement = document.getElementById('browserName');
const browserVersionElement = document.getElementById('browserVersion');
const userAgent = navigator.userAgent;
const browserInfo = userAgent.match(/(firefox|msie|chrome|safari|opr|edg|brave)\/?\s*(\d+)/i) || [];
const browserName = browserInfo[1];
const browserVersion = browserInfo[2];

browserNameElement.innerText = browserName ? browserName.charAt(0).toUpperCase() + browserName.slice(1) : "Unknown";
browserVersionElement.innerText = browserVersion || "Unknown";

document.getElementById('screenWidth').innerText = screen.width;
document.getElementById('screenHeight').innerText = screen.height;
document.getElementById('historyLength').innerText = history.length;

const paraCount = document.getElementsByTagName('p').length;
document.getElementById('paraCount').innerText = paraCount;
document.getElementById('replaceTextButton').addEventListener('click', () => {});

const newText = document.getElementById('newText').value;
const sampleTextElement = document.getElementById('sampleText');
sampleTextElement.innerText = newText || "The text has been replaced!";