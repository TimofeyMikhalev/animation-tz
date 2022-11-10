const container = document.querySelector(".container__video");
const containerHeight = container.offsetHeight;
const videoItems = [...document.querySelectorAll(".videoItem")];
const countOfItems = videoItems.length - 1;

let currentVideoIndex = countOfItems;
const handleScroll = () => {
  const pageYWithOffset = pageYOffset - containerHeight * (countOfItems - currentVideoIndex );
  const currentVideo = videoItems[currentVideoIndex];
  
  const newHeight = containerHeight - pageYWithOffset;
  
  if(currentVideo) {
    currentVideo.style.height = newHeight + 'px';
  }
  
  if(newHeight > containerHeight) {

    if(currentVideo) {
      currentVideo.style.height = containerHeight + 'px';
    }
    
    return currentVideoIndex += 1;
  } else if (newHeight <= 0) {
    
    if(currentVideo) {
      currentVideo.style.height = 0 + 'px';
    }
      return currentVideoIndex -= 1;
  }
}

window.addEventListener("scroll", handleScroll);


handleScroll();


AOS.init();