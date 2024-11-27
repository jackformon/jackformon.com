document.addEventListener("DOMContentLoaded", () => {
  const textTitle = "Hi, I'm Jack Formon ";
  const textBioLines = [
    "I am a junior majoring in Economics",
    " at Georgetown University.",
    "I am currently studying abroad in",
    "Prague, Czechia, and I am very",
    "passionate about becoming a investment",
    "banker. I am seeking summer '25",
    "internship opportunities.",
  ];

  const typingElement = document.querySelector(".typing");
  const typingBioElement = document.querySelector(".typing-bio");
  const terminalElement = document.querySelector(".terminal");
  let typingActive = true;

  let indexTitle = 0;
  let lineIndex = 0; // Declare lineIndex here
  let charIndex = 0;

  // Typing effect for the title
  const typeTitle = () => {
    if (indexTitle < textTitle.length) {
      typingElement.innerHTML =
        textTitle.slice(0, indexTitle + 1) + `<span class="cursor">|</span>`;
      indexTitle++;
      setTimeout(typeTitle, 150);
    } else {
      // Remove the blinking cursor from the title
      typingElement.innerHTML = textTitle;
      // Start typing the bio after 1 second
      setTimeout(() => {
        typingBioElement.innerHTML = `<span class="cursor-bio">|</span>`;
        typeBio();
      }, 1000);
    }
  };

  // Typing effect for the bio
  const typeBio = () => {
    if (lineIndex < textBioLines.length) {
      const currentLine = textBioLines[lineIndex];
      if (charIndex < currentLine.length) {
        // Dynamically generate typed text without unnecessary spacing
        typingBioElement.innerHTML =
          textBioLines.slice(0, lineIndex).join("<br>") +
          (lineIndex > 0 ? "<br>" : "") +
          currentLine.slice(0, charIndex + 1) +
          `<span class="cursor-bio">|</span>`;
        charIndex++;
        setTimeout(typeBio, 75); // Adjust speed here
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeBio, 200); // Pause between lines
      }
    } else {
      // Keep cursor blinking at the end of the last line
      typingBioElement.innerHTML =
        textBioLines.join("<br>") + `<span class="cursor-bio">|</span>`;
      showButton();
    }
  };

  // Function to show the button
  const showButton = () => {
    const button = document.createElement("button");
    button.classList.add("enter-button");
    button.textContent = "Enter Portfolio";
    button.onclick = () => {
      window.location.href = "mainPage.html";
    };

    // Append the button to the terminal container below the bio
    terminalElement.appendChild(button);
    setTimeout(() => {
      button.style.display = "block";
    }, 500);
  };

  const createSkipButton = () => {
    const skipButton = document.createElement("button");
    skipButton.classList.add("skip-button");
    skipButton.textContent = "Skip";
    skipButton.onclick = () => {
      typingActive = false; // Stop the typing effect
      showButton(); // Display the "Enter Portfolio" button
    };
    document.body.appendChild(skipButton);
  };

  // Start typing the title after 2 seconds
  setTimeout(typeTitle, 2000);

  setTimeout(createSkipButton, 4000);
});
