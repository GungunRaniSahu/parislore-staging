const Header = () => (
  <header className="bg-white py-3 px-20 flex justify-between items-center border-b border-gray-200 shadow-md">
    <div className="flex items-center px-8 space-x-2">
      <div className="w-3 h-3 bg-[#006BA6] rotate-45"></div>
      <h1 id="logotext" className="font-bold font-playfair text-[#006BA6] text-xl">Paris Lore</h1>
    </div>
    <nav className="flex space-x-8 text-m text-gray-700 font-lora">
      <a href="#" className="hover:text-[#E63946]">Home</a>
      <a href="#" className="hover:text-[#E63946]">Stories</a>
      <a href="#submit" className="bg-[#006BA6] text-white px-4 py-1 rounded-md hover:bg-[#E63946]">Submit</a>
    </nav>
  </header>
);


export default Header;
