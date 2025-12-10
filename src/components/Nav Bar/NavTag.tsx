interface NavProps {
  className?: string;
  link?: string;
  text?: string;
}

export default function NavTag({ link = '', text = '' }: NavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = link.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop + 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <a
        href={link}
        onClick={handleClick}
        className="font-['Good_Pawoo'] cursor-pointer text-base font-normal uppercase leading-[210%] tracking-[0%] text-white md:text-lg 3xl:text-[20px]"
      >
        {text}
      </a>
    </div>
  );
}
