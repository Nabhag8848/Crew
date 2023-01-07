import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export function Auth() {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <div className="App">
      <h1> Auth0 Authentication </h1>
      <ul>
        <li>
          <button onClick={loginWithRedirect}> Login with Redirect </button>
          <button onClick={logout}> Logout </button>
        </li>
      </ul>

      <h3>user is {isAuthenticated ? "loggedin" : "Not logged in"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );
}
