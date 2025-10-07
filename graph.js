function ratingColor(rating) {
    if (rating < 1200) return "gray";
    if (rating < 1400) return "green";
    if (rating < 1600) return "cyan";
    if (rating < 1900) return "blue";
    if (rating < 2100) return "violet";
    if (rating < 2300) return "orange";
    if (rating < 2400) return "red";
    return "darkred";
}

function profileLink(handle) {
    return `https://codeforces.com/profile/${handle}`;
}

function plotGraph(users, myHandles = []) {
    const data = [{
        x: users.map(u => u.rating),
        y: users.map(u => u.rank),
        text: users.map(u => `${u.handle}<br>Rating: ${u.rating}<br>Problems: ${u.solved}`),
        mode: 'markers',
        marker: {
            size: users.map(u => 5 + u.solved * 3),
            color: users.map(u => myHandles.includes(u.handle) ? 'gold' : ratingColor(u.rating)),
            line: {width: 1, color: 'black'}
        },
        hoverinfo: 'text'
    }];

    Plotly.newPlot('graphDiv', data, {
        xaxis: {title: 'Rating'},
        yaxis: {title: 'Rank', autorange: 'reversed'}
    });

    const graphDiv = document.getElementById('graphDiv');
    graphDiv.on('plotly_click', function(data){
        const point = data.points[0];
        const handle = users[point.pointIndex].handle;
        window.open(profileLink(handle), '_blank');
    });
}
