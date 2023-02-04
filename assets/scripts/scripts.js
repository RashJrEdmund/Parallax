const menuIcon = document.querySelector('.menu-icon')
const varyingList = document.querySelector('.varying-list')
const listItems = document.querySelectorAll('.list-items')

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
  let scrolledY = window.scrollY
  console.log('this the scrolledY', scrolledY)
  if (window.scrollY > 140) {
    navBar.style = 'background-color: #fff;'
    varyingList.style = 'background-color: #fff;'
  } else {
    navBar.style = 'background-color: unset;'
    varyingList.style = 'background-color: unset;'
  }
}) 
