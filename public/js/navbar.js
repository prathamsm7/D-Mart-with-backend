let menu = document.getElementById("openmenu");

menu.addEventListener("click", () => {
  console.log("menu open");
  document.getElementById("mySidepanel").style.width = "100%";

  let cate = document.getElementById("categories");
  cate.innerHTML = "";
  //   data.forEach(({ img, name, subcat }) => {
  //     let image = document.createElement("img");
  //     image.src = img;
  //     image.setAttribute("class", "catImg");

  //     let nm = document.createElement("p");
  //     nm.innerText = name;

  //     let li = document.createElement("li");
  //     li.addEventListener("click", () => {
  //       name = name.toLowerCase();
  //       console.log(name);
  //       if (name == "grocery" || name == "baby & kids") {
  //         location.href = "grocery.html";
  //       } else if (name == "appliances" || name == "footwear") {
  //         location.href = "cook&serve.html";
  //       } else if (
  //         name == "packaged food" ||
  //         name == "dairy & beverages" ||
  //         name == "personal care"
  //       ) {
  //         location.href = "cook&serve.html";
  //       }
  //     });
  //     li.append(image, nm);

  //     cate.append(li);
  //   });
});

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
