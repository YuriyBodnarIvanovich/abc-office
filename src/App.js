import './App.css';
import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Slide from "./components/Slide/Slide";
import Advertising from "./components/advertising/Advertising";
import Notice from "./components/notice/Notice";
import CatalogOfProducts from "./components/CatalogOfProducts/CatalogOfProducts";
import NoticeSecond from "./components/Notice_Second/NoticeSecond";
import Footer from "./components/Footer/Footer";
import ListMenu from "./components/menu/Listmenu/ListMenu";

function App() {
      const [showAllMenu, setStatus] = useState(false);
      return (
        <div style={{backgroundColor:"#E5E5E5"}}>
          <Menu showAllMenu={showAllMenu} setStatus={setStatus}/>
          {showAllMenu ?  <ListMenu/> : null}
          <Slide/>
          <Advertising/>
          <CatalogOfProducts/>
          <NoticeSecond/>
          <Footer/>
        </div>
      );
}

export default App;
