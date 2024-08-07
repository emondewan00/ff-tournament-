import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

const ContentsLayout = ({ children }) => {
  return (
    <div className=" container w-full bg-custom-img bg-cover bg-no-repeat object-center">
      <div className="bg-black/50 min-h-screen relative">
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

export default ContentsLayout;
