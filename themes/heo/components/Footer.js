import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [ipInfo, setIpInfo] = useState({
    server: { country: '', city: '', ip: '', flag: '' },
    user: { country: '', city: '', ip: '', flag: '' },
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://orrz.alwaysdata.net/ip.php')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
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
        })
      } catch (error) {
        console.error('Error fetching IP info:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className="relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm">
      {/* 颜色过度区 */}
      <div className="h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit" />

      {/* 社交按钮 */}
      <div className="w-full h-24">
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div className="w-full h-24 flex flex-col lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]">
        <div id="footer-bottom-left" className="flex flex-col items-center lg:items-start">
          <PoweredBy />
          <CopyRightDate />
        </div>

        <div id="footer-bottom-right" className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          {siteConfig('BEI_AN') && (
            <>
              <i className="fas fa-shield-alt" />
              <a href="https://beian.miit.gov.cn/" className="mr-2">
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
          <BeiAnGongAn />

          <div className="flex items-center text-xs md:text-sm mt-2 md:mt-0 space-x-4">
            <div id="server-info" className="flex items-center space-x-2">
              <span>服务器所在地：</span>
              <span>{ipInfo.server.country}</span>
              <img src={ipInfo.server.flag} alt="国旗" className="w-4 h-4" />
              <span>城市：{ipInfo.server.city}</span>
              <span>IP：{ipInfo.server.ip}</span>
            </div>

            <div id="user-info" className="flex items-center space-x-2">
              <span>您的所在地：</span>
              <span>{ipInfo.user.country}</span>
              <img src={ipInfo.user.flag} alt="国旗" className="w-4 h-4" />
              <span>城市：{ipInfo.user.city}</span>
              <span>IP：{ipInfo.user.ip}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
