import "./App.css";
import SettingsPage from "./components/pages/settings-page/SettingsPage";
import SideBar from "./components/side-bar/SideBar";

function App() {
  return (
    <div className="flex text-gray-700">
      <SideBar />
      <SettingsPage />
    </div>
  );
}

export default App;
