<script>
  // Função para trocar o modo dark
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  // Event listener para o botão do modo dark
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("change", toggleDarkMode);
</script>
