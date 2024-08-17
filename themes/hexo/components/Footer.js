import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={siteConfig('LINK')} className='font-bold  dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br/>

      {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <p className='font-bold pt-2 text-light-500 dark:text-gray-500'>Powered by <a href='https://github.com/tangly1024/NotionNext' className='font-bold dark:text-gray-300'>NotionNext {siteConfig('VERSION')}</a></p></span><br/>
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@^3.2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <span id="momk" class="text-gray-300 dark:text-gray-300"></span>
    <script type="text/javascript">
    function NewDate(str) {
        str = str.split('-');
        var date = new Date();
        date.setUTCFullYear(str[0], str[1] - 1, str[2]);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
    function momxc() {
        var birthDay = NewDate("2024-2-1"); /*建站日期*/
        var today = new Date();
        var timeold = today.getTime() - birthDay.getTime();
        var sectimeold = timeold / 1000;
        var secondsold = Math.floor(sectimeold);
        var msPerDay = 24 * 60 * 60 * 1000;
        var e_daysold = timeold / msPerDay;
        var daysold = Math.floor(e_daysold);
        var e_hrsold = (daysold - e_daysold) * -24;
        var hrsold = Math.floor(e_hrsold);
        var e_minsold = (hrsold - e_hrsold) * -60;
        var minsold = Math.floor((hrsold - e_hrsold) * -60);
        var seconds = Math.floor((minsold - e_minsold) * -60).toString();
        document.getElementById("momk").innerHTML = "本站已安全运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
        setTimeout(momxc, 1000);
    }
    momxc();
    </script>
</body>
</html>

    </footer>
  )
}

export default Footer
