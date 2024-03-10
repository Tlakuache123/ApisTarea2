import Books from "./components/Books";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full flex flex-col justify-center p-2 gap-2">
        <Books />
        <Cards />
      </div>
    </div>
  );
};

export default App;
