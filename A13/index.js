const $h1 = document.querySelector("h1")
const $theChip = document.querySelector("#the-chip")
const $A13 = document.querySelector("#A13")
const $A13TextBg = document.querySelector("#the-chip .text-bg")

window.addEventListener("scroll", () => {
  const d_el = document.documentElement

  // 露出视口的比例
  let scrolled = d_el.scrollTop / (d_el.scrollHeight - d_el.clientHeight)

  $theChip.style.width = $theChip.style.height =
    Math.pow(scrolled, 3) * d_el.clientWidth * 20 + "px"

  if (scrolled <= 0.1) {
    $h1.style.opacity = (0.1 - scrolled) / 0.1
    $h1.style["margin-top"] = scrolled * 1000 * -1 + "px"
  } else {
    $h1.style.opacity = 0
  }

  if (scrolled <= 0.2) {
    $A13.style.opacity = (scrolled - 0.1) / 0.1
  } else {
    $A13.style.opacity = 1
  }

  if (scrolled >= 0.5) {
    $A13TextBg.style.opacity = (1 - scrolled) / 0.5
    $theChip.classList.add("transparent")
  } else {
    $A13TextBg.style.opacity = 1
    $theChip.classList.remove("transparent")
  }

  if (scrolled >= 0.95) {
    $theChip.style.opacity = (1 - scrolled) / 0.05
  } else {
    $theChip.style.opacity = 1
  }
})
