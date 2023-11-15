fetch("./data.json").then(response => response.json()).then(json => build(json));

const categoryColorMap = new Map();
categoryColorMap.set("Reaction", "var(--light-red)");
categoryColorMap.set("Memory", "var(--orangey-yellow)");
categoryColorMap.set("Verbal", "var(--green-teal)");
categoryColorMap.set("Visual", "var(--cobalt-blue)");

function build(jsonArray) {
    let total = 0;
    console.log(jsonArray);
    for (let i = 0; i < jsonArray.length; i++) {
        total += jsonArray[i].score;
        buildSummaryCard(jsonArray[i]);
    }
    total = Math.round(total / jsonArray.length)
    buildResult(total)
}

function buildSummaryCard(json) {
    const cardContainer = document.querySelector(".card-container");
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("summary-card");
    console.log(categoryColorMap.get(json.category));
    cardWrapper.style.setProperty("--card-color", categoryColorMap.get(json.category));
    cardWrapper.style.setProperty("--card-icon", "url(" + json.icon + ")");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.textContent = json.category;
    cardWrapper.appendChild(nameSpan);

    const scoreSpan = document.createElement("span");
    scoreSpan.classList.add("score");
    scoreSpan.textContent = json.score;
    cardWrapper.appendChild(scoreSpan);

    const outOfSpan = document.createElement("span");
    outOfSpan.classList.add("summary-out-of");
    outOfSpan.textContent = "/ 100";
    cardWrapper.appendChild(outOfSpan);

    cardContainer.appendChild(cardWrapper);
}

function buildResult(total) {
    const totalScore = document.querySelector(".total-score");
    totalScore.textContent = Math.round(total);

    const classification = document.querySelector(".classification");
    classification.textContent = "Great";

    const explanation = document.querySelector(".explanation");
    explanation.textContent = "You scored higher than 65% of the people who have taken these tests.";
}