console.log("in");

let shareBtn = document.getElementById("shareBtn");
let shareDetail = document.getElementById("shareDetail");

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  shareDetail.classList.toggle("share-detail--active");
});

shareDetail.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  shareDetail.classList.remove("share-detail--active");
});
