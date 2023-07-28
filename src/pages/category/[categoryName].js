import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const CategoryPage = ({ categories }) => {
  console.log(categories);
  return (
    <div>
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
