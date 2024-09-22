import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginContextProvider from "./context/LoginContextProvider";

function App() {
  let clientId =
    "169162112976-ca9n5mfgi1o679cm251beuujids6rnii.apps.googleusercontent.com";
  return (
    // <GoogleOAuthProvider clientId={clientId}>
    <LoginContextProvider>
      <AllRoutes />
    </LoginContextProvider>
    // </GoogleOAuthProvider>
  );
}

export default App;
