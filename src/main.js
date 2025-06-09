import { fetchImages } from './js/pixabay-api.js';
import {
  createGalleryMarkup,
  hideLoader,
  showLoader,
  lightbox,
} from './js/render-functions.js';

import './css/styles.css';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');



form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = form.elements['search-text']?.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });
      gallery.innerHTML = '';
    }

    gallery.innerHTML = createGalleryMarkup(images);

    lightbox.refresh();
    form.reset();
    
  } catch (error) {
    console.error('Error fetching images:', error);
  }finally {
    hideLoader();
  }
});

