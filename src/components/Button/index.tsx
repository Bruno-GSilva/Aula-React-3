interface props {
  title: string;
  styled: string | undefined;
  click: () => void;
}

export const Button = ({ title, styled, click }: props) => {
  return (
    <button
      onClick={click}
      className={`outline border-black p-4 m-1 rounded-md ${styled}`}
    >
      <p className="text-2xl text-black font-semibold">{title}</p>
    </button>
  );
};
