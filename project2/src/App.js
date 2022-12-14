import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Icons from "./components/Icons";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import ImageAfterContainer from "./components/ImageAfterContainer";
import Footer from "./components/Footerr";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Icons />
      <Container2 />
      <Container3 />
      <ImageAfterContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
