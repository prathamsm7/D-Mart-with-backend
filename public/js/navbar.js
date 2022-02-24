let fetchedData = [
  {
    name: "GROCERY",
    img: "https://img.dmart.in/images/rwd/categories/aesc-grocerycore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "APPLIANCES",
    img: "https://img.dmart.in/images/rwd/categories/aesc-appliancescore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "BABY & KIDS",
    img: "https://img.dmart.in/images/rwd/categories/aesc-babyandkidscore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "HOME & KITCHEN",
    img: "https://img.dmart.in/images/rwd/categories/homkitchen15421.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "PERSONAL CARE",
    img: "https://img.dmart.in/images/rwd/categories/aesc-personalcare211221.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "DAIRY & BEVERAGES",
    img: "	https://img.dmart.in/images/rwd-mobile/categories/aesc-grocerycore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "PACKAGED FOOD",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-packagedfoodcore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "FOOTWEAR",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-footwearcore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "CLOTHING",
    img: "	https://img.dmart.in/images/rwd-mobile/categories/935201.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "SCHOOL SUPPLIES",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-schoolsuppliescore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
];

let menu = document.getElementById("openmenu");

menu.addEventListener("click", () => {
  console.log("menu open");
  document.getElementById("mySidepanel").style.width = "100%";

  let cate = document.getElementById("categories");
  cate.innerHTML = "";
  fetchedData.forEach(({ img, name, subcat }) => {
    let image = document.createElement("img");
    image.src = img;
    image.setAttribute("class", "catImg");

    let nm = document.createElement("p");
    nm.innerText = name;

    let li = document.createElement("li");
    li.addEventListener("click", () => {
      name = name.toLowerCase();
      console.log(name);
      if (name == "grocery" || name == "baby & kids") {
        location.href = "grocery.html";
      } else if (name == "appliances" || name == "footwear") {
        location.href = "cook&serve.html";
      } else if (
        name == "packaged food" ||
        name == "dairy & beverages" ||
        name == "personal care"
      ) {
        location.href = "cook&serve.html";
      }
    });
    li.append(image, nm);

    cate.append(li);
  });
});

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function openFind() {
  document.getElementById("myfind").style.height = "60px";
}

function closeInp() {
  document.getElementById("myfind").style.height = "0";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

let s_input = document.getElementById("search");
let f_input = document.querySelector(".f_input");
let btncl = document.querySelectorAll("#btn");

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let sList = document.getElementById("searchList");
// sList.innerHTML = "";

let lst = document.getElementById("form");
btncl.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("open modal");

    // When the user clicks the button, open the modal
    modal.style.display = "block";
    let sList = document.getElementById("searchList");

    if (s_input.value) {
      let newData = findprod(s_input.value);
      sList.innerHTML = "";
      newData.forEach((prod) => {
        // console.log(prod);
        let li = document.createElement("li");
        li.setAttribute("class", "elemLi");

        let p = document.createElement("p");
        p.innerText = prod.name.toUpperCase();

        let img = document.createElement("img");
        img.src = prod.imgUrl;

        li.addEventListener("click", () => {
          console.log(prod);
          window.location.href = "grocery.html";
        });

        li.append(img, p);
        sList.append(li);
      });
    }

    if (f_input.value) {
      let newData = findprod(f_input.value);
      sList.innerHTML = "";
      newData.forEach((prod) => {
        let li = document.createElement("li");
        li.setAttribute("class", "elemLi");

        let p = document.createElement("p");
        p.innerText = prod.name.toUpperCase();

        let img = document.createElement("img");
        img.src = prod.imgUrl;

        li.addEventListener("click", () => {
          console.log(prod);
          window.location.href = "grocery.html";
        });

        li.append(img, p);
        sList.append(li);
      });
    }
  });
});

function findprod(q) {
  q = q.toLowerCase();
  let newData = [];
  fetchedData.map((elem) => {
    elem.name = elem.name.toLowerCase();
    if (elem.name.includes(q)) {
      newData.push(elem);
    }
  });
  return newData;
}

function appendProdData(fetchedData) {
  console.log(fetchedData);
}
