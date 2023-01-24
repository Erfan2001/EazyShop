import React, { Fragment } from "react";
import {
  MetaData,
  PopularProducts,
  Categories,
  CategoryCarousel,
} from "../../../components/";

const Home = () => {
  return (
    <Fragment>
      <MetaData title={`Eazy Shop`} />
      <main>
        <Categories />
        <section className="px-4 pt-10 sm:px-10 xl:px-24">
          <div className="gap-8 overflow-hidden lg:grid lg:grid-cols-3">
            <PopularProducts />
          </div>
        </section>
        <CategoryCarousel />
      </main>
    </Fragment>
  );
};

export default Home;
