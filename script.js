function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const theme = html.classList.contains("light") ? "light" : "dark"
  localStorage.setItem("preferred-theme", theme)
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("preferred-theme")
  if (savedTheme === "light") {
    document.documentElement.classList.add("light")
  }
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

function updateFooterYear() {
  const year = document.getElementById("current-year")
  if (!year) return
  year.textContent = new Date().getFullYear()
}

applySavedTheme()
updateClock()
updateFooterYear()
setInterval(updateClock, 1000)
