const searchBox = document.getElementById("searchBox");
const suggestionsBox = document.getElementById("suggestions");

const abbreviations = {
    "HTML": "HyperText Markup Language",
    "CSS": "Cascading Style Sheets",
    "CPU": "Central Processing Unit",
    "RAM": "Random Access Memory",
    "LOL": "Laughing out loud.",
   "ASAP": "As soon as possible.",
   "FYI": "For your information.",
    "TTYL": "Talk to you later.",
   "BRB": "Be right back.",
   "IMO": "In my opinion.",
   "IDK": "I don't know.",
   "LMK": "Let me know.",
   "NVM": "Never mind.",
   "ILY": "I love you.",
   "OMG": "Oh my god.",
   "BTW": "By the way.",
    "TBH":"To be Honest."
};

searchBox.addEventListener("input", () => {
    const query = searchBox.value.toUpperCase().trim();
    suggestionsBox.innerHTML = "";

    if (!query) {
        suggestionsBox.style.display = "none";
        return;
    }

    const matches = Object.keys(abbreviations).filter(key =>
        key.includes(query)
    );

    if (matches.length) {
        suggestionsBox.style.display = "block";
        matches.forEach(match => {
            const div = document.createElement("div");
            div.textContent = `${match} - ${abbreviations[match]}`;
            div.addEventListener("click", () => {
                searchBox.value = match;
                suggestionsBox.style.display = "none";
            });
            suggestionsBox.appendChild(div);
        });
    } else {
        suggestionsBox.style.display = "block";
        const noMatch = document.createElement("div");
        noMatch.textContent = "No abbreviation found";
        noMatch.style.color = "red";
        suggestionsBox.appendChild(noMatch);
    }
});

document.addEventListener("click", (e)=> { 
    if (!document.querySelector(".search-container").contains(e.target)) {
        suggestionsBox.style.display = "none";
     }
     
});
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const query = searchBox.value.toUpperCase().trim();
    if (abbreviations[query]) {
        window.location.href = `needabbrevation.html?abbr=${query}`;
    } else {
        alert("Abbreviation not found!");
    }
});

