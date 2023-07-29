/* eslint-disable @next/next/no-img-element */
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" min-h-screen lg:flex justify-between items-center ">
      <div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 text-center">
            Sign Up for new account
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
            <button
              onClick={() => signIn("github")}
              className="text-white border border-gray-500 p-2 w-10 h-10 text-xl rounded-full mx-2"
            >
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
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="Enter Email"
                className="input input-bordered md:w-[450px] "
              />
            </div>
            <div className="mt-5">
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mt-5">
              <button className=" btn bg-emerald-300 text-white w-96">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" bg-emerald-300 min-h-screen flex justify-center items-center p-5  ">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Already Have an Account
          </h1>
          <p className="mt-2 text-gray-500 text-center">
            Please login to purchase computer
          </p>
          <div className="flex justify-center">
            <Link href="/login">
              <button className="bg-white text-center w-28 py-2 rounded-xl mt-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RegisterLayout>{page}</RegisterLayout>;
};
