import { useState } from "react";
import Image from "next/image";
import { Anchor, Clock } from "..";
import { useWindowControl } from "../../hooks";

import iconsAssets from "../../assets/icons.json";

export function Taskbar() {
  const [icons] = useState(iconsAssets);
  const { toggleStateWindow, orderTask } = useWindowControl();

  return (
    <div className="flex flex-row justify-between bg-neutral-900/80 z-999 backdrop-blur-xl ">
      <div className="flex flex-row items-center justify-center">
        <button
          title="Doors"
          data-umami-event="Open the door"
          className="flex items-center justify-center bg-none text-[0] border-none px-[0.7rem] w-[50px] h-full cursor-pointer hover:bg-[hsla(0,0%,47%,0.219)]"
        >
          <Image
            src="/icons/taskbar/door.svg"
            alt="Icone de uma porta na cor branca."
            width={27}
            height={27}
            className="w-7 h-7"
          />
        </button>

        <Anchor url="https://hitext.vercel.app" title="Aplicação do HiText" umamiEvent="To HiText">
          <Image
            src="/icons/taskbar/hitext.svg"
            alt="Logo da Aplicação do HiText, um circulo branco com letra H e T dentro na cor preta."
            width={27}
            height={27}
          />
        </Anchor>

        <Anchor
          url="https://startmessage.matheuspa.com"
          title="Aplicação do StartMessage"
          umamiEvent="To StartMessage"
        >
          <Image
            src="/icons/projects/whatsapp.png"
            alt="Logo da Aplicação do StartMessage, um bolãozinho de conversa verde com telefone na cor branco dentro."
            width={30}
            height={30}
          />
        </Anchor>

        {orderTask.map((value, index) => (
          <Anchor
            key={`icon-${index}`}
            title={icons[value].title}
            onClick={() => toggleStateWindow(value, true)}
          >
            <Image
              src={icons[value].image.path}
              alt={icons[value].image.alt}
              width={27}
              height={27}
            />
          </Anchor>
        ))}
      </div>
      <div className="flex flex-row">
        <select
          name="Language"
          id="1"
          className="text-[0.85rem] font-medium text-white bg-none border-transparent transition-all duration-200 [&>option]:bg-color1 [&>option]:py-2 [&>option]:px-[0.7rem]"
        >
          <option defaultValue="pt-br">PT-BR</option>
          <option value="en-us">EN-US</option>
        </select>
        <div className="flex flex-col items-center justify-center px-6">
          <Clock />
        </div>
      </div>
    </div>
  );
}
