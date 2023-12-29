"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const UserList = ({ users }) => {
  return (
    <section>
      <h1>Users List</h1>
      <div className="grid grid-cols-4 gap-5">
        {users &&
          users?.users?.map((user, index) => (
            <Link
              key={index}
              href={`/users/${user.id}`}
              className="block shadow-lg p-4"
            >
              <div>
                <Image
                  src={user.image}
                  alt={user.username}
                  className="w-full"
                  width={200}
                  height={200}
                />
                <h1 className="text-center">
                  {users.firstName} {user.lastName}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};
