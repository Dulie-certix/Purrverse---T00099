import { ReactNode } from 'react';
import Shadow from '../Shadow';

export default function HeroLogo({ children }: { children: ReactNode }) {
    return (
      <div className="w-[64px] h-[64px] rounded-[7.68px] flex justify-center items-center bg-white">
          <Shadow size={0} color="#FFEDDF" blur={43.22}>
            <Shadow size={0} color="#FFEDDF" blur={74.1}>
              <Shadow size={0} color="#FFEDDF" blur={129.67}>
                {children}
              </Shadow>
            </Shadow>
          </Shadow>
      </div>                     
    );
  }