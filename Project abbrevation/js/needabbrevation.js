const abbreviations = {
 "HTML": {
        full: "HyperText Markup Language",
        desc: "HTML is the standard language used to create and structure content on the Web.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    "CSS": {
        full: "Cascading Style Sheets",
        desc: "CSS is used to style and layout web pages, including colors, fonts, and spacing.",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    "CPU": {
        full: "Central Processing Unit",
        desc: "The CPU is the main chip in a computer that performs calculations and runs programs.",
        img: "./images/CPU.jpg"
    },
    "RAM": {
        full: "Random Access Memory",
        desc: "RAM is temporary memory that helps your computer run applications and process data quickly.",
        img: "./images/ram.jpg"
    },
    "LOL": {
        full: "Laughing out loud.",
        desc: "LOL is often used in text messages or social media to express laughter or amusement.",
        img: "./images/lol.jpg"
    },
    "ASAP": {
        full: "As soon as possible.",
        desc: "ASAP means doing something immediately or without delay, often used in urgent tasks.",
        img: "./images/asap.jpeg"
    },
    "FYI": {
        full: "For your information.",
        desc: "FYI is used to share helpful or important information, typically in emails or chats.",
        img: "./images/fyI.jpg"
    },
    "TTYL": {
        full: "Talk to you later.",
        desc: "TTYL is a casual way to end a conversation, letting the other person know you'll talk again soon.",
        img: "./images/ttyl.jpeg"
    },
    "BRB": {
        full: "Be right back.",
        desc: "BRB is used when you temporarily leave a conversation but intend to return shortly.",
        img: "./images/brb.jpeg"
    },
    "IMO": {
        full: "In my opinion.",
        desc: "IMO is used to share your personal viewpoint or belief about a topic.",
        img: "./images/imo.jpeg"
    },
    "IDK": {
        full: "I don't know.",
        desc: "IDK is a quick way to say that you are unsure or don’t have the answer to something.",
        img: "./images/idk.jpeg"
    },
    "LMK": {
        full: "Let me know.",
        desc: "LMK is often used to ask someone to inform or update you about something later.",
        img: "./images/lmk.jpeg"
    },
    "NVM": {
        full: "Never mind.",
        desc: "NVM is used to cancel a statement or say that something is no longer important.",
        img: "./images/Nevermind.png"
    },
    "ILY": {
        full: "I love you.",
        desc: "ILY is a way of expressing affection, usually in texts between people who care about each other.",
        img: "./images/i-love-you-png.webp"
    },
    "OMG": {
        full: "Oh my god.",
        desc: "OMG is used to express surprise, shock, excitement, or disbelief.",
        img: "./images/omg.jpg"
    },
    "BTW": {
        full: "By the way.",
        desc: "BTW is used to introduce a side note, extra detail, or related information in a conversation.",
        img: "./images/btw.png"
    },
    "TBH": {
        full: "To be honest.",
        desc: "TBH is used to express sincerity or share your true thoughts about something.",
        img: "./images/tbh.jpeg"
    }
};

const urlParams = new URLSearchParams(window.location.search);
const abbr = urlParams.get("abbr");

if (abbr && abbreviations[abbr]) {
    const data = abbreviations[abbr];
    document.getElementById("meaningBox").textContent = `${abbr} - ${data.full}`;
    document.getElementById("descriptionBox").textContent = data.desc;

    const logo = document.getElementById("logo");
    logo.src = data.img;
    logo.style.display = "block";
} else {
    document.getElementById("meaningBox").textContent = "Abbreviation not found!";
    document.getElementById("logo").style.display = "none";
    document.getElementById("descriptionBox").textContent = "";
}


