export default function placeholder() {
  const placeholder = document.getElementById("paragraph");

  placeholder.addEventListener("input", () => {
    if (placeholder.textContent.trim()) {
      placeholder.classList.add("has-content");
    } else {
      placeholder.classList.remove("has-content");
    }
  });
}
