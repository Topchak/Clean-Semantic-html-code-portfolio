const shortenText = () => {
  document.querySelectorAll(".games-mini__bottom-name").forEach(el => {
    let text = el.textContent.trim();
    if (text.length > 24) {
      el.textContent = text.slice(0, 24) + "...";
    }
  });

}

export default shortenText