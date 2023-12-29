import React from "react";
import Image from "next/image";
const getUser = async (id) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await response.json();
  return user;
};
const UserDetails = async ({ params }) => {
  const user = await getUser(params?.id);
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div>
        <Image src={user.image} alt={user.username} width={200} height={200} />
      </div>
      <h1>
        FullName {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <div>
        <h4>Address</h4>
        <p>{user.address.address}</p>
        <p>{user.address.city}</p>
        <p>{user.address.state}</p>
      </div>
    </div>
  );
};

export default UserDetails;
