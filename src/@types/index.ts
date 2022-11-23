import internal from "stream";

export interface IChildrenProps {
  //Context Children Props
  children: React.ReactNode;
}

// <------------------------------------------>

export interface IOpenWindowContextProps {
  //Context Props
  openWindows: boolean[];
  openTheWindow: (index: number, open: boolean) => void;
  windowZIndex: number[];
}

// <------------------------------------------>

export interface IIconProps {
  //Component Icon
  name: string;
  alt: string;
  img: string;
  commandToOpenWindow: () => void;
}

// <------------------------------------------>

export interface IWindowProps {
  //Component Window
  name: string;
  windowIndex: number;
  children?: React.ReactNode;
}

// <------------------------------------------>

//Project Component
type Image = {
  url: string;
  alt: string;
}

type BadgeItem = {
  title: string;
  color: string;
  url?: string;
}

type Repository = {
  projectURL?: string;
  demoURL?: string;
}

export interface IComponentProjectProps {
  title: string;
  description: string;
  image: Image;
  techs?: BadgeItem[] | null;
  concepts?: BadgeItem[] | null;
  repository: Repository;
}
