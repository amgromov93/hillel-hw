import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Users from "./pages/Users";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/:userId' element={<Albums />}/>
        <Route path='/:userId/:albumsId' element={<Photos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;