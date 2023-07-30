/* eslint-disable @next/next/no-img-element */
import RootLayouts from "@/components/Layouts/RootLayouts";
import React from "react";

const FeatureProductsPage = ({ product }) => {
  return (
    <div>
      <div className="lg:flex justify-center ">
        <div>
          <img src={product?.imageUrl} alt="" />
        </div>
        <div className="mt-10">
          <h1 className="text-2xl">{product?.name}</h1>
          <h1 className="mt-5">
            <span className="text-xl bg-emerald-500 text-white p-2 rounded-2xl">
              {product?.status}
            </span>{" "}
            <span className="text-xl bg-emerald-500 p-2 text-white rounded-2xl">
              Price {product?.price}
            </span>
          </h1>
          <div className="mt-5">
            {product?.keys?.map((key, i) => (
              <div className="ml-5 mt-2" key={i}>
                <p>{key.model}</p>
                <p>{key.cache}</p>
                <p>{key.specification}</p>
                <p>{key.speed}</p>
                <p>{key.type}</p>
              </div>
            ))}
            <h1 className="text-xl mt-5">To See description below</h1>
          </div>
        </div>
      </div>
      <div className="lg:w-[1440px] mx-auto">
        <h1 className="text-2xl">Description :</h1>
        {product?.description?.map((d, i) => (
          <p className="mt-5 " key={i}>
            {d?.details}
          </p>
        ))}
      </div>
      <div className="lg:w-[1440px] mx-auto lg:mt-10">
        <h1 className="text-5xl font-bold text-center">Reviews :</h1>
        {product?.reviews?.map((d, i) => (
          <div className="mt-10 border rounded-xl p-3" key={i}>
            <div className="flex items-center">
              <img className="w-20  rounded-full" src={d?.user} alt="" />
              <div className="ml-5">
                <h1>Name: Daniel Strong</h1>
                <p>Date:{d?.date}</p>
              </div>
            </div>
            <div>
              <p>{d?.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProductsPage;
FeatureProductsPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/featureProducts`);
  const data = await res.json();

  const paths = data.map((category) => ({
    params: { featureProductId: category?._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { featureProductId } = params;
  const res = await fetch(`http://localhost:5000/feature/${featureProductId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
