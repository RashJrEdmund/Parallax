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

window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav-bar')
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight // this line gives you the scrollable height
  let scrolledY = window.scrollY
  if (window.scrollY > 140) {
    navBar.style = 'background-color: #fff;'
    varyingList.style = 'background-color: #fff;'
  } else {
    navBar.style = 'background-color: unset;'
    varyingList.style = 'background-color: unset;'
  }
})

// let YscrollHolder = 0

// window.addEventListener('scroll', () => {
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight // this line gives you the scrollable height
//   if (window.scrollY >= YscrollHolder) {
//     console.clear()
//     console.log('going down', window.scrollY, YscrollHolder)
//     YscrollHolder = window.scrollY
  
//     console.log('scrollHolder', YscrollHolder)
//   } else {
//     console.clear()
//     console.log('going up', window.scrollY, YscrollHolder, window.outerHeight)
//     YscrollHolder = window.scrollY

//     console.log('scrollHolder', YscrollHolder, YscrollHolder)
//   }
// })
