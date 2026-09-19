import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

let page = 1;
let query = "";
let totalHits = 0;

form.addEventListener("submit", onSearch);

document
  .querySelector(".load-more")
  .addEventListener("click", onLoadMore);

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
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });

      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    if (data.hits.length < 15 || page * 15 >= totalHits) {
      hideLoadMore();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMore();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  hideLoadMore();
  showLoader();

  page += 1;

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    if (page * 15 >= totalHits || data.hits.length < 15) {
      hideLoadMore();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMore();
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

    showLoadMore();
  } finally {
    hideLoader();
  }
}