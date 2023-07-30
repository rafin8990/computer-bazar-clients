/* eslint-disable @next/next/no-img-element */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Link from "next/link";
import { useState } from "react";

const PcBuilder = ({ categories }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="min-h-screen">
      <div>
        <div className="flex justify-around">
          <h3 className="text-xl font-bold text-emerald-500 text-center">
            Build Your Own PC from Computer Bazar
          </h3>
          <p className="text-xl text-center">Total: 0 ৳</p>
        </div>
        <div className="my-10 mx-5">Select your own PC Item:</div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Book</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, i) => (
                  <tr key={category?._id}>
                    <th> {i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={category?.imageUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{category?.name}</div>
                        </div>
                      </div>
                    </td>
                    <th>
                      <Link href={`/builder/${category?.name}`}>
                        <button className="btn  btn-xs">Select</button>
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className={`text-white   px-3 py-2 w-60 rounded-xl mt-5 ${
            disabled ? "bg-emerald-300" : " bg-gray-500"
          }`}
        >
          Build PC
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
};
