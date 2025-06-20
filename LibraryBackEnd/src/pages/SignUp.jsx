import { AuthenForm } from '../Components/AuthenForm';  

export const SignUp = () => {
  const handleSignUp = (data) => {
    console.log('Sign Up Data:', data);
    // 👉 Call your backend signup API here
  };

  return <AuthenForm
   type="signup" onSubmit={handleSignUp} />;
};
