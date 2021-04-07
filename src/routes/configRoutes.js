/* eslint-disable import/no-anonymous-default-export */
import Home from "../pages/Home";
import Category from "../pages/Category";
import Mark from "../pages/Mark";
import Error404 from "../pages/Error404";
import Product from "../pages/Product";
import Provider from "../pages/Provider";


export default [
  {
    path: "/category",
    exact: true,
    page: Category,
  },
  {
    path: "/mark",
    exact: true,
    page: Mark,
  },
  {
    path: "/product",
    exact: true,
    page: Product,
  },
  {
    path: "/provider",
    exact: true,
    page: Provider,
  },
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",
    page: Error404,
  },
];
