import toast from 'react-hot-toast';

type ButtonProps = {
  url?: string;
  title: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  umamiEvent?: string;
};

export function Anchor({ url, title, onClick, children, className, umamiEvent }: ButtonProps) {
  function copy() {
    navigator.clipboard.writeText(title);
    toast("Texto copiado!", {
      icon: "📄",
      style: {
        borderRadius: "15px",
        background: "var(--color2)",
        color: "white"
      }
    });
  }

  function handlerOnClick() {
    if (onClick) {
      onClick();
    } else {
      if (url) {
        window.open(url);
      } else {
        copy();
      }
    }
  }

  return (
    <button
      className={className ?? "flex items-center  justify-center cursor-pointer transition-all duration-300 hover:brightness-110 w-[50px] h-full border-0 hover:bg-[hsla(0,0%,47%,0.219)]"}
      onClick={handlerOnClick}
      title={title}
      data-umami-event={umamiEvent}
    >
      {children}
    </button>
  );
}
