interface NavProps {
  className?: string;
  link?: string;
  text?: string;
}

export default function NavTag({ link = '', text = '' }: NavProps) {
  return (
    <div>
      <a
        href={link}
        className="font-['Good_Pawoo'] text-[20px] leading-[210%] font-normal tracking-[0%] text-white uppercase"
      >
        {text}
      </a>
    </div>
  );
}
