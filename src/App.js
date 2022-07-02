import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
        plugin_name: "stream",
      });
    });
  }, [isSignedIn]);

  const handleSignInWithGoogle = async () => {
    const auth = window.gapi.auth2.getAuthInstance();

    await auth.signIn();

    const isSignedIn = auth.isSignedIn.get();

    setIsSignedIn(isSignedIn);
  };

  const handleLogOut = async () => {
    const auth = window.gapi.auth2.getAuthInstance();

    await auth.signOut();

    const isSignedIn = auth.isSignedIn.get();

    setIsSignedIn(isSignedIn);
  };

  return (
    <div className="App">
      {isSignedIn === false ? (
        <div>
          {" "}
          <button onClick={handleSignInWithGoogle}>Login with google</button>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
