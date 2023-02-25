import internal from "stream";

export interface IChildrenProps {
  //Context Children Props
  children: React.ReactNode;
}

// <------------------------------------------>

export interface IOpenWindowContextProps {
  //Context Props
  stateWindows: boolean[];
  toggleStateWindow: (index: number, open: boolean) => void;
  minimizeWindow: (index: number) => void;
  windowZIndex: number[];
  orderTask: number[];
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

export interface IWindowContextProps {
  //Component Window
  containerRef: React.RefObject<HTMLDivElement> | any;
}

// <------------------------------------------>

//Project Component
type Image = {
  url: string;
  alt: string;
};

type BadgeItem = {
  title: string;
  color: string;
  url?: string;
};

type Repository = {
  projectURL?: string;
  demoURL?: string;
};

export interface IComponentProjectProps {
  title: string;
  description: string;
  image: Image;
  techs?: BadgeItem[] | null;
  concepts?: BadgeItem[] | null;
  repository: Repository;
}
