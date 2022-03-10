import Image from "next/image";

type iconProps = {
  name: string;
  img: string;
  func?: () => void;
};

export function Icon({ name, img, func }: iconProps) {
  return (
    <div onClick={() => func}>
      <Image src={img} alt={name} width={27} height={27} />
      <span>{name}</span>
    </div>
  );
}
