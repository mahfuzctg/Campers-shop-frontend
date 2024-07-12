import ProductsBanner from "./Banner";
import Products from "./Product";
import SearchBar from "./SearchBar";

const ProductPage = () => {
  return (
    <section>
      <ProductsBanner />
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <SearchBar />
        <Products />
      </div>
    </section>
  );
};

export default ProductPage;
