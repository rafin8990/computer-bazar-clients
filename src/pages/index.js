/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-typos */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Link from "next/link";

const HomePage = ({ categories, featureProducts }) => {
  return (
    <div>
      <div>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center my-10">
          {" "}
          Featured Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-5">
        {categories?.map((category) => (
          <Link href={`/category/${category?.name}`} key={category?._id}>
            <div className="flex justify-center">
              <div className=" p-5 rounded-2xl w-40 h-[150px]">
                <img className="w-20" src={category?.imageUrl} alt="" />
                <h3 className="text-xl font-semibold">{category?.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center my-24">
          Feature Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {featureProducts?.map((category) => (
          <div
            key={category?._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={category?.imageUrl} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category?.name}</h2>
              <p className="w-20 h-5 rounded-2xl text-center bg-emerald-300 text-white hover:bg-emerald-400">
                {category?.status}
              </p>
              <p className="text-xl">Category: {category?.categoryName}</p>
              <p className="text-xl">Price: {category?.price}</p>
              <div className="">
                <Link href={`/featureproduct/${category?._id}`}>
                  <button className="btn bg-emerald-300 text-white hover:bg-emerald-400 w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();

  const response = await fetch("http://localhost:5000/featureProducts");
  const featureProducts = await response.json();
  return {
    props: {
      categories: data,
      featureProducts: featureProducts,
    },
    revalidate: 30000,
  };
};
