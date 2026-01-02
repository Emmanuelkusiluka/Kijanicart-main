import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export function MainLayout() {
    
    return(
        <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}