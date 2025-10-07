chrome.runtime.onInstalled.addListener(() => {
    console.log("CF Contest Graph Installed");
});

async function fetchStandings(contestId) {
    const url = `https://codeforces.com/api/contest.standings?contestId=${contestId}&from=1&count=5000&showUnofficial=false`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "OK") {
        return data.result.rows.map(row => ({
            handle: row.party.members[0].handle,
            rank: row.rank,
            solved: row.problemResults.filter(p => p.points > 0).length,
            rating: row.party.members[0].handleRating || 1500
        }));
    }
    return [];
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "fetchStandings") {
        fetchStandings(msg.contestId).then(data => sendResponse({users: data}));
        return true;
    }
});
