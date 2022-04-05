// import { ReactNode } from "react";

export interface IChildrenProps {
  //Context Children Props
  children: React.ReactNode;
}

export interface IOpenWindowContextProps {
  //Context Props
  window: boolean[];
  openWindow: (index: number) => void;
  closeWindow: (index: number) => void;
}

export interface IIconProps {
  //Component Icon
  name: string;
  alt: string;
  img: string;
  func?: () => void;
}

export interface IWindowProps {
  //Component Window
  name: string;
  children?: React.ReactNode;
}
