import RegisterLayout from "@/components/Layouts/RegisterLayout";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const LoginPage = () => {
  return (
    <div className=" min-h-screen lg:flex justify-between items-center ">
      <div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 text-center">
            Login to your account
          </h1>
          <h3 className="text-center my-4 text-lg text-gray-500">
            Login using social network
          </h3>
          <div className="flex justify-center">
            <button className="text-white border border-gray-500 p-2 w-10 h-10 text-xl rounded-full">
              <img
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt=""
              />
            </button>
            <button className="text-white border border-gray-500 p-2 w-10 h-10 text-xl rounded-full mx-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="divider lg:mx-96">OR</div>
        <div className="flex justify-center items-center">
          <form>
            <div>
              <input
                className="input input-bordered w-96"
                placeholder="Email"
                type="email"
                id=""
              />
            </div>
            <div className="mt-5">
              <input
                className="input input-bordered w-96"
                placeholder="Password"
                type="password"
                id=""
              />
            </div>
            <div className="mt-5">
              <button className=" btn bg-emerald-300 text-white w-96">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" bg-emerald-300 min-h-screen flex justify-center items-center p-5 lg:w-1/4 ">
        <div>
          <h1 className="text-4xl font-bold text-white text-center">
            New Here
          </h1>
          <p className="mt-2 text-gray-500 text-center">
            Sign Up for discover new opportunities
          </p>
          <div className="flex justify-center">
            <Link href="/register">
              <button className="bg-white text-center w-28 py-2 rounded-xl mt-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RegisterLayout>{page}</RegisterLayout>;
};
