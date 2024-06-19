import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Headers } from "./components/User/Headers";
import { Home } from "./components/User/Home";
import { Library } from "./components/User/Library";
import { Search } from "./components/User/Search";
import { NotFound } from "./components/NotFound";
import { IndexPage } from "./components/User/IndexPage";
import { Login } from "./components/Admin/Login";
import { AdminHome } from "./components/Admin/AdminHome";
import { CreateNovel } from "./components/Admin/create/CreateNovel";
import { TextPage } from "./components/User/TextPage";
import { AddNovel } from "./components/Admin/create/AddNovel";
import { useContext } from "react";
import { AppContext } from "./main";
import { EditHome } from "./components/Admin/edit/EditHome";
import styled from "styled-components";
import { Edit1 } from "./components/Admin/edit/editPattern/Edit1";
import { Edit2 } from "./components/Admin/edit/editPattern/Edit2";
import { Edit3 } from "./components/Admin/edit/editPattern/Edit3";


function App() {

  const { toggleSwitch, mode, bool } = useContext(AppContext)

  return (
    <BrowserRouter>
      <Div className={bool ? 'dark-mode' : 'light-mode'}>
        <Headers />
        <DarkMode onClick={toggleSwitch}>{mode}</DarkMode>
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          {/* header */}
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          {/* text */}
          <Route path="/index" element={<IndexPage />} />
          <Route path="/text" element={<TextPage />} />
          {/* admin */}
          {/* create */}
          <Route path="/addnovel" element={<AddNovel />} />
          <Route path="/createnovel" element={<CreateNovel />} />
          {/* Edit */}
          <Route path="/edit" element={<EditHome />} />
          <Route path="/edit1" element={<Edit1 />} />
          <Route path="/edit2" element={<Edit2 />} />
          <Route path="/edit3" element={<Edit3 />} />
        </Routes>
      </Div>
    </BrowserRouter>
  )
}

const Div = styled.div`
  background: var(--body-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  &.dark-mode {
    background: var(--darkMode-BgColor);
    color: #fff;
  }
`;

const DarkMode = styled.span`
  position: absolute;
  cursor: pointer;
  top: 120px;
  right: 10px;
  font-weight: bold;
  
  @media (max-width: 500px) {
    top: 110px;
    right: 10px;
    font-weight: normal;
  }
`;

export default App
