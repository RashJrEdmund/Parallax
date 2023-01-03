const menuIcon = document.querySelector('.menu-icon')
const varyingList = document.querySelector('.varying-list')
console.log('code works')

menuIcon.addEventListener('click', () => {
  console.log('code works')
  varyingList.classList.toggle('active-menu')
})
