import ProductImageViewer from "./ProductImageViewer";
import reptileImg from "../../assets/contemplative-reptile.jpg";
import laptopImg from "../../assets/laptop.jpg";
import printerImg from "../../assets/printer.jpg";
import ssdImg from "../../assets/ssd.jpg";
import Box from "../../components/Box";
import Button from "../../components/Button";
import StarRating from "../../components/StarsReview";
import Slider from "../../components/slider/Slider";
import { productData } from "../../utils/mockData";
import ProductItem from "./ProductItem";
import ProgressBar from "../../components/ProgressBar";
import Typography from "../../components/Typography";
import ReviewComment from "../review/ReviewComment";
import ReviewCommentInput from "../review/ReviewCommentInput";

const ProductDetail = () => {
  const productImages = [reptileImg, laptopImg, printerImg, ssdImg];

  return (
    <>
      <div className="grid grid-cols-12 gap-6 min-h-auto px-4 py-6 md:px-6 md:py-10">
        <section id="product-images-preview" className="col-span-5">
          <ProductImageViewer images={productImages} />
        </section>
        {/* DETALLES DEL PRODUCTO */}
        <section id="product-details" className="col-span-5">
          <Typography type="title4">Nombre del producto</Typography>
          <div className="flex justify-end items-center w-full mt-4">
            <StarRating
              rating={4.5}
              maxStarsRating={5}
              noRatings={18}
              size="medium"
            />
          </div>
          <div className="flex justify-start itemse-center gap-3">
            <p className="text-red-800 line-through text-sm">170.00</p>
            <span className="font-semibold text-3xl"> $1700.50</span>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Detalles del producto:
            </h2>
            <ul>
              <li>- Detalle 1</li>
              <li>- Detalle 1</li>
              <li>- Detalle 1</li>
              <li>- Detalle 1</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Descripción del producto:
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              cum tempore voluptatum delectus pariatur veritatis repellat
              officiis ipsum impedit quod alias earum neque atque eum optio,
              veniam repudiandae possimus distinctio!
            </p>
          </div>
        </section>
        {/* ACCIONES DEL PRODUCTO */}
        <section id="product-actions" className="col-span-2 ">
          <div className="hidden md:block col-span-2  bg-none">
            <div className="min-h-[200px]">
              <Box>
                <div className="flex flex-col justify-center items-center h-full p-1 space-y-4">
                  <p className="text-right">
                    Precio:
                    <span className="font-semibold "> $1700.50</span>
                  </p>
                  <p className="text-green-500">Disponible</p>
                  <select
                    name="producto-cantidad"
                    id="producto-cantidad"
                    className="px-2 py-1"
                  >
                    <option value="" disabled selected>
                      Cantidad
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className="text-center w-full">
                    <Button
                      label="Agregar al carrito"
                      variant="secondary"
                      rounded="medium"
                      customClass="w-full"
                    />
                  </p>
                  <p className="text-center w-full">
                    <Button
                      label="Comprar ahora"
                      variant="primary"
                      rounded="medium"
                      customClass="w-full"
                    />
                  </p>
                  <p className="text-center">
                    <Button
                      label="Añadir a lista de deseos"
                      variant="ghost"
                      rounded="medium"
                      size="small"
                    />
                  </p>
                </div>
              </Box>
            </div>
          </div>
        </section>
      </div>
      {/* PRODUCTOS SIMILARES */}
      <section id="similar-products" className="my-8">
        <Slider data={productData} visibleItemsNumber={4}>
          {productData.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              itemWidth={100 / 4}
              direction="col"
            />
          ))}
        </Slider>
      </section>
      <hr />
      {/* RESEÑAS DE PRODUCTOS */}
      <section
        id="product-reviews"
        className="grid grid-cols-10 gap-4 p-3 md:p-6 my-8"
      >
        <div className="col-span-3 space-y-3">
          <h3 className="text-xl font-semibold">Calificaciones de clientes</h3>
          <StarRating
            rating={4.5}
            maxStarsRating={5}
            noRatings={18}
            size="medium"
          />
          <div className="w-full flex justify-between items-center gap-4 text-sm  mt-4">
            <p>5 estrellas</p>
            <ProgressBar progress={81} barColor="blue-600" height="h-6" />
            <p>81%</p>
          </div>
          <div className="w-full flex justify-between items-center gap-4 text-sm ">
            <p>4 estrellas</p>
            <ProgressBar progress={9} barColor="blue-600" height="h-6" />
            <p>9%</p>
          </div>
          <div className="w-full flex justify-between items-center gap-4 text-sm ">
            <p>3 estrellas</p>
            <ProgressBar progress={3} barColor="blue-600" height="h-6" />
            <p>3%</p>
          </div>
          <div className="w-full flex justify-between items-center gap-4 text-sm ">
            <p>2 estrellas</p>
            <ProgressBar progress={3} barColor="blue-600" height="h-6" />
            <p>3%</p>
          </div>
          <div className="w-full flex justify-between items-center gap-4 text-sm ">
            <p>1 estrellas</p>
            <ProgressBar progress={4} barColor="blue-600" height="h-6" />
            <p>4%</p>
          </div>
        </div>
        <div className="col-span-7">
          <ReviewCommentInput />
          <div className="px-8">
            <Typography type="title6">Reseñas de usuarios</Typography>
          </div>
          <ReviewComment />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
