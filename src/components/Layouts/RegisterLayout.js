import Navbar from "../UI/Navbar";

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default RegisterLayout;
