var togglebtn = document.querySelector('.toggle-btn')
var theme = document.querySelector('.theme')

togglebtn.addEventListener('click', ()=> {
    theme.classList.contains('light') ? enableDark() : enableLight()
})

function enableDark() {
    theme.classList.remove('light')
    theme.classList.add('dark')
}

function enableLight() {
    theme.classList.remove('dark')
    theme.classList.add('light')
}