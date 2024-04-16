import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
const SocialLogin = () => {
    const {googleLogin,gitHubLogin} = useAuth()
  return (
    <main>
      <div className="divider w-3/4 mx-auto">Continue with</div>
      <div className="flex justify-center mb-4 gap-4">
        <button onClick={()=>googleLogin()} className="btn text-white  glass bg-[#d90429]">
          <FaGoogle size={20}/>
        </button>
        <button onClick={()=> gitHubLogin()} className="btn text-white  glass bg-[#d90429]">
          <FaGithub size={20}/>
        </button>
        <button className="btn text-white  glass bg-[#d90429]">
        <FaFacebook size={20}/>
        </button>
        <button className="btn text-white  glass bg-[#d90429]">
        <FaLinkedin size={20}/>
        </button>
      </div>
    </main>
  );
};

export default SocialLogin;
