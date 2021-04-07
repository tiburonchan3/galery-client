import React from "react";
import "./styles/home.styles.scss";
import LineChart from "../components/home/LineChart";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <LineChart />
    </Layout>
  );
};

export default Home;
