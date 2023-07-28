import RootLayouts from "@/components/Layouts/RootLayouts";

const HomePage = () => {
  return <div>THis is Home page</div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
