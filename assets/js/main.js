/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))



/*==================== Flex Box Cards Content ====================*/
images = [
    "https://source.unsplash.com/featured/?mountains",
    "https://source.unsplash.com/featured/?hiking",
    "https://source.unsplash.com/featured/?kayak",
    "https://source.unsplash.com/featured/?forest",
    "https://source.unsplash.com/featured/?mountain"
  "https://source.unsplash.com/featured/?trail"
  "https://source.unsplash.com/featured/?outdoors"
"https://source.unsplash.com/featured/?norway"
]

$('div.card-image').each ->
    random_image_index = Math.floor(images.length * Math.random())
$(this).css('background-image', 'url(' + images[random_image_index] + ')')