import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HandleEvent from "./HandleEvent/HandleEvent";
import RenderingConditions from "./RenderingConditions/RenderingConditions";
import StateDemo from "./State/StateDemo";
import Styling from "./Styling/Styling";
import BTCX from "./BaiTapChonXe/BTCX";
import RenderWithLoop from "./RenderWithLoop/RenderWithLoop";
import BaiTapRenderFilms from "./BaiTapRenderFilms/BaiTapRenderFilms";

function App() {
  return (
    <div className="App">
      {/* <HandleEvent /> */}
      {/* <RenderingConditions /> */}
      {/* <StateDemo /> */}
      {/* <Styling /> */}
      <BTCX />
      {/* <RenderWithLoop /> */}
      {/* <BaiTapRenderFilms /> */}
    </div>
  );
}

export default App;
