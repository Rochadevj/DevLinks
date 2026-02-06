function toggleMode () {
const html = document.documentElement
html.classList.toggle('light')
}

function updateClock() {
  const time = document.getElementById("time")
  if (!time) return

  const date = new Date()
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  const dayNight = hours >= 12 ? "PM" : "AM"

  hours = hours % 12 || 12
  const formattedHours = String(hours).padStart(2, "0")

  time.textContent = `${formattedHours}:${minutes}:${seconds} ${dayNight}`
}

updateClock()
setInterval(updateClock, 1000)
