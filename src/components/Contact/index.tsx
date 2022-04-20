import Image from "next/image";
import { Anchor } from "../Anchor";
import styles from "./Contact.module.scss";

type ContactProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
};

export function Contact(props: ContactProps) {
  return (
    <main className={styles.container}>
      <Image src={props.imageUrl} alt={props.imageAlt} height={34} width={34} />
      <div className={styles.infos}>
        <h1>{props.title}</h1>
        <Anchor url={props.url} title={props.description}>
          {props.description}
        </Anchor>
      </div>
    </main>
  );
}
