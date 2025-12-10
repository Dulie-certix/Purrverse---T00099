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
      // Responsive offset based on screen size
      const getOffset = () => {
        const width = window.innerWidth;
        if (targetId === 'Section1') {
          if (width >= 1920) return 350; // 3xl
          if (width >= 1536) return 290; // 2xl
          if (width >= 1280) return 230; // xl
          if (width >= 1024) return 250; // lg
          if (width >= 768) return 200; // md
          if (width >= 640) return 90; // sm
          return 80; // mobile
        }
        // Special positioning for tokenomics section
          if (targetId === 'Section2') {
          if (width >= 1920) return 230;
          if (width >= 1536) return 10;
          if (width >= 1280) return 10;
          if (width >= 1024) return 50;
          if (width >= 768) return 100;
          if (width >= 640) return 90;
          return -50;
        }
        // Default positioning for other sections
        if (width >= 1920) return -50;
        if (width >= 1536) return 0;
        if (width >= 1280) return -100;
        if (width >= 1024) return -100;
        if (width >= 768) return 0;
        if (width >= 640) return 0;
        return 100;
      };
      
      const offsetTop = element.offsetTop + getOffset();
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
        className="font-['Good_Pawoo'] cursor-pointer text-sm font-normal uppercase leading-[210%] tracking-[0%] text-white transition-all duration-200 hover:text-[#DD9395] sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-[20px]"
      >
        {text}
      </a>
    </div>
  );
}
