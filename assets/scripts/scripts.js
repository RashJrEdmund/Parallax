const menuIcon = document.querySelector('.menu-icon')
const varyingList = document.querySelector('.varying-list')
const listItems = document.querySelectorAll('.list-items')
console.log('code works')
console.log(listItems)

menuIcon.addEventListener('click', () => {
  varyingList.classList.toggle('active-menu')
  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      varyingList.classList.remove('active-menu')
    })
  })
})

window.addEventListener('scroll', (e) => {
  const navBar = document.querySelector('.nav-bar')
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight // this line gives you the scrollable heigh
  const scrolledY = window.scrollY
  if (window.scrollY >= 130) {
    navBar.style = 'background-color: #fff;'
  }if (window.scrollY <= 130) {
    navBar.style = 'background-color: unset;'
  }
}) 
