import './App.css';
import Navbar from "./components/Navbar"
import locations from "./locationData"
import Location from "./components/Location"

function App() {
  const locationElement = locations.map(location => {
    return (
      <Location
        key={location.id}
        {...location}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {locationElement}
    </div>
  );
}

export default App;
