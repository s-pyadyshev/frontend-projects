export const cardEmployeesInit = (() => {
  const init = () => {
    const cardEmployees = document.querySelector(".card-employee-list");

    if (cardEmployees === null) {
      return;
    }

    cardEmployees.addEventListener("click", (event) => {
      const target = event.target;

      const toggleHoverPhoto = () => {
        target.parentElement.classList.add("is-hidden");
        target.parentElement.classList.remove("is-visible");
        target.parentElement.nextElementSibling.classList.remove("is-hidden");
        target.parentElement.nextElementSibling.classList.add("is-visible");
      };

      const togglePhoto = () => {
        target.parentElement.classList.remove("is-visible");
        target.parentElement.classList.add("is-hidden");
        target.parentElement.previousElementSibling.classList.remove(
          "is-hidden"
        );
        target.parentElement.previousElementSibling.classList.add("is-visible");
      };

      if (target.parentElement.classList[0] === "card-employee__photo") {
        toggleHoverPhoto();
      }

      if (target.parentElement.classList[0] === "card-employee__photo-hover") {
        togglePhoto();
      }
    });
  };

  return {
    init,
  };
})();
