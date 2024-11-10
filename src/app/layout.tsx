import { SpeedInsights } from '@vercel/speed-insights/next';
import { ResolvingViewport } from 'next';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { isRtlLang } from 'rtl-detect';

import Analytics from '@/components/Analytics';
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale';
import PWAInstall from '@/features/PWAInstall';
import AuthProvider from '@/layout/AuthProvider';
import GlobalProvider from '@/layout/GlobalProvider';
import { isMobileDevice } from '@/utils/server/responsive';

const inVercel = process.env.VERCEL === '1';

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout = async ({ children, modal }: RootLayoutProps) => {
  const cookieStore = await cookies();

  const lang = cookieStore.get(LOBE_LOCALE_COOKIE);
  const direction = isRtlLang(lang?.value || DEFAULT_LANG) ? 'rtl' : 'ltr';
  const mobile = isMobileDevice();


  
  return (
    <html dir={direction} lang={lang?.value || DEFAULT_LANG} suppressHydrationWarning>

      <body>
        <GlobalProvider>
          <AuthProvider>
            <div className="HelloGPT">
              <h1><img src="https://dl.cmdpe.com/HelloGPT/HelloGPT-Logo.png"/></h1>
              <ul>
                <li><a href="https://cmdpe666.top/">获取key</a></li>
                <li><a href="https://cmdpe666.top/">获取密码</a></li>
                <li><a href="https://www.cmdpe.com/69.html">学习群</a></li>
                <li><a href="https://www.cmdpe.com/category-10.html">软件下载</a></li>
              </ul>	
              <div><div></div></div>
              <script src="https://dl.cmdpe.com/HelloGPT/HelloGPT.js"></script> 
            </div>
            {children}
            {!mobile && modal}
          </AuthProvider>
          <PWAInstall />
        </GlobalProvider>
        <Analytics />
        {inVercel && <SpeedInsights />}
      </body>
    </html>
  );
};

export default RootLayout;

export { generateMetadata } from './metadata';

export const generateViewport = async (): ResolvingViewport => {
  const isMobile = isMobileDevice();

  const dynamicScale = isMobile ? { maximumScale: 1, userScalable: false } : {};

  return {
    ...dynamicScale,
    initialScale: 1,
    minimumScale: 1,
    themeColor: [
      { color: '#f8f8f8', media: '(prefers-color-scheme: light)' },
      { color: '#000', media: '(prefers-color-scheme: dark)' },
    ],
    viewportFit: 'cover',
    width: 'device-width',
  };
};

 // 引入外部CSS文件
import React, { useEffect } from 'react';
const MyComponent: React.FC = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://dl.cmdpe.com/HelloGPT/HelloGPT.css';
        document.head.appendChild(link);
        
        return () => {
            document.head.removeChild(link); // 清理
        };
    }, []);
}
export default MyComponent;




