import React, { useState, useEffect } from "react";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingPage /> : <HomePage />}</div>;
}

export default App;
