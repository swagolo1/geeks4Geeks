//selecting the css selectors
const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')


//here we change our default cursor to hammer
window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
})

// give animation to our hammer when click
window.addEventListener('click', () => {
    cursor.style.animation = 'none'
    setTimeout( () => {
        cursor.style.animation = ''
    }, 101)
})

// game starts when start button is pressed
start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none'
    stop_btn.style.display = 'inline-block'

    let holee;
    let points = 0;

    const game = setInterval( () => {
        //chosing random hole
        let ran = Math.floor(Math.random() * 5)
		// console.log(ran)
        holee = holes[ran];
        //take the mouse up to the desire hole
        let set_img = document.createElement('img')
        set_img.setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png')
        set_img.setAttribute('class', 'rat')
        holee.appendChild(set_img)

        // taking the mouse to the hole
        setTimeout( () => {
            holee.removeChild(set_img)
        }, 700);
    }, 800)

    // adding our points to 0 when hit the mouse
    window.addEventListener('click', (e) => {
        if(e.target === holee) 
			score.innerText = ++points;
			console.log(e.target)

    })
    // this is coded for changing the score to 0
    // stop button -> start button
    stop_btn.addEventListener('click', () => {
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0'
    })

})
