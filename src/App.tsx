import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/nav/navbar";
import { useAppSelector } from "./redux/hooks/hook";

function App() {
  const cart = useAppSelector((state) => state.cart);

  console.log(cart);

  useEffect(() => {
    function handleOnBeforeUnload(event: BeforeUnloadEvent) {
      // Check if the cart is empty
      if (cart.length === 0) {
        return;
      }

      event.preventDefault();

      return (event.returnValue = "");
    }

    window.addEventListener("beforeunload", handleOnBeforeUnload, {
      capture: true,
    });

    return () => {
      window.removeEventListener("beforeunload", handleOnBeforeUnload, {
        capture: true,
      });
    };
  }, [cart]);

  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
