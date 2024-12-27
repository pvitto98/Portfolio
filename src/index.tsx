import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

const CookieManager = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Initialize Google Analytics if the user accepts cookies
  useEffect(() => {
    if (analyticsEnabled) {
      ReactGA.initialize("G-ZT70ELG7BQ"); // Replace with your Measurement ID
      ReactGA.send("pageview"); // Track the initial page load
    }
  }, [analyticsEnabled]);

  return (
    <>
      <CookieConsent
        enableDeclineButton
        onAccept={() => {
          setAnalyticsEnabled(true);
        }}
        onDecline={() => {
          setAnalyticsEnabled(false);
        }}
        buttonText="Accept"
        declineButtonText="Refuse"
        style={{
          background: "#2b373b",
          color: "#ffffff",
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
          width: "80%", // Set the width of the banner
          maxWidth: "800px", // Optional: set a max-width for the banner
          margin: "0 auto", // Centers the banner horizontally
          position: "fixed", // Fix the banner at the bottom
          bottom: "20px", // Space from the bottom of the screen
          left: "0", // Align with left side of screen
          right: "0", // Align with right side of screen
          placeContent: "center",
          fontFamily: "var(--font-bricolage-grotesque)",
        }}
        buttonStyle={{
          color: "#4e503b",                // Dark text color for the button
          fontSize: "14px",
          background: "#f5f5f5",           // Light background for the button
          border: "none",                  // Remove default border
          borderRadius: "12px",            // Rounded button edges
          padding: "10px 20px",            // Padding for a better click area
          margin: "0 10px",                // Space between the buttons
          cursor: "pointer",
        }}
        declineButtonStyle={{
          color: "#ffffff",                // White text color for decline button
          background: "#ff4b5c",            // Red color to match your design
          fontSize: "14px",
          border: "none",                  // Remove default border
          borderRadius: "12px",            // Rounded button edges
          padding: "10px 20px",            // Padding for a better click area
          margin: "0 10px",                // Space between the buttons
          cursor: "pointer",
        }}
      >
        This website uses cookies to enhance the user experience. You can accept or refuse tracking cookies.
      </CookieConsent>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

root.render(<CookieManager />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

