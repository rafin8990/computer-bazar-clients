import RegisterLayout from "@/components/Layouts/RegisterLayout";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const CategoryPage = ({ categories }) => {
  console.log(categories);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
      {categories?.map((category) => (
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
              <Link href={`/product/${category?._id}`}>
                <button className="btn bg-emerald-300 text-white hover:bg-emerald-400 w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RegisterLayout>{page}</RegisterLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();

  const paths = data.map((category) => ({
    params: { categoryName: category.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { categoryName } = params;
  const res = await fetch(
    `http://localhost:5000/category?categoryName=${categoryName}`
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
    revalidate: 30000,
  };
};
