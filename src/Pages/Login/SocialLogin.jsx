import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("Successfully logged in");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-neutral btn-sm"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-primary btn-neutral btn-sm"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
