import Badge from "../../components/Badge";
import Box from "../../components/Box";
import Button from "../../components/Button";

const ShoppingCart = () => {
  return (
    <div className="grid grid-cols-10 gap-6 min-h-full px-4 py-6 md:px-6 md:py-10">
      <div className="col-span-10 md:col-span-8">
        <Box size="medium">
          <h1 className="text-xl font-semibold">Mi carrito</h1>
          <span className="text-blue-700 hover:text-blue-500 cursor-pointer text-[15px]">
            Quitar todos los artículos de mi carrito
          </span>
          <p className="text-right text-gray-600">Precio</p>
          <hr className="mb-6" />
          {/* LISTA PRODUCTOS */}
          <section className="space-y-3">
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                  checked
                />
              </div>
              <div className="col-span-8">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <select
                      name="producto-cantidad"
                      id="producto-cantidad"
                      className="px-2 py-1"
                    >
                      <option value="" disabled selected>
                        Cantidad
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right block space-y-2">
                <p className="text-red-700 text-[13px]">
                  <Badge label="20%" bgColor="red-500" textColor="white" /> de
                  descuento
                </p>
                <p className="font-semibold">$560.00</p>
                <p className="font-normal text-xs text-gray-600">
                  Precio de lista <span className="line-through">$580.60</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                  checked
                />
              </div>
              <div className="col-span-8">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <select name="" id="" className="px-2 py-1">
                      <option value="" disabled selected>
                        Cantidad
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right block space-y-2">
                <p className="text-red-700 text-[13px]">
                  <Badge label="20%" bgColor="red-500" textColor="white" /> de
                  descuento
                </p>
                <p className="font-semibold">$560.00</p>
                <p className="font-normal text-xs text-gray-600">
                  Precio de lista <span className="line-through">$580.60</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                  checked
                />
              </div>
              <div className="col-span-8">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <select name="" id="" className="px-2 py-1">
                      <option value="" disabled selected>
                        Cantidad
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right block space-y-2">
                <p className="text-red-700 text-[13px]">
                  <Badge label="20%" bgColor="red-500" textColor="white" /> de
                  descuento
                </p>
                <p className="font-semibold">$560.00</p>
                <p className="font-normal text-xs text-gray-600">
                  Precio de lista <span className="line-through">$580.60</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                  checked
                />
              </div>
              <div className="col-span-8">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <select name="" id="" className="px-2 py-1">
                      <option value="" disabled selected>
                        Cantidad
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right block space-y-2">
                <p className="text-red-700 text-[13px]">
                  <Badge label="20%" bgColor="red-500" textColor="white" /> de
                  descuento
                </p>
                <p className="font-semibold">$560.00</p>
                <p className="font-normal text-xs text-gray-600">
                  Precio de lista <span className="line-through">$580.60</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                  checked
                />
              </div>
              <div className="col-span-8">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <select name="" id="" className="px-2 py-1">
                      <option value="" disabled selected>
                        Cantidad
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right block space-y-2">
                <p className="text-red-700 text-[13px]">
                  <Badge label="20%" bgColor="red-500" textColor="white" /> de
                  descuento
                </p>
                <p className="font-semibold">$560.00</p>
                <p className="font-normal text-xs text-gray-600">
                  Precio de lista <span className="line-through">$580.60</span>
                </p>
              </div>
            </div>
            <hr />
          </section>
          {/* SUBTOTAL */}
          <section className="text-right mt-3 text-[18px]">
            <p className="">
              Subtotal (5 productos):{" "}
              <span className="font-semibold">$1700.50</span>
            </p>
            <div className="sm:block md:hidden mt-4">
              <Button
                label="Proceder al pago"
                variant="secondary"
                rounded="medium"
              />
            </div>
          </section>
        </Box>
      </div>
      <div className="hidden md:block col-span-2  bg-none">
        <div className="h-[200px] shadow-lg">
          <Box>
            <div className="flex flex-col justify-center items-center h-full p-3 space-y-4">
              <p className="text-right">
                Subtotal (5 productos):{" "}
                <span className="font-semibold ">$1700.50</span>
              </p>
              <p className="text-center">
                <Button
                  label="Proceder al pago"
                  variant="secondary"
                  rounded="medium"
                />
              </p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
