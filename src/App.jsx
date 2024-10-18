import Header from "@/components/Header";
import UserProfile from "@/pages/users/UserProfile";
import Homepage from "@/pages/Homepage";
import { Route, Routes } from "react-router-dom";
import StickyNotes from "@/pages/Notes/StickyNotes";
import Products from "@/pages/Products";
import Index from "./pages/blog/Index";
import Lifecycle from "./pages/lifecyle/Lifecycle";

const App = () => {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4 lg:px-0">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<StickyNotes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/blog" element={<Index title={"Blog"} />} />
        <Route path="/life" element={<Lifecycle />} />
      </Routes>
    </main>
  );
};

export default App;
