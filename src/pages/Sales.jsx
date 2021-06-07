import {useState,useEffect} from "react";
import Layout from "../layout/Layout";
import { OrderService } from "../services/order.service";
import Table from '../components/sales/Table';

const Sales = () => {
    const [orders, setOrders] = useState();
    const orderService = new OrderService();
    const getOrders = ()=>{
        orderService.getOrders().then(res=>{
            if(res.ok){
                setOrders(res.ordenes)
                console.log(res.ordenes)
            }
        })
    }
    useEffect(() => {
        return getOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-4">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Listado de Ventas y Ordenes
            </h2>
            <input
              className="border p-1 rounded w-96 mt-4"
              placeholder="Escribe para filtrar las ordenes y ventas"
            />
            <button
              className="bg-global p-2 w-28 text-center text-semibold float-right text-white rounded-md font-semibold text-xs mr-14"
            >
              Agregar
            </button>
            <Table orders={orders}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
