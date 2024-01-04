import DownloadButton from "./DownloadButton";

const Footer = () => {
  return (
    <>
      {/* <div></div> */}
      <footer className=" max-w-screen flex flex-wrap justify-between w-full pl-20 pr-20 bg-[#004E64] p-10 ">
        <div>
          <a href="" className="flex items-center space-x-0.5 ">
            <img src="./Logo_3.png" className="w-40" alt="TrashIN Logo" />
          </a>
        </div>

        <div className="mt-5 mr-20">
          <DownloadButton />
          <div>
            <p className="text-white text-xl pt-8 font-thin font-montserrat">
              © 2023 Ascent team. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="font-montserrat text-white">
          <h6 className="font-medium text-lg">CONTACT</h6>
          <div className="flex items-center space-x-3 mt-4">
            <img className="w-6" src="./icons/telephone.png" alt="" />
            <div>
              <p>+62 822 6695 1933</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <img className="w-6" src="./icons/phone.png" alt="" />
            <div>
              <p>Whatsapp</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <img className="w-6" src="./icons/email.png" alt="" />
            <div>
              <p>ascentproduction8@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
