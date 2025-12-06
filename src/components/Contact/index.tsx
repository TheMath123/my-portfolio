import Image from "next/image";
import { Anchor } from "..";

type ContactProps = {
  title: string;
  description: string;
  url?: string;
  imageUrl: string;
  imageAlt: string;
};

export function Contact(props: ContactProps) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex justify-center items-center">
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          height={54}
          width={54}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">{props.title}</h1>
        <Anchor
          className="cursor-pointer transition-all duration-300 hover:underline active:scale-90"
          url={props.url}
          title={props.description}
        >
          {props.description}
        </Anchor>
      </div>
    </div>
  );
}
