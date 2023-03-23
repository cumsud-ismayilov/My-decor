const item = document.querySelector(".opensearch");
const List = document.querySelector(".openlist");
const Close = document.querySelector(".openlist")
if (item) {
    item.addEventListener("click",()=>{
     console.log("salam");
     List.classList.toggle("searchactive")
 
     })
}
// if (item) {
//     Close.addEventListener("click",()=>{
//         console.log("hey");
//         List.classList.remove("searchactive")
//     })
// }


const MenuOpen = document.querySelector(".menu-open");
const OpenList = document.querySelector(".menulist");

if (MenuOpen) {
    MenuOpen.addEventListener("click",()=>{
        console.log("salam");
         OpenList.classList.toggle("menuactive")
    
  })
}



const Navbar = document.querySelector(".desktop-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("actice-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("actice-nav");
    }
  }
});

const ToTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // document.querySelector("body").style.background = "black";
    if (ToTop) {
      ToTop.style.display = "flex";
    }
  } else {
    document.querySelector("body").style.background = "white";
    if (ToTop) {
      ToTop.style.display = "none";
    }
  }
});
ToTop &&
  ToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

const Cursor = document.getElementById("cursor");
document.addEventListener("mousemove",function(e){
  var x = e.clientX;
  var y = e.clientY;
  Cursor.style.top=y+"px";
  Cursor.style.left=x+"px";
})