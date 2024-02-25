import {ReactNode} from "react";

export type NavSideBarLinkProp = {
  href: string;
  icon: ReactNode;
  isVisible: boolean;
  title: string;
};