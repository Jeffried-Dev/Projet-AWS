import React from "react";
import Iutilisateur from '../../../objets/utilisateur';


const UserProfile = () => {
  return (
    <><div className="bg-[#64C7A0] p-4 flex items-center justify-between">
    </div><div className="min-h-screen bg-[#E8F5E9] py-10">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full overflow-hidden bg-gray-200 h-16 w-16">
                <img
                  alt="Profile picture"
                  className="h-full w-full object-cover"
                  src="/placeholder.svg?height=100&width=100" />
              </div>
              <div className="space-y-1">
                <h1 className="text-lg font-bold">Joan Snow</h1>
                <p className="text-sm text-gray-600">Software engineer</p>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">Download CV</button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">About</h2>
            <p className="text-sm text-gray-600">
              Experienced software engineer with a passion for developing innovative programs that expedite the
              efficiency and effectiveness of organizational success.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Experience</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Google</h3>
                <span className="text-xs text-gray-500">2019 - Present</span>
              </div>
              <p className="text-sm text-gray-600">Senior Software Engineer</p>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">IBM</h3>
                <span className="text-xs text-gray-500">2017 - 2019</span>
              </div>
              <p className="text-sm text-gray-600">Software Engineer</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Education</h2>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">MIT</h3>
              <p className="text-sm text-gray-600">B.S. in Computer Science</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">JavaScript</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">React</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">Node.js</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">Python</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">People you may know</h2>
            <div className="flex items-center space-x-4">
              <div className="rounded-full overflow-hidden bg-gray-200 h-10 w-10">
                <img alt="User 1" className="h-full w-full object-cover" src="/placeholder.svg?height=50&width=50" />
              </div>
              <div className="rounded-full overflow-hidden bg-gray-200 h-10 w-10">
                <img alt="User 2" className="h-full w-full object-cover" src="/placeholder.svg?height=50&width=50" />
              </div>
              <div className="rounded-full overflow-hidden bg-gray-200 h-10 w-10">
                <img alt="User 3" className="h-full w-full object-cover" src="/placeholder.svg?height=50&width=50" />
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default UserProfile;
