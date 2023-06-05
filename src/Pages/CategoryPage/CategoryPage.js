import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import Product from "../../Components/Shared/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const CategoryPage = () => {
  const { category } = useParams();
  const { categoryProducts } = useContext(ThemeContext);
  const { loading } = useContext(ThemeContext);
  const [list, setList] = useState(false);

  return (
    <div className="2xl:w-[65%] md:w-[75%] w-[95%] mx-auto mb-20">
      <div className="my-10 w-[90%] 2xl:w-[full md:w-full  mx-auto">
        <p className="text-[14px] font-semibold">
          Home
          <FontAwesomeIcon
            className="mx-2"
            icon={faCaretRight}
          ></FontAwesomeIcon>
          {category?.toUpperCase()}
        </p>
      </div>
      <h1
        className={`w-[90%] 2xl:w-full md:w-full mx-auto ${
          category?.includes("top 10") ? "text-center" : ""
        } font-bold my-10 text-[22px]`}
      >
        {category?.toUpperCase()}
      </h1>

      <div className="hidden sm:flex items-center mb-10">
        <button onClick={() => setList(false)}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/sf-regular-filled/48/grid.png"
            alt="grid"
            className="inline mt-[-4px]"
          />
          Grid
        </button>
        <button onClick={() => setList(true)}>
          <FontAwesomeIcon className="mx-2" icon={faList}></FontAwesomeIcon>List
        </button>
      </div>
      {loading && (
        <div className="flex justify-center items-center h-[50vh]">
          <ThreeDots
            height="100"
            width="100"
            radius="10"
            color="#cb9815"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}

      {list ? (
        <div className="list-container grid gap-6 grid-cols-1">
          {categoryProducts?.map((product) => (
            <Product key={product.id} list={list} product={product}></Product>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-y-8 sm:gap-6 sm:grid-cols-4">
          {categoryProducts?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
