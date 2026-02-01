import { useContext } from "react";
import { AuthContext } from "./src/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    return <div>{user ? <Navigate to="/" /> : children}</div>;
}

export default PublicRoute;