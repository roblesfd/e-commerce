import Badge from "../components/Badge";
import Box from "../components/Box";
import Button from "../components/Button";

const OrderConfirmation = () => {
  return (
    <div className="grid grid-cols-12 gap-6  min-h-full px-4 py-6 md:px-20 md:py-10">
      <div className="col-span-9">
        <Box size="medium">
          <section id="direccion-envio" className="grid grid-cols-10 ">
            <div className="col-span-4 font-semibold inline-block space-x-5">
              <span>1</span>{" "}
              <span className="text-md ">Dirección de envío</span>
            </div>
            <div className="col-span-6 flex justify-between items-center gap-8">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eaque!
                </p>
              </div>
              <span className="font-medium cursor-pointer text-sm text-blue-700 hover:text-blue-500">
                Cambiar
              </span>
            </div>
          </section>
          <hr className="my-6" />
          <section id="metodo-pago" className="grid grid-cols-10 ">
            <div className="col-span-4 font-semibold inline-block space-x-5">
              <span>1</span> <span className="text-md ">Método de pago</span>
            </div>
            <div className="col-span-6 flex justify-between items-center gap-8">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eaque!
                </p>
              </div>
              <span className="font-medium cursor-pointer text-sm text-blue-700 hover:text-blue-500">
                Cambiar
              </span>
            </div>
          </section>
          <hr className="my-6" />
          <section id="resumen-articulos space-y-6">
            <div className=" font-semibold inline-block space-x-5 mb-5">
              <span>1</span>
              <span className="text-md ">Resúmen de artículos</span>
            </div>
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
            <hr className="my-3" />
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
            <hr className="my-3" />
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
          </section>
        </Box>
      </div>
      <div className=" col-span-3 h-[300px] shadow-lg">
        <Box>
          <div className="flex flex-col justify-center items-center h-full p-3 space-y-4">
            <h3 className="font-semibold">Confirmación del pedido:</h3>
            <div className="grid grid-cols-2 w-full">
              <div className="col-span-1 text-left w-full">
                <p>Productos:</p>
              </div>
              <div className="col-span-1 text-right w-full">
                <p>$567.50:</p>
              </div>
              <div className="col-span-1 text-left w-full">
                <p>Envío:</p>
              </div>
              <div className="col-span-1 text-right w-full">
                <p>$62.50:</p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="w-full flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Total:</h3>
              <p className="text-2xl font-semibold">$809.70</p>
            </div>
            <div className="text-center mt-8">
              <Button
                label="Realizar pedido y pagar"
                variant="secondary"
                rounded="medium"
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default OrderConfirmation;
