import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="bg-[#062b5a] w-full h-screen">
      <Navbar />
    </div>
  );
}

export default App;
