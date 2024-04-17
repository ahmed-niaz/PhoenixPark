import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const from = "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    const { email, password, fullName, image } = data;
    registerUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        navigate(from);
      });
    });
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content ">
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <p className="text-2xl text-center font-bold mt-8">
              Register your account
            </p>
            <div className="divider w-3/4 mx-auto"></div>
            <form
              className="card-body w-[320px] md:w-[440px] lg:w-[540px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  className="input input-bordered "
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-[#d90429] font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[#d90429] font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={open === false ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative "
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: `Minimum required length is 6`,
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "Password must contain at least one uppercase and one lowercase letter",
                    },
                  })}
                />
                <div className="absolute right-16 mt-[52px]">
                  {open === false ? (
                    <BsEyeFill onClick={toggle} />
                  ) : (
                    <IoEyeOffOutline onClick={toggle} />
                  )}
                </div>

                {errors.password && (
                  <span className="text-[#d90429] font-bold">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" />{" "}
                <small>
                  Accept <b>Term & Conditions</b>
                </small>
              </div>
              <div className="form-control mt-6">
                <button className="btn glass bg-[#d90429] text-white font-bold">
                  Register
                </button>
              </div>
              <small className="text-center font-bold">
                {" "}
                Have An Account ?{" "}
                <Link to="/login" className="text-[#d90429]">
                  Login
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
