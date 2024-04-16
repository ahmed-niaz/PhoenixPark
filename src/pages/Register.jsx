import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseProvider";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    registerUser(email, password).then((result) => {
      console.log(result);
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-[#d90429] font-bold">
                    This field is required
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
                <button className="btn bg-[#403F3F] text-white">
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
