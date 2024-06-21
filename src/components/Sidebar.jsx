import EmployeeManagement from './EmployeeManagement';

const Sidebar = () => {
  return (
    <>
    <div className="w-20 h-full shadow-lg bg-blue-800 text-black fixed left box-shadow-black-800">    
      <ul className="p-4">
        <li className="my-2">
          <a href="#" className="text-gray-300 e">Home</a>
        </li>
        <li className="my-2">
          <a href="#" className="text-gray-300e">About</a>
        </li>
        <li className="my-2">
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
        </li>
        <li className="my-2">
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
    <EmployeeManagement/>
    </>
  );
};

export default Sidebar;
