import Typography from "../components/Typography";
import Button from "../components/Button";
import { faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar";
import { productData } from "../utils/mockData";
import ProductItem from "../features/product/ProductItem";

const WishList = () => {
  return (
    <div className="min-h-full w-full px-4 md:px-8 py-8">
      <div className="">
        <Typography type="title3">Lista de deseos</Typography>
      </div>
      {/* LISTA DE DESEOS */}
      <section className="min-h-screen border-2 rounded-md border-zinc-300 mt-2 md:mt-4 p-3 md:p-5">
        <div className="flex justify-end gap-6">
          <Button rounded="medium" icon={faListUl} />
          <Button rounded="medium" icon={faGrip} />
          <SearchBar rounded="medium" width="400px" />
        </div>
        <div className="mt-6">
          {[...productData].slice(0, 4).map((product) => (
            <div>
              <div className="flex justify-around items-center">
                <div>
                  <ProductItem
                    product={product}
                    itemWidth={100}
                    direction="row"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-3 text-sm">
                  <p>Producto agregado el 15 de Agosto de 2024</p>
                  <Button variant="primary" label="Agregar al carrito" />
                  <Button variant="outline" label="Remover" />
                </div>
              </div>
              <hr className="my-6" />
            </div>
          ))}
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default WishList;
