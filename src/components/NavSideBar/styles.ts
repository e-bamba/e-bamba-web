import styled from "@emotion/styled";

export const NavSideBarContainer = styled.aside`
  padding: 5px;
  background: #3d3d3d;
  position: absolute;
  left: 10%;
  height: 60%;
  top: 50px;
  border-radius: 15px;
`;

export const NavSideBarLinks = styled.ul`
    list-style: none;
`;

export const NavSideBarLinkItemContainer = styled.li`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  a {
    text-decoration: none;
  }
`
