let letters = document.querySelectorAll(".letter:not(.broken)")
console.log(letters)

const middle = 2
const offset = 1
const offsetHalf = offset / 2

letters.forEach((node) => {
  const v = middle + (-offsetHalf + Math.random() * offset)
  node.style.setProperty("--animTime", v + "s")

  setTimeout(() => {
    const newt = middle + (-offsetHalf + Math.random() * offset)
    node.style.setProperty("--animTime", newt + "s")
  }, v * 1000)
})
