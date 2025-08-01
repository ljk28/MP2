document.getElementById("castle").onclick = function () {
    window.location.href = "index.html";
};

/* The above code was taken from and changed to fit this project https://www.geeksforgeeks.org/html/how-to-link-a-button-to-another-page-in-html/ */
/* the code below for the cursor was copied from ... https://dev.to/devshefali/3-steps-to-create-a-custom-cursor-with-html-css-and-javascript-2jo1 */

const cursor = document.querySelector(".cursor");

      document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";
      });
 

