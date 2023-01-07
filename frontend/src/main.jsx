import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth } from "./Auth";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="crew-shebuilds.us.auth0.com"
      clientId=""
      redirectUri={window.location.origin}
      audience=""
      scope="openid profile email"
    >
      <Auth />
    </Auth0Provider>
    <App />
  </React.StrictMode>
);
