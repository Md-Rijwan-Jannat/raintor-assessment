"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useSignalR } from "@/hooks/useSignalR";
import { LatLngExpression } from "leaflet";
import { Wifi, WifiOff, MapPin, Users } from "lucide-react";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const SIGNALR_HUB_URL = "https://tech-test.raintor.com/Hub";

// Float animation style
const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

interface LocationData {
  userName: string;
  lat: number;
  lon: number;
  timestamp?: number;
}

export const UserBReceiver = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [, setSelectedLocation] = useState<LocationData | null>(null);
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([
    25.73736464, 90.3644747,
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  const { isConnected, connectionError, onReceiveLocation } =
    useSignalR(SIGNALR_HUB_URL);

  // Initialize Leaflet on client side only
  useEffect(() => {
    const initializeLeaflet = async () => {
      if (typeof window !== "undefined") {
        // Import and setup Leaflet
        const L = await import("leaflet");

        // Fix for default markers in react-leaflet
        delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)
          ._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        setIsMapReady(true);
      }
    };

    initializeLeaflet();
  }, []);

  // Handle receiving location updates
  useEffect(() => {
    if (!isConnected) return;

    const cleanup = onReceiveLocation((data: LocationData) => {
      const locationWithTimestamp = {
        ...data,
        timestamp: Date.now(),
      };

      setLocations((prev) => {
        // Keep only the last 10 locations per user
        const filtered = prev
          .filter((loc) => loc.userName !== data.userName)
          .slice(-9);
        return [...filtered, locationWithTimestamp];
      });

      // Update map center to the new location
      setMapCenter([data.lat, data.lon]);
      setSelectedLocation(locationWithTimestamp);

      // Pan map to new location if map is available
      if (mapRef.current) {
        mapRef.current.setView([data.lat, data.lon], 15);
      }
    });

    setIsListening(true);

    return () => {
      cleanup();
      setIsListening(false);
    };
  }, [isConnected, onReceiveLocation]);

  // Get unique users
  const uniqueUsers = Array.from(new Set(locations.map((loc) => loc.userName)));

  // Get latest location for each user
  const latestLocations = uniqueUsers.map((userName) => {
    const userLocations = locations.filter((loc) => loc.userName === userName);
    return userLocations[userLocations.length - 1];
  });

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
              background: `linear-gradient(to bottom right, #C4FFEC, #B8FF06)`,
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <MapPin className="w-8 h-8 text-gray-900" />
          </div>
          <div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse shadow-lg"
            style={{
              backgroundColor: "#C4FFEC",
              boxShadow: "0 0 10px #C4FFEC",
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #C4FFEC, #B8FF06)`,
              }}
            >
              Location Receiver
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Listen to live GPS updates and display on map
          </p>
        </div>
      </div>

      {/* Professional Connection Status */}
      <div
        className={`flex items-center gap-3 p-4 rounded-2xl mb-6 border ${
          isConnected
            ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
            : "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700"
        }`}
      >
        {isConnected ? (
          <Wifi className="w-5 h-5 text-green-600 dark:text-green-400" />
        ) : (
          <WifiOff className="w-5 h-5 text-red-600 dark:text-red-400" />
        )}
        <span
          className={`font-medium ${
            isConnected
              ? "text-green-700 dark:text-green-300"
              : "text-red-700 dark:text-red-300"
          }`}
        >
          {isConnected ? "Connected to SignalR Hub" : "Disconnected"}
        </span>
        {connectionError && (
          <span className="text-red-500 dark:text-red-400 text-sm">
            ({connectionError})
          </span>
        )}
      </div>

      {/* Professional Listening Status */}
      {isListening && (
        <div className="flex items-center gap-3 p-4 rounded-2xl mb-6 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-800 dark:text-blue-300 font-medium">
            Listening for location updates...
          </span>
        </div>
      )}

      {/* Professional Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#B8FF06" }}
            >
              <Users className="w-5 h-5 text-gray-900" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Active Users
            </span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {uniqueUsers.length}
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#C4FFEC" }}
            >
              <MapPin className="w-5 h-5 text-gray-900" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Total Updates
            </span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {locations.length}
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-5 h-5 rounded-full ${
                isConnected ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Status
            </span>
          </div>
          <span
            className={`text-lg font-medium ${
              isConnected
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {isConnected ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Professional Map Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: "#B8FF06" }}
          >
            <MapPin className="w-5 h-5 text-gray-900" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Live Location Map
          </h3>
        </div>
        <div className="h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
          {isMapReady ? (
            <MapContainer
              center={mapCenter}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {latestLocations.map((location, index) => (
                <Marker
                  key={`${location.userName}-${index}`}
                  position={[location.lat, location.lon]}
                >
                  <Popup>
                    <div className="p-2">
                      <h4 className="font-semibold text-gray-900">
                        {location.userName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Lat: {location.lat.toFixed(6)}
                        <br />
                        Lon: {location.lon.toFixed(6)}
                      </p>
                      {location.timestamp && (
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(location.timestamp).toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  Loading map...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Professional Recent Updates */}
      {locations.length > 0 && (
        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#C4FFEC" }}
            >
              <MapPin className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Location Updates
            </h3>
          </div>
          <div className="max-h-64 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
            {locations
              .slice()
              .reverse()
              .map((location, index) => (
                <div
                  key={`${location.userName}-${location.timestamp}-${index}`}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl flex justify-between items-center border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {location.userName}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {location.lat.toFixed(6)}, {location.lon.toFixed(6)}
                    </p>
                  </div>
                  {location.timestamp && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">
                      {new Date(location.timestamp).toLocaleTimeString()}
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Professional No Data State */}
      {locations.length === 0 && isConnected && (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 mt-8">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{
              background: `linear-gradient(to bottom right, #C4FFEC, #B8FF06)`,
            }}
          >
            <MapPin className="w-8 h-8 text-gray-900" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Waiting for location updates...
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Location updates from other users will appear here in real-time.
          </p>
        </div>
      )}
    </div>
  );
};
