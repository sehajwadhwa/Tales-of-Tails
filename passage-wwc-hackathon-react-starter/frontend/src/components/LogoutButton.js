import { usePassageLogout } from "../actions";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const { logout } = usePassageLogout();

  const navigate = useNavigate();

  const signout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };
  return <button onClick={signout}>Sign Out</button>;
};

export default LogoutButton;
