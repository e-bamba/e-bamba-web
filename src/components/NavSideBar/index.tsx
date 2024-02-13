import { NavSideBarLink, NavSideBarLinkProp } from "./components";
import { NavSideBarContainer, NavSideBarLinks } from "./styles";

export default function NavSideBar() {
  const routes: Array<NavSideBarLinkProp> = [
    {
      href: "/",
      isVisible: true,
      title: "Página inicial",
    },
    {
      href: "/alegacoes",
      isVisible: true,
      title: "Alegações",
    },
  ];

  return (
    <NavSideBarContainer>
      <NavSideBarLinks>{routes.map(createLink)}</NavSideBarLinks>
    </NavSideBarContainer>
  );
}

const createLink = (route: NavSideBarLinkProp) => (
  <NavSideBarLink key={route.href} {...route} />
);
