const progressBar = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    document.getElementById("progressIndicator").innerHTML = "Reading: " + scrolled.toFixed() + "%";
  }
  window.onscroll = () => {progressBar()};
