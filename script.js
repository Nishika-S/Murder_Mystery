function checkBinary() {
  let input = document.getElementById("answer").value.toLowerCase();

  if (input === "book") {
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
