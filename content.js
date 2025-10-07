(function() {
    // Create the graph container
    const div = document.createElement('div');
    div.id = 'graphDiv';
    div.style.width = '100%';
    div.style.height = '600px';
    div.style.marginBottom = '20px';
    document.body.prepend(div);

    // Get contest ID from URL
    const urlParts = window.location.pathname.split('/');
    const contestId = urlParts[2];

    // Get user handles from storage
    chrome.storage.local.get(['myHandle', 'friends'], async (res) => {
        const myHandles = [res.myHandle, ...(res.friends || [])];

        // Fetch contest standings from background.js
        chrome.runtime.sendMessage({action: "fetchStandings", contestId}, response => {
            if (response && response.users && response.users.length > 0) {
                plotGraph(response.users, myHandles);
            } else {
                div.innerHTML = "<p>Failed to load contest data.</p>";
            }
        });
    });
})();
