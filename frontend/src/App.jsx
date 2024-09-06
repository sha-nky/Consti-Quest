import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "./Components";
import { Home } from "./Pages";

// import { getAllTestimonials } from "./api/apiCalls";

function App() {

  // const [testimonials, setTestimonials] = useState([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     // setLoading(true);
  //     const data = await getAllTestimonials();
  //     if (data.error) {
  //       // setError(true);
  //       console.log(data.error)
  //     } else {
  //       setTestimonials(data);
  //       console.log(data);
  //       // animationDurationRef.current = data.length * 3.5;
  //     }
  //     // setLoading(false);
  //   };

  //   fetchTestimonials();
  // }, []);

  return (
    <Router>
      <div className="w-full h-[100vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
