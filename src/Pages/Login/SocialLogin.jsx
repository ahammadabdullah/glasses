import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
    media()
      .then(() => toast.success("Successfully logged in"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-neutral btn-sm"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
