import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import { useState, useEffect } from 'react';


const Footer = () => {
  const [ipInfo, setIpInfo] = useState({ server: { country: '', city: '', ip: '', flag: '' }, user: { country: '', city: '', ip: '', flag: '' } });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://f1062921.xsph.ru/ip.php');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIpInfo({
          server: {
            country: data.cf_node_country || '未知',
            city: data.cf_node_city || '未知',
            ip: data.cf_node || '未知',
            flag: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.cf_node_country_code}.svg`,
          },
          user: {
            country: data.user_country || '未知',
            city: data.user_city || '未知',
            ip: data.user_ip || '未知',
            flag: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.user_country_code}.svg`,
          },
        });
      } catch (error) {
        console.error("Error fetching IP info:", error);
        //  更好的错误处理：可以在这里添加代码来显示一个友好的错误信息给用户，而不是只在控制台输出。
        // 例如： setIpInfo({ server: { ip: '获取失败' }, user: { ip: '获取失败' } });
      }
    };
    fetchData();
  }, []);

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit' />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        <div id='footer-bottom-left'>
          <PoweredBy />
          <CopyRightDate />
        </div>

        <div id='footer-bottom-right' className='flex flex-col md:flex-row justify-center items-center'> {/* 使用 flexbox 居中 */}
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
          <BeiAnGongAn />

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

          <div className='flex items-center'> {/* 使用flexbox, items-center让垂直居中 */}
            <div>服务器IP: {ipInfo.server.ip}</div>
            <div className='mx-4'>用户IP: {ipInfo.user.ip}</div> {/* mx-4 用于添加水平间距 */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
