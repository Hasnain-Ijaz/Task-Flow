import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { AppStateProvider } from "./context/appProvider";
import AppRoutes from "./pages/Routes";

// Global styling stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/app-styles.scss";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppStateProvider>
          <AppRoutes />
        </AppStateProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;