import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

const MahasiswaDashboard = () => {

  return (
    <div className="flex">
      <Sidebar userRole="Mahasiswa" />
      <div className="flex-1">
        <Header title="Dashboard Mahasiswa" />
        <div className="p-4">
          <p>Welkom Ces</p>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaDashboard;