import React, { useState } from "react";
import Typography from "../../components/Typography";
import TabsContainer from "../../components/tabs/TabsContainer";
import Tab from "../../components/tabs/Tab";
import TabsContent from "../../components/tabs/TabsContent";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="p-3 md:p-8">
      {/* HEADER */}
      <section className="mb-4">
        <Typography type="title3" color="primary-700">
          Mis pedidos
        </Typography>
      </section>
      {/* TABS PEDIDOS*/}
      <TabsContainer customStyles="bg-neutral-50">
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Entregados"
          data="entregados"
        />
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Pendiente por enviar"
          data="pendiente"
        />
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Cancelados"
          data="cancelados"
        />
      </TabsContainer>
      <TabsContent customStyles="bg-neutral-50 pb-8">
        {activeTab === "entregados" && (
          <div className="space-y-8 ">
            <div>
              <div className="flex justify-start items-center gap-8">
                <Typography type="title6" color="primary-700">
                  Entregado el 3 de julio
                </Typography>
                <Typography type="title6" color="primary-700">
                  Total: $ 570.00
                </Typography>
              </div>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography type="title6" color="primary-700" customStyles="mb-6">
                Entregado el 3 de julio
              </Typography>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "pendiente" && (
          <div className="space-y-8 ">
            <div>
              <div className="flex justify-start items-center gap-8">
                <Typography type="title6" color="primary-700">
                  Fecha estimada de entrega: 3 de julio
                </Typography>
                <Typography type="title6" color="primary-700">
                  Total: $ 570.00
                </Typography>
              </div>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography type="title6" color="primary-700" customStyles="mb-6">
                Fecha estimada de entrega: 3 de julio
              </Typography>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "cancelados" && (
          <div className="space-y-8 ">
            <div>
              <div className="flex justify-start items-center gap-8">
                <Typography type="title6" color="primary-700">
                  Pedido realizado: 3 de julio
                </Typography>
                <Typography type="title6" color="primary-700">
                  Total: $ 570.00
                </Typography>
              </div>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography type="title6" color="primary-700" customStyles="mb-6">
                Pedido realizado: 3 de julio
              </Typography>
              <hr className="my-6" />
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <img src="https://via.placeholder.com/150" alt="" />
                  <div className="block space-y-3">
                    <h3 className="font-semibold text-md">
                      Nombre del producto
                    </h3>
                    <p> Cantidad: 1</p>
                    <p>
                      Precio: <span className="font-semibold">$100.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </TabsContent>
      {/*  */}
      <section></section>
    </div>
  );
};

export default MyOrders;
