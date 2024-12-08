import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

/**
 * 页脚
 * @returns
 */
const Footer = () => {
  // 用于获取服务器和用户的 IP 信息
  function fetchData() {
    fetch('https://orrz.alwaysdata.net/ip.php')
      .then(response => response.json())
      .then(data => {
        document.getElementById('cf-country').textContent = data.cf_node_country;
        document.getElementById('cf-city').textContent = data.cf_node_city;
        document.getElementById('cf-ip').textContent = data.cf_node;
        document.getElementById('cf-flag').src = `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.cf_node_country_code}.svg`;

        document.getElementById('user-country').textContent = data.user_country;
        document.getElementById('user-city').textContent = data.user_city;
        document.getElementById('user-ip').textContent = data.user_ip;
        document.getElementById('user-flag').src = `https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${data.user_country_code}.svg`;
      });
  }

  // 组件加载时执行数据抓取
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过渡区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'
      >
        <div id='footer-bottom-left'>
          <PoweredBy />
          <CopyRightDate />
        </div>

        <div id='footer-bottom-right'>
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
        </div>
      </div>

      {/* 服务器和用户信息（居中显示） */}
      <div className='w-full py-4 bg-[#f1f3f7] dark:bg-[#21232A]'>
        <div className='text-center'>
          <div id="server-info" className="mb-2">
            <span>现在为您提供服务的服务器是 <span id="cf-country"></span> 
              <img id="cf-flag" src="" alt="国旗" style={{ width: '16px', height: '16px' }} />
              城市: <span id="cf-city"></span>，IP地址: <span id="cf-ip"></span>
            </span>
          </div>
          
          <div id="user-info">
            <span>您来自 <span id="user-country"></span> 
              <img id="user-flag" src="" alt="国旗" style={{ width: '16px', height: '16px' }} />
              城市: <span id="user-city"></span>，IP地址: <span id="user-ip"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
