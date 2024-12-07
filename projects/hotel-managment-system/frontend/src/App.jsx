
import{BrowserRouter, Routes,  Route} from "react-router-dom";
import UserAuth from "./pages/userAuth";
import Landing from "./pages/Landing";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App