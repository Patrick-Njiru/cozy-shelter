const handleScrollPageDown = () => {
  // const about = document.getElementById("about"),
   const aboutHero = document.getElementById("about-hero")

  // about.style.scrollBehavior = 'smooth'

  window.scrollBy(0, aboutHero.scrollHeight)
}

export default handleScrollPageDown
