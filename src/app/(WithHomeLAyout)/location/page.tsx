"use client";

import { useState } from "react";
import { UserASender } from "@/app/(WithHomeLAyout)/_components/module/location/UserASender";
import { UserBReceiver } from "@/app/(WithHomeLAyout)/_components/module/location/UserBReceiver";
import Container from "../_components/ui/Container";
import { MapPin, Send } from "lucide-react";

// Enhanced animations
const animations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(184, 255, 6, 0.3); }
    50% { box-shadow: 0 0 30px rgba(184, 255, 6, 0.5), 0 0 40px rgba(196, 255, 236, 0.3); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

export default function LocationPage() {
  const [userType, setUserType] = useState<"sender" | "receiver">("sender");

  return (
    <Container>
      {/* Inject enhanced animation styles */}
      <style jsx>{animations}</style>

      {/* Enhanced professional themed background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(184, 255, 6, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(196, 255, 236, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(184, 255, 6, 0.05) 0%, rgba(196, 255, 236, 0.05) 100%)
          `,
        }}
      />

      <div className="relative min-h-screen py-28">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Enhanced Professional Hero Section */}
            <div className="text-center mb-16 transform transition-all duration-700 ease-out">
              <div className="inline-flex items-center gap-4 mb-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-[#B8FF06]/10">
                <div className="relative">
                  <div
                    className="w-4 h-4 rounded-full shadow-lg"
                    style={{
                      backgroundColor: "#B8FF06",
                      animation: "glow 2s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: "#B8FF06" }}
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(45deg, #B8FF06, #C4FFEC)`,
                      backgroundSize: "200% auto",
                      animation: "shimmer 3s linear infinite",
                    }}
                  >
                    Real-Time Location Sharing
                  </span>
                </h1>
              </div>
              <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
                Experience seamless location broadcasting and receiving with our
                professional SignalR-powered platform
              </p>
            </div>

            {/* Enhanced Professional Toggle */}
            <div className="flex justify-center mb-12 transform transition-all duration-700 ease-out">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl p-2 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex">
                  <button
                    onClick={() => setUserType("sender")}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#B8FF06]/30 focus:ring-offset-2 ${
                      userType === "sender"
                        ? "text-gray-900 shadow-lg transform scale-105"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                    style={{
                      background:
                        userType === "sender"
                          ? `linear-gradient(135deg, #B8FF06, #C4FFEC)`
                          : "transparent",
                      boxShadow:
                        userType === "sender"
                          ? "0 8px 25px rgba(184, 255, 6, 0.3), 0 4px 10px rgba(196, 255, 236, 0.2)"
                          : "none",
                    }}
                  >
                    <Send className="w-5 h-5" />
                    <span>User A - Sender</span>
                  </button>
                  <button
                    onClick={() => setUserType("receiver")}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#C4FFEC]/30 focus:ring-offset-2 ${
                      userType === "receiver"
                        ? "text-gray-900 shadow-lg transform scale-105"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                    style={{
                      background:
                        userType === "receiver"
                          ? `linear-gradient(135deg, #C4FFEC, #B8FF06)`
                          : "transparent",
                      boxShadow:
                        userType === "receiver"
                          ? "0 8px 25px rgba(196, 255, 236, 0.4), 0 4px 10px rgba(184, 255, 6, 0.2)"
                          : "none",
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>User B - Receiver</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Professional User Interface Container */}
            <div
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-700 ease-out"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(184, 255, 6, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="relative">
                {/* Enhanced floating decoration */}
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${
                      userType === "sender"
                        ? "#B8FF06, #C4FFEC"
                        : "#C4FFEC, #B8FF06"
                    })`,
                    animation: "float 4s ease-in-out infinite",
                  }}
                />

                {/* Render appropriate component based on user type */}
                <div className="relative z-10">
                  {userType === "sender" ? <UserASender /> : <UserBReceiver />}
                </div>
              </div>
            </div>

            {/* Enhanced Professional Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <div
                className="bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
                style={{
                  boxShadow:
                    "0 10px 25px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(184, 255, 6, 0.05)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#B8FF06",
                      boxShadow: "0 4px 15px rgba(184, 255, 6, 0.3)",
                    }}
                  >
                    <Send className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Location Broadcasting
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Share your real-time GPS coordinates with automatic updates
                  every 5 seconds. Professional SignalR integration ensures
                  reliable data transmission.
                </p>
              </div>

              <div
                className="bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
                style={{
                  boxShadow:
                    "0 10px 25px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(196, 255, 236, 0.05)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#C4FFEC",
                      boxShadow: "0 4px 15px rgba(196, 255, 236, 0.3)",
                    }}
                  >
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Live Map Tracking
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  View incoming location updates on an interactive Leaflet map
                  with real-time markers and detailed coordinate information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
