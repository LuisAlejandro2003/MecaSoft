import PilotajesAdmin from "../pages/PilotajesAdmin"
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/PilotajesAdmin" element={<PilotajesAdmin></PilotajesAdmin>}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
