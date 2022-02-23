{/* <script type="module"> */}
  import navbar from "/scripts/navbar_rupesh.js";
  console.log(navbar);

  let nav = document.getElementById("navbar");
  nav.innerHTML = navbar();

  import sidebar from "/scripts/sidebar.js";
  let side = document.getElementById("sidebar");
  side.innerHTML = sidebar();

  import footer from "/scripts/footer_rupesh.js";
  let foot = document.getElementById("ftr");

  foot.innerHTML = footer();

  import { findprod, appendProdData } from "/scripts/search.js";

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

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  let usrArr = JSON.parse(localStorage.getItem("mylocal")) || [];

  if (usrArr.length !== 0) {
    document.getElementById("userName").innerText = usrArr[0].name;
  }
// </script>
// <script>
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  function openFind() {
    document.getElementById("myfind").style.height = "60px";
  }

  function closeInp() {
    document.getElementById("myfind").style.height = "0";
  }

  function allCategory() {
    window.location.href = "./allcatageory.html";
  }

  // window.onclick = function (e) {
  //   if (!e.target.matches("#searchList")) {
  //     sList.innerHTML = "";
  //   }
  // };

  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementById("images");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
  }
// </script>
// <script>
  document.getElementById("form_reg").addEventListener("submit", display);

  function display(event) {
    event.preventDefault();
    let flag = true;
    let name = document.getElementById("name").value;
    let mobile_no = document.getElementById("mobile_no").value;
    let id = document.getElementById("id").value;

    let password = document.getElementById("password").value;

    // let location = document.getElementById("location").value;

    if (name == "" || mobile_no == "" || id == "" || password == "") {
      alert("please fill all the details");
      return;
    }

    let signup_details = {
      name: name,
      id: id,
      mobile_no: mobile_no,
      password: password,
      // "location" : location,
    };

    let arr = localStorage.getItem("mylocal");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("mylocal"));
      arr.forEach((el) => {
        if (el.id == signup_details.id) {
          alert("User already exist");
          flag = false;
          return;
        }
      });
      if (flag == false) {
        return;
      }
    }

    arr.push(signup_details);
    localStorage.setItem("mylocal", JSON.stringify(arr));
    alert("Account Created");
    appendData(event);
    //  appendDetails();
    appendlocation();
  }

  function appendData(evnet) {
    event.preventDefault();
    let user = document.getElementById("name").value;
    document.getElementById("user").innerText = user;
    localStorage.setItem("mylocal_2", user);
    return user;
  }

  function appendlocation() {
    let location = document.getElementById("location").value;
    document.getElementById("city").innerText = location;
    localStorage.setItem("mylocal_3", location);

    console.log(location);
    return location;
  }
{/* </script> */}