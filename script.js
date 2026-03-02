document.addEventListener("DOMContentLoaded", () => {
  const gradeCards = document.querySelectorAll(".grade-card");

  gradeCards.forEach((card) => {
    card.addEventListener("click", () => {
      const file = card.getAttribute("data-file");
      if (!file) return;

      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
});
