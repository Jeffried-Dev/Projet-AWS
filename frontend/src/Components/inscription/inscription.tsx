import React from "react";
import compLogo from '../../assets/comp.jpg';
export default function Component() {
  return (
    <div className="min-h-screen bg-[#f1f2f6] flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex gap-8">
          <div className="w-1/2">
            <img
              alt="Team working together"
              className="rounded-lg"
              height="548"
              src={compLogo}
              style={{
                aspectRatio: "675/548",
                objectFit: "cover",
              }}
              width="675"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Company Details</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="company-name">
                  Company Name
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="text" placeholder="Enter your company's name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="email-address">
                  Email-Address
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="location">
                  Location
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="text" placeholder="Company's address" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="description">
                  Description
                </label>
                <textarea className="border-2 border-[#004c8c] rounded-md" placeholder="A brief description of your company" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="password">
                    Password
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="password" placeholder="Enter your password" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="retype-password">
                    Re-type password
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="password" placeholder="Re-enter your password" />
                </div>
              </div>
              <button className="w-full bg-[#004c8c] text-white">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
