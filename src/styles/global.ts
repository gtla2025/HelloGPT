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
.acss-396ofq,.acss-qmdfvd,.acss-1539fd4 {
    line-height: 1.2 !important;
}


html {
    background: black;
    display: flex;
}
body * {
	font-family: "JosefinSans", "hellogpt", "HarmonyOS Sans", "Segoe UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "HarmonyOS Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji" !important;
	text-shadow: 0.01em 0.01em 0.05em #666;
}
body {
    margin-left: 10%;
    padding-right: 10%;
	/* background: url(https://dl.cmdpe.com/HelloGPT/img0.jpg) center center / cover no-repeat fixed !important; */
}
body>.ant-app {
	justify-content: center;
    padding-bottom: 5px;
}
body>.css-tsw82g:nth-child(1)::before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: #111;
}
body>.css-1eamzbi:nth-child(1)::before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: #fff;
}
body>div>.css-5m4etf {
    height: calc(100% - 120px);
    position: relative !important;
    z-index: 9 !important;
	justify-content: center;
}
body>div>.css-5m4etf::after {
    content: "";
    position: absolute;
    top: -9px;
    bottom: -9px;
    left: 9px;
    right: 9px;
    z-index: -1;
}
.css-1eamzbi>.css-5m4etf,.css-1eamzbi>.css-5m4etf::after {
    background: #222;
}
.css-tsw82g>.css-5m4etf,.css-tsw82g>.css-5m4etf::after {
    background: #fff;
}

body>div>.css-5m4etf>div:first-child {
    min-height: auto !important;
}
.css-5m4etf>.css-5m4etf {
	overflow: initial !important;
}
body>.css-1eamzbi>.css-5m4etf>div:first-child,body>.css-1eamzbi>.css-5m4etf>.css-5m4etf aside,body>.css-1eamzbi>.css-5m4etf>.css-5m4etf>div>div,body>.css-1eamzbi #lobe-market-container>div:nth-child(1),body>.css-1eamzbi #lobe-market-container>div:nth-child(2)>aside,body>.css-1eamzbi>.HelloGPT,body>.css-1eamzbi>.HelloGPT::before,body>.css-1eamzbi>.HelloGPT::after {
    background: #222 !important;
}
body>.css-tsw82g>.css-5m4etf>div:first-child,body>.css-tsw82g>.css-5m4etf>.css-5m4etf aside,body>.css-tsw82g>.css-5m4etf>.css-5m4etf>div>div,body>.css-tsw82g #lobe-market-container>div:nth-child(1),body>.css-tsw82g #lobe-market-container>div:nth-child(2)>aside,body>.css-tsw82g>.HelloGPT,body>.css-tsw82g>.HelloGPT::before,body>.css-tsw82g>.HelloGPT::after {
    background: #fff !important;
}


.acss-rlur1a {
    box-shadow: none !important;
}
.css-1eamzbi a:hover,.css-1eamzbi button:hover {
    color: #fff !important;
}
/* 对话页与设置页切割造型 */
.css-5m4etf>aside::before,.css-5m4etf>aside::after,.css-5m4etf>div:nth-child(2)::before,.css-5m4etf>div:nth-child(2)::after {
    content: '';
    position: absolute;
    right: 0;
    width: 9px;
    height: 9px;
}
.css-5m4etf>aside::before,.css-5m4etf>div:nth-child(2)::before {
    top: -9px;
}
.css-5m4etf>aside::after,.css-5m4etf>div:nth-child(2)::after {
    bottom: -9px;
}
.css-1eamzbi .css-5m4etf>aside::before,.css-1eamzbi .css-5m4etf>aside::after,.css-1eamzbi .css-5m4etf>div:nth-child(2)::before,.css-1eamzbi .css-5m4etf>div:nth-child(2)::after {
    background: #fff !important;
}
.css-tsw82g .css-5m4etf>aside::before,.css-tsw82g .css-5m4etf>aside::after,.css-tsw82g .css-5m4etf>div:nth-child(2)::before,.css-tsw82g .css-5m4etf>div:nth-child(2)::after {
    background: #000 !important;
}

/* 对话页对话选项卡 */
.LazyLoad.is-visible>a>div:first-child,a[href="/chat?session=inbox"]>div {
	margin: 20px 0;
    height: 70px;
    border-radius: 0;
	transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
a[href="/chat?session=inbox"]>div {
	margin-top: 0 !important;
}
.LazyLoad.is-visible>a>div:first-child::before,a[href="/chat?session=inbox"]>div::before {
    content: "";
    position: absolute;
    top: -6px;
    bottom: -6px;
    left: 6px;
    right: 6px;
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.css-1eamzbi .LazyLoad.is-visible>a>div:first-child,.css-1eamzbi .LazyLoad.is-visible>a>div:first-child::before,.css-1eamzbi a[href="/chat?session=inbox"]>div,.css-1eamzbi a[href="/chat?session=inbox"]>div::before {
    background: #161616;
}
.css-tsw82g .LazyLoad.is-visible>a>div:first-child,.css-tsw82g .LazyLoad.is-visible>a>div:first-child::before,.css-tsw82g a[href="/chat?session=inbox"]>div,.css-tsw82g a[href="/chat?session=inbox"]>div::before {
    background: #f1f1f1;
}
.css-1eamzbi .LazyLoad.is-visible>a>div:first-child:hover,.css-1eamzbi .LazyLoad.is-visible>a>div:first-child:hover::before,.css-1eamzbi .LazyLoad.is-visible>a>.acss-14juscs,.css-1eamzbi .LazyLoad.is-visible>a>.acss-14juscs::before {
    background: #79008d !important;
}
.css-tsw82g .LazyLoad.is-visible>a>div:first-child:hover,.css-tsw82g .LazyLoad.is-visible>a>div:first-child:hover::before,.css-tsw82g .LazyLoad.is-visible>a>.acss-1ua72wq,.css-tsw82g .LazyLoad.is-visible>a>.acss-1ua72wq::before {
    background: #99e640 !important;
}
.css-1eamzbi a[href="/chat?session=inbox"]>div:hover,.css-1eamzbi a[href="/chat?session=inbox"]>div:hover::before,.css-1eamzbi a[href="/chat?session=inbox"]>.acss-14juscs,.css-1eamzbi a[href="/chat?session=inbox"]>.acss-14juscs::before {
    background: #79008d !important;
}
.css-tsw82g a[href="/chat?session=inbox"]>div:hover,.css-tsw82g a[href="/chat?session=inbox"]>div:hover::before,.css-tsw82g a[href="/chat?session=inbox"]>.acss-1ua72wq,.css-tsw82g a[href="/chat?session=inbox"]>.acss-1ua72wq::before {
    background: #99e640 !important;
}
.LazyLoad.is-visible>a>div:first-child .acss-1hsh9br:hover {
    color: #fff !important;
    background: #333 !important;
}
.LazyLoad.is-visible>a>div:first-child .acss-1rzhzi1:hover {
    color: #000 !important;
    background: #eee !important;
}
.css-1eamzbi .LazyLoad.is-visible>a>div:first-child>div:last-child {
    z-index: 1 !important;
	color: #666 !important;
}
.css-tsw82g .LazyLoad.is-visible>a>div:first-child>div:last-child {
    z-index: 1 !important;
	color: #bbb !important;
}
.css-1eamzbi .LazyLoad.is-visible>a>div:first-child>div>div {
    color: #bbb !important;
}
.css-tsw82g .LazyLoad.is-visible>a>div:first-child>div>div {
    color: #999 !important;
}
.css-1eamzbi .ant-collapse-ghost.ant-collapse-small>div>.ant-collapse-header {
    border-radius: 10px !important;
    background: rgba(255, 255, 255, 0.06) !important;
}
.css-tsw82g .ant-collapse-ghost.ant-collapse-small>div>.ant-collapse-header {
    border-radius: 10px !important;
    background: #f1f1f1 !important;
}
.css-fr78qt {
    gap: 5px !important;
}
/* 跳转至当前按钮 */
.css-i80ya5>button {
	border-radius: 10px !important;
}
.css-i80ya5>button>span:first-child {
	margin: 0 !important;
}
.css-i80ya5>button>span:last-child {
	display: none !important;
}
.css-i80ya5>button:hover {
    background: #FF5722 !important;
}
/* 主页hellogpt logo */
.css-9tjxg1.acss-lo0bkt>.layoutkit-flexbox::before {
    content: "HelloGPT";
    position: absolute;
    top: 18px;
    left: 16px;
    right: 0px;
    font-size: 20px;
    font-weight: 700;
	opacity: 0;
}
.css-1eamzbi .css-9tjxg1.acss-lo0bkt>.layoutkit-flexbox::before {
    background: #222;
	color: #fff;
}
.css-tsw82g .css-9tjxg1.acss-lo0bkt>.layoutkit-flexbox::before {
    background: #fff;
	color: #000;
}
.css-9tjxg1.acss-lo0bkt>.layoutkit-flexbox>div:first-child>svg:first-child {
    display: none !important;
}
/* 主页同步按钮 */
.css-1109xs8>div>.ant-tag {
    padding: 3px 10px;
    border-radius: 10px;
}
.css-1eamzbi .css-1109xs8>div>.ant-tag {
    background: #111;
}
.css-tsw82g .css-1109xs8>div>.ant-tag {
    background: #f1f1f1;
}
/* 按钮样式 */
.css-5wokcq,.ant-modal-close,button,.ant-select-selector,.ant-input-number,.ant-input-affix-wrapper,.ant-input-outlined,.ant-input-password,.ant-select-selection-item,.ant-segmented,.ant-segmented-item,.ant-dropdown-menu-submenu-title {
    border-radius: 10px !important;
	border: 0!important;
}
.css-1eamzbi .css-5wokcq:hover {
    color: #fff !important;
    background: #444 !important;
}
.css-tsw82g .css-5wokcq:hover {
    color: #000 !important;
    background: #FFEB3B !important;
}
.ant-btn-primary:not(:disabled),.ant-btn-default:not(:disabled) {
    background: #cc0046 !important;
    color: #fff !important;
	box-shadow: none !important;
}
.ant-btn-primary:not(:disabled):hover,.ant-btn-default:not(:disabled):hover {
    background: #ff3d00 !important;
    color: #fff !important;
}
.ant-btn-block {
    width: auto !important;
}
.css-px56x0,.css-e7rmh7 {
    align-items: center !important;
}
/* 新建助手按钮+左侧栏按钮激活颜色 */
.css-1eamzbi .css-9tjxg1 .css-5wokcq:hover,.css-1eamzbi .css-zcfm67 .css-5wokcq:hover,.css-zcfm67 .acss-i3padr {
    background: #79008d !important;
}
.css-tsw82g .css-9tjxg1 .css-5wokcq:hover,.css-tsw82g .css-zcfm67 .css-5wokcq:hover,.css-zcfm67 .acss-wpp9jw {
    background: #99e640 !important;
}
/* 右侧栏话题列表 */
aside .css-1u84j5a {
    margin: 5px 8px !important;
    border-radius: 10px !important;
    height: 40px !important;
}
.css-1eamzbi aside .css-1u84j5a:hover,.acss-1osp3tn {
    background: #161616 !important;
}
.css-tsw82g aside .css-1u84j5a:hover,.acss-1wyfodc {
    background: rgba(0, 0, 0, 0.06) !important;
}
/* 对话框背景色 */
.css-1eamzbi .acss-1fr3od3>.css-o3n4io {
    background-color: #161616 !important;
}
.css-tsw82g .acss-1fr3od3>.css-o3n4io {
    background-color: #f1f1f1 !important;
}
/* 对话框背圆角 */
.acss-1fr3od3>.acss-12mj41h {
    border-radius: 10px 20px 20px !important;
}
.css-roa2v7>.acss-9nl0uq {
    border-radius: 10px 20px 20px !important;
}
.acss-1fr3od3>.acss-1xfxwg6 {
    border-radius: 20px 10px 20px 20px !important;
}
.css-4preuj>.acss-9nl0uq {
    border-radius: 20px 10px 20px 20px !important;
}
/* 对话框代码高亮 */
.css-1eamzbi div [data-code-type='highlighter'] {
    background: none !important;
	border-radius: 20px !important;
	box-shadow: 0 0 0 1px #333 !important;
}
.css-tsw82g div [data-code-type='highlighter'] {
    background: #fff !important;
	border-radius: 20px !important;
	box-shadow: 0 0 0 1px #00000000;
}
.css-1eamzbi div [data-code-type='highlighter']:hover {
    background: none !important;
}
.css-tsw82g div [data-code-type='highlighter']:hover {
    background: #fff !important;
}
.css-1eamzbi div [data-code-type='highlighter']>div:nth-child(1) {
	background: #222 !important;
}
.css-tsw82g div [data-code-type='highlighter']>div:nth-child(1) {
    background: #333 !important;
}
.css-1eamzbi div [data-code-type='highlighter']>div:nth-child(1):hover {
	background: #333 !important;
}
.css-tsw82g div [data-code-type='highlighter']>div:nth-child(1):hover {
    background: #79008d !important;
}
.css-1eamzbi div [data-code-type='highlighter']>div:nth-child(1)>div:nth-child(3):hover {
	background: #79008d !important;
}
.css-tsw82g div [data-code-type='highlighter']>div:nth-child(1)>div:nth-child(3):hover {
    background: #99e640 !important;
}
/* 对话框旁边小按钮 */
div[role='menubar']>div {
    border-radius: 10px !important;
}
/* 对话框警告 */
.ant-alert-warning {
    border-radius: 20px !important;
    border: 0 !important;
}
/* 对话框重新编辑对话 */
.css-1eamzbi .acss-v66yhe {
    border: 0 !important;
    border-radius: 20px !important;
    background: #333 !important;
    padding: 12px !important;
}
.css-tsw82g .acss-xfb8ma {
    border: 0 !important;
    border-radius: 20px !important;
    background: #f1f1f1 !important;
    padding: 12px !important;
}
/* 对话框插件 */
.acss-y5mm5q,.acss-45pdy5 {
	border-radius: 20px !important;
}
.acss-5eke9d,.acss-3zi5f8 {
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
/* 输入框上方使用按钮 */
.css-1a5hs83.acss-18qdyno>div:last-child {
    padding-inline: 8px 10.6px !important;
    border-radius: 10px !important;	
}
.css-1eamzbi .css-1a5hs83.acss-18qdyno>div:last-child {
    background: #161616 !important;
}
.css-tsw82g .css-1a5hs83.acss-18qdyno>div:last-child {
    background: #eee !important;
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
.css-1eamzbi button.ant-btn {
    background: #79008d !important;
    color: #fff !important;
}
.css-tsw82g button.ant-btn {
    background: #99e640 !important;
    color: #000 !important;
}
.ant-space-compact>button:nth-child(1) {
    border-radius: 10px 0 0 10px !important;
}
.ant-space-compact>button:nth-child(2) {
    border-radius: 0 10px 10px 0 !important;
}
.ant-space-compact button:nth-child(1):hover,.ant-space-compact button:nth-child(2):hover {
    background: #ff5722 !important;
	Color: #fff !important;
}
/* 标题栏模型按钮 */
.ant-dropdown-trigger>span.ant-tag-borderless {
    background: #79008d !important;
    border-radius: 6px !important;
    padding: 2px 5px !important;
}
.css-1eamzbi .ant-dropdown-trigger>span.ant-tag-borderless {
    background: #79008d !important;
}
.css-tsw82g .ant-dropdown-trigger>span.ant-tag-borderless {
    background: #99e640 !important;
}
.ant-dropdown-trigger>span.ant-tag-borderless:hover {
    background: #FF5722 !important;
    color: #fff !important;
}
/* 左侧栏搜索框 */
.css-1eamzbi .acss-cp5vt4 .ant-input-affix-wrapper {
    border: 1px solid #333 !important;
}
.css-tsw82g .acss-cp5vt4 .ant-input-affix-wrapper {
    border: 1px solid #eee !important;
}
.acss-cp5vt4 .ant-tag-borderless {
    background: none !important;
}
/* 助手页hellogpt logo */
#lobe-market-container>div:nth-child(1)>div:nth-child(1)>div:nth-child(1) {
	position: relative;
}
#lobe-market-container>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)::before {
	content: "HelloGPT";
    position: absolute;
    top: 1px;
    left: 0px;
    font-size: 1.6em;
    font-weight: 700;
}
.css-1eamzbi #lobe-market-container>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)::before {
    color: #fff;
}
.css-tsw82g #lobe-market-container>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)::before {
    color: #111;
}
#lobe-market-container>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>svg:first-child {
    opacity: 0;
	width: 86px;
}
/* 助手页分类按钮 */
.css-vwb4od {
    justify-content: center;
    margin-top: 10px;
}
.css-vwb4od>button {
    display: flex;
    align-items: flex-end;
}
/* 助手页助手卡片 */
.css-1eamzbi #lobe-market-container .css-15l7r2q .css-fj3h1o {
    background: #161616 !important;
	box-shadow: none !important;
}
.css-tsw82g #lobe-market-container .css-15l7r2q .css-fj3h1o {
    background: #f1f1f1 !important;
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
ul.ant-dropdown-menu,.ant-modal-content,.ant-popover-inner,.ant-menu-submenu-popup,.ant-menu-submenu-popup>.ant-menu,.css-fj3h1o {
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
li,.ant-menu-submenu-title {
    border-radius: 10px !important;
    margin-block: 4px !important;
}
.css-1eamzbi li.ant-dropdown-menu-item-only-child:hover,.css-1eamzbi li.ant-dropdown-menu-item-active {
    background: #161616 !important;
}
.css-tsw82g li.ant-dropdown-menu-item-only-child:hover,.css-tsw82g li.ant-dropdown-menu-item-active {
    background: #FFEB3B !important;
}
li.ant-dropdown-menu-item-group:hover {
    background: none !important;
}

/* 拖拉条颜色 */
div>.draggable-panel-top-handle:hover::before, div>.draggable-panel-top-handle:active::before, div>.draggable-panel-right-handle:hover::before, div>.draggable-panel-right-handle:active::before, div>.draggable-panel-left-handle:hover::before, div>.draggable-panel-left-handle:active::before {
    background: #99e640 !important;
}

/* 删除 */
.acss-1s2s9nk {
    display: none !important;
}
a[href="https://github.com/lobehub/lobe-chat"] {
  display: none !important;
}
.layoutkit-flexbox.css-fr78qt a:last-child {
	display: none !important;
}
form:first-child>div>div>.ant-collapse-content>div>div:nth-child(n+9),form:first-child>div>div>.ant-collapse-content>div>div:nth-child(n+10) {
	display: none !important;
}
#lobe-market-container .acss-1jn2ou {
    display: none !important;
}
li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="about"],.css-rq7h3k {
    display: none !important;
}
li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="setting"] .css-5wokcq {
    display: none !important;
}
.css-54fgub.acss-1g4myfy>.css-1109xs8>div:nth-child(1),div[aria-label="助手与会话"] {
	display: none !important;
}

/* 删除安装浏览器应用（PWA） */
#pwa-install {
    display: none !important;
}
/* 欢迎页面删除 */
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2)>div:last-child {
    display: none !important;
}
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2)>svg {
    display: none !important;
}
/* 删除侧栏底部按钮 */
body>div>.css-5m4etf>div:nth-child(1)>div:last-child {
    display: none !important;
}
/* 设置按钮位置 */
body>div>.css-5m4etf>.css-2tx0mv>div:nth-child(1)>div:nth-child(1) {
    position: absolute;
    bottom: 20px;
}
body>div>.css-5m4etf>.css-2tx0mv>div:nth-child(1)>span:nth-child(1) {
    position: absolute;
    bottom: 20px;
}
/* 设置按钮下的东西 */
body>div>.acss-1afprqa {
    bottom: 115px !important;
    left: 15px !important;
    top: auto !important;
}
.css-pv4bfb>div {
    border-radius: 10px !important;
}
/* 删除设置按钮下的东西 */
.acss-1afprqa .css-1mcrjnz div:last-child {
	display: none !important;
}
.acss-1afprqa ul>li:nth-last-child(-n+3), .acss-1afprqa ul>li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="pwa"], .acss-1afprqa ul>li[data-menu-id*="rc-menu-uuid-"][data-menu-id*="pwa"] + li {
	display: none !important;
}
.acss-1afprqa .css-b2xo4 {
	display: none !important;
}

/* 欢迎页面背景色 */
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2) {
	background: none !important;
}
/* 欢迎页面logo */
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2)>div:nth-child(2) strong {
    position: relative;
}
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2)>div:nth-child(2) strong::before {
    content: 'HelloGPT';
    position: absolute;
    top: -3px;
    left: 0px;
    right: -6px;
    font-size: 56px;
    font-weight: 700;
	line-height: 68px;
}
body>.css-1eamzbi >div:nth-child(2)>.css-zlqreh:nth-child(2)>div:nth-child(2) strong::before {
    background: #222;
	color: #fff !important;
}
body>.css-tsw82g>div:nth-child(2)>.css-zlqreh:nth-child(2)>div:nth-child(2) strong::before {
    background: #fff;
	color: #000 !important;
}
body>div:nth-child(1)>div:nth-child(2)>.css-zlqreh:nth-child(2)>div:nth-child(2) ol li strong::before {
    display: none !important;
}
/* 设置页面背景色 */
.css-1f4goe4,.css-qx52nb {
    background: none !important;
}
/* 浮动窗口时背景虚化颜色 */
.ant-modal-root .ant-modal-mask {
    background-color: rgb(0 0 0 / 60%) !important;
}
/* 分享 */
.css-1ktd0ak .acss-jum9ke,.css-1ktd0ak .acss-1o7bqrh,.css-1ktd0ak #preview>.css-1ktd0ak {
    border: 0 !important;
    border-radius: 20px !important;
}
.css-1ktd0ak .ant-form-horizontal>.css-o3n4io {
    border-radius: 20px !important;
	background: none !important;
}
/* 其他 */
.css-1f4goe4 {
    padding-block: 40px !important;
    padding-inline: 40px !important;
}
.ant-collapse-icon-position-start {
    border-radius: 20px !important;
}
.ant-collapse-icon-position-start>div>.ant-collapse-header {
	border-radius: 0 !important;
    padding-block: 12px !important;
    padding-inline: 16px !important;
}
.ant-collapse-icon-position-start>div>.ant-collapse-content {
	background: none !important;
}
.ant-collapse-icon-position-start>div>div>.ant-collapse-content-box {
    padding-inline: 20px !important;
}
.css-1eamzbi .ant-collapse-icon-position-start,.css-1jcj4zo .ant-collapse-icon-position-start {
	background: rgba(255, 255, 255, 0.02) !important;
}
.css-tsw82g .ant-collapse-icon-position-start,.css-su7n0e .ant-collapse-icon-position-start {
	background: rgb(0 0 0 / 3%) !important;
}
.css-1eamzbi .ant-collapse-icon-position-start>div>.ant-collapse-header,.css-1jcj4zo .ant-collapse-icon-position-start>div>.ant-collapse-header {
    background: rgba(255, 255, 255, 0.06) !important;
}
.css-tsw82g .ant-collapse-icon-position-start>div>.ant-collapse-header,.css-su7n0e .ant-collapse-icon-position-start>div>.ant-collapse-header {
    background: rgb(0 0 0 / 4%) !important;
}

/* HelloGPT */
.HelloGPT {
	z-index: 20;
    margin: 0 auto;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 18px);
    position: relative;
	align-items: center;
}
.HelloGPT::before {
    content: "";
    position: absolute;
    top: 9px;
    bottom: 3px;
    left: -9px;
    right: -9px;
    z-index: -1;
}
.HelloGPT::after {
    content: "";
    position: absolute;
    inset: -4px 9px 3px;
    z-index: -2;
}
.HelloGPT h1 {
	margin: 0;
    width: 138px;
    text-align: center;
    position: relative;
    left: 64px;
}
.HelloGPT h1 img {
    width: 138px;
}
.HelloGPT h1::before {
    content: "";
    background: #000;
    position: absolute;
    top: 6px;
    bottom: 4px;
    left: -14px;
    right: -14px;
    margin: 0px;
    z-index: -1;
}
.HelloGPT h1::after {
	content: "";
    background: #000;
    position: absolute;
    top: 2px;
    bottom: 0px;
    left: -10px;
    right: -10px;
    z-index: -1;
}
.HelloGPT ul {
    list-style: none;
    padding: 0;
    margin: 0;
	margin-right: 5px;
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
    top: -4px;
    bottom: -4px;
    left: 4px;
    right: 4px;
    opacity: 0;
    z-index: -1;
    background: #79008d;
}
.HelloGPT li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    background: #79008d;
}
.HelloGPT li:hover::after, .HelloGPT li:hover::before {
    opacity: 1;
}

/* HelloGPT黑 */
.css-1eamzbi .HelloGPT {
	border-bottom: 1px solid #333333;
}
.css-1eamzbi .HelloGPT li a {
    color: #fff;
}
.css-1eamzbi .HelloGPT li:hover::after, .css-1eamzbi .HelloGPT li:hover::before {
    background: #000;
}
.css-1eamzbi .HelloGPT li:hover a {
    color: #fff;
}

/* HelloGPT白 */
.css-tsw82g .HelloGPT {
	border-bottom: 1px solid #dddddd;
}
.css-tsw82g .HelloGPT li a {
    color: #000;
}
.css-tsw82g .HelloGPT li:hover::after, .css-tsw82g .HelloGPT li:hover::before {
    background: #000;
}
.css-tsw82g .HelloGPT li:hover a {
    color: #fff;
}



@media only screen and (max-width: 1341px) {
/* 	body>div {
		zoom: 80%;
	} */
}
@media (max-width: 1365px) {
	body {
		margin-left: 20px !important;
		padding-right: 20px !important;
	}
	body>div>.css-5m4etf {
		height: calc(100% - 100px) !important;
	}
	.draggable-panel-toggle-right,.draggable-panel-toggle-left {
		opacity: 1 !important;
	}
	.draggable-panel-toggle-right>div {
		width: 26px !important;
		left: 0 !important;
		background: #79008d !important;
	}
	.draggable-panel-toggle-left>div {
		width: 26px !important;
		right: 0 !important;
		background: #79008d !important;
	}	
	.css-tsw82g .draggable-panel-toggle-right>div {
		width: 26px !important;
		left: 0 !important;
		background: #99e640 !important;
	}
	.css-tsw82g .draggable-panel-toggle-left>div {
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
	body>div {
		zoom: 95%;
	}
    body {
        margin-left: 10px !important;
        padding-right: 10px !important;
    }
/*     body > div > .css-5m4etf {
        height: calc(100% - 80px) !important;
    }	 */
/* 	.HelloGPT {
		display: none !important;
	} */
	.HelloGPT li:nth-last-child(-n+2) {
		display: none !important;
	}	
/* 	body::before {
		content: "HelloGPT 手机版正在完善中，我是高逼格独裁冷血笑面九头身大魔王...";
		position: fixed;
		top: 0;
		left: 30px;
		font-size: 16px;
		color: #fff;
		z-index: 999;
		bottom: 0;
		right: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "hellogpt" !important;
		line-height: 36px;
		text-align: center;
	}
	body::after {
		content: "";
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 996;
		background: #000;
	} */
	
	
/* body>.css-1eamzbi>.css-5m4etf>div:first-child, body>.css-1eamzbi>.css-5m4etf>.css-5m4etf aside, body>.css-1eamzbi>.css-5m4etf>.css-5m4etf>div>div, body>.css-1eamzbi #lobe-market-container>div:nth-child(1), body>.css-1eamzbi #lobe-market-container>div:nth-child(2)>aside, body>.css-1eamzbi>.HelloGPT, body>.css-1eamzbi>.HelloGPT::before, body>.css-1eamzbi>.HelloGPT::after {
    background: #000 !important;
} */



body>.ant-app .css-1lumxev svg {
    display: none !important;
}
body>.ant-app>.css-o3n4io {
    right: auto;
    left: auto;
    width: calc(100% - 20px);
}
	
	
	

}


`;
