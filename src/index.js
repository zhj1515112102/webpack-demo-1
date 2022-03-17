import x from './x.js'
import png from './assets/typicalMVC.png'
console.log(png)

const div = document.getElementById('app1')

div.innerHTML = `
  <img src = "${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () =>{
  const promise = import('./lazy')
  console.log(promise)
  promise.then((module)=>{
    // console.log(fn)
    const fn =module.default
    fn()
  },
  ()=>{})
}

div.appendChild(button)
console.log('hi2')
