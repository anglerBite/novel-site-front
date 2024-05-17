import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Headers } from "./components/User/Headers";
import { Home } from "./components/User/Home";
import { Library } from "./components/User/Library";
import { About } from "./components/User/About";
import { Search } from "./components/User/Search";
import { NotFound } from "./components/NotFound";
import { Other } from "./components/User/Other";
import { IndexPage } from "./components/User/IndexPage";
import { Login } from "./components/User/Login";
import { AdminHome } from "./components/Admin/AdminHome";
import { CreateNovel } from "./components/Admin/create/CreateNovel";
import { TextPage } from "./components/User/TextPage";
import { CreateAbout } from "./components/Admin/create/CreateAbout";
import styled from "styled-components";
import { DeleteAbout } from "./components/Admin/delete/DeleteAbout";
import { UpdateAbout } from "./components/Admin/update/updateAbout";
import { ModAbout } from "./components/Admin/update/ModAbout";
import { ModNovel } from "./components/Admin/update/ModNovel";
import { SelectCreate } from "./components/Admin/create/SelectCreate";
import { DeleteNovel } from "./components/Admin/delete/DeleteNovel";
import { UpdateNovel } from "./components/Admin/update/UpdateNovel";
import { SelectDelete } from "./components/Admin/delete/SelectDelete";
import { SelectUpdate } from "./components/Admin/update/SelectUpdate";

function App() {

  return (
    <>
      <BrowserRouter>
        <Div>
          <Headers />
            <Routes>
              {/* home */}
              <Route path="/" element={<Home />} />
              <Route path="/other" element={<Other />} />
              <Route path="/*" element={<NotFound />} />
              {/* header */}
              <Route path="/library" element={<Library />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminHome />} />
              {/* text */}
              <Route path="/index" element={<IndexPage />} />
              <Route path="/text" element={<TextPage />} />
              {/* admin */}
              {/* create */}
              <Route path="/selectcreate" element={<SelectCreate />} />
              <Route path="/createnovel" element={<CreateNovel />} />
              <Route path="/createabout" element={<CreateAbout />} />
              {/* delete */}
              <Route path="/selectdelete" element={<SelectDelete />} />
              <Route path="/deletenovel" element={<DeleteNovel />} />
              <Route path="/deleteabout" element={<DeleteAbout />} />
              {/* update & modification */}
              <Route path="/selectupdate" element={<SelectUpdate />} />
              <Route path="/updatenovel" element={<UpdateNovel />} />
              <Route path="/updateabout" element={<UpdateAbout />} />
              <Route path="/modificationnovel" element={<ModNovel />} />
              <Route path="/modificationabout" element={<ModAbout />} />
            </Routes>
        </Div>
      </BrowserRouter>
    </>
  )
}

const Div = styled.div`
  background: var(--body-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default App
