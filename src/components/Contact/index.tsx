import Image from "next/image";
import { Anchor } from "../Anchor";
import styles from "./contact.module.scss";

type ContactProps = {
  title: string;
  description: string;
  url?: string;
  imageUrl: string;
  imageAlt: string;
};

export function Contact(props: ContactProps) {
  return (
    <div className={styles.main}>
      <div className={styles.images}>
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          height={54}
          width={54}
        />
      </div>
      <div className={styles.infos}>
        <h1>{props.title}</h1>
        <Anchor
          url={props.url}
          title={props.description}
        >
          {props.description}
        </Anchor>
      </div>
    </div>
  );
}
