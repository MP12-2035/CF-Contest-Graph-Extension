# Codeforces Contest Graph

Plots Codeforces contest participants as a scatter plot:
- **X-axis:** Rating
- **Y-axis:** Rank
- **Color:** CF rating color
- **Size:** Number of problems solved
- **Highlight:** Your handle & friends
- **Hover:** handle, rating, solved problems
- **Click:** opens CF profile

## Setup

1. Clone repo
2. Open Chrome → Extensions → Load unpacked → Select repo folder
3. Open a CF contest standings page → Extension popup → Enter handles
4. Graph will render automatically

## Optional

- Refresh every 5–10 minutes via background script
- Highlight multiple friends by adding handles in popup
--------------------------------------

Structure:

cf-contest-graph/
│
├── manifest.json
├── README.md
├── popup.html
├── popup.js
├── background.js
├── content.js
├── graph.js
├── utils.js
└── styles.css
