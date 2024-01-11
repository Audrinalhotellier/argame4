function switchContainer(containerNumber) {
  for (let i = 1; i <= 10; i++) {
    const container = document.getElementById("container" + i);
    container.classList.add("hidden");
  }

  function redirectToPage(page) {
    window.location.href = page;
  }  
  
  const nextContainer = document.getElementById("container" + (containerNumber + 1));
  if (nextContainer) {
    nextContainer.classList.remove("hidden");
  }
}
