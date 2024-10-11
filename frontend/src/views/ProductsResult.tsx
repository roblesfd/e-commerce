import { Link } from "react-router-dom";
import StarRating from "../components/StarsReview";
import DualRangeSlider from "../components/DualRangeSlider";
import { productData } from "../utils/mockData";
import ProductItem from "../features/product/ProductItem";

const ProductsResult = () => {
  const handleRangeChange = (values: {
    minValue: number;
    maxValue: number;
  }) => {
    console.log("Rango seleccionado:", values);
  };
  return (
    <div className="min-h-full grid grid-cols-8">
      {/* SIDEBAR FILTROS */}
      <aside className="col-span-1 bg-white shadow-lg p-4">
        <ul className="text-[15px] my-6">
          <h3 className="text-md font-semibold mb-3">Categoría</h3>
          <li className="flex justify-between items-center">
            <Link to="/productos?categoria-1">Categoria 1</Link>
            <input type="checkbox" name="" id="" className="cursor-pointer" />
          </li>
          <li className="flex justify-between items-center">
            <Link to="/productos?categoria-1">Categoria 1</Link>
            <input type="checkbox" name="" id="" className="cursor-pointer" />
          </li>
          <li className="flex justify-between items-center">
            <Link to="/productos?categoria-1">Categoria 1</Link>
            <input type="checkbox" name="" id="" className="cursor-pointer" />
          </li>
        </ul>
        <ul className="text-[15px] my-6">
          <h3 className="text-md font-semibold mb-3">Opiniones</h3>
          <StarRating rating={4} maxStarsRating={5} isEditable={false} />
        </ul>
        <ul className="text-[15px] my-6">
          <h3 className="text-md font-semibold mb-3">Precio</h3>
          <DualRangeSlider
            min={100}
            max={10000}
            step={10}
            onChange={handleRangeChange}
          />
        </ul>
        <ul className="text-[15px] my-6">
          <h3 className="text-md font-semibold mb-3">Ofertas/Descuentos</h3>
          <li>
            <Link to="/productos?categoria-2">Todos los descuentos</Link>
          </li>
        </ul>
      </aside>
      {/* RESULTADOS DE BUSQUEDA */}
      <section className="col-span-7  p-6">
        <h1 className="text-xl">
          Resultados para <i>"termino busqueda"</i>{" "}
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {productData.map((product) => (
            <div className="col-span-1">
              <ProductItem
                key={product.id}
                product={product}
                itemWidth={100}
                direction="col"
                addToCartButton={true}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsResult;
