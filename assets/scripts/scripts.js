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
