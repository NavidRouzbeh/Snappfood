import { ReactNode } from "react";
import Footer from "./Footer/Footer";
interface LayoutPropsType{
    children:ReactNode
}
const Layout = ({children}:LayoutPropsType) => {
    return ( 
        <>
        {children}
        <Footer/>
        </>
        
     );
}
 
export default Layout;