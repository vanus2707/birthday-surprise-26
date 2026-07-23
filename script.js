const bikeSound = new Audio("music/bike.mp3");
const bgMusic = new Audio("music/music.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.25;
document.getElementById("continueBtn").addEventListener("click", function () {

    bikeSound.play();

    setTimeout(function () {
        bgMusic.play();
  }, 3000);

    showPage2();

});
function showPage2() {
    document.body.innerHTML = `
    <div class="page2">
        <h1>🏍️ Happy Birthday Biker! 🎂</h1>

        <p>

        </p>
<img src="images/bike-cake.jpg"
style="width:90%;
max-width:450px;
margin:25px 0;
border-radius:20px;
box-shadow:0 0 20px #00d9ff;">
        <button onclick="showPage3()">
            Let's Ride 🏍️
        </button>
    </div>
    `;
}
function showPage3() {
    document.body.innerHTML = `
    <div class="page2">
<pre style="text-align:left;font-size:17px;line-height:1.6;white-space:pre-wrap;">
> Initializing Birthday.exe...

Loading Memories...
████████ 100%

Loading Adventures...
████████ 100%

Loading Happiness...
████████ 100%

Loading Smiles...
████████ 100%

System Check...

✔ Software Engineer Detected 💻
✔ Bike Lover Verified 🏍️
✔ Khadoos Mode Enabled 😒
✔ Birthday Mode Activated 🎉

⚠ Developer Warning

This surprise has not been tested
against extreme levels of happiness.

Possible side effects:

😊 Unexpected Smiling
😂 Random Laughing
💭 Reliving Beautiful Memories
❤️ Feeling A Little Special

Status: Ready to Execute ✔

</pre>

<button onclick="showPage4()">
▶ Run Surprise.exe
</button>

</div>
    `;
}
function showPage4() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">
        <h1>✨ Ready to Relive Some Memories? ❤️</h1>

        <p>
        Every ride has a story...<br><br>

        Every smile has a memory...<br><br>

        Let's revisit a few unforgettable moments together.
        </p>

        <button onclick="showPage5()">
             📂 Open Memories ➜
        </button>
    </div>
    `;
}
function showPage5() {
    window.scrollTo(0, 0);

    document.body.innerHTML = `
    <div class="page2">

<pre style="text-align:left;font-size:17px;line-height:1.7;white-space:pre-wrap;">

💻 Rider_Profile.exe

> Booting Birthday Mode...

Loading Profile...
██████████ 100%

Name         : Khadoos 😒
Version      : 27.0 🎂
Profession   : Software Engineer 💻
Vehicle      : Yamaha MT-15 🏍️
Fuel         : Chai ☕
Favorite Mode: Ride Mode 🌄
Skills       : Coding + Riding + Being Khadoos 😎

System Status

✔ Heart Running
✔ Bike Running
✔ Birthday Running

Result

🎉 Ready for another awesome year!

</pre>
<img src="images/bike.jpg"
style="width:90%;
max-width:300px;
border-radius:20px;
margin:20px auto;
display:block;
box-shadow:0 0 20px rgba(0,255,255,0.5);">

<p style="margin-top:20px;font-size:18px;">
Made with ❤️ by someone who wanted to make you smile.
</p>

<button onclick="showPage6()">
Continue ➜
</button>


</div>
`;
}
function showPage6() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <h1>🌍 Imaginary Trip ✈️</h1>

        <img src="images/trip.jpg"
        style="
        width:90%;
        max-width:350px;
        border-radius:20px;
        box-shadow:0 0 20px #00d9ff;
        margin-top:20px;
        ">

        <p style="
        margin-top:25px;
        font-size:19px;
        line-height:1.8;
        ">

        Some journeys exist only in our imagination... ❤️<br><br>

        Yet they become the memories
        we cherish the most. 🌍🤍

        </p>

        <button onclick="showPage7()">
        Continue ➜
        </button>

    </div>
    `;
}
function showPage7() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <h1>🙏 A Small Prayer For You</h1>

        <img src="images/prayer.jpg"
        style="
        width:90%;
        max-width:320px;
        border-radius:20px;
        box-shadow:0 0 20px #00d9ff;
        margin-top:20px;
        ">

        <p style="
        margin-top:25px;
        font-size:19px;
        line-height:1.8;
        max-width:700px;
        ">

        "I'll pray to God that you achieve everything you wish for in life,
        find success in everything you do,
        and see all your dreams come true."

        <br><br>

        <b>Happy Birthday.</b>

        <br><br>

        Always wishing the very best for you. 🤍

        </p>

        <button onclick="showPage8()">
            Continue ➜
        </button>

    </div>
    `;
}

function showPage8() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <h1>🏆 Achievement Unlocked</h1>

<pre style="text-align:left;font-size:18px;line-height:1.8;white-space:pre-wrap;">

✔ Professional Bug Fixer 💻

✔ Certified Bike Lover 🏍️

✔ Expert in Making Memories 📸

✔ Khadoos Since Forever 😒

✔ Birthday Level Completed 🎂

━━━━━━━━━━━━━━━━━━━━

🎉 NEW ACHIEVEMENT 🎉

LEVEL 27 UNLOCKED

━━━━━━━━━━━━━━━━━━━━

Reward:
Unlimited Happiness 🤍
365 New Adventures 🏍️
Infinite Smiles 😊

</pre>

<button onclick="showPage9()">
Continue ➜
</button>

    </div>
    `;
}

function showPage9() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <h1>💬 A Few Conversations...</h1>

        <p style="max-width:700px;font-size:20px;line-height:1.8;">
        Who knew these little conversations would become some of my favorite memories?

        Some chats may seem ordinary, but they often become the most special memories. 🤍✨
        </p>

        <div class="chat-box">
            <h3>💬 Chat 1</h3>
            <p>V: Oye Khadoos... 😉</p>
            <p>A: Vo to mai hu.</p>
            <p>V: Ahoo chal. 😂</p>
            <p>A: Bhasha sudhar le apni...</p>
        </div>

        <div class="chat-box">
            <h3>💬 Chat 2</h3>
            <p>V: Oye sun na... hamesha busy. 🙄</p>
            <p>A: Chachi ruk ja, kaam kar raha hu. 😂</p>
            <p>V: Mujhe nahi baat karni ab.</p>
            <p>A: Chid gayi? 😆</p>
            <p>V: Nahi to, main kyu chidti? 😏</p>
        </div>

        <div class="chat-box">
            <h3>💬 Chat 3</h3>
            <p>A: Kya baat, mood hai kya? 😄</p>
            <p>V: Nahi to... tera hai to bata. 😂</p>
        </div>

        <div class="chat-box">
            <h3>💬 Chat 4</h3>
            <p>V: Oye sun na... Aaj pata kya hua...</p>
            <p>A: Okay. 😄</p>
            <p><i>(Aur uske baad seedha...)</i></p>
            <p>V: Good night. 😴</p>
            <p>A: Good night. 😴</p>
        </div>

        <button onclick="showPage10()">
            Continue ➜
        </button>

    </div>
`;
}

function showPage10() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

                <img src="images/google.jpg"
style="
width:95%;
max-width:650px;
margin-top:10px;
border-radius:15px;
display:block;
margin-left:auto;
margin-right:auto;
box-shadow:0 0 20px rgba(0,255,255,0.5)
">
        
        <button onclick="showPage11()">
        
            Continue ➜
        </button>

    </div>
    `;
}function showPage11() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <h1>💌 A Letter For You</h1>

        <div style="
            width:90%;
            max-width:700px;
            background:rgba(255,255,255,0.08);
            border-radius:20px;
            padding:25px;
            text-align:left;
            line-height:1.9;
            font-size:18px;
        ">

        <p>

        Oye Khadoos... 😏

        <br><br>

        <b>Happy Birthday! 🎂✨</b>

        <br><br>

        I know you're the least interested in celebrating your birthday,
        but your birthday might be the least important day for you...
        <b>not for me.</b> 😄

        <br><br>

        So I just wanted to do something a little different this year—
        something that wasn't just a birthday message,
        but a collection of little moments, smiles, and memories.

        <br><br>

        I hope you liked this little surprise. 🤍

        <br><br>

        I'm so grateful to have a friend like you.
        Thank you for being someone I can always count on,
        for all the laughs, the memories,
        and the little moments that mean so much.

        <br><br>

        Sometimes life changes in ways we don't expect,
        and things may not be the same as they once were.
        But I'll always cherish the memories we made together,
        and I'm truly thankful that our paths crossed.

        <br><br>

        And if I ever hurt you,
        knowingly or unknowingly,
        I'm sorry.

        <br><br>

        I pray that you always stay happy,
        achieve everything you dream of,
        and get everything you truly deserve in life.

        <br><br>

        Thank you for taking the time to go through this little surprise.

        <br><br>

        <b>Happy 27th Birthday! 🏍️🎂</b>

        <br><br>

        Always wishing the very best for you. 🤍

        </p>

        </div>

        <button onclick="showPage12()">
            Final Page ➜
        </button>

    </div>
    `;
}function showPage12() {
    window.scrollTo(0,0);

    document.body.innerHTML = `
    <div class="page2">

        <div style="
        max-width:700px;
        padding:20px;
        animation:fadeIn 2s;">

        <h1>🤍</h1>

        <p style="
        font-size:22px;
        line-height:2;">

        Thank you for taking the time<br>
        to go through this little surprise.

        <br><br>

        I hope it made you smile,<br>
        even if just for a while.

        <br><br>

        🏍️ <b>Happy 27th Birthday! 🎂</b>

        <br><br>

        Ride Safe.<br>
        Stay Happy.<br>
        Keep Smiling.

        <br><br>

        🤍

        <br><br>

        Goodbye...<br>
        Take Care.

        </p>

        <h2 style="
        margin-top:40px;
        color:#00d9ff;
        text-shadow:0 0 20px #00d9ff;">
        ✨ The End ✨
        </h2>

        </div>

    </div>
    `;
}