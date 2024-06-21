import Topbar from "./Topbar";
import image from './../assets/imaage.png'
const EmployeeManagement = () => {

    const employees = [
        {
            name: 'Anukampa Singh',
            employeeId: '12345678IN',
            phoneNumber: '9898765432',
            designation: 'General Manager',
            department: 'Reception',
            rating: 2,
            attendance: true, // Present
        },
        {
            name: 'Bibek Nayak',
            employeeId: '12345678IN',
            phoneNumber: '9898765432',
            designation: 'Sr.Manager',
            department: 'Admin',
            rating: 2,
            attendance: false, // absent
        },
        {
            name: 'Abhishek Kumar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Chief chef',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        },
        {
            name: 'Sakshi Rane',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 3,
            attendance: true, // Present
        }, {
            name: 'Aayush Kakde',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 4,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Sr. Manager',
            department: 'Restaurant',
            rating: 1,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        }, {
            name: 'Ritesh Nagar',
            employeeId: '77845678IN',
            phoneNumber: '9988765432',
            designation: 'Present',
            department: 'Restaurant',
            rating: 2,
            attendance: false, // Absent
        },
    ];

    return (
        <> <div className="container mx-auto pl-10 "><Topbar /></div>
            <div className="bg-white p-4 rounded-lg shadow-md pl-20">

                <div className=" pl-10">
                    <table className="w-full table-auto">
                        <thead className="bg-blue-100  border-t-4 border-blue-900  border-t-rounded gap-2">
                            <th className="px-4 py-2 gap-2">Name</th>
                            <th className="px-4 py-2">Employee ID</th>
                            <th className="px-4 py-2">Phone Number</th>
                            <th className="px-4 py-2">Designation</th>
                            <th className="px-4 py-2">Department</th>
                            <th className="px-4 py-2">Customer Rating</th>
                            <th className="px-4 py-2">Attendance</th>

                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-100 text-center justify-between pl-5">
                                    <td className="border px-4 py-2 flex  pr-10 ">
                                        <img
                                            src={employee.profilePicture || image}
                                            alt={`${employee.name}'s profile`}
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        {employee.name}
                                    </td>
                                    <td className="border px-4  text-gray py-2">{employee.employeeId}</td>
                                    <td className="border px-4 text-gray-500  py-2">{employee.phoneNumber}</td>
                                    <td className="border px-4 py-2 text-red-500">{employee.designation}</td>
                                    <button className="rounded border px-6 bg-blue-200 py-2">{employee.department}</button>
                                    <td className="border px-4 py-2">
                                        <div className="flex items-center">
                                            {/* Filled stars based on employee.rating */}
                                            {Array.from({ length: employee.rating }, (_, i) => (
                                                <span key={i} className="text-yellow-400 text-center">&#9733;</span>
                                            ))}

                                            {/* Empty stars to complete a total of 5 stars */}
                                            {Array.from({ length: 5 - employee.rating }, (_, i) => (
                                                <span key={i + employee.rating} className="text-gray-400">&#9733;</span>
                                            ))}
                                        </div>

                                    </td>
                                    <td className="border px-4 py-2">
                                        {employee.attendance ? (
                                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded ">Present</span>
                                        ) : (
                                            <span className="bg-red-200 text-red-800 px-2 py-1 rounded">Absent</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EmployeeManagement;