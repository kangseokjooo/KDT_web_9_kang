// import Style from "./11Style/Style";
// import SassComponent from "./11Style/SassComponent";
// import StyledComponent from "./11Style/StyledComponent";
// import Router from "./12Router/Router";
import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";

function App() {
    return <>
        {/* <SassComponent/> */}
        {/* <StyledComponent/> */}
        {/* ver1
        <Router/> */}
        {/*ver2*/}
        <Header/>
        <Outlet/>
    </>;
}

export default App;
