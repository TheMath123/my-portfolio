import { useState } from "react";
import Image from "next/image";
import { Anchor, Clock } from "..";
import { useWindowControl } from "../../hooks";

import iconsAssets from "../../assets/icons.json";
import styles from "./taskbar.module.scss";

export function Taskbar() {
  const [icons] = useState(iconsAssets);
  const { toggleStateWindow, orderTask } = useWindowControl();

  return (
    <div className={styles.taskbar}>
      <div className={styles.icons}>
        <button title="Doors" data-umami-event="Open the door">
          <Image
            src="/icons/taskbar/door.svg"
            alt="Icone de uma porta na cor branca."
            width={27}
            height={27}
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
      <div className={styles.info}>
        <select name="Language" id="1">
          <option defaultValue="pt-br">PT-BR</option>
          <option value="en-us">EN-US</option>
        </select>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </div>
  );
}
