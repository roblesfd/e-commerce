const productData = [
  {
    id: 1,
    name: "Laptop X1",
    description: "Una laptop potente y versátil.",
    image: "https://via.placeholder.com/150",
    price: "$999",
    discountedPrice: "$1200",
    stars: 3.5,
  },
  {
    id: 2,
    name: "PC Gamer G5",
    description: "La mejor experiencia para juegos.",
    image: "https://via.placeholder.com/150",
    price: "$1299",
    discountedPrice: "$1200",
    stars: 3.5,
  },
  {
    id: 3,
    name: "Monitor UltraWide",
    description: "Pantalla panorámica de alta resolución.",
    image: "https://via.placeholder.com/150",
    price: "$399",
    discountedPrice: "$1200",
    stars: 3.5,
  },
  {
    id: 4,
    name: "Teclado Mecánico",
    description: "Teclado con retroiluminación RGB.",
    image: "https://via.placeholder.com/150",
    price: "$99",
    discountedPrice: "$1200",
    stars: 3.5,
  },
  {
    id: 5,
    name: "Mouse Inalámbrico",
    description: "Precisión y comodidad sin cables.",
    image: "https://via.placeholder.com/150",
    price: "$49",
    discountedPrice: "$1200",
    stars: 3.5,
  },
];

const categoryNavbarData = [
  {
    name: "Electrónica",
    subcategories: ["Teléfonos", "Tabletas", "Accesorios"],
  },
  {
    name: "Libros",
    subcategories: ["Ficción", "No ficción", "E-books"],
  },
  {
    name: "Ropa",
    subcategories: ["Hombres", "Mujeres", "Niños"],
  },
  {
    name: "Hogar",
    subcategories: ["Muebles", "Decoración", "Electrodomésticos"],
  },
  {
    name: "Alimentos y Bebidas",
    subcategories: ["Muebles", "Decoración", "Electrodomésticos"],
  },
  {
    name: "Música",
    subcategories: ["Muebles", "Decoración", "Electrodomésticos"],
  },
];

const productObj = {
  id: 1,
  name: "Laptop X1",
  image: "https://via.placeholder.com/150",
};

const productObj2 = {
  id: 1,
  image: "https://via.placeholder.com/150",
};

const tableData = {
  tableHeaderData: [<span>Name</span>, <span>Email</span>, <span>Age</span>],
  tableBodyData: [
    [<span>John Doe</span>, <span>johndoe@example.com</span>, <span>25</span>],
    [
      <span>Jane Smith</span>,
      <span>janesmith@example.com</span>,
      <span>30</span>,
    ],
  ],
  tableFooterData: [<span>Total</span>, <span></span>, <span>55</span>],
};

export { productData, categoryNavbarData, productObj, productObj2, tableData };
