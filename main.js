document.addEventListener("mousemove", function(event) {
  const r = Math.round((event.pageY * 255) / window.innerHeight);
  const b = Math.round((event.pageX * 255) / window.innerWidth);
  const color = `rgb(${r}, 0, ${b})`;
  document.body.style.backgroundColor = color;
});
