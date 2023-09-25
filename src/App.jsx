import "./app.scss";
import Topbar from "./component/Topbar"
import Intro from "./component/Intro"
import Work from "./component/Work"
import Testimonials from "./component/Testimonials"
import Contact from "./component/Contact"
import Menu from "./component/Menu"
import { useState } from "react";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="app">
      <Topbar openNav={openNav} setOpenNav={setOpenNav} />
      <Menu openNav={openNav} setOpenNav={setOpenNav} />
      <div className="sections">
        <Intro />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
