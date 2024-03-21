import React from "react";

// Définition du composant Button
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} />;
};
// Définition du composant Avatar
const Avatar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

// Définition du composant AvatarImage
interface AvatarImageProps {
  alt: string;
  src: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ alt, src }) => (
  <img alt={alt} src={src} />
);

interface UserProfileProps {
  username: string;
  email: string;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email, bio }) => {
  return (
    <><div className="bg-[#64C7A0] p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage alt="Joan Snow" src="/placeholder.svg?height=100&width=100" />
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-white">Joan Snow</h1>
          <p className="text-sm text-white">Software engineer</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-white text-[#64C7A0]">www.joansnow.com</Button>
        <Button className="bg-white text-[#64C7A0]">Moscow</Button>
        <div className="flex items-center space-x-2">
          {/* Ajoutez votre composant AppleIcon ici */}
          <AppleIcon className="text-white" />
          <Button className="bg-white text-[#64C7A0]">CV</Button>
        </div>
      </div>
      {/* Votre contenu précédent commence ici */}
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
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Companies you may like</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <ChromeIcon className="h-6 w-6" />
                <span className="text-sm">Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <ImageIcon className="h-6 w-6" />
                <span className="text-sm">Meta</span>
              </div>
              <div className="flex items-center space-x-2">
                <LightbulbIcon className="h-6 w-6" />
                <span className="text-sm">Tesla</span>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

function ChromeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function ImageIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function LightbulbIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

// Définition du composant AppleIcon
const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

export default UserProfile;
