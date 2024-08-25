import React from "react";
import Link from "next/link";

const HomeRegister = () => {
  return (
    <div className="m-6 flex flex-col lg:flex-row justify-center items-center">
      <div className="flex justify-center items-center">
        <img
          src="/imagecollege.png"
          alt=""
          className="w-full max-w-[700px] h-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex justify-center items-center flex-col mt-10 ml-4 gap-4 max-w-[400px] w-full px-4">
        <div className="flex justify-center items-center flex-col gap-4">
          <p className="font-roboto font-semibold text-[30px] lg:text-[40px] leading-[36px] lg:leading-[46.88px] text-center mt-14">
            <span className="text-[#E74D0B]">Home </span>for Ceramic Artists
          </p>
          <img
            src="/user.png"
            alt=""
            className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <form action="">
          <div className="border-b-2 flex justify-center items-center gap-4 mt-4 w-full">
            <img src="/emailicon.png" alt="" className="h-[15px] w-[15px]" />
            <input
              type="text"
              placeholder="Email"
              className="flex-1 focus:outline-none"
            />
          </div>
          <div className="border-b-2 flex justify-center items-center gap-4 mt-4 w-full">
            <img src="/eyeicon.png" alt="" className="h-[15px] w-[15px]" />
            <input
              type="text"
              placeholder="Password"
              className="flex-1 focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-3 mt-4">
            <Link
              href="#"
              className="text-[#4E4E4E] hover:text-[#E74D0B] transition-colors duration-300"
            >
              Forgot Password?
            </Link>
            <button className="w-full h-[38px] bg-[#A76D09] text-white rounded-[45px] transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#8C5D02] shadow-md hover:shadow-lg">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-bold text-[15px] text-[#7A7A7A]">or</p>
          <div className="flex justify-center items-center gap-9">
            <Link href="#">
              <img
                src="/fblogo.png"
                alt="Facebook"
                className="w-[60px] h-[60px] transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <Link href="#">
              <img
                src="/googlelogo.png"
                alt="Google"
                className="w-[60px] h-[60px] transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
          </div>
          <p className="font-normal text-[15px] text-[#4E4E4E]">
            Don’t have an account?
            <Link
              href="#"
              className="text-[#7A7A7A] font-bold hover:text-[#E74D0B] transition-colors duration-300"
            >
              {" "}
              Register
            </Link>
          </p>
          <div className="text-center mt-2">
            <p className="font-normal leading-[22px] text-[#4E4E4E]">
              By continuing, you agree to our{" "}
              <Link
                href="#"
                className="underline hover:text-[#E74D0B] transition-colors duration-300"
              >
                User Agreement
              </Link>{" "}
              and acknowledge that you understand the{" "}
              <Link
                href="#"
                className="underline hover:text-[#E74D0B] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegister;
