// document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

console.log(count)
function increment() {
  count++
  countEl.textContent = count
  // document.getElementById("count-el").innerText = count
}

function save(){
  console.log(count)
  saveEl.textContent += (count + " - " )
  count = 0
  countEl.textContent = 0 
}