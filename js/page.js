// 分页功能

let currentPage = 1
const totalPages = 2
const perPage = 5

function showPage() {
  let items = document.querySelectorAll('.article-list a')
  items.forEach((el, i) => {
    el.style.display = 'none'
  })
  let start = (currentPage - 1) * perPage
  let end = start + perPage
  for (let i = start; i < end && i < items.length; i++) {
    items[i].style.display = 'block'
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++
    showPage()
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--
    showPage()
  }
}

// 页面加载时自动执行
showPage()