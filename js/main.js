document.addEventListener("DOMContentLoaded", function() {
          const scrollContent = document.querySelector(".feedback");
          const prevButton = document.querySelector(".back");
          const nextButton = document.querySelector(".front");
      
          prevButton.addEventListener("click", function() {
              scrollContent.scrollBy({
                  left: -100, // scroll speed
                  behavior: "smooth"
              });
          });
      
          nextButton.addEventListener("click", function() {
              scrollContent.scrollBy({
                  left: 100, // scroll speed
                  behavior: "smooth"
              });
          });
      });
      