import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Support from "./pages/Support";
import SignUp from "./pages/Signup";
import NavigationButton from "./pages/NavigationButton";
import AllUser from "./pages/AllUser";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Link to={"/home"}>Home  |</Link>
        <Link to={"/todo"}>  Support |</Link>
        <Link to={"/registration"}>  Sign-Up</Link>
         */}
        <NavigationButton/>

        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<NavBar/>} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/finduser" element={<AllUser/> } />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;