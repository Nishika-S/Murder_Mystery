function checkBinary() {
  let input = document.getElementById("answer").value.toLowerCase();

  if (input === "rafi") {
    document.getElementById("result").innerHTML =
      "🔓 Folder unlocked.<br><br>" +
      "<em>'If you're reading this, I'm already gone. It was the coffee. I felt it immediately. I know who did it. I should have trusted my instincts about Rafi years ago. The book was the beginning. The poison was the end. The gold is where I first—'</em>" +
      "<br><br>" +
      "<br><br>" +
      "🧩 Evidence Collected: Blackwell himself named Rafi. Poison confirmed. <br><br>" +
      "➡️ <a href='final.html' style='color:#00ffcc'>Return to FOA for the final verdict »</a>";
  } else {
    document.getElementById("result").innerHTML =
      "❌ Wrong password. Try again.";
  }
}

function checkFinal() {
  let choice = document.getElementById("killer").value;
  let resultElement = document.getElementById("result");

  if (choice === "rafi") {
    resultElement.innerHTML =
      "🎉 CORRECT! Dr. Rafi Osman poisoned Professor Blackwell's coffee using Oleander extract. Blackwell had stolen full credit for their co-authored book — and Rafi had finally had enough.";
  } else if (choice === "victor") {
    resultElement.innerHTML =
      "❌ Close — Victor Hale threatened Blackwell, but threats aren't murder. He was protecting himself, not killing.";
  } else if (choice === "lena") {
    resultElement.innerHTML =
      "❌ Lena had a grudge, but no access to the poison and no key.";
  } else if (choice === "doyle") {
    resultElement.innerHTML =
      "❌ Mrs. Doyle heard too much — but she was a witness, not the killer.";
  } else {
    resultElement.innerHTML =
      "⚠️ Please select a suspect and provide a motive.";
  }
}
