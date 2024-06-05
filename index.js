// document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let copy = "Total entries: "
console.log(countEl)

let count = 0
let total = 0

console.log(count)
function increment() {
  count++
  countEl.textContent = count
  // document.getElementById("count-el").innerText = count
}

function save(){
  console.log(count)
  saveEl.textContent += (count + " - " )
  total += count
  totalEl.textContent = copy + total
  count = 0
  countEl.textContent = 0 
}