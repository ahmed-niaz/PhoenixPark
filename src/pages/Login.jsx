import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";



const Login = () => {
    const {loginUser} = useAuth()
    const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { email, password } = data;
        loginUser(email, password)
        .then((result) => {
            if (result.user) {
              navigate(from);
            }
          });
          
      };
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
              onSubmit={handleSubmit(onSubmit)}
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
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-rose-500 font-bold">
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
                  <span className="text-rose-500 font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn glass bg-[#d90429] text-white font-bold">Login</button>
              </div>
              <small className="text-center font-bold">
                Dont’t Have An Account ?{" "}
                <Link to="/register" className="text-[#d90429]">
                  Register
                </Link>
              </small>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </main>
    );
};

export default Login;