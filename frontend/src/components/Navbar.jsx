const Navbar = () => {
  return (
    <div className="h-14 bg-blue-600 text-white flex items-center px-6 justify-between">
      <h1 className="font-bold text-lg">Dayflow HRMS</h1>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="bg-white text-blue-600 px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
