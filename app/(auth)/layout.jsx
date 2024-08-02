import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

const AuthLayout = ({ children }) => {
  return (
    <div className=" container w-full bg-auth-img bg-cover bg-no-repeat ">
      <div className="bg-black/30 min-h-screen relative">
        <Nav />
        <div className="pt-4 px-4">
          {children}
          <Footer />
        </div>
        <div className="modal"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
