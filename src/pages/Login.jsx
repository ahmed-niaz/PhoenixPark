import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content ">
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <p className="text-2xl text-center font-bold mt-8">
              Login your account
            </p>
            <div className="divider w-3/4 mx-auto"></div>
            <form
              className="card-body  w-[320px] md:w-[440px] lg:w-[540px]"
            //   onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                //   {...register("email", { required: true })}
                />
                {/* {errors.email && (
                  <span className="text-rose-500 font-bold">
                    This field is required
                  </span>
                )} */}
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
                //   {...register("password", { required: true })}
                />
                {/* {errors.password && (
                  <span className="text-rose-500 font-bold">
                    This field is required
                  </span>
                )} */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">Login</button>
              </div>
              <small className="text-center font-bold">
                Dont’t Have An Account ?{" "}
                <Link to="/register" className="text-[#d90429]">
                  Register
                </Link>
              </small>
            </form>
            {/* <SocialLogin /> */}
          </div>
        </div>
      </div>
    </main>
    );
};

export default Login;