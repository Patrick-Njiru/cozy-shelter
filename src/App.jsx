import { Route, Routes } from "react-router-dom"
import { About, Blogs, Footer, Home, Navbar } from "./pages"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/about" element={<About /> }/>
        <Route exact path="/blog" element={<Blogs /> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App