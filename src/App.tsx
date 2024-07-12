import { Outlet } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/nav/navbar";

function App() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
