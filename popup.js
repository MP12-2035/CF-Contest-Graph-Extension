document.getElementById('saveBtn').addEventListener('click', () => {
    const myHandle = document.getElementById('myHandle').value.trim();
    const friends = document.getElementById('friends').value.split(',').map(h => h.trim());
    const refresh = parseInt(document.getElementById('refresh').value);

    chrome.storage.local.set({ myHandle, friends, refresh }, () => {
        alert('Settings saved!');
    });
});
