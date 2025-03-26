function bannerViewed() {
  return Boolean(localStorage.getItem("banner-viewed-3"));
}

function setBannerViewed() {
  localStorage.setItem("banner-viewed-3", "false");
}

export { bannerViewed, setBannerViewed };
