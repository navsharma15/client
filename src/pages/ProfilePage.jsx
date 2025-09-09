import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("Hi Everyone, I am using livechat");

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        
        {/* Left Form */}
        <form className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg">Profile Details</h3>
          
          <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png,.jpg,.jpeg"
              hidden
            />
            <img
              src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon}
              alt="Avatar"
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            Upload Profile Image
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            placeholder="Full Name"
          />

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            placeholder="Write a short bio..."
          />

          <button
            type="button"
            onClick={() => navigate("/")}
            className="py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md"
          >
            Save & Continue
          </button>
        </form>

        {/* Right Preview */}
        <div className="flex-1 flex flex-col items-center gap-4 p-6">
          <img
            src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon}
            alt="Profile Preview"
            className="w-40 h-40 rounded-full object-cover"
          />
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-gray-400 text-sm">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
