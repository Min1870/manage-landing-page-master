import logo from "../assets/logo.svg";
import { footerLinks1, footerLinks2, socialMedia } from "../data";

const Footer = () => {
  return (
    <section>
      <footer className=" bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social Links */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* logo */}
            <div>
              <img src={logo} className="h-8" alt="" />
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center space-x-3">
              {socialMedia.map((sm) => (
                <a href="#" key={sm.id}>
                  <img src={sm.icon} className="h-8" alt="" />
                </a>
              ))}
            </div>
          </div>
          {/* list container */}
          <div className="flex justify-around space-x-32 md:space-x-3">
            <div className="flex flex-col space-y-3 text-white">
              {footerLinks1.map((links) => (
                <div
                  key={links.id}
                  className="flex flex-col space-y-3 text-white"
                >
                  <a href="#" className="hover:text-brightRed">
                    {links.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 text-white">
              {footerLinks2.map((links) => (
                <div
                  key={links.id}
                  className="flex flex-col space-y-3 text-white"
                >
                  <a href="#" className="hover:text-brightRed">
                    {links.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-noe">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
