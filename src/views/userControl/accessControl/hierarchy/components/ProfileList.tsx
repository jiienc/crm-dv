import React from "react";
import ProfileCard from "./ProfileCard";
import { ProfileListProps } from "../types";

const ProfileList: React.FC<ProfileListProps> = ({ profiles = [] }) => {
  return (
    <ul className="flex flex-row mt-10 justify-center">
      <div className="-mt-10 border-l-2 absolute h-10 border-gray-400" />
      {profiles.map((profile, idX) => {
        const len = profiles.length;
        return (
          <li key={idX} className="relative p-6">
            <div
              style={{
                left: idX === 0 ? "50%" : 0,
                right: idX === len - 1 ? "50%" : 0
              }}
              className="border-t-2 absolute h-8 border-gray-400 top-0"
            />
            <div className="relative flex justify-center">
              <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0" />
              <ProfileCard {...profile} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProfileList;
