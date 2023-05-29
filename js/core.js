const mainNav = document.querySelector('.main-nav')
const close = document.querySelector(".close-icon")
const open = document.querySelector(".open-icon")
const shadow = document.querySelector('.shadow')

close.addEventListener('click',toggleNav)
open.addEventListener('click',toggleNav)

function toggleNav(){
    mainNav.classList.toggle('active')
    shadow.classList.toggle('active')
}

shadow.addEventListener('click', ()=> {
    mainNav.classList.remove("active");
    shadow.classList.remove('active')
})

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(item => item.addEventListener('click', (e)=>{
  // e.preventDefault();
  const href = e.target.getAttribute("href");
  if (href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  // scrool to other links
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(`${href}`);
    sectionEl.scrollIntoView({ behavior: "smooth" });
    console.log('i wnt here');
  }

  // close mobile nav
  if (mainNav.classList.contains("active")) {
    mainNav.classList.remove("active");
    shadow.classList.remove('active')
  }
}))



const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");

yearEl.textContent = currentYear;