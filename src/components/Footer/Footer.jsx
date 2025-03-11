import logo from "../../assets/images/1.png";

function Footer() {

  return (
    <>
      <footer className="bg-[#0c252f] py-11">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
            <a href="/" className="block">
              <img src={logo} className="w-20" alt="Logo" />
            </a>
            <div className="text-left md:text-end text-base font-semibold text-white">© 2025 Collier. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
