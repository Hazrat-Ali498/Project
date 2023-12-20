import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import FrontContext from "./Components/Context";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <FrontContext>
   <BrowserRouter>
    <GoogleOAuthProvider clientId="<244972469922-124sva6dm2k5flivrjmagnq69qg91ukb.apps.googleusercontent.com>">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
 </FrontContext>
);
