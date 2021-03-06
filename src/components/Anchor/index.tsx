type ButtonProps = {
  url?: string;
  title: string;
  children: React.ReactNode;
};

export function Anchor(props: ButtonProps) {
  return (
    <button
      onClick={() => (props.url ? window.open(props.url) : {})}
      title={props.title}
    >
      {props.children}
    </button>
  );
}
