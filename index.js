const painting = document.querySelector('.painting')
const pixels = document.querySelectorAll('.pixel')
const palette = document.querySelectorAll('.color-choice')
let selectedColor = 'Blue'

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
}) 
painting.addEventListener('dblclick', function(e){
    console.log('white')
    e.target.style.backgroundColor = 'white'
}) 

for (let i = 0; i<palette.length; i++){
        palette[i].addEventListener('click', function(){
        selectedColor = palette[i].id
        })
}

let container = document.querySelector('.palette')
let clearBtn = document.createElement('button')
clearBtn.innerText = 'Clear'
clearBtn.addEventListener('click', function(){
    for(let x=0; x<pixels.length; x++) {
        pixels[x].style.backgroundColor = 'white'
    }
})
container.append(clearBtn)

