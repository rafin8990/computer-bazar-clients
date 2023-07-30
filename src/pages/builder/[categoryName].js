/* eslint-disable @next/next/no-img-element */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Link from "next/link";
import React from "react";

const BuilderItems = ({ categories }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Ratings</th>
              <th>Price</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => (
              <tr key={category?._id}>
                <th> {i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-40 h-40" s>
                        <img
                          src={category?.imageUrl}
                          alt=" Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{category?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{category?.categoryName}</td>
                <td>{category?.status}</td>
                <td>{category?.ratings}</td>
                <td>{category?.price}৳</td>
                <th>
                  <Link href={`/pcbuilder`}>
                    <button className="btn  btn-xs">Select</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuilderItems;

BuilderItems.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getServerSideProps = async ({ params }) => {
  const { categoryName } = params;
  const res = await fetch(
    `http://localhost:5000/category?categoryName=${categoryName}`
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};
