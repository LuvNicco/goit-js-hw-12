import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let query = "";
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  query = event.currentTarget.elements.searchText.value.trim();

  if (query === "") {
    iziToast.error({
      message: "Please enter a search query!",
    });

    return;
  }

  page = 1;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });

      loadMoreBtn.classList.add("is-hidden");

      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    if (data.hits.length < 15 || page * 15 >= totalHits) {
      loadMoreBtn.classList.add("is-hidden");
    } else {
      loadMoreBtn.classList.remove("is-hidden");
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
    });
  } finally {
    hideLoader();
  }

  form.reset();
}

async function onLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    if (page * 15 >= totalHits || data.hits.length < 15) {
      loadMoreBtn.classList.add("is-hidden");
    }

    const galleryItem = document.querySelector(".gallery-item");

    if (galleryItem) {
      const { height } = galleryItem.getBoundingClientRect();

      window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
    });
  } finally {
    hideLoader();
  }
}