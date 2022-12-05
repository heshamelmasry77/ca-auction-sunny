import "../../style.css";

const listingsLI = document.getElementById("listings_li");
const newlistingLi = document.getElementById("newlisting_li");
const myprofileLI = document.getElementById("myprofile_li");

const currentURL = window.location.toString();
console.log(currentURL);

if (currentURL.includes("index")) {
  listingsLI.classList.add(
    "bg-white",
    "text-blue",
    "py-8",
    "px-6",
    "shadow-xl"
  );
}

if (currentURL.includes("id")) {
  listingsLI.classList.add(
    "bg-white",
    "text-blue",
    "py-8",
    "px-6",
    "shadow-xl"
  );
}

if (currentURL.includes("myprofile")) {
  myprofileLI.classList.add(
    "bg-white",
    "text-blue",
    "py-8",
    "px-6",
    "shadow-xl"
  );
}

if (currentURL.includes("newlisting")) {
  newlistingLi.classList.add(
    "bg-white",
    "text-blue",
    "py-8",
    "px-6",
    "shadow-xl"
  );
}
