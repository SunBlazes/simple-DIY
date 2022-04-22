const $red = document.querySelector(".red")
const $white = document.querySelector(".white")
const $container = document.querySelector(".container")

const docu_el = document.documentElement
let TotalHeight = docu_el.clientHeight * 2

window.onscroll = function () {
  const ratio = docu_el.scrollTop / TotalHeight

  if (ratio < 0.5) {
    genClipPath($white, (0.5 - ratio) / 0.5)
  } else {
    genClipPath($white, 0)
  }

  if (ratio >= 0.5) {
    genClipPath($red, (1 - ratio) / 0.5)
  } else {
    genClipPath($red, 1)
  }

  if (ratio >= 1) {
    $container.classList.remove("fixed")
    $container.classList.add("nofixed")
  } else {
    $container.classList.add("fixed")
    $container.classList.remove("nofixed")
  }
}

function genClipPath(dom, top) {
  top = top * 100 + "%"
  dom.style["clip-path"] = `inset(${top} 0 0 0)`
}

document.querySelector("button").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

  return false
}
