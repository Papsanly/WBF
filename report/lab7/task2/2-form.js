const formData = {email: '', message: ''}
const form = document.querySelector('.feedback-form')
const emailInput = form.elements.email
const messageTextarea = form.elements.message
const LOCAL_STORAGE_KEY = 'feedback-form-state'

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (savedData) {
    const parsedData = JSON.parse(savedData)
    formData.email = parsedData.email || ''
    formData.message = parsedData.message || ''
    emailInput.value = formData.email
    messageTextarea.value = formData.message
  }
})

// Відстеження змін у формі та збереження даних у локальне сховище
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
})

// Обробка події сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault()
  if (!formData.email || !formData.message) {
    alert('Fill please all fields')
    return
  }
  console.log(formData)
  localStorage.removeItem(LOCAL_STORAGE_KEY)
  formData.email = ''
  formData.message = ''
  form.reset()
})
