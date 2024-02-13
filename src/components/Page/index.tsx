import {PageContainer} from "./styles";
import React, {CSSProperties} from "react";

type PageProps = { children: React.ReactNode | React.ReactNode[], style: CSSProperties | undefined }
export default function Page({children, style}: PageProps) {
  return <PageContainer style={{...style}}>{children}</PageContainer>
}