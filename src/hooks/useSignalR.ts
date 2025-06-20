import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";

interface LocationData {
  userName: string;
  lat: number;
  lon: number;
}

export const useSignalR = (hubUrl: string) => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .withAutomaticReconnect()
      .build();

    connectionRef.current = newConnection;
    setConnection(newConnection);

    const startConnection = async () => {
      try {
        await newConnection.start();
        setIsConnected(true);
        setConnectionError(null);
        console.log("SignalR connection established");
      } catch (error) {
        console.error("SignalR connection failed:", error);
        setConnectionError(
          error instanceof Error ? error.message : "Connection failed"
        );
      }
    };

    startConnection();

    // Handle connection state changes
    newConnection.onclose(() => {
      setIsConnected(false);
      console.log("SignalR connection closed");
    });

    newConnection.onreconnecting(() => {
      setIsConnected(false);
      console.log("SignalR reconnecting...");
    });

    newConnection.onreconnected(() => {
      setIsConnected(true);
      console.log("SignalR reconnected");
    });

    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
      }
    };
  }, [hubUrl]);

  const sendLocation = async (lat: number, lon: number, userName: string) => {
    if (connection && isConnected) {
      try {
        await connection.invoke("SendLatLon", lat, lon, userName);
        console.log("Location sent:", { lat, lon, userName });
      } catch (error) {
        console.error("Failed to send location:", error);
        throw error;
      }
    } else {
      throw new Error("SignalR connection not available");
    }
  };

  const onReceiveLocation = (callback: (data: LocationData) => void) => {
    if (connection) {
      connection.on("ReceiveLatLon", (data: LocationData) => {
        console.log("Location received:", data);
        callback(data);
      });

      return () => {
        connection.off("ReceiveLatLon");
      };
    }
    return () => {};
  };

  return {
    connection,
    isConnected,
    connectionError,
    sendLocation,
    onReceiveLocation,
  };
};
