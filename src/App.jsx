import Books from "./components/Books";
import Cards from "./components/Cards";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <div className="h-full flex flex-col justify-center p-2 gap-2">
        <Books />
        <Cards />
        <Users />
      </div>
    </div>
  );
};

export default App;
