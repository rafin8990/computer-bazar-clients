/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-typos */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Link from "next/link";

const HomePage = ({ categories }) => {
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
  return {
    props: {
      categories: data,
    },
    revalidate: 30000,
  };
};
