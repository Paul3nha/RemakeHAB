import { Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { User } from "./routes/User/User.jsx";
import { Login } from "./routes/User/Login/Login.jsx";
import { Profile } from "./routes/User/Profile/Profile.jsx";
import { RappersSection } from "./routes/Rappers/RappersSection.jsx";
import { RapperIndex } from "./routes/Rappers/RapperIndex.jsx";
import { ContactUs } from "./routes/Contact/ContactUs.jsx";
import { Chat } from "./routes/Chat/Chat.jsx";
import { RapperSolo } from "./routes/Rappers/RapperSolo.jsx";
import "./index.css"; /* IMPORTANTE */

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 p-4">
      {/* Usando Tailwind para el fondo y padding */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="user" element={<User />}>
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="rappers" element={<RappersSection />}>
              <Route index element={<RapperIndex />}></Route>
              <Route path=":bio_birthdate" element={<RapperSolo />} />
            </Route>
            <Route path="contact" element={<ContactUs />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
