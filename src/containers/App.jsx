import PilotajesAdmin from "../pages/PilotajesAdmin"
import HomeAdmin from "../pages/HomeAdmin";
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/PilotajesAdmin" element={<PilotajesAdmin></PilotajesAdmin>}></Route>
    <Route path="/HomeAdmin" element={<HomeAdmin></HomeAdmin>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
