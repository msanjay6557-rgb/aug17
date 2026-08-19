// import Selfintroduction from "./selfintroduction";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Selfintroduction />
//     </div>
//   );
// }

// export default App;
// import UserCard from "./UserCard";
// import "./App.css";

// function App() {
//   const users = [
//     {
//       name: "Sanjay M",
//       age: 21,
//       city: "Kallakurichi",
//       mobile: "6384686072",
//       email: "sanjay@gmail.com",
//       occupation: "Frontend Developer",
//       address: "south street, Kallakurichi",
//     },
//     {
//       name: "Rahul",
//       age: 24,
//       city: "Chennai",
//       mobile: "9876501234",
//       email: "rahul@gmail.com",
//       occupation: "Software Developer",
//       address: "Anna Nagar, Chennai",
//     },
//     {
//       name: "Mithra",
//       age: 23,
//       city: "bangalore",
//       mobile: "9876512345",
//       email: "mithra@gmail.com",
//       occupation: "UI/UX Designer",
//       address: "Mahadevpura, Bangalore",
//     },
//     {
//       name: "Arun Kumar",
//       age: 25,
//       city: "Chennai",
//       mobile: "9876523456",
//       email: "arun@gmail.com",
//       occupation: "Backend Developer",
//       address: "Tambaram, Chennai",
//     },
//     {
//       name: "Sneha",
//       age: 21,
//       city: "coimbatore",
//       mobile: "9876534567",
//       email: "sneha@gmail.com",
//       occupation: "Web Designer",
//       address: "R.S Puram, Coimbatore",
//     },
//   ];

//   return (
//     <div className="app">
//       <header className="page-header">
//         <h1>User Information</h1>
//       </header>

//       <div className="user-container">
//         {users.map((user, index) => (
//           <UserCard key={index} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";

function App() {

  // Array of objects
  const employees = [
    {
      id: 1,
      name: "Sanjay M",
      role: "Frontend Developer",
      company: "Stackly",
      experience: "1 Year",
      branch: "Kallakurichi"
    },
    {
      id: 2,
      name: "Habi",
      role: "Web Developer",
      company: "HCL",
      experience: "2 Years",
      branch: "Chennai"
    },
    {
      id: 3,
      name: "Shalini",
      role: "UI Designer",
      company: "Infosis",
      experience: "3 Years",
      branch: "Bangalore"
    },
    {
      id: 4,
      name: "Mahi",
      role: "Software Developer",
      company: "Wipro",
      experience: "2 Years",
      branch: "Coimbatore"
    },
    {
      id: 5,
      name: "Santhosh",
      role: "Backend Developer",
      company: "Accenture",
      experience: "3 Years",
      branch: "Chennai"
    }
  ];

  return (
    <div className="page">

      {/* Heading */}
      <div className="heading">
        <h1>Our Team</h1>
        <p>Employee Information</p>
      </div>

      {/* Employee Cards */}
      <div className="card-container">

        {employees.map((employee) => (

          <div className="employee-card" key={employee.id}>

            {/* Green Header */}
            <div className="card-header">

              <div className="initial">
                {employee.name.charAt(0)}
              </div>

              <h2>{employee.name}</h2>

              <p>{employee.role}</p>

            </div>

            {/* Card Body */}
            <div className="card-body">

              <div className="detail">
                <span>Company</span>
                <strong>{employee.company}</strong>
              </div>

              <div className="detail">
                <span>Experience</span>
                <strong>{employee.experience}</strong>
              </div>

              <div className="detail">
                <span>Branch</span>
                <strong>{employee.branch}</strong>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;