import {createLink} from "./components";
import { NavSideBarContainer, NavSideBarLinks } from "./styles";
import {NavSideBarLinkProp} from "./props";
import Home from '@mui/icons-material/Home';
import Paid from '@mui/icons-material/Paid';

export default function NavSideBar() {
  const routes: Array<NavSideBarLinkProp> = [
    {
      href: "/",
      isVisible: true,
      title: "Página inicial",
      icon: <Home />
    },
    {
      href: "/alegacoes",
      isVisible: true,
      title: "Alegações",
      icon: <Paid />
    },
  ];

  return (
    <NavSideBarContainer>
      <NavSideBarLinks>{routes.map(createLink)}</NavSideBarLinks>
    </NavSideBarContainer>
  );
}
