import {
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "../components/Table";
import { tableData } from "../utils/mockData";
import PaymentMethod, {
  OrderBuilder,
  ShippingMethod,
} from "../features/order/OrderBuilder";
import { Book } from "../features/product/product-types/BookType";
import Banner from "../components/Banner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
} from "../components/Card";
import Button from "../components/Button";
import reptileImg from "../assets/contemplative-reptile.jpg";
import Feature from "../components/Feature";
import { faPencil, faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareBehance } from "@fortawesome/free-brands-svg-icons";
import Accordion from "../components/Accordion";
import ProductFilter from "../components/ProductFilter";
import SearchBar from "../components/SearchBar";
import Typography from "../components/Typography";
import { useState } from "react";
import TabsContainer from "../components/tabs/TabsContainer";
import Tab from "../components/tabs/Tab";
import TabsContent from "../components/tabs/TabsContent";

const ComponentTest = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const bookGenerator = (noBooks: number): Book[] => {
    return Array(noBooks)
      .fill({})
      .map((obj) => new Book("Iliada", 150.0, true, 475, 700));
  };
  const genBooks = bookGenerator(10);
  console.log(genBooks);

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

  console.log(order, order.showSummary());

  const accordionItems = [
    { title: "Item 1", content: "Contenido del acordeón 1" },
    { title: "Item 2", content: "Contenido del acordeón 2" },
    { title: "Item 3", content: "Contenido del acordeón 3" },
  ];

  const products = [
    {
      id: 1,
      name: "Producto A",
      description: "Descripción del Producto A",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto B",
      description: "Descripción del Producto B",
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Producto C",
      description: "Descripción del Producto C",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Producto D",
      description: "Descripción del Producto D",
      price: 59.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const suggestions = ["Producto 1", "Producto 2", "Producto 3", "Artículo 4"];

  return (
    <div className="py-12 px-10">
      {/* TABLE */}
      <section className="my-9">
        <TableContainer className="shadow-lg">
          <TableHeader>
            {tableData.tableHeaderData.map((tableCell) => tableCell)}
          </TableHeader>
          {tableData.tableBodyData.map((tableRow, index) => (
            <TableRow key={index}>{tableRow}</TableRow>
          ))}
          <TableFooter>
            {tableData.tableFooterData.map((tableCell) => tableCell)}
          </TableFooter>
        </TableContainer>
      </section>
      {/* BANNER */}
      <section className="my-8">
        <Banner backgroundColor="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <h1 className="text-5xl font-semibold">Banner</h1>
        </Banner>
      </section>
      {/* CARD */}
      <section className="my-8 flex gap-6">
        <Card className="max-w-sm h-full">
          <CardHeader title="Titulo del card" subtitle="subtitulo del card" />
          <CardContent>
            <p>Este es el contenido de la tarjeta.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorem placeat beatae!
            </p>
          </CardContent>
          <CardFooter>
            <Button label="Boton card" />
          </CardFooter>
        </Card>
        <Card className="max-w-sm">
          <CardMedia
            imageUrl={reptileImg}
            altText="Imagen de ejemplo"
            className="h-48"
          />
          <CardContent>
            <p>Este es el contenido de la tarjeta.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorem placeat beatae!
            </p>
          </CardContent>
          <CardFooter>
            <Button label="Boton card" />
          </CardFooter>
        </Card>
      </section>
      {/* FEATURE */}
      <section className="my-8 flex gap-6">
        <Feature
          icon={faStar}
          size="small"
          text="Alta calidad garantizada"
          className="w-64"
        />
        <Feature
          icon={faPencil}
          size="medium"
          text="Saca para el taco"
          className="w-64"
        />
        <Feature
          icon={faSquareBehance}
          size="large"
          text="Los mejores precios"
          className="w-64"
        />
      </section>
      {/* ACCORDION */}
      <section className="my-8 flex flex-col gap-6">
        <Accordion
          items={accordionItems}
          bgColor="white"
          color="black"
          size="small"
          bordered={true}
        />
        <Accordion
          items={accordionItems}
          bgColor="gray-100"
          color="black"
          size="medium"
          bordered={false}
        />
        <Accordion
          items={accordionItems}
          bgColor="gray-100"
          color="black"
          size="large"
          bordered={false}
        />
      </section>
      {/* FILTER ITEMS */}
      <section className="my-8 flex flex-col gap-6">
        <ProductFilter products={products} />
      </section>
      {/* SEARCHBAR CON SUGERENCIAS */}
      <section className="my-8 flex flex-col gap-6 h-[500px]">
        <SearchBar rounded="medium" width="400px" suggestions={suggestions} />
        <SearchBar rounded="medium" width="400px" />
      </section>
      {/* TEXTOS */}
      <section className="my-8 flex flex-col gap-6 h-auto">
        <Typography type="title1">Titulo 1</Typography>
        <Typography type="title2">Titulo 2</Typography>
        <Typography type="title3">Titulo 3</Typography>
        <Typography type="title4">Titulo 4</Typography>
        <Typography type="title5">Titulo 5</Typography>
        <Typography type="title6">Titulo 6</Typography>
        <Typography type="subtitle1">Subtitulo 1</Typography>
        <Typography type="subtitle2">Subtitulo 2</Typography>
        <Typography type="body1">Body 1</Typography>
        <Typography type="body2">Body 2</Typography>
      </section>
      {/* TABS */}
      <section className="my-8 flex flex-col gap-6 h-auto">
        <TabsContainer>
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="Tab 1"
            data="tab1"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="Tab 2"
            data="tab2"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="Tab 3"
            data="tab3"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="Tab 4"
            data="tab4"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="Tab5"
            data="tab5"
          />
        </TabsContainer>
        <TabsContent>
          {activeTab === "tab1" && <Typography type="title3">Tab 1</Typography>}
          {activeTab === "tab2" && <Typography type="title3">Tab 2</Typography>}
          {activeTab === "tab3" && <Typography type="title3">Tab 3</Typography>}
          {activeTab === "tab4" && <Typography type="title3">Tab 4</Typography>}
          {activeTab === "tab5" && <Typography type="title3">Tab 5</Typography>}
        </TabsContent>
      </section>
    </div>
  );
};

export default ComponentTest;
