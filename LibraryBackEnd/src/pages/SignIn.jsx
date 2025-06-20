import { AuthenForm } from "../Components/AuthenForm";

// import { AuthForm } from '../Components/AuthenForm';
{/* <AuthenForm/>                                                           */}
export const SignIn = () => {
  const handleSignIn = (data) => {
    console.log('Sign In Data:', data);
    // 👉 Call your backend login API here
  };

  return <AuthenForm type="signin" onSubmit={handleSignIn} />;
};
