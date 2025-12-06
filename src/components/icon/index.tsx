import Image from "next/image";
import { IIconProps } from "../../@types";

export function Icon({ name, alt, img, commandToOpenWindow, umamiEvent }: IIconProps) {
  return (
    <div
      data-message={name}
      title={name}
      className="flex flex-col justify-center items-center relative gap-1 p-4 w-20 h-fit cursor-pointer transition-all duration-200 hover:scale-110 hover:[&>div]:flex active:scale-75 hover:bg-[hsla(0,0%,47%,0.219)] rounded-md"
      data-umami-event={umamiEvent}
      onClick={(e) => {
        e.preventDefault();
        commandToOpenWindow();
      }}
    >
      <Image src={img} alt={alt} width={47} height={47} className="w-12 h-12" />
      <span className="text-center text-[0.9rem] font-medium">{name}</span>

    </div>
  );
}
