import { ReactNode } from 'react';
import Shadow from '../Shadow';

export default function HeroLogo({ children }: { children: ReactNode }) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white sm:h-12 sm:w-12 3xl:h-[64px] 3xl:w-[64px] 3xl:rounded-[7.68px]">
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