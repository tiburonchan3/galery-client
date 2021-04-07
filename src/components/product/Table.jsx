import React, { useState } from "react";
import TDComponent from "../global/tables/TDComponent";
import THComponent from "../global/tables/THComponent";
import Modal from "../global/modal/Modal";
import Form from "./Form";
import { ProductService } from "../../services/product.service";
import Detail from "./Detail";

const Table = (props) => {
  const { products, setReload, marks, providers, categories } = props;
  const [showModal, setShowModal] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [product, setProduct] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const productService = new ProductService();
  const change = (id) => {
    const query = {
      id,
    };
  };
  //   const deleteMark = (id) => {
  //     confirmAlert({
  //       customUI: ({ onClose }) => {
  //         return (
  //           <DeleteAction
  //             id={id}
  //             type="mark"
  //             onClose={onClose}
  //             setReload={setReload}
  //           />
  //         );
  //       },
  //     });
  //   };
  const detail = (product) => {
    setProductDetail(product);
    setShowDetail(true);
  };
  const edit = (product) => {
    setShowModal(true);
    setProduct(product);
  };
  return (
    <div className="-mx-6 w-11/12 sm:-mx-8 sm:px-8 overflow-x-auto mt-10">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <THComponent name="ID" />
              <THComponent name="Nombre" />
              <THComponent name="Codigo" />
              <THComponent name="Estado" />
              <THComponent name="Imagen" />
              <THComponent name="Acciones" />
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={index}>
                <TDComponent
                  name={product.id}
                  onclick={() => detail(product)}
                  cursor="cursor-pointer"
                />
                <TDComponent
                  name={product.nombreProducto}
                  onclick={() => detail(product)}
                  cursor="cursor-pointer"
                />
                <TDComponent name={product.codigo_Producto} />
                <TDComponent>
                  <img src={productService.showImage(product.image)} alt="" />
                </TDComponent>
                <TDComponent>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={product.status === 1 ? true : false}
                        className="hidden"
                        onChange={() => change(product.id)}
                        value={product.status}
                      />
                      <div className="toggle__line w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                      <div
                        className={
                          "toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 " +
                          (product.status && "toggle__dot_active bg-green-400")
                        }
                      ></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">
                      {product.status ? "Activo" : "Inactivo"}
                    </div>
                  </label>
                </TDComponent>
                <TDComponent>
                  <button
                    onClick={() => edit(product)}
                    className="bg-indigo-700 p-2 text-xs w-20 rounded mr-4 text-white font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    // onClick={() => deleteMark(mark.id)}
                    className="bg-red-400 p-2 text-xs w-20 rounded text-white font-semibold"
                  >
                    Eliminar
                  </button>
                </TDComponent>
              </tr>
            ))}
          </tbody>
        </table>
        {/* DetailModal */}
        <Modal
          showModal={showDetail}
          setShowModal={setShowDetail}
          title={productDetail?.nombreProducto}
        >
          <Detail product={productDetail} setShowModal={setShowModal} showModal={showModal} setShowDetail={setShowDetail}/>
        </Modal>
        {/* Edit Modal */}
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <Form
            setReload={setReload}
            oldProduct={product}
            setShowModal={setShowModal}
            marks={marks}
            categories={categories}
            providers={providers}
            textButton="Actualizar"
          />
        </Modal>
      </div>
    </div>
  );
};

export default Table;
