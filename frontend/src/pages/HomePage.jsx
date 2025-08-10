// import React from 'react'

// const HomePage = ( {authUser} ) => {

//   return (
//     <div>
//         <div className="div">
//         </div>
//         <h1 className="font-bold self-center">{authUser?.role}</h1>

//         <p className='text-red-400 font-extrabold'>Home page</p>
//         <h1 className="text-xl font-bold self-center">{authUser?.fullName}</h1>

//     </div>
//   )
// }

// export default HomePage


import React from "react";
import { useState, useEffect } from "react";
import RoleSelector from "../components/RoleSelector";

const HomePage = ({ authUser, updateUserRole }) => {
  const [showRolePopup, setShowRolePopup] = useState(false);

  useEffect(() => {
    if (authUser && !authUser.role) {
      setShowRolePopup(true);
    }
  }, [authUser]);

    const handleRoleSelect = async (role) => {
      try {
        await fetch("/api/users/update-role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }), // role is now a string, not an event
          credentials: "include",
        });

        authUser.role = role;
        setShowRolePopup(false);
        
      } catch (error) {
        console.error("Error updating role:", error);
      }
    };

  return (
    <div className="relative">
      {showRolePopup && <RoleSelector onSelect={handleRoleSelect} />}

      <h1 className="font-bold">{authUser?.role}</h1>
      <p className="text-red-400 font-extrabold">Home page</p>
      <h1 className="text-xl font-bold">{authUser?.fullName}</h1>
    </div>
  );
};

export default HomePage;
