document.getElementById("color-btn").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
  
  document.getElementById("reload-btn").addEventListener("click", function () {
    window.location.href = "./main.html";
  });
  
  const h2Element = document.querySelectorAll(".inner-Element");
  const newtext = document.getElementById("addtext");
  const num1 = document.getElementById("greater");
  const num2 = document.getElementById("less");
  const buttons = document.querySelectorAll(".btn");
  
 
  let taskCount = 0;
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      alert("Board updated successfully");
      this.disabled = true;
      this.classList.add("bg-gray-300");
  
      num1.textContent = parseInt(num1.textContent) + 1;
      num2.textContent = parseInt(num2.textContent) - 1;
  
      const h2 = h2Element[i].textContent;
  
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  
      newtext.innerHTML += `<p class='text-lg space-y-2 border-b mb-2 mt-4 pb-2'>
        You have completed the task ${h2} at ${formattedTime}
      </p>`;
  
    
      taskCount++;
  
     
      if (taskCount === 6) {
        alert("Congrats! You have completed all the current task.");
      }
    });
  }
  
  document.body.addEventListener("click", function (event) {
    if (event.target?.id === "clear") {
      const paragraphs = newtext.querySelectorAll("p");
      if (paragraphs.length) {
        paragraphs.forEach((p) => p.remove());
        console.log("Tasks cleared successfully!");
      } else {
        console.log("No tasks to clear!");
      }
    }
  });
  
  const dateElement = document.getElementById('current-date');
  const today = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString('en-US', options);
  