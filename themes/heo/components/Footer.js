<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>服务器与用户信息</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        footer {
            background-color: #f1f3f7;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #ddd;
        }

        #server-info, #user-info {
            margin: 10px 0;
            font-size: 14px;
            color: #333;
        }

        #server-info span, #user-info span {
            font-weight: bold;
        }

        #server-info img, #user-info img {
            vertical-align: middle;
            margin-left: 5px;
        }

        /* 居中显示页脚 */
        footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>

<!-- 页脚 -->
<footer>
    <div id="server-info">
        现在为您提供服务的服务器是 <span id="cf-country"></span> 
        <img id="cf-flag" src="" alt="国旗" style="width: 16px; height: 16px;"> 
        城市: <span id="cf-city"></span>，IP地址: <span id="cf-ip"></span>
    </div>
    <div id="user-info">
        您来自 <span id="user-country"></span> 
        <img id="user-flag" src="" alt="国旗" style="width: 16px; height: 16px;">，
        城市: <span id="user-city"></span>，IP地址: <span id="user-ip"></span>
    </div>
</footer>

<script type="text/javascript">
    function fetchData() {
        fetch('这里换成你后端php的位置')
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

    fetchData();
</script>

</body>
</html>
