import React from "react";
import ProfileList from "./ProfileList";
import { Profile } from "./types";

const ProfileCard: React.FC<Profile> = ({ id, name, role, profiles = [] }) => {
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-16">
          <img
            className="block rounded-full m-auto shadow-md"
            alt={name}
            src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
          />
        </div>
        <div className="text-gray-600">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
      {profiles.length > 0 && <ProfileList profiles={profiles} />}
    </div>
  );
};

export default ProfileCard;
