import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const Topbar = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md pl-20" >
            <h1 className="text-3xl font-bold mb-4 color-gray-600">Hotel Royal Blue, Mumbai</h1>
            <h3 className="text-xl font-gray-600 mb-4">Employee Management</h3>
            <div className="flex gap-5">

                <div className="flex-nowrap space-x-0">
                    <div className="bg-blue-100 text-blue-800 px-4 py-6 rounded-md border font-bold  max-w-full">
                        <div className="text-center ">20</div>
                        <div className="text-gray-500">Present Employees</div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-blue-100 text-black-800 px-6 py-6 rounded-md border font-bold max-w-full">
                        <div className="text-center">03</div>
                        <div className="text-gray-500">Absent Employees</div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-blue-100 text-black-800 px-6 py-6 rounded-md border font-bold max-w-full">
                        <div className="text-center">02</div>
                        <div className="text-gray-500">On Leave</div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-blue-100 text-black-800 px-6 py-6 rounded-md border font-bold w-full">
                        <div className="text-center">25</div>
                        <div className="text-gray-500">Active Employees</div>
                    </div>
                </div>
                <div className="pl-80">
                    <div className="  gap-3">
                        <button className="  bg-white-200 text-gray-800 px-60 rounded-md border border-black ">
                            <PeopleOutlineIcon />AllTeams
                        </button>
                    </div>
                    <div className="flex gap-3 py-4">
                        <button className="bg-white-200 px-16 text-gray-800  rounded-md border border-black">
                            Export Report
                        </button>
                        <button className="bg-white-200 px-16 text-gray-800  rounded-md border border-black">
                            Holiday Calendar
                        </button>

                    </div>
                </div>
            </div>


            <div className="flex justify-between mt-6">
                <div className="flex">
                    <button className="bg-white-200 text-gray-800 px-5 py-2 squared-md border border-black">
                        Attendance
                    </button>
                    <button className="bg-blue-900 text-white px-800 px-5 py-2 squared-md border border-black">
                        Employees
                    </button>
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
                    New Employee
                </button>
            </div>


        </div>



    );
};

export default Topbar;