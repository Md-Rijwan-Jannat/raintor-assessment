"use client";

import { useState, useEffect } from "react";
import { useSignalR } from "@/hooks/useSignalR";
import { MapPin, Send, Wifi, WifiOff } from "lucide-react";

const SIGNALR_HUB_URL = "https://tech-test.raintor.com/Hub";

// Float animation style
const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

export const UserASender = () => {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [autoSend, setAutoSend] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { isConnected, connectionError, sendLocation } =
    useSignalR(SIGNALR_HUB_URL);

  // Get user's current location
  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    setIsGettingLocation(true);
    setError(null);

    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000,
          });
        }
      );

      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    } catch (error) {
      setError("Failed to get location: " + (error as Error).message);
    } finally {
      setIsGettingLocation(false);
    }
  };

  // Send location via SignalR
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSendLocation = async () => {
    if (!location || !userName.trim()) {
      setError("Please provide your email and get your location first");
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      await sendLocation(location.lat, location.lon, userName.trim());
    } catch (error) {
      setError("Failed to send location: " + (error as Error).message);
    } finally {
      setIsSending(false);
    }
  };

  // Auto-send location every 5 seconds
  useEffect(() => {
    if (!autoSend || !location || !userName.trim() || !isConnected) return;

    const interval = setInterval(() => {
      handleSendLocation();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoSend, location, userName, isConnected, handleSendLocation]);

  return (
    <div className="space-y-8">
      {/* Inject animation styles */}
      <style jsx>{floatAnimation}</style>

      {/* Header with themed styling */}
      <div className="flex items-center gap-4 mb-8 transform transition-all duration-700">
        <div className="relative">
          <div
            className="p-4 rounded-2xl shadow-lg transform transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <Send className="w-8 h-8 text-gray-900" />
          </div>
          <div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse shadow-lg"
            style={{
              backgroundColor: "#B8FF06",
              boxShadow: "0 0 10px #B8FF06",
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
              }}
            >
              Location Broadcaster
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Share your live GPS coordinates in real-time
          </p>
        </div>
      </div>

      {/* Professional Connection Status */}
      <div
        className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-l-4 transition-all duration-500 shadow-lg border border-gray-200 dark:border-gray-700 ${
          isConnected ? "border-l-[#B8FF06]" : "border-l-red-500"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-xl ${
              isConnected
                ? "bg-green-100 dark:bg-green-900/30"
                : "bg-red-100 dark:bg-red-900/30"
            }`}
          >
            {isConnected ? (
              <Wifi className="w-6 h-6 text-green-600 dark:text-green-400" />
            ) : (
              <WifiOff className="w-6 h-6 text-red-600 dark:text-red-400" />
            )}
          </div>
          <div>
            <span
              className={`font-semibold text-lg ${
                isConnected
                  ? "text-green-700 dark:text-green-300"
                  : "text-red-700 dark:text-red-300"
              }`}
            >
              {isConnected ? "🟢 Connected to Hub" : "🔴 Connection Lost"}
            </span>
            {connectionError && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                Error: {connectionError}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Professional Email Input */}
      <div className="transform transition-all duration-700">
        <label
          htmlFor="userName"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3"
        >
          📧 Your Email Address
        </label>
        <div className="relative">
          <input
            id="userName"
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-[#B8FF06]/20 focus:border-[#B8FF06] transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: "#B8FF06" }}
            />
          </div>
        </div>
      </div>

      {/* Professional Location Section */}
      <div className="space-y-4 transform transition-all duration-700">
        <button
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
          className="relative overflow-hidden rounded-2xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#B8FF06]/20 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
            color: "#1f2937",
            boxShadow: "0 10px 25px rgba(184, 255, 6, 0.3)",
          }}
        >
          <div className="flex items-center gap-3">
            <MapPin
              className={`w-5 h-5 ${
                isGettingLocation ? "animate-spin" : "animate-pulse"
              }`}
            />
            <span className="font-semibold">
              {isGettingLocation ? "📍 Locating..." : "📍 Get My Location"}
            </span>
          </div>
        </button>

        {location && (
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-l-[#B8FF06] shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500">
            <div
              className="absolute inset-0 rounded-2xl opacity-5 dark:opacity-10"
              style={{
                background: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
              }}
            />
            <div className="relative flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "#B8FF06", color: "#1f2937" }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg mb-2">
                  📍 Current Location
                </h4>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Latitude:</span>{" "}
                    {location.lat.toFixed(6)}
                  </p>
                  <p>
                    <span className="font-medium">Longitude:</span>{" "}
                    {location.lon.toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Professional Action Buttons */}
      <div className="space-y-4 transform transition-all duration-700">
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleSendLocation}
            disabled={
              !location || !userName.trim() || !isConnected || isSending
            }
            className="relative overflow-hidden rounded-2xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C4FFEC]/20 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(to right, #C4FFEC, #B8FF06)`,
              color: "#1f2937",
              boxShadow: "0 10px 25px rgba(196, 255, 236, 0.3)",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Send className={`w-5 h-5 ${isSending ? "animate-spin" : ""}`} />
              <span className="font-semibold">
                {isSending ? "🚀 Broadcasting..." : "🚀 Send Location"}
              </span>
            </div>
          </button>

          <label className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl px-6 py-4 cursor-pointer hover:shadow-lg transition-all duration-300 flex items-center gap-3 border-2 border-gray-200 dark:border-gray-600 hover:border-[#B8FF06]">
            <input
              type="checkbox"
              checked={autoSend}
              onChange={(e) => setAutoSend(e.target.checked)}
              className="w-5 h-5 rounded focus:ring-[#B8FF06] accent-[#B8FF06]"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              ⚡ Auto-broadcast (5s)
            </span>
          </label>
        </div>

        {autoSend && isConnected && location && userName.trim() && (
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-l-[#C4FFEC] shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500">
            <div
              className="absolute inset-0 rounded-2xl opacity-5 dark:opacity-10"
              style={{
                background: `linear-gradient(to right, #C4FFEC, #B8FF06)`,
              }}
            />
            <div className="relative flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full animate-pulse"
                style={{ backgroundColor: "#C4FFEC" }}
              />
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                📡 Auto-broadcasting location every 5 seconds...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Professional Error Display */}
      {error && (
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-l-red-500 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500">
          <div
            className="absolute inset-0 rounded-2xl opacity-5 dark:opacity-10"
            style={{
              background: `linear-gradient(to right, #ef4444, #f87171)`,
            }}
          />
          <div className="relative flex items-start gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl">
              <span className="text-red-600 dark:text-red-400 text-xl">⚠️</span>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                Error Occurred
              </h4>
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
