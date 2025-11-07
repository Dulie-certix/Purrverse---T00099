export default function HeroLogo({ logo, title, mleft, mtop  }: {
    logo?: string;
    title?: string;
    mleft?: number;
    mtop?: number;
  }) {
    return (
        <div>
      <div style={{
        marginLeft: mleft ? `${mleft}px` : '0px',
        marginTop: mtop ? `${mtop}px` : '0px',
      }}>
      </div>
        <img 
          src={logo} 
          alt={title} 
          className="w-[64px] h-[64px]"
        /></div>
    );
  }