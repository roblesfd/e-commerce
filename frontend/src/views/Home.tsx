import { Book } from "../features/product/product-types/BookType";
import PaymentMethod, {
  OrderBuilder,
  ShippingMethod,
} from "../features/order/OrderBuilder";
import Slider from "../components/slider/Slider";
import { categoryNavbarData, productData } from "../utils/mockData";
import ProductItem1 from "../features/product/ProductItem1";
import Hero from "../components/Hero";
import heroImg from "../assets/hero-1.jpg";
import { Link } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";

const bookGenerator = (noBooks: number): Book[] => {
  return Array(noBooks)
    .fill({})
    .map((obj) => new Book("Iliada", 150.0, true, 475, 700));
};

const product1 = new Book("Iliada", 150.0, true, 475, 700);
const product2 = new Book("La Odisea", 187.0, true, 510, 800);
const productList = [product1, product2];

const orderBuilder = new OrderBuilder();
const order = orderBuilder
  .addProductList(productList)
  .addProductAmount(productList.length)
  .calculateSubTotal()
  .applyDiscount(10) // 10% de descuento
  .applyTax(5) // 5% de impuestos
  .setShippingMethod(ShippingMethod.Express)
  .setPaymentMethod(PaymentMethod.CreditCard)
  .build();

// console.log(order, order.showSummary());

const Home = () => {
  // const genBooks = bookGenerator(10);
  const visItemsNumber = 4;
  return (
    <>
      <CategoryNavbar categories={categoryNavbarData} bgColor="slate-50" />
      <div id="main-content">
        <section id="hero-slider">
          <Slider data={productData} visibleItemsNumber={1}>
            {productData.map((product) => (
              <Hero heroImg={heroImg}>
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
        <section id="featured-products">
          <Slider data={productData} visibleItemsNumber={visItemsNumber}>
            {productData.map((product) => (
              <ProductItem1
                key={product.id}
                product={product}
                itemWidth={100 / visItemsNumber}
              />
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
};

export default Home;
