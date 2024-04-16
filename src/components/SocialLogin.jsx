import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <main>
      <div className="divider w-3/4 mx-auto">Continue with</div>
      <div className="flex justify-center mb-4 gap-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-white  glass bg-[#d90429]"
        >
          <FaGoogle size={20} />
        </button>
        <button
          onClick={() => handleSocialLogin(gitHubLogin)}
          className="btn text-white  glass bg-[#d90429]"
        >
          <FaGithub size={20} />
        </button>
        <button className="btn text-white  glass bg-[#d90429]">
          <FaFacebook size={20} />
        </button>
        <button className="btn text-white  glass bg-[#d90429]">
          <FaLinkedin size={20} />
        </button>
      </div>
    </main>
  );
};

export default SocialLogin;
