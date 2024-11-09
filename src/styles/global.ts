import { Theme, css } from 'antd-style';

// fix ios input keyboard
// overflow: hidden;
// ref: https://zhuanlan.zhihu.com/p/113855026
export default ({ token }: { prefixCls: string; token: Theme }) => css`
  html,
  body,
  #__next {
    position: relative;

    overscroll-behavior: none;

    height: 100%;
    min-height: 100dvh;
    max-height: 100dvh;

    background: ${token.colorBgLayout};

    @media (min-device-width: 576px) {
      overflow: hidden;
    }
  }

  * {
    scrollbar-color: ${token.colorFill} transparent;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.75em;
      height: 0.75em;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }

    :hover::-webkit-scrollbar-thumb {
      background-color: ${token.colorText};
      background-clip: content-box;
      border: 3px solid transparent;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }






* {
    scrollbar-color: auto !important;
    scrollbar-width: auto !important;
}
::selection {
    background: #99e640 !important;
    color: #000 !important;
}
::-webkit-scrollbar {
    width: 4px !important;
    height: 0 !important;
    background: rgb(255 0 0 / 0%) !important;
}
::-webkit-scrollbar-thumb {
    background: rgb(0 0 0 / 20%) !important;
}
::-webkit-scrollbar-thumb:hover {
    background: #673AB7 !important;
}
@font-face {
    font-family: 'hellogpt';
    src: url('https://raw.githubusercontent.com/gtla2025/SSR/master/WenYue-ShengHuoJiaTi-J.woff') format('woff');
}
@font-face {
    font-family: 'JosefinSans';
    src: url('https://raw.githubusercontent.com/gtla2025/SSR/master/JosefinSans-Light.woff') format('woff');
}
.acss-396ofq, .acss-qmdfvd, .acss-1539fd4 {
    line-height: 1.2 !important;
}


html {
    display: flex;
}
body * {
	font-family: "JosefinSans", "hellogpt", "HarmonyOS Sans", "Segoe UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "HarmonyOS Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji" !important;
	/* text-shadow: 0.01em 0.01em 0.05em #666; */
}
body {
    margin-left: 10%;
    padding-right: 10%;
	/* background: url(https://dl.cmdpe.com/HelloGPT/img0.jpg) center center / cover no-repeat fixed !important; */
}
body > .ant-app {
	justify-content: center;
}
body > div:nth-child(1)::before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
	background: url(https://dl.cmdpe.com/HelloGPT/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
body > .css-1mqleeb:first-child::before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
	background: url(https://dl.cmdpe.com/HelloGPT/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
body > div > .css-5m4etf {
    height: calc(100% - 120px);
    position: relative !important;
    z-index: 9 !important;
	justify-content: center;
}
body > div > .css-5m4etf::after {
    content: "";
    position: absolute;
    top: -64px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
	background: url(https://dl.cmdpe.com/HelloGPT/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    filter: blur(10px);
}
/* .css-1mqleeb > .css-5m4etf, .css-1mqleeb > .css-5m4etf::after {
    background: #222;
}
.css-gcermr > .css-5m4etf, .css-gcermr > .css-5m4etf::after {
    background: #fff;
} */

body > div > .css-5m4etf > div:first-child {
    min-height: auto !important;
}
.css-5m4etf > .css-5m4etf {
	overflow: initial !important;
}
body > .css-1mqleeb > .css-5m4etf > div:first-child, body > .css-1mqleeb > .css-5m4etf > .css-5m4etf aside, body > .css-1mqleeb > .css-5m4etf > .css-5m4etf > div > div, body > .css-1mqleeb #lobe-market-container > div:nth-child(1), body > .css-1mqleeb #lobe-market-container > div:nth-child(2) > aside {
    background: #222 !important;
}
body > .css-gcermr > .css-5m4etf > div:first-child, body > .css-gcermr > .css-5m4etf > .css-5m4etf aside, body > .css-gcermr #lobe-market-container > div:nth-child(1), body > .css-gcermr #lobe-market-container > div:nth-child(2) > aside {
	background: none !important;
}
body > .css-gcermr > .css-5m4etf > div:first-child {
    background: rgba(6, 147, 227, 0.8) !important;
    border-inline-end: 1px solid #333;
}
body > .css-gcermr > .css-5m4etf > div:first-child * {
    color: #eee !important;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > aside {
	background: rgba(6, 147, 227, 0.6) !important;
    border-inline-end: 1px solid #333;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > div > div:first-child {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border-block-end: 1px solid #333;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > div > div:nth-child(2), body > .css-gcermr #lobe-market-container {
    background: rgba(241, 241, 241, 0.7) !important;
}
body > .css-1mqleeb > .css-5m4etf > .css-5m4etf > div > div:nth-child(2), body > .css-1mqleeb #lobe-market-container, body > .css-1mqleeb .css-5m4etf > .css-5m4etf {
    background: #222 !important;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > div > div >aside {
	border-color: #333 !important;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > div > div > div >aside {
	border-color: #333 !important;
}
body > .css-gcermr #lobe-market-container > div > aside {
	background: #fff !important;
}
body > .css-gcermr > .css-5m4etf > .css-5m4etf > aside * {
    color: #fff !important;
}

.acss-rlur1a {
    box-shadow: none !important;
}
.css-1mqleeb a:hover, .css-1mqleeb button:hover {
    color: #fff !important;
}

/* 对话页对话选项卡 */
.LazyLoad.is-visible > a > div:first-child, a:has(+ .ant-collapse-icon-position-end) > div {
	margin: 22px 0;
    height: 70px;
    border-radius: 0;
	transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
a:has(+ .ant-collapse-icon-position-end) > div {
	margin-top: 0 !important;
}
.LazyLoad.is-visible > a > div:first-child::before, a:has(+ .ant-collapse-icon-position-end) > div::before {
    content: "";
    position: absolute;
    top: -6px;
    bottom: -6px;
    left: 6px;
    right: 6px;
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
body > .css-1mqleeb .LazyLoad.is-visible > a > div:first-child, body > .css-1mqleeb .LazyLoad.is-visible > a > div:first-child::before, body > .css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > div, body > .css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > div::before {
    background: #161616;
}
body > .css-gcermr .LazyLoad.is-visible > a > div:first-child, body > .css-gcermr .LazyLoad.is-visible > a > div:first-child::before, body > .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div, body > .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div::before {
	background: rgba(6, 147, 227, 1);
}
.css-1mqleeb .LazyLoad.is-visible > a > div:first-child:hover, .css-1mqleeb .LazyLoad.is-visible > a > div:first-child:hover::before, .css-1mqleeb .LazyLoad.is-visible > a > .acss-11xzd3q, .css-1mqleeb .LazyLoad.is-visible > a > .acss-11xzd3q::before {
    background: #79008d !important;
}
.css-gcermr .LazyLoad.is-visible > a > div:first-child:hover, .css-gcermr .LazyLoad.is-visible > a > div:first-child:hover::before, .css-gcermr .LazyLoad.is-visible > a > .acss-14xgm4a, .css-gcermr .LazyLoad.is-visible > a > .acss-14xgm4a::before {
	background: rgb(162 0 189) !important;
}
.css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > div:hover, .css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > div:hover::before, .css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > .acss-11xzd3q, .css-1mqleeb a:has(+ .ant-collapse-icon-position-end) > .acss-11xzd3q::before {
    background: #79008d !important;
}
.css-gcermr a:has(+ .ant-collapse-icon-position-end) > div:hover, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div:hover::before, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > .acss-14xgm4a, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > .acss-14xgm4a::before {
    background: rgb(162 0 189) !important;
}
.css-1mqleeb .LazyLoad.is-visible > a > div:first-child .acss-1hsh9br:hover {
    color: #fff !important;
    background: #333 !important;
}
.css-gcermr .LazyLoad.is-visible > a > div:first-child .acss-1rzhzi1:hover {
    color: #000 !important;
    background: rgb(44 44 44) !important
}
.css-1mqleeb .LazyLoad.is-visible > a > div:first-child > div:last-child {
    z-index: 1 !important;
	color: #666 !important;
}
.css-gcermr  .LazyLoad.is-visible > a > div:first-child > div:last-child {
    z-index: 1 !important;
	color: #bbb !important;
}
.css-1mqleeb .LazyLoad.is-visible > a > div:first-child > div > div {
    color: #bbb !important;
}
.css-gcermr .LazyLoad.is-visible > a > div:first-child > div > div {
    color: rgb(215 215 215) !important;
}
.css-1mqleeb .ant-collapse-ghost.ant-collapse-small > div > .ant-collapse-header {
    border-radius: 10px !important;
    background: rgb(22 22 22) !important;
}
.css-gcermr .ant-collapse-ghost.ant-collapse-small > div > .ant-collapse-header {
    border-radius: 10px !important;
	background: rgba(6, 147, 227, 1) !important;
}
.css-fr78qt {
    gap: 5px !important;
}
/* 跳转至当前按钮 */
.css-i80ya5 > button {
	border-radius: 10px !important;
}
.css-i80ya5 > button > span:first-child {
	margin: 0 !important;
}
.css-i80ya5 > button > span:last-child {
	display: none !important;
}
.css-i80ya5 > button:hover {
    background: #FF5722 !important;
}
/* 主页hellogpt logo */
.css-9tjxg1.acss-x8u4sp > .layoutkit-flexbox::before {
    content: "HelloGPT";
    position: absolute;
    top: 18px;
    left: 16px;
    right: 0px;
    font-size: 20px;
    font-weight: 700;
	opacity: 0;
}
.css-1mqleeb .css-9tjxg1.acss-x8u4sp > .layoutkit-flexbox::before {
    background: #222;
	color: #fff;
}
.css-gcermr .css-9tjxg1.acss-x8u4sp > .layoutkit-flexbox::before {
    background: #fff;
	color: #000;
}
.css-9tjxg1.acss-x8u4sp > .layoutkit-flexbox > div:first-child > svg:first-child {
    display: none !important;
}
/* 主页同步按钮 */
.css-1109xs8 > div > .ant-tag {
    padding: 3px 10px;
    border-radius: 10px;
}
.css-1mqleeb .css-1109xs8 > div > .ant-tag {
    background: #111;
}
.css-gcermr .css-1109xs8 > div > .ant-tag {
	background: rgba(6, 147, 227, 1) !important;
}
/* 按钮样式 */
.css-5wokcq, .ant-modal-close, button, .ant-select-selector, .ant-input-number, .ant-input-affix-wrapper, .ant-input-outlined, .ant-input-password, .ant-select-selection-item, .ant-segmented, .ant-segmented-item, .ant-dropdown-menu-submenu-title {
    border-radius: 10px !important;
	border: 0!important;
}
.css-gcermr .css-5wokcq {
	color: #666 !important;
}
.css-1mqleeb .css-5wokcq:hover {
    color: #fff !important;
    background: #444 !important;
}
.css-gcermr .css-5wokcq:hover {
    color: #fff !important;
    background: #FFC107 !important;
}
.ant-btn-primary:not(:disabled), .ant-btn-default:not(:disabled) {
    background: #cc0046 !important;
    color: #fff !important;
	box-shadow: none !important;
}
.ant-btn-primary:not(:disabled):hover, .ant-btn-default:not(:disabled):hover {
    background: #ff3d00 !important;
    color: #fff !important;
}
.ant-btn-block {
    width: auto !important;
}
/* .css-px56x0, .css-e7rmh7 {
    align-items: center !important;
} */
.css-5wokcq {
	transition: none !important;
}

/* 新建助手按钮+左侧栏按钮激活颜色 */
.css-1mqleeb .css-9tjxg1 .css-5wokcq:hover, .css-1mqleeb .css-zcfm67 .css-5wokcq:hover, .css-zcfm67 .acss-i3padr {
    background: #79008d !important;
}
.css-gcermr .css-9tjxg1 .css-5wokcq:hover, .css-gcermr .css-zcfm67 .css-5wokcq:hover, .css-zcfm67 .acss-wpp9jw {
	background: rgb(162 0 189) !important;
}
/* 右侧栏话题列表今天 */
[data-testid="virtuoso-item-list"] > div > .css-1b6ro1o {
    background: none !important;
    box-shadow: none !important;
}
.css-1mqleeb [data-testid="virtuoso-item-list"] > div > .css-1b6ro1o {
	color: #fff !important;
}
.css-gcermr [data-testid="virtuoso-item-list"] > div > .css-1b6ro1o {
	color: #000 !important;
}
/* 右侧栏话题列表 */
[data-testid="virtuoso-item-list"] > div > .css-1u84j5a {
    margin: 5px 8px !important;
    border-radius: 10px !important;
    height: 40px !important;
}
.css-1mqleeb [data-testid="virtuoso-item-list"] > div > .css-1u84j5a:hover, .acss-12lti30 {
    background: #161616 !important;
}
.css-gcermr [data-testid="virtuoso-item-list"] > div > .css-1u84j5a:hover, .acss-41ifly {
	background: rgba(0, 0, 0, 0.1) !important;
}
/* 右侧角色设定阴影 */
[data-code-type="markdown"] + div {
    display: none;
}
/* 右侧角色设定下边线 */
.css-gcermr .css-1p9yj2p > .css-p4qequ {
    border-bottom: 1px solid #333 !important;
}
/* 右侧话题列表 */
.css-120gwed > .css-o3n4io {
    border-radius: 20px !important;
    border: 0 !important;
}
/* 对话主题下移 */
/* .css-i80ya5 div[data-testid="virtuoso-scroller"] {
    margin-top: 64px !important;
}
.css-i80ya5 div[data-testid="virtuoso-scroller"] > div {
	top: -64px !important;
} */
/* 对话框背景色圆角 */
.css-1mqleeb .css-roa2v7 > .css-o3n4io {
    background-color: #161616 !important;
	border-radius: 10px 20px 20px !important;
}
.css-1mqleeb .css-4preuj > .css-o3n4io {
    background-color: #161616 !important;
	border-radius: 20px 10px 20px 20px !important;
}
.css-gcermr .css-roa2v7 > .css-o3n4io {
    background-color: rgb(255 255 255 / 80%) !important;
	border-radius: 10px 20px 20px !important;
}
.css-gcermr .css-4preuj > .css-o3n4io {
	background-color: rgb(255 255 255 / 80%) !important;
	border-radius: 20px 10px 20px 20px !important;
}
/* 对话框代码高亮 */
.css-1mqleeb div [data-code-type='highlighter'], .css-1mqleeb .ant-steps-item-description .css-1lumxev {
    background: #000 !important;
	border-radius: 20px !important;
	box-shadow: 0 0 0 1px #333 !important;
	border: 1px solid transparent !important;
}
.css-gcermr div [data-code-type='highlighter'], .css-gcermr .ant-steps-item-description .css-1lumxev {
    background: #fff !important;
	border-radius: 20px !important;
	box-shadow: 0 0 0 1px #00000000;
	border: 1px solid transparent !important;
}
.css-1mqleeb div [data-code-type='highlighter']:hover {
    background: none !important;
}
.css-gcermr div [data-code-type='highlighter']:hover {
    background: #fff !important;
}
.css-1mqleeb div [data-code-type='highlighter'] > div:nth-child(1) {
	background: #222 !important;
}
.css-gcermr div [data-code-type='highlighter'] > div:nth-child(1) {
    background: #333 !important;
}
.css-1mqleeb div [data-code-type='highlighter'] > div:nth-child(1):hover {
	background: #333 !important;
}
.css-gcermr div [data-code-type='highlighter'] > div:nth-child(1):hover {
    background: #79008d !important;
}
.css-1mqleeb div [data-code-type='highlighter'] > div:nth-child(1) > div:nth-child(3):hover {
	background: #79008d !important;
}
.css-gcermr div [data-code-type='highlighter'] > div:nth-child(1) > div:nth-child(3):hover {
    background: #99e640 !important;
}

.ant-steps.ant-steps-vertical > .ant-steps-item .ant-steps-item-content {
    overflow: inherit !important;
    margin-left: 40px !important;
}
/* 对话框旁边小按钮 */
div[role='menubar'] > div {
    border-radius: 10px !important;
}
/* 对话框警告 */
.ant-alert-warning {
    border-radius: 20px !important;
    border: 0 !important;
}
.css-gcermr .ant-alert-warning {
	background: rgb(255 87 34 / 20%) !important;
}
    
/* 对话框重新编辑对话 */
.css-1mqleeb .acss-v66yhe {
    border: 0 !important;
    border-radius: 20px !important;
    background: #333 !important;
    padding: 12px !important;
}
.css-gcermr .acss-xfb8ma {
    border: 0 !important;
    border-radius: 20px !important;
    background: #f1f1f1 !important;
    padding: 12px !important;
}
/* 对话框插件 */
.acss-y5mm5q, .acss-45pdy5 {
	border-radius: 20px !important;
}
.acss-5eke9d, .acss-3zi5f8 {
	border-radius: 20px !important;
    background: #fff !important;
}
/* 提示输入key对话框 */
.acss-mar5is {
    padding: 10px !important;
	border-radius: 0 !important;
}
.acss-mar5is .ant-alert-warning+div {
    background: none !important;
    border-radius: 20px !important;
}
.css-gcermr .ant-input-outlined {
    border: 3px solid #efefef !important;
}

/* 输入框上方使用按钮 */
.css-1a5hs83.acss-18qdyno > div:last-child {
    padding-inline: 8px 10.6px !important;
    border-radius: 10px !important;	
}
.css-1mqleeb .css-1a5hs83.acss-18qdyno > div:last-child {
    background: #161616 !important;
}
.css-gcermr .css-1a5hs83.acss-18qdyno > div:last-child {
    background: #fff !important;
}
/* 输入框上方插件按钮 */
ul.ant-dropdown-menu-item-group-list li span.ant-dropdown-menu-item-icon {
    margin-inline-end: 0 !important;
    margin-left: 10px !important;
}
/* 发送消息按钮 */
.css-1dbbase {
    padding: 0 16px !important;
}
.css-1mqleeb button.ant-btn {
    background: #79008d !important;
    color: #fff !important;
}
.css-gcermr button.ant-btn {
    color: rgb(255 255 255) !important;
    background: #a200bd !important;
}
.ant-space-compact > button:nth-child(1) {
    border-radius: 10px 0 0 10px !important;
}
.ant-space-compact > button:nth-child(2) {
    border-radius: 0 10px 10px 0 !important;
}
.ant-space-compact button:nth-child(1):hover, .ant-space-compact button:nth-child(2):hover {
    background: #ff5722 !important;
	Color: #fff !important;
}
/* 标题栏模型按钮 */
.ant-dropdown-trigger > span.ant-tag-borderless {
    background: #79008d !important;
    border-radius: 6px !important;
    padding: 2px 5px !important;
}
.css-1mqleeb .ant-dropdown-trigger > span.ant-tag-borderless {
    background: #79008d !important;
}
.css-gcermr .ant-dropdown-trigger > span.ant-tag-borderless {
    color: rgb(255, 255, 255) !important;
    background: rgb(162 0 189) !important;
}
.ant-dropdown-trigger > span.ant-tag-borderless:hover {
    background: #FF5722 !important;
    color: #fff !important;
}
/* 搜索框 */
.css-1mqleeb .acss-cp5vt4 .ant-input-affix-wrapper {
    border: 0 !important;
	box-shadow: #333 0px 0px 0px 1px !important;
}
.css-gcermr .acss-cp5vt4 .ant-input-affix-wrapper {
    border: 0 !important;
	/* box-shadow: #eee 0px 0px 0px 1px !important; */
    background: rgb(255 255 255 / 30%);
}
.css-gcermr .acss-cp5vt4 .ant-input-affix-wrapper input::placeholder {
    color: #eee !important;
}
.acss-cp5vt4 .ant-tag-borderless {
    background: none !important;
	backdrop-filter: none !important;
}
/* 发现页搜索框 */
/* .css-gcermr #lobe-market-container .acss-cp5vt4 .ant-input-affix-wrapper {
    border: 0 !important;
    background: rgb(255 255 255 / 60%);
}
.css-gcermr #lobe-market-container .acss-cp5vt4 .ant-input-affix-wrapper input::placeholder {
    color: #333 !important;
} */

/* 发现页背景色 */
.css-1mqleeb > .css-5m4etf > .css-1chk9wg {
	background: #222 !important;
}
.css-gcermr > .css-5m4etf > .css-1chk9wg {
	background: rgba(241, 241, 241, 0.7) !important;
}


/* 发现页标题栏 */
.css-1mqleeb .css-1chk9wg > div:nth-child(1), .css-1mqleeb .css-1chk9wg > div:nth-child(2) {
	background: #222 !important;
}
.css-gcermr .css-1chk9wg > div:nth-child(1), .css-gcermr .css-1chk9wg > div:nth-child(2) {
	background: none !important;
	border-bottom: 0 !important;
}
.css-1chk9wg > div:nth-child(2) {
	padding-block: 12px !important;
}
.css-1109xs8 {
    gap: 10px !important;
}
a[href*="/discover"] > button.ant-btn {
	background: rgb(150 0 51) !important;
}
a[href*="/discover"] > button.ant-btn:hover {
    background: #000 !important;
}
/* 发现页hellogpt logo */
/* #lobe-market-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
	position: relative;
}
#lobe-market-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)::before {
	content: "HelloGPT";
    position: absolute;
    top: 1px;
    left: 0px;
    font-size: 1.6em;
    font-weight: 700;
}
.css-1mqleeb #lobe-market-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)::before {
    color: #fff;
}
.css-gcermr #lobe-market-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)::before {
    color: #111;
}
#lobe-market-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:first-child {
    opacity: 0;
	width: 86px;
} */
a[href="/discover"] > div > svg {
	display: none;
}

/* 发现页返回按钮 */
.css-1mqleeb .acss-1epafm > div {
	background: #111 !important;
    padding: 10px !important;
    border-radius: 10px !important;
    color: #fff !important;
}
.css-gcermr .acss-1uzkl3c > div {
	background: #fff !important;
    padding: 10px !important;
    border-radius: 10px !important;
    color: #000 !important;
}
/* 发现页模型参数 */
.css-1mqleeb .ant-collapse-icon-position-end > .ant-collapse-item {
    background: #111 !important;
}
.css-gcermr .ant-collapse-icon-position-end > .ant-collapse-item {
    background: #fff !important;
}
/* 发现页相关模型 */
.css-1mqleeb .acss-1mdq5sb {
    background: #111 !important;
    padding: 10px !important;
    border-radius: 20px !important;
    color: #fff !important;
}
.css-gcermr .acss-1mdq5sb {
    background: #fff !important;
    padding: 10px !important;
    border-radius: 20px !important;
    color: #000 !important;
}
/* 助手页分类按钮 */
/* .css-vwb4od {
    justify-content: center;
    margin-top: 10px;
}
.css-vwb4od > button {
    display: flex;
    align-items: flex-end;
} */
/* 助手页助手卡片 */
.css-1mqleeb #lobe-market-container .css-15l7r2q .css-fj3h1o {
    background: #161616 !important;
	box-shadow: none !important;
}
.css-gcermr #lobe-market-container .css-15l7r2q .css-fj3h1o {
    background: #fff !important;
	box-shadow: none !important;
}




/* 提示按钮 */
.ant-tooltip-content .ant-tooltip-inner {
    border-radius: 20px !important;
    background: #000000 !important;
    color: #fff !important;
    padding: 15px !important;
}
/* 浮窗 */
ul.ant-dropdown-menu, .ant-modal-content, .ant-popover-inner, .ant-menu-submenu-popup, .ant-menu-submenu-popup > .ant-menu, .css-fj3h1o {
    border-radius: 20px !important;
}
.css-1jcj4zo .ant-modal-content {
    background: #161616 !important;
}
.css-su7n0e .ant-modal-content {
    background: #fff !important;
}
.ant-modal-header {
    background: none !important;
}

/* 弹出框li */
li, .ant-menu-submenu-title {
    border-radius: 10px !important;
    margin-block: 4px !important;
}
.css-1mqleeb li.ant-dropdown-menu-item-only-child:hover, .css-1mqleeb li.ant-dropdown-menu-item-active {
    background: #161616 !important;
}
.css-gcermr li.ant-dropdown-menu-item-only-child:hover, .css-gcermr li.ant-dropdown-menu-item-active {
    /* background: #FFEB3B !important; */
	background: rgba(0, 0, 0, 0.2) !important;
}
li.ant-dropdown-menu-item-group:hover {
    background: none !important;
}

/* 拖拉条颜色 */
div > .draggable-panel-top-handle:hover::before, div > .draggable-panel-top-handle:active::before, div > .draggable-panel-right-handle:hover::before, div > .draggable-panel-right-handle:active::before, div > .draggable-panel-left-handle:hover::before, div > .draggable-panel-left-handle:active::before {
    background: #99e640 !important;
}
.css-gcermr .draggable-panel-toggle > div {
    background: rgba(6, 147, 227, 0.6) !important;
	border: 0 !important;
	color: #fff !important;
}
.css-gcermr .draggable-panel-toggle > div:hover {
    background: rgba(6, 147, 227, 1) !important;
}

/* 删除 */
a[href="https://github.com/lobehub/lobe-chat"] {
  display: none !important;
}
.layoutkit-flexbox.css-fr78qt a:last-child {
	display: none !important;
}
form:first-child > div > div > .ant-collapse-content > div > .acss-spwjzp:nth-child(n+9), form:first-child > div > div > .ant-collapse-content > div > .ant-divider-horizontal:nth-child(n+7) {
	display: none !important;
}
#lobe-market-container .acss-1jn2ou {
    display: none !important;
}
li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="about"], .css-rq7h3k {
    display: none !important;
}
li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="setting"] .css-5wokcq {
    display: none !important;
}
.css-54fgub.acss-1g4myfy > .css-1109xs8 > div:nth-child(1), div[aria-label="助手"] {
	display: none !important;
}
/* 插件商店 */
/* .css-1a5hs83.acss-18qdyno > div:nth-last-child(2) {
    display: none;
} */
/* .HelloGPT + .css-1chk9wg > div > div:first-child {
    display: none;
} */
/* 删除安装浏览器应用（PWA） */
#pwa-install {
    display: none !important;
}
/* 欢迎页面删除 */
body > div:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) > div:last-child {
    display: none !important;
}
body > div:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) > svg {
    display: none !important;
}
/* 删除侧栏按钮 */
body > div > .css-5m4etf > div:nth-child(1) > div:nth-child(2) {
    display: none !important;
}
body > div > .css-5m4etf > div:nth-child(1) a[href="/files"] {
    display: none !important;
}
/* 设置按钮位置 */
body > div > .css-5m4etf > .css-2tx0mv > div:nth-child(1) > div:nth-child(1) {
    position: absolute;
    bottom: 20px;
}
body > div > .css-5m4etf > .css-2tx0mv > div:nth-child(1) > span:nth-child(1) {
    position: absolute;
    bottom: 20px;
}
/* 设置按钮下的东西 */
body > div > .ant-popover-placement-topLeft {
    bottom: 115px !important;
    left: 15px !important;
    top: auto !important;
}
.css-1c3ae09, .css-1l27i49 {
    border-radius: 10px !important;
}
/* 删除设置按钮下的东西 */
/* .css-1mcrjnz div:last-child {
	display: none !important;
} */
.ant-popover-placement-topLeft ul > li:nth-last-child(-n+3), .ant-popover-placement-topLeft ul > li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="pwa"], .ant-popover-placement-topLeft ul > li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="pwa"] + li {
	display: none !important;
}
.css-1u84j5a > .css-b2xo4 {
	display: none !important;
}

/* 欢迎页面背景色 */
body > .css-1mqleeb:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) {
	background: #222 !important;
}
body > .css-gcermr:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) {
	background: rgba(241, 241, 241, 0.8) !important;
}
/* 欢迎页面logo */
body > div:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) > div:nth-child(2) h1 {
    position: relative;
}
body > div:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) > div:nth-child(2) h1::before {
    content: 'HelloGPT 给自己一个更聪明的大脑';
    position: absolute;
    top: -3px;
    left: 0px;
    right: -6px;
    font-size: 56px;
    font-weight: 700;
	line-height: 68px;
}
body > div:nth-child(1) > div:nth-child(2) > .css-zlqreh:nth-child(2) > div:nth-child(2) h1 * {
	opacity: 0;
}
/* 设置页面背景色 */
.css-1f4goe4, .css-qx52nb {
    background: none !important;
}
/* 浮动窗口时背景虚化颜色 */
.ant-modal-root .ant-modal-mask {
    background-color: rgb(0 0 0 / 60%) !important;
}
/* 分享 */
.css-1ktd0ak .acss-jum9ke, .css-1ktd0ak .acss-1o7bqrh, .css-1ktd0ak #preview > .css-1ktd0ak {
    border: 0 !important;
    border-radius: 20px !important;
}
.css-1ktd0ak .ant-form-horizontal > .css-o3n4io {
    border-radius: 20px !important;
	background: none !important;
}
/* 设置里的选项卡背景色 */
.css-1mqleeb > .ant-collapse-icon-position-start, .css-1riig1l > .ant-collapse-icon-position-start {
	background: rgba(255, 255, 255, 0.02) !important;
}
.css-gcermr > .ant-collapse-icon-position-start, .css-13t98m0 > .ant-collapse-icon-position-start {
	background: rgb(0 0 0 / 3%) !important;
}
.css-1mqleeb > .ant-collapse-icon-position-start > div > .ant-collapse-header, .css-1riig1l > .ant-collapse-icon-position-start > div > .ant-collapse-header {
    background: rgba(255, 255, 255, 0.06) !important;
}
.css-gcermr > .ant-collapse-icon-position-start > div > .ant-collapse-header, .css-13t98m0 > .ant-collapse-icon-position-start > div > .ant-collapse-header {
    background: rgb(0 0 0 / 20%) !important;
}
/* 20度圆角 */
.acss-1ekhile, .acss-1ekhile, .acss-6232qe, .acss-1eawumc >img, .acss-1eawumc >p>img, .acss-1pl2bw2, .acss-1dbp3k8 {
    border-radius: 20px !important;
    border: 0 !important;
	box-shadow: none !important;
}

.acss-ruwufa, .acss-u67vty .ant-collapse-item, .acss-5wbwlx, .acss-fkrcv4 >img, .acss-fkrcv4 >p>img, .acss-1yrlgve, .acss-1x0ghxe, .acss-joqh6d, .acss-1dealxx, .acss-1cviiyk, .ant-collapse-icon-position-end > .ant-collapse-item {
    border-radius: 20px !important;
    border: 0 !important;
	box-shadow: none !important;
}
/* 其他 */
.css-1f4goe4 {
    padding-block: 40px !important;
    padding-inline: 40px !important;
}
.ant-collapse-icon-position-start {
    border-radius: 20px !important;
}
.ant-collapse-icon-position-start > div > .ant-collapse-header {
	border-radius: 0 !important;
    padding-block: 12px !important;
    padding-inline: 16px !important;
}
.ant-collapse-icon-position-start > div > .ant-collapse-content {
	background: none !important;
}
.ant-collapse-icon-position-start > div > div > .ant-collapse-content-box {
    padding-inline: 20px !important;
}




/* HelloGPT */
.HelloGPT {
    z-index: 20;
    margin: 0px auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: calc(100% - 0px);
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    height: 56px;
    line-height: 56px;
}
.HelloGPT > div {
    position: absolute;
    inset: 0px 9px;
    z-index: -1;
}
.HelloGPT h1 {
	margin: 0;
    width: 138px;
    text-align: center;
    position: relative;
    left: 73px;
}
.HelloGPT h1 img {
    width: 138px;
}
.HelloGPT h1::before {
    content: "";
    background: rgb(0, 0, 0);
    position: absolute;
	inset: 12px -14px 10px;
    margin: 0px;
    z-index: -1;
}
.HelloGPT h1::after {
    content: "";
    background: rgb(0, 0, 0);
    position: absolute;
    inset: 8px -10px 6px;
    z-index: -1;
}
.HelloGPT ul {
    list-style: none;
    padding: 0;
    margin: 0;
	margin-right: 10px;
}
.HelloGPT li {
    float: left;
    position: relative;
	margin: 0 -3px;
}
.HelloGPT li a {
    padding: 4px 12px;
    display: grid;
    align-items: center;
    justify-content: center;
	font-size: 16px;
	transition: none !important;
}
.HelloGPT li::before {
    content: "";
    position: absolute;
	inset: 16px 4px;
    opacity: 0;
    z-index: -1;
    background: #79008d;
}
.HelloGPT li::after {
    content: "";
    position: absolute;
    inset: 13px 7px;
    opacity: 0;
    z-index: -1;
    background: #79008d;
}
.HelloGPT li:hover::after, .HelloGPT li:hover::before {
    opacity: 1;
}

/* HelloGPT黑 */
.css-1mqleeb .HelloGPT {
	background: #222;
}
.css-1mqleeb .HelloGPT > div {
	border-bottom: 1px solid #333;
}
.css-1mqleeb .HelloGPT li a {
    color: #fff;
}
.css-1mqleeb .HelloGPT li:hover::after, .css-1mqleeb .HelloGPT li:hover::before {
    background: #000;
}
.css-1mqleeb .HelloGPT li:hover a {
    color: #fff;
}

/* HelloGPT白 */
.css-gcermr .HelloGPT {
    background: rgba(6, 147, 227, 0.8) !important;
}
.css-gcermr .HelloGPT > div {
	border-bottom: 1px solid #333;
}
.css-gcermr .HelloGPT li a {
    color: #fff;
}
.css-gcermr .HelloGPT li:hover::after, .css-gcermr .HelloGPT li:hover::before {
    background: #000;
}
.css-gcermr .HelloGPT li:hover a {
    color: #fff;
}

/* body > .css-gcermr > .HelloGPT, body > .css-gcermr > .HelloGPT::before, body > .css-gcermr > .HelloGPT::after {
    background: rgba(6, 147, 227, 0.8) !important;
} */

/* 造型切割 */
.HelloGPT::before, .HelloGPT::after, .HelloGPT > div::before, .HelloGPT > div::after, .HelloGPT > div > div::before, .HelloGPT > div > div::after, body > div:first-child > .css-5m4etf > div:first-child::after, body > div:first-child > .css-5m4etf > .css-5m4etf > aside::after,body > div:first-child > .css-5m4etf > div:nth-child(2)::after {
    content: "";
    position: absolute;
    z-index: 9999;
    width: 9px;
    height: 9px;
    background: url(https://dl.cmdpe.com/HelloGPT/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

.HelloGPT > div::before, .HelloGPT > div::after {
	height: 3px;
}
.HelloGPT::before, .HelloGPT > div::before {
    top: 0;
    left: 0;
}
body > div:first-child > .css-5m4etf > div:first-child::after {
    bottom: 0;
    left: 0;
}
.HelloGPT::after, .HelloGPT > div::after {
	top: 0;
	right: 0;
}
body > div:first-child > .css-5m4etf > div:nth-child(2)::after, body > div:first-child > .css-5m4etf > .css-5m4etf > aside::after {
	bottom: 0;
	right: 0;
}
.HelloGPT > div > div::before {
	left: -9px;
	bottom: -9px;
}
.HelloGPT > div > div::after {
	right: -9px;
	bottom: -9px;
}



@media only screen and (max-width: 1341px) {
/* 	body > div {
		zoom: 80%;
	} */
}
@media (max-width: 1365px) {
	body {
		margin-left: 10px !important;
		padding-right: 10px !important;
	}
	body > div > .css-5m4etf {
		height: calc(100% - 80px) !important;
	}
	.draggable-panel-toggle-right, .draggable-panel-toggle-left {
		opacity: 1 !important;
	}
	.draggable-panel-toggle-right > div {
		width: 26px !important;
		left: 0 !important;
		background: #79008d !important;
	}
	.draggable-panel-toggle-left > div {
		width: 26px !important;
		right: 0 !important;
		background: #79008d !important;
	}	
	.css-gcermr .draggable-panel-toggle-right > div {
		width: 26px !important;
		left: 0 !important;
		background: #99e640 !important;
	}
	.css-gcermr .draggable-panel-toggle-left > div {
		width: 26px !important;
		right: 0 !important;
		background: #99e640 !important;
	}		
}

@media (max-width: 991px) {
	.HelloGPT h1 {
		left: 36px;
	}
}
@media (max-width: 575px) {
/*     *:hover {
        color: inherit !important;
		background: inherit !important;
        background-color: inherit !important;
        border-color: inherit !important;
    } */
    body {
        margin-left: 5px !important;
        padding-right: 5px !important;
    }
	body>div:nth-child(1)::after {
		content: "";
		position: absolute;
		top: 15px;
		bottom: 10px;
		left: 0px;
		right: 0px;
		z-index: 0;
		filter: blur(10px);
		background: url(https://dl.cmdpe.com/HelloGPT/background.jpg) 0% 0% / cover no-repeat fixed;
	}
	
	
    body > .ant-app > .css-1chk9wg, body > .ant-app > .css-tks1yl {
        height: calc(100% - 110px) !important;
		overflow: inherit !important;
		z-index: 9;
    }
    body > .css-1mqleeb > .css-1chk9wg, body > .ant-app > .css-tks1yl {
		background: #000 !important;
    }
    body > .css-gcermr > .css-1chk9wg, body > .ant-app > .css-tks1yl {
		background: rgba(241, 241, 241, 0.8) !important;
    }
	body > .css-gcermr > .css-1chk9wg::after {
		opacity: 0;
	}
	.css-1mqleeb .ant-collapse-ghost.ant-collapse-small > div > .ant-collapse-header {
		background: rgba(255, 255, 255, 0.06) !important;
	}
	.css-gcermr .ant-collapse-ghost.ant-collapse-small > div > .ant-collapse-header {
		background: #fff !important;
	}
	.LazyLoad.is-visible > a > div:first-child, .LazyLoad.is-visible > a > div:first-child::before, a:has(+ .ant-collapse-icon-position-end) > div, a:has(+ .ant-collapse-icon-position-end) > div::before {
		border-radius: 20px !important;
		margin: 10px 0 !important;
	}
	.css-gcermr .LazyLoad.is-visible > a > div:first-child, .css-gcermr .LazyLoad.is-visible > a > div:first-child::before, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div::before {
		background: #ffffff !important;
	}
	.css-1mqleeb .LazyLoad.is-visible>a>div:first-child, .css-1mqleeb .LazyLoad.is-visible>a>div:first-child::before, .css-1mqleeb a:has(+ .ant-collapse-icon-position-end)>div, .css-1mqleeb a:has(+ .ant-collapse-icon-position-end)>div::before {
		background: #161616 !important;
	}
	.css-gcermr .LazyLoad.is-visible > a > div:first-child:hover, .css-gcermr .LazyLoad.is-visible > a > div:first-child:hover::before, .css-gcermr .LazyLoad.is-visible > a > .acss-1ua72wq, .css-gcermr .LazyLoad.is-visible > a > .acss-1ua72wq::before {
		background: rgba(252, 185, 0, 1) !important;
	}
	.css-gcermr a:has(+ .ant-collapse-icon-position-end) > div:hover, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > div:hover::before, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > .acss-1ua72wq, .css-gcermr a:has(+ .ant-collapse-icon-position-end) > .acss-1ua72wq::before {
		background: rgba(252, 185, 0, 1) !important;
	}


	.HelloGPT {
		width: calc(100% - 0px);
		height: 50px;
		line-height: 50px;
	}
	.css-1mqleeb .HelloGPT {
		background: #000 !important;
	}
	.css-gcermr .HelloGPT {
		background: rgba(252, 185, 0, 0.8) !important;
	}	

    .HelloGPT h1 {
        left: 28px !important;
		width: 100px !important;
        height: 50px;
        line-height: 46px;
    }
    .css-1mqleeb .HelloGPT h1 {
        left: 10px !important;
    }
	.HelloGPT h1 img {
		width: 100px !important;
	}
	.HelloGPT li:nth-last-child(-n+2) {
		display: none !important;
	}
	.HelloGPT li a {
		font-size: 14px;
	}
	.HelloGPT > div {
		border-bottom: 0 !important;
	}
	
	.css-1mqleeb .HelloGPT h1::before, .css-1mqleeb .HelloGPT h1::after {
		opacity: 0;
	}
	body > .ant-app > .css-o3n4io {
        right: auto !important;
        left: auto !important;
        width: calc(100% - 0px) !important;
        bottom: 0px !important;
        overflow: inherit !important;
        position: relative !important;

	}
	body > .css-1mqleeb > .css-o3n4io {
		border-top: 1px solid #fafafa1f !important;
		background: #000 !important;
	}
	body > .css-gcermr > .css-o3n4io {
		border-top: 1px solid #0000001c !important;
		background: rgba(241, 241, 241, 0.6) !important;
	}
	body > .ant-app > .css-o3n4io > div > div > .acss-10a45gp {
		display: none !important;
	}	
	
	
	body > .ant-app > .css-1chk9wg > .css-o3n4io, body > .ant-app > .css-1chk9wg > .css-1chk9wg > .css-o3n4io {
		padding: 3px 0 !important;
		margin: 0 !important;
	}	
	body > .css-1mqleeb .css-1chk9wg > .css-o3n4io {
		border-bottom: 1px solid #fafafa1f !important;
	}	
	body > .css-gcermr .css-1chk9wg > .css-o3n4io {
		background: rgba(252, 185, 0, 0.8) !important;
	}
	body > .css-gcermr .css-1chk9wg>.css-o3n4io * {
		color: #fff !important;
	}
	body > .ant-app > .css-1chk9wg > .css-1chk9wg > .css-o3n4io .css-1lumxev svg {
		display: none !important;
	}	
	
	
	#lobe-mobile-scroll-container {
		padding: 10px 10px 0px 10px !important;

	}
	.css-1chk9wg:nth-child(3) > .css-1chk9wg > #lobe-mobile-scroll-container {
		display: flex;
        align-items: center;
	}
/* 	#lobe-mobile-scroll-container > .ant-collapse-icon-position-end * {
		color: #fff !important;
	} */
	
	body > .css-1mqleeb #lobe-mobile-scroll-container > .css-1qrrzv3, body > .css-1mqleeb #lobe-mobile-scroll-container > .css-1fhzdir {
		border-radius: 20px !important;
		background: #161616 !important;
		margin-bottom: 10px !important;
	}
	body > .css-gcermr #lobe-mobile-scroll-container > .css-1qrrzv3, body > .css-gcermr #lobe-mobile-scroll-container > .css-1fhzdir {
		border-radius: 20px !important;
		background: #fff !important;
		margin-bottom: 10px !important;
	}
	#lobe-mobile-scroll-container > .acss-la8zcw, #lobe-mobile-scroll-container > .acss-u1xl7d {
		height: 0 !important;
	}
	.css-1chk9wg:nth-child(2) > .css-1chk9wg #lobe-mobile-scroll-container > div:first-child {
		padding: 0 !important;
		display: none;
	}
	.css-1chk9wg:nth-child(3) > .css-1chk9wg > #lobe-mobile-scroll-container > div:first-child {
		padding: 0 !important;
		width: calc(100% + 20px);
	}
	#lobe-mobile-scroll-container .acss-cp5vt4 > .ant-input-affix-wrapper {
		border: 0 !important;
        display: inline-flex !important;
        align-content: center !important;
        justify-content: center !important;
        align-items: center !important;
		line-height: 36px !important;
	}	
	.css-1mqleeb #lobe-mobile-scroll-container .acss-cp5vt4 > .ant-input-affix-wrapper {
		background: #161616 !important;
	}
	.css-gcermr #lobe-mobile-scroll-container .acss-cp5vt4 > .ant-input-affix-wrapper {
		background: rgb(0 0 0 / 20%) !important;
	}
	a:has(+ .ant-collapse-icon-position-end) > div {
		margin-top: 0px !important;
		margin-bottom: 20px !important;
	}
	#lobe-mobile-scroll-container > .css-px56x0 {
		background: none !important;
		position: relative !important;
	}
    .css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0 {
        border-top: 1px solid #fafafa1f !important;
    }	
    .css-gcermr #lobe-mobile-scroll-container > .css-px56x0 {
        border-top: 1px solid #0000001c !important;
    }	
	.css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0::before, .css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0::after, body > .css-1mqleeb > .css-o3n4io::before, body > .css-1mqleeb > .css-o3n4io::after {
		content: "";
		position: absolute;
		z-index: 9999;
		width: 9px;
		height: 9px;
		background: #fff;
	}
	.css-gcermr #lobe-mobile-scroll-container > .css-px56x0::before, .css-gcermr #lobe-mobile-scroll-container > .css-px56x0::after, body > .css-gcermr > .css-o3n4io::before, body > .css-gcermr > .css-o3n4io::after {
		content: "";
		position: absolute;
		z-index: 9999;
		width: 9px;
		height: 9px;
		background: url(https://dl.cmdpe.com/HelloGPT/background.jpg);
		background-repeat: no-repeat;
		background-attachment: fixed;
		-webkit-background-size: cover;
		background-size: cover;
	}
	#lobe-mobile-scroll-container > .css-px56x0::before {
		top: 0px;
		left: -10px;
	}
	#lobe-mobile-scroll-container > .css-px56x0::after {
		top: 0px;
		right: -10px;
	}
	body > .ant-app > .css-o3n4io::before {
		bottom: 0px;
		left: 0px;
	}
	body > .ant-app > .css-o3n4io::after {
		bottom: 0px;
		right: 0px;
	}	
	
	#lobe-mobile-scroll-container > .css-px56x0 > div {
		width: 100% !important;
	}
	#lobe-mobile-scroll-container > .css-px56x0 > div > div {
		padding-inline: inherit !important;
	}
	
	.css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > div:first-child {
		background: #222 !important;
	}
	.css-gcermr	#lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > div:first-child {
		background: #eee !important;
	}	
	.css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > .ant-input-outlined {
		height: 36px !important;
		background: #222 !important;
	}
	.css-gcermr #lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > .ant-input-outlined {
		height: 36px !important;
		background: #eee !important;
	}
	.css-1mqleeb #lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > div:last-child {
		background: #79008d !important;
		color: #fff !important;
	}
	.css-gcermr	#lobe-mobile-scroll-container > .css-px56x0 > div:last-child > div > div:last-child {
		background: #99e640 !important;
		color: #000 !important;
	}
	.css-1mqleeb #lobe-mobile-scroll-container .ant-form-horizontal > .css-o3n4io {
		background: #222222;
		margin-bottom: 10px;
		border-radius: 20px;
	}
	.css-gcermr	#lobe-mobile-scroll-container .ant-form-horizontal > .css-o3n4io {
		background: rgba(241, 241, 241, 0.6) !important;
		margin-bottom: 10px;
		border-radius: 20px;
	}
	.css-1mqleeb #lobe-mobile-scroll-container .ant-form-horizontal > .css-o3n4io > div:first-child {
		border-bottom: 1px solid #fafafa1f !important;
	}
	.css-gcermr #lobe-mobile-scroll-container .ant-form-horizontal > .css-o3n4io > div:first-child {
		border-bottom: 1px solid #0000001c !important;
	}
	#lobe-mobile-scroll-container .ant-form-horizontal > .css-o3n4io > div {
		background: none !important;
	}
	.css-1mqleeb .ant-collapse-ghost.ant-collapse-small > div > .ant-collapse-header {
		background: #161616 !important;
	}
	.css-1mqleeb .ant-drawer-content-wrapper > .ant-drawer-content {
		background: #161616 !important;
		width: calc(100% - 10px) !important;
		margin: 0px 5px !important;
		border-radius: 20px 20px 0 0 !important;
	}
	.ant-drawer-content-wrapper {
		box-shadow: none !important;
	}
	.css-gcermr .ant-drawer-content-wrapper > .ant-drawer-content {
		background: #fff !important;
		width: calc(100% - 10px) !important;
		margin: 0px 5px !important;
		border-radius: 20px 20px 0 0 !important;
	}
	.css-1mqleeb #lobe-mobile-scroll-container .css-15l7r2q .css-fj3h1o {
		background: #161616 !important;
		box-shadow: none !important;
	}	
	.css-gcermr #lobe-mobile-scroll-container .css-15l7r2q .css-fj3h1o {
		background: #fff !important;
		box-shadow: none !important;
	}	
	.css-1mqleeb [data-testid="virtuoso-item-list"] > div > .css-1u84j5a:hover, .acss-1osp3tn {
		background: #222 !important;
	}
	.css-gcermr [data-testid="virtuoso-item-list"] > div > .css-1u84j5a:hover, .acss-1wyfodc {
		background: rgba(0, 0, 0, 0.06) !important;
	}
    div.acss-xqi55h {
        padding-block: 0px !important;
        padding-inline: 0px !important;
		justify-content: flex-start !important;
    }
    .acss-mg9xpl {
        font-size: 18px !important;
    }
	.css-1lumxev > div > .ant-tag {
		padding: 2px 8px !important;
		border-radius: 10px !important;
	}
	.ant-drawer-close {
		width: 36px !important;
		height: 36px !important;
	}
	.css-1mqleeb .ant-drawer-content-wrapper .ant-drawer-footer {
		border-top: 1px solid #fafafa1f;
	}
	.css-gcermr .ant-drawer-content-wrapper .ant-drawer-footer {
		border-top: 1px solid #0000001c;
	}
	body > div > .HelloGPT+div > h1 > strong {
		display: none;
	}		
	body > div > .HelloGPT+div > h1::before {
		content: 'HelloGPT';
		font-size: 30px;
		font-weight: 700;
	}	
	body > .css-gcermr > .HelloGPT+div > h1::before {
		color: #000;
	}	
	.ant-drawer .ant-drawer-mask {
		opacity: 0;
	}
	
	#lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(8), #lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(10), #lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(11), #lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(14), #lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(15), #lobe-mobile-scroll-container > .css-1qrrzv3:nth-child(16), #lobe-mobile-scroll-container > .css-h53c9y:last-child {
		display: none !important;
	}	

	#lobe-mobile-scroll-container > form:first-child > div > div:last-child > .acss-spwjzp:nth-child(n+9), #lobe-mobile-scroll-container > form:first-child > div > div:last-child > .ant-divider-horizontal:nth-child(n+7) {
		display: none !important;
	}
	.ant-tooltip-content .ant-tooltip-inner {
		display: none !important;
	}
	
	body > .ant-app > .css-tks1yl .ant-btn-block {
		width: 100% !important;
	}
	
/* 	.css-i80ya5 div[data-testid="virtuoso-scroller"] {
		margin-top: 0 !important;
	}	
	.css-i80ya5 div[data-testid="virtuoso-scroller"] > div {
		top: 0 !important;
	} */
	
	
}


`;
