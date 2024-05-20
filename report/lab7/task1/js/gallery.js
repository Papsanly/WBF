const galleryContainer = document.querySelector('.gallery')

const galleryItemsMarkup = images.map(({preview, original, description}) => {
  return `
    <li>
      <img src="${preview}" data-source="${original}" alt="${description}">
    </li>
  `
}).join('')

galleryContainer.innerHTML = galleryItemsMarkup

galleryContainer.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') return

  const originalImageURL = event.target.dataset.source
  const instance = basicLightbox.create(`<img src="${originalImageURL}" alt="${event.target.alt}">`)
  instance.show()
})
