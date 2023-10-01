import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
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
