import NavBar from "./NavBar";
import Header from "./header";

export const Layout = ({children}) => {
    return (
        <main>
        <Header />  
        <NavBar /> 
        {children}
        </main>
    );
};