const Navbar = () => {
  return (
    <div className="px-4 fixed flex items-center justify-between w-full pr-20 z-10">
      <img src="/logo.png" alt="logo" className="w-28" />
      <div className="flex items-center space-x-14 font-light">
        <a href="/" className="font-light hover:font-medium">
          Our Service
        </a>
        <a href="/" className="font-light hover:font-medium">
          About Us
        </a>
        <a href="/" className="font-medium">
          Team up
        </a>
      </div>
      <button className="rounded-3xl px-4 py-1 border-[#DEFC01] bg-gradient-to-r from-[#192B2F] from-5% to-transparent to-95% hover:border-white">
        Login
      </button>
    </div>
  );
};

export default Navbar;
