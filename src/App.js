import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import About from "./components/AboutMe/About";
import Blog from "./components/Blogs/Blog";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SendPasswordReset from "./components/SendPasswordReset/SendPasswordReset ";

function App() {
  return (
    <div className="app">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/sendPasswordReset"
          element={<SendPasswordReset></SendPasswordReset>}
        ></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
