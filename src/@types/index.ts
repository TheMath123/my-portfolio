// import { ReactNode } from "react";

export interface IChildrenProps {
  //Context Children Props
  children: React.ReactNode;
}

export interface IOpenWindowContextProps {
  //Context Props
  openWindows: boolean[];
  openTheWindow: (index: number, open: boolean) => void;
}

export interface IIconProps {
  //Component Icon
  name: string;
  alt: string;
  img: string;
  func?: () => void;
  windowIndexToOpen?: number;
}

export interface IWindowProps {
  //Component Window
  name: string;
  windowIndex: number;
  children?: React.ReactNode;
}
