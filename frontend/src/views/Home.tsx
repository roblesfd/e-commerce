import Slider from "../components/slider/Slider";
import { productData, productObj, productObj2 } from "../utils/mockData";
import Hero from "../components/Hero";
import heroImg from "../assets/hero-1.jpg";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import ProductItem from "../features/product/ProductItem";
import Banner from "../components/Banner";

const Home = () => {
  const visibleItemsNumber = 4;
  // console.log(sessionStorage);

  return (
    <>
      <div id="main-content">
        <section id="hero-slider">
          <Slider data={productData} visibleItemsNumber={1}>
            {productData.map((product, index) => (
              <Hero key={index} heroImg={heroImg}>
                <h1 className="text-5xl font-bold mb-4">
                  ECOMMERCE PROMOCIONES
                </h1>
                <p className="text-lg mb-8 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate, accusantium?
                </p>
                <nav className="flex space-x-4">
                  <Link
                    to="/"
                    className="px-4 py-2 shadow-lg bg-indigo-600 text-indigo-50 rounded hover:bg-indigo-700 transition"
                  >
                    Comprar ahora
                  </Link>
                </nav>
              </Hero>
            ))}
          </Slider>
        </section>
        <section id="featured-products" className="my-4 md:my-10">
          <Slider data={productData} visibleItemsNumber={visibleItemsNumber}>
            {productData.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                itemWidth={100 / visibleItemsNumber}
                direction="col"
              />
            ))}
          </Slider>
        </section>
        <section
          id="recommended-products"
          className="my-4 md:my-10 px-4 md:px-6"
        >
          <div className="grid grid-cols-4 gap-4 ">
            <Box>
              <header className="mb-4">
                <h3 className="text-lg font-semibold">
                  Productos en descuento
                </h3>
              </header>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <ProductItem
                    product={productObj}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
              </div>
              <footer className="w-full text-center">
                <Link to="/" className="text-sm text-blue-600 font-medium ">
                  Ver más
                </Link>
              </footer>
            </Box>
            <Box>
              <header className="mb-4">
                <h3 className="text-lg font-semibold">Recomendados</h3>
              </header>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <ProductItem
                    product={productObj2}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj2}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj2}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
                <div className="col-span-1">
                  <ProductItem
                    product={productObj2}
                    itemWidth={100}
                    direction="col"
                  />
                </div>
              </div>
              <footer className="w-full text-center">
                <Link to="/" className="text-sm text-blue-600 font-medium ">
                  Ver más
                </Link>
              </footer>
            </Box>
            <div className="col-span-2 h-full">
              <Box>
                <header className="mb-4">
                  <h3 className="text-lg font-semibold">Seguir comprando</h3>
                </header>
                <div className="grid grid-cols-2 gap-4">
                  {[...productData].slice(0, 4).map((product) => (
                    <div className="col-span-1">
                      <ProductItem
                        product={product}
                        itemWidth={100}
                        direction="row"
                      />
                    </div>
                  ))}
                </div>
              </Box>
            </div>
          </div>
        </section>
        <section
          id="categories"
          className="my-4 md:my-10 px-4 md:px-6 min-h-[630px] max-h-[630px] overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 md:col-span-1">
              <Banner bannerImg={heroImg}>
                <h1 className="text-5xl font-bold mb-4">
                  ECOMMERCE PROMOCIONES
                </h1>
                <p className="text-lg mb-8 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate, accusantium?
                </p>
                <nav className="flex space-x-4">
                  <Link
                    to="/"
                    className="px-4 py-2 shadow-lg bg-indigo-600 text-indigo-50 rounded hover:bg-indigo-700 transition"
                  >
                    Comprar ahora
                  </Link>
                </nav>
              </Banner>
            </div>
            <div className="col-span-2 md:col-span-1 h-full">
              <div className="mb-5">
                <Banner bannerImg={heroImg}>
                  <h1 className="text-5xl font-bold mb-4">
                    ECOMMERCE PROMOCIONES
                  </h1>
                  <p className="text-lg mb-8 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, accusantium?
                  </p>
                  <nav className="flex space-x-4">
                    <Link
                      to="/"
                      className="px-4 py-2 shadow-lg bg-indigo-600 text-indigo-50 rounded hover:bg-indigo-700 transition"
                    >
                      Comprar ahora
                    </Link>
                  </nav>
                </Banner>
              </div>
              <div>
                <Banner bannerImg={heroImg}>
                  <h1 className="text-5xl font-bold mb-4">
                    ECOMMERCE PROMOCIONES
                  </h1>
                  <p className="text-lg mb-8 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, accusantium?
                  </p>
                  <nav className="flex space-x-4">
                    <Link
                      to="/"
                      className="px-4 py-2 shadow-lg bg-indigo-600 text-indigo-50 rounded hover:bg-indigo-700 transition"
                    >
                      Comprar ahora
                    </Link>
                  </nav>
                </Banner>
              </div>
            </div>
          </div>
        </section>
        <section id="category-x" className="my-4 md:my-10 px-4 md:px-6">
          <h2 className="text-xl font-semibold mb-6">
            Productos de X categoría
          </h2>
          <Slider data={productData} visibleItemsNumber={visibleItemsNumber}>
            {productData.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                itemWidth={100 / visibleItemsNumber}
                direction="col"
              />
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
};

export default Home;
