function generateStory() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    let lovePercentage = Math.floor(Math.random() * 30) + 70
    let loveStories = [
        `"The moment ${name1} saw ${name2}, time stood still. It was as if the universe whispered, ‘This is the one.’ 💫"`,
        `"They were two lost souls until their hearts collided. ${name1} and ${name2} weren’t just lovers—they were a cosmic miracle. ✨"`,
        `"Every love story is beautiful, but ${name1} and ${name2}’s is written in the stars, shining forever in the night sky. 🌙"`,
        `"Not every meeting is an accident. ${name1} and ${name2} were always meant to find each other, like waves finding the shore. 🌊"`,
        `"They laughed, they fought, they loved—but in the end, nothing could break the bond between ${name1} and ${name2}. ❤️"`,
        `"A thousand lifetimes wouldn’t be enough for ${name1} to love ${name2}. But in this one, they’d make every second count. 💞"`
    ];
    

    let randomStory = loveStories[Math.floor(Math.random() * loveStories.length)];
    let storyContent = document.getElementById("story-content");

    storyContent.innerHTML = `
        <h2 style = "font-family: 'Faculty Glyphic', cursive; font-size: 22px; color: #FF69B4  ;">${name1} ❤️ ${name2}</h2>
        <p style="font-family: 'Dancing Script', cursive; font-size: 20px; color: white;">
        ${randomStory}
    </p>
        <h3 style="font-family: 'Faculty Glyphic', cursive; font-size: 18px; color: #FF69B4  ;">Love Compatibility: ${lovePercentage}% 💖</h3>
    `;

    document.getElementById("story-card").style.display = "block";
    document.getElementById("bg-music").play();
}

// ⭐ Rate Story
function rateStory(stars) {
    alert(`You rated this story ${stars} stars! Thank you! 🌟`);
}

// 💌 Share Story
function shareStory() {
    let text = document.getElementById("story-content").innerText;
    navigator.clipboard.writeText(text);
    alert("Story copied! Share it with your loved one! 💕");
}

// 🌙 Toggle Theme
document.getElementById("themeSwitch").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
});
