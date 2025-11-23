import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

const App = () => {
  return <div className="text-zinc-100 bg-[#0f0f10] p-4">
    <NavBar />

    <div>
      <HomePage />
    </div>
  </div>;
};

export default App;
