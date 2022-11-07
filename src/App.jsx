import { useState } from "react";
import { Navbar, Footer, Welcome, Loader, Transaction } from "./components";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
        <Transaction />
        <Footer />
      </div>
    </div>
  );
};

export default App;
