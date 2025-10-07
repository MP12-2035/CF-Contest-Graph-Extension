// Inject Plotly from CDN
const plotlyScript = document.createElement('script');
plotlyScript.src = "https://cdn.plot.ly/plotly-latest.min.js";
plotlyScript.onload = () => {
    initGraph(); // your function that calls plotGraph()
};
document.head.appendChild(plotlyScript);

function initGraph() {
    const div = document.createElement('div');
    div.id = 'graphDiv';
    div.style.width = '100%';
    div.style.height = '600px';
    document.body.prepend(div);

    const urlParts = window.location.pathname.split('/');
    const contestId = urlParts[2];

    chrome.storage.local.get(['myHandle', 'friends'], async (res) => {
        const myHandles = [res.myHandle, ...(res.friends || [])];
        chrome.runtime.sendMessage({action: "fetchStandings", contestId}, response => {
            plotGraph(response.users, myHandles);
        });
    });
}
