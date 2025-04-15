function alternarVisibilidade() {
    const div = document.getElementById("minhaDiv");
    if (div.style.display === "none") {
      div.style.display = "block"; // Mostra a div
    } else {
      div.style.display = "none"; // Esconde a div
    }
  }