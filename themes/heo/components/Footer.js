import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import { useState, useEffect } from 'react';


/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const [serverLocation, setServerLocation] = useState({ country: '', city: '', ip: '', flag: '' });
  const [userLocation, setUserLocation] = useState({ country: '', city: '', ip: '', flag: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://orrz.alwaysdata.net/ip.php');
        const data = await response.json();

        setServerLocation({
          country: data.cf_node_country,
          city: data.cf_node_city,
          ip: data.cf_node,
          flag: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.cf_node_country_code}.svg`,
        });

        setUserLocation({
          country: data.user_country,
          city: data.user_city,
          ip: data.user_ip,
          flag: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.user_country_code}.svg`,
        });
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-center items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'> {/* 修改了 justify-between 为 justify-center */}
        <div id='footer-bottom-left'>
          <PoweredBy />
          <CopyRightDate />
        </div>

        <div id='footer-bottom-right' className='text-center'> {/* 添加 text-center */}
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

          <div className='flex flex-col md:flex-row justify-center items-center'> {/* 使用 flexbox 进行居中 */}
            <div>
              服务器IP: {serverLocation.ip}
            </div>
            <div className='ml-4 md:ml-8'> {/* 添加间距 */}
              用户IP: {userLocation.ip}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
