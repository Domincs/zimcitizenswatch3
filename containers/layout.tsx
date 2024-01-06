import { NavbarContainer } from "./navbar";

export const Layout = ({ children }) => {
    return (
        <div>
            <NavbarContainer />
            <main>{children}</main>
            {/* Other footer, common components, etc. */}
        </div>
    )
    
}