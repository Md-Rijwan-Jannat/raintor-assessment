import { User } from "@/hooks/useInfiniteUsers";
import { Mail, Phone, Building, GraduationCap } from "lucide-react";
import Image from "next/image";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-200 relative overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
        style={{
          background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
        }}
      />

      {/* Floating decoration */}
      <div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
          animation: "float 3s ease-in-out infinite",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-6">
          {/* Modern User Avatar */}
          <div className="flex-shrink-0 relative">
            <div
              className="absolute inset-0 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
              }}
            />
            <Image
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="relative w-20 h-20 rounded-2xl object-cover border-3 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.firstName + " " + user.lastName
                )}&size=80&background=B8FF06&color=1f2937&bold=true`;
              }}
              width={1000}
              height={1000}
            />
            <div
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: "#B8FF06" }}
            >
              <div className="w-2 h-2 bg-gray-900 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* User Info with Modern Typography */}
          <div className="flex-grow min-w-0">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 truncate group-hover:opacity-80 transition-opacity duration-300">
                {user.firstName} {user.lastName}
              </h3>
              <p
                className="text-sm font-semibold px-3 py-1 rounded-full inline-block mt-1 text-gray-900"
                style={{ backgroundColor: "#C4FFEC" }}
              >
                {user.company.title}
              </p>
            </div>

            {/* Modern Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200">
                <div
                  className="p-1.5 rounded-lg group-hover/item:opacity-80 transition-opacity duration-200"
                  style={{ backgroundColor: "#B8FF06" }}
                >
                  <Mail className="w-4 h-4 text-gray-900" />
                </div>
                <span
                  className="text-sm text-gray-700 truncate font-medium"
                  title={user.email}
                >
                  {user.email}
                </span>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200">
                <div
                  className="p-1.5 rounded-lg group-hover/item:opacity-80 transition-opacity duration-200"
                  style={{ backgroundColor: "#C4FFEC" }}
                >
                  <Phone className="w-4 h-4 text-gray-900" />
                </div>
                <span
                  className="text-sm text-gray-700 truncate font-medium"
                  title={user.phone}
                >
                  {user.phone}
                </span>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200">
                <div
                  className="p-1.5 rounded-lg group-hover/item:opacity-80 transition-opacity duration-200"
                  style={{ backgroundColor: "#B8FF06" }}
                >
                  <GraduationCap className="w-4 h-4 text-gray-900" />
                </div>
                <span
                  className="text-sm text-gray-700 truncate font-medium"
                  title={user.university}
                >
                  {user.university}
                </span>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200">
                <div
                  className="p-1.5 rounded-lg group-hover/item:opacity-80 transition-opacity duration-200"
                  style={{ backgroundColor: "#C4FFEC" }}
                >
                  <Building className="w-4 h-4 text-gray-900" />
                </div>
                <span
                  className="text-sm text-gray-700 truncate font-medium"
                  title={user.company.title}
                >
                  {user.company.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern hover effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"
          style={{
            background: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
          }}
        />
      </div>
    </div>
  );
};
