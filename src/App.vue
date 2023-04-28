<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 1.5;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockqueue,
th,
td {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
    -webkit-text-size-adjust: none !important;
}
pre {
  padding: 10px;
  background-color: #f7f8f9;
  border-radius: 5px;
  font-size: 14px;
}
table {
    border-collapse: collpase;
    border-spacing: 0
}

fieldset,
img {
    border: 0
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
    font-style: normal;
}
a {
    text-decoration: none;
}

ol,
ul {
    list-style: none
}

caption,
th {
    text-align: left
}

input[type="text"],
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="tel"],
textarea,
button {
    -webkit-appearance: none;
}
.el {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.transition {
    -webkit-transition:all 0.5s;
    -ms-transition:all 0.5s;
    -o-transition:all 0.5s;
    -moz-transition:all 0.5s;
    transition:all 0.5s;
}
.el2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.el3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

[v-cloak] {
    display: none;
}
.flex_center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flex_end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.flex_between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex_around {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flex_evenly {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.flex_column {
    display: flex;
    flex-direction: column;
}
html {
  height: 100%;
  background: #f6f6f6;
  overflow: hidden;
}
.open_mask {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to left, #090018, #040525);
  font-size: 0.3rem;
  font-weight: 500;
  color: #fff;
}

.logo {
  width: 200px;
  padding-top: 10vh;
  margin-bottom: 20px;
}

.open_mask p {
  font-size: 18px;
  margin: 20px 0;
}

.enter {
  min-height: 50px;
  width: 160px;
  border-radius: 25px;
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10a37f;
  margin-bottom: 20px;
}
body {
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  flex-direction: column;
  flex: 1;
  display: flex;
}

.qyai-page {
  width: 100%;
  height: 100vh;
  flex-direction: column;
  flex: 1;
  align-items: center;
  display: flex;
}

.login-page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 10px 0 0;
  display: flex;
  overflow: auto;
}

.login-page .login-footer {
  padding-bottom: 24px;
}

.login-page .login-footer a {
  color: #666;
  margin-left: 6px;
}

.login-page .login-footer span {
  margin-left: 6px;
}

.login-page .login-footer .footer-links {
  justify-content: center;
  margin-top: 4px;
  display: flex;
}

.login-wrapper {
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}

.login-wrapper .page-title {
  margin: 0;
  font-size: 42px;
}

.login-wrapper h3 {
  margin: 30px 0 16px;
}

.login-wrapper .login-title {
  color: #7b7b7d;
  font-size: 16px;
}

.switch-button {
  box-sizing: border-box;
  height: 34px;
  width: 124px;
  background: #e6e6e6;
  border-radius: 7px;
  align-items: center;
  padding: 0 2px;
  display: flex;
}

.switch-button > div,
.switch-button > a {
  height: 30px;
  width: 60px;
  cursor: pointer;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
}

.switch-button > div.switch-active,
.switch-button > a.switch-active {
  background: #fff;
}

.qyai-register-tutorial {
  max-width: 410px;
}

.qyai-register-tutorial > p {
  margin: 14px 0;
  font-size: 15px;
  line-height: 1.55;
}

.qyai-register-tutorial > p b {
  font-size: 16px;
}

.qyai-register-tutorial > div {
  justify-content: center;
  display: flex;
}

.qyai-register-tutorial > div .button {
  width: 180px;
  margin: 12px 0;
  font-weight: 500;
}

#page-header {
  height: 60px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  display: flex;
  position: relative;
}

#page-header .header-side {
  height: 100%;
  align-items: center;
  display: flex;
}

#page-header .header-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
  display: flex;
}

#page-header .header-right {
  align-items: center;
  display: flex;
}

#page-header .header-user-wrapper {
  position: relative;
}

#page-header .header-user-btn {
  height: 36px;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  padding: 0 6px;
  display: flex;
}

#page-header .header-user-btn:hover {
  background: #e6e6e6;
}

#page-header .header-user-btn img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

#page-header .header-user-btn .header-user-name {
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-left: 8px;
  font-size: 15px;
  overflow: hidden;
}

#page-header .header-user-menu {
  width: 150px;
  top: 38px;
  right: 0;
}

#page-header .upgrade-btn {
  height: 34px;
  background: #10a37f;
  border-radius: 6px;
  align-items: center;
  margin-right: 12px;
  padding: 0 10px;
  font-size: 14px;
}

#page-header .upgrade-btn .upgrade-btn-ico {
  align-items: center;
  display: flex;
  justify-content: center;
}
#page-header .upgrade-btn .upgrade-btn-ico img {
  width: 20px;
}
#page-header .upgrade-btn .upgrade-btn-text {
  margin-left: 5px;
}

#page-header .header-login-btn {
  width: 72px;
  height: 34px;
  background: #10a37f;
  border-radius: 6px;
  align-items: center;
  padding: 0;
  font-size: 14px;
}

#page-header .header-center {
}

#page-header .header-center .switch-button {
  width: 184px;
}

#page-header .header-center .switch-button > div {
  position: relative;
}

#page-header .header-center .switch-button > div span {
  color: #fff;
  pointer-events: none;
  background-color: #ff6464;
  border-radius: 3px;
  padding: 0 3px;
  font-size: 12px;
  display: flex;
  position: absolute;
  top: -6px;
  right: -20px;
}

#page-header .header-download {
  cursor: pointer;
  height: 34px;
  border-radius: 6px;
  align-items: center;
  margin-left: 16px;
  padding: 0 12px;
  font-size: 15px;
  display: flex;
}

#page-header .header-download:hover {
  background: #e6e6e6;
}

#page-header .header-download > div {
  white-space: nowrap;
  margin-left: 6px;
}

@media screen and (max-width: 700px) {
  #page-header {
    padding: 0 8px 0 12px;
  }

  #page-header .header-center {
    left: 14px;
    -webkit-transform: none;
    transform: none;
  }

  /* #page-header .header-logo {
        display: none
    } */

  #page-header .header-download {
    margin-left: 200px;
  }

  #page-header .header-download .header-dl-detail,
  #page-header .header-user-btn .header-user-name {
    display: none;
  }

  #page-header .header-user-btn img {
    width: 30px;
    height: 30px;
  }

  #page-header .upgrade-btn {
    width: 42px;
    margin-right: 8px;
  }

  #page-header .upgrade-btn .upgrade-btn-text {
    display: none;
  }

  #page-header .header-login-btn {
    margin-right: 4px;
  }
}

@media screen and (max-width: 400px) {
  #page-header .upgrade-btn {
    display: none;
  }

  #page-header.app-header-style .upgrade-btn {
    display: flex;
  }
}

.circle-loader {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
  border-radius: 50%;
  -webkit-animation: 1.1s linear infinite circle-load;
  animation: 1.1s linear infinite circle-load;
  position: relative;
}

.circle-loader.loader-style-gray {
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.5);
}

@-webkit-keyframes circle-load {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes circle-load {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes dot-load {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  45% {
    opacity: 0.7;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }

  80% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes dot-load {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  45% {
    opacity: 0.7;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }

  80% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.dot-loader > div:nth-child(1) {
  -webkit-animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) -0.24s infinite dot-load;
  animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) -0.24s infinite dot-load;
}

.dot-loader > div:nth-child(2) {
  -webkit-animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) -0.12s infinite dot-load;
  animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) -0.12s infinite dot-load;
}

.dot-loader > div:nth-child(3) {
  -webkit-animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite dot-load;
  animation: 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite dot-load;
}

.dot-loader {
  display: flex;
}

.dot-loader > div {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: block;
}

.dot-loader.loader-style-gray > div {
  background-color: rgba(0, 0, 0, 0.2);
}

#global-message-box {
  z-index: 50;
  width: 100%;
  pointer-events: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  display: flex;
  position: fixed;
  top: 0;
}

#global-message-box .global-message {
  color: #fff;
  z-index: 20;
  opacity: 0;
  pointer-events: all;
  background: #363636;
  border-radius: 6px;
  align-items: stretch;
  transition: all 0.2s;
  display: flex;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

#global-message-box .global-message.msg-animated {
  opacity: 1;
  margin-top: 20px;
}

#global-message-box .global-message.msg-hiding {
  opacity: 0;
  margin-top: -40px;
}

#global-message-box .global-msg-badge {
  width: 4px;
  background: #00aeec;
  border-radius: 3px;
  margin: 8px 20px 8px 8px;
}

#global-message-box .global-msg-badge.msg-badge-warn {
  background: #00aeec;
}

#global-message-box .global-msg-badge.msg-badge-error {
  background: #ff6767;
}

#global-message-box .global-msg-badge.msg-badge-success {
  background: #33b61d;
}

#global-message-box .global-msg-text {
  height: 38px;
  align-items: center;
  padding-right: 25px;
  display: flex;
}

@media screen and (max-width: 1024px) {
  #global-message-box .global-message.msg-animated {
    margin-top: 12px;
  }
}

.login-form {
  width: 350px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  display: flex;
}

@media screen and (max-width: 420px) {
  .login-form {
    width: 280px;
  }
}

.login-row {
  justify-content: center;
  display: flex;
}

.login-row .button,
.login-row .input-text {
  width: 280px;
  height: 42px;
  border-radius: 6px;
  font-size: 16px;
}

.login-row .input-text {
  border-color: #72787e;
}

.login-wechat {
  background: 0 0;
  color: #6cbe5e !important;
  border-color: #6cbe5e !important;
}

.login-wechat:hover {
  background-color: transparent !important;
}

.login-wechat svg {
  margin-right: 5px;
}

.login-split {
  border-bottom: 1px solid #e3e3e3;
  margin: 40px 0;
  position: relative;
}

.login-split span {
  width: 50px;
  text-align: center;
  color: #a1a1a1;
  background: #f6f6f6;
  margin-left: -25px;
  line-height: 20px;
  display: inline-block;
  position: absolute;
  top: -10px;
  left: 50%;
}

.login-by-phone {
  border-radius: 4px;
  overflow: hidden;
}

.login-by-phone input {
  text-align: center;
}

.login-by-phone .button {
  margin-top: 10px;
}

.login-qrcode-container {
  flex-direction: column;
  align-items: center;
  display: flex;
}

.login-qrcode-container button {
  width: 180px;
  margin-top: 20px;
}

.login-qrcode-container .login-qrcode-desc {
  color: #5f5f64;
  margin-top: 5px;
}

.login-code-container {
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  display: flex;
}

.login-code-remark {
  max-width: 260px;
  text-align: center;
  color: #7b7b7d;
  padding-bottom: 20px;
  font-size: 16px;
}

.login-code-fields {
  justify-content: center;
  display: flex;
}

.login-code-fields .input-text {
  width: 150px;
  height: 42px;
  border-radius: 6px;
  font-size: 16px;
}

.login-code-fields .button {
  width: 120px;
  height: 42px;
  border-radius: 6px;
  margin-left: 10px;
  padding-left: 0;
  padding-right: 0;
  font-size: 16px;
}

.login-code-submit {
  margin-top: 20px;
}

.login-code-submit .button {
  width: 280px;
  height: 42px;
  border-radius: 6px;
  font-size: 16px;
}

.wx-bind-tip {
  text-align: center;
  padding: 30px 0 40px;
  line-height: 26px;
}

.login-guest {
  color: #666;
  cursor: pointer;
  border-bottom: 1px solid #777;
  margin-top: 30px;
  font-size: 16px;
}

.chat-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

.chat-body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px 120px;
  display: flex;
  overflow: auto;
}

.chat-body .chat-tutorial {
  max-width: 800px;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  display: flex;
}

.chat-body .chat-tutorial header {
  width: 100%;
  height: 60px;
  justify-content: center;
  display: flex;
  position: relative;
}

.chat-body .chat-tutorial header > div {
  width: 36px;
  height: 36px;
  color: #848484;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 12px;
  right: 0;
}

.chat-body .chat-tutorial header > div:hover {
  color: #555;
  background-color: #e6e6e6;
}
.chat-body .chat-tutorial header > div img {
  width: 25px;
}

.chat-body .chat-tutorial h1 {
  font-size: 20px;
  font-weight: 500;
}

.chat-body .chat-examples {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}

.chat-body .chat-example {
  box-sizing: border-box;
  width: calc(33% - 12px);
  height: 80px;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 16px;
  font-size: 15px;
  line-height: 24px;
  transition: background-color 0.2s;
  display: flex;
  position: relative;
  overflow: hidden;
}

.chat-body .chat-notice {
  padding: 40px 6px 12px;
}

.chat-body .chat-notice div {
  color: #848484;
  font-size: 15px;
  line-height: 1.6;
}

.chat-body .chat-notice a {
  color: #545454;
  border-bottom: 1px dotted #555;
  margin-left: 2px;
}

.chat-about {
  align-items: center;
  padding: 30px 6px 0;
  font-size: 15px;
  display: flex;
}

.chat-body .chat-about svg {
  margin-right: 10px;
}

.chat-about span {
  border-bottom: 1px solid transparent;
}

.chat-about div {
  cursor: pointer;
  border-bottom: 1px dotted #555;
  margin-left: 3px;
}

.chat-questions {
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  padding: 0 32px;
}

.ask-item {
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  flex-direction: column;
  margin-top: 26px;
  padding: 0 20px;
  display: flex;
  overflow: hidden;
  position: relative;
}

.ask-item .ask-question,
.ask-item .ask-answer {
  padding: 20px 8px;
  display: flex;
}

.ask-item .ask-answer {
  border-top: 1px solid #ececec;
  padding-bottom: 28px;
  position: relative;
}

.ask-item .ask-photo {
  flex-shrink: 0;
  display: flex;
}

.ask-item .ask-photo img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.ask-item .ask-photo-ai {
  width: 28px;
  height: 28px;
  background: #10a37f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.ask-item .ask-photo-ai img {
  width: 20px;
  height: 20px;
}

.ask-item .ask-text {
  min-height: 28px;
  box-sizing: border-box;
  white-space: pre-wrap;
  flex: 1;
  margin-left: 16px;
  font-size: 16px;
  line-height: 28px;
  position: relative;
  overflow-x: scroll;
}
.ask-item .ask-text::-webkit-scrollbar {
  display: none;
}
@-webkit-keyframes bot-cursor {
  0% {
    opacity: 0;
  }

  15% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes bot-cursor {
  0% {
    opacity: 0;
  }

  15% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

.ask-item .ask-thinking-cursor {
  height: 28px;
  vertical-align: bottom;
  -webkit-animation: 1s infinite bot-cursor;
  animation: 1s infinite bot-cursor;
  display: inline-block;
}

.ask-item .ask-thinking-cursor > div {
  width: 4px;
  height: 24px;
  background: #10a37f;
  margin: 2px 0;
}

.ask-operations {
  color: #555;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}

.operations_item {
  height: 24px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  display: flex;
  font-size: 12px;

}
.operations_item span {
  margin-left: 5px;
}
.operations_item img {
  width: 20px;
  height: 20px;
}

.operations_item:hover {
  color: #333;
  background: #e6e6e6;
}

.operations_item:active {
  background: #d5d5d5;
}

.chat-item {
  margin-top: 20px;
  display: flex;
}

.chat-item .chat-photo {
  flex-shrink: 0;
  margin-top: 8px;
  display: flex;
}

.chat-item .chat-photo img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.chat-item .chat-msg {
  box-sizing: border-box;
  white-space: pre-wrap;
  background: #fff;
  border-radius: 8px;
  margin-left: 16px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 28px;
}

.chat-item .chat-msg.chat-msg-ai {
  background: #e9e9e9;
}

.chat-item .chat-photo-ai {
  width: 32px;
  height: 32px;
  background: #10a37f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.chat-item .chat-photo-ai img {
  width: 20px;
  height: 20px;
}

.chat-item .chat-thinking {
  height: 28px;
  align-items: center;
  display: flex;
}

.chat-footer {
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(rgba(246, 246, 246, 0), #f6f6f6 25%);
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding: 30px 20px;
  display: flex;
  position: absolute;
  bottom: 0;
}

.chat-footer .chat-footer-bar {
  min-height: 60px;
  max-width: 800px;
  width: 100%;
  pointer-events: auto;
  background: #fff;
  border-radius: 8px;
  align-items: center;
  display: flex;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.06);
  border: 1px solid #10a37f;
}

.chat-footer .chat-left {
  flex: 1;
  display: flex;
  position: relative;
}

.chat-footer .chat-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  resize: none;
  -webkit-appearance: none;
  background: 0 0;
  border: 0;
  flex: 1;
  margin: 0;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 28px;
}

.chat-footer .chat-input::-webkit-input-placeholder {
  color: #999;
}

.chat-footer .chat-input.chat-input-ruler {
  height: auto;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 400px;
}

.chat-footer .chat-right {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}

.chat-footer .chat-submit {
  width: 36px;
  height: 36px;
  color: #fff;
  cursor: pointer;
  background: #10a37f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.chat-footer .chat-submit  img {
  width: 25px;
  height: 25px;
  display: block;
}

.chat-footer .chat-footer-copyright {
  pointer-events: auto;
  margin-top: 10px;
}

@media screen and (max-width: 700px) {
  .chat-body {
    padding-left: 16px;
    padding-right: 16px;
  }

  .chat-body .chat-example {
    width: calc(50% - 10px);
  }

  .chat-footer,
  .chat-footer .chat-input {
    padding-left: 16px;
    padding-right: 16px;
  }

  .chat-questions {
    padding: 0;
  }

  .chat-questions .ask-item {
    padding: 0 12px;
  }

  .chat-questions .ask-item .ask-question,
  .chat-questions .ask-item .ask-answer {
    padding: 14px 4px;
  }
  .chat-questions .ask-item .ask-text {
    margin-left: 10px;
  }
}

@media screen and (max-width: 480px) {
  .chat-body .chat-example {
    height: 84px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 22px;
  }
}

.write-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px;
  display: flex;
  overflow: auto;
}

.write-wrapper .write-body {
  max-width: 800px;
  width: 100%;
  padding-bottom: 80px;
}

.write-wrapper .write-nav {
  border-bottom: 1px solid #e8e8e8;
  margin: 30px 0 20px;
  padding-bottom: 12px;
  display: flex;
}

.write-wrapper .write-nav .write-tab {
  width: 100px;
  height: 32px;
  cursor: pointer;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  display: flex;
}

.write-wrapper .write-nav .write-tab.tab-active {
  background: #e6e6e6;
}

.write-wrapper .write-input-container {
  min-height: 60px;
  max-width: 800px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  position: relative;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.06);
}

.write-wrapper .write-input-container.write-result {
  padding-bottom: 26px;
}

.write-wrapper .write-input-container .write-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  -webkit-appearance: none;
  background: 0 0;
  border: 0;
  border-bottom: 1px solid #f0f0f0;
  flex: 1;
  margin: 0;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 28px;
}

.write-wrapper .write-input-container .write-input.instruction-input {
  min-height: 60px;
}

.write-wrapper .write-input-container .write-input:empty:before {
  content: attr(placeholder);
  color: #999;
  pointer-events: none;
}

.write-wrapper .write-input-container .footer-submit {
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  display: flex;
}

.write-wrapper .write-input-container .footer-submit .button {
  width: 130px;
  font-weight: 500;
}

.write-wrapper .write-input-container .footer-submit .footer-clear {
  height: 40px;
  width: 80px;
  cursor: pointer;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  font-size: 16px;
  display: flex;
}

.write-wrapper .write-input-container .footer-submit .footer-clear:hover {
  background: #e8e8e8;
}

.write-wrapper .box-result {
  margin-top: 20px;
}

.write-wrapper .write-complete-text {
  box-sizing: border-box;
  width: 100%;
  min-height: 28px;
  white-space: pre-wrap;
  flex: 1;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 28px;
  position: relative;
}

@-webkit-keyframes bot-write-cursor {
  0% {
    opacity: 0;
  }

  15% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes bot-write-cursor {
  0% {
    opacity: 0;
  }

  15% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

.write-wrapper .write-writing-cursor {
  height: 28px;
  vertical-align: bottom;
  -webkit-animation: 1s infinite bot-write-cursor;
  animation: 1s infinite bot-write-cursor;
  display: inline-block;
}

.write-wrapper .write-writing-cursor > div {
  width: 4px;
  height: 24px;
  background: #10a37f;
  margin: 2px 0;
}

.write-wrapper .write-examples {
  margin-top: 50px;
}

.write-wrapper .write-examples .write-about {
  align-items: center;
  padding: 20px 0 0;
  font-size: 15px;
  display: flex;
}

.write-wrapper .write-examples .write-about svg {
  margin-right: 10px;
}

.write-wrapper .write-examples .write-about span {
  border-bottom: 1px solid transparent;
}

.write-wrapper .write-examples .write-about div {
  cursor: pointer;
  border-bottom: 1px dotted #555;
  margin-left: 3px;
}

.write-wrapper .write-examples .write-exp-title {
  font-size: 16px;
  font-weight: 500;
}

.write-wrapper .write-examples ul {
  padding-left: 20px;
  list-style: disc;
}

.write-wrapper .write-examples ul li {
  white-space: pre-wrap;
  color: #444;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px;
  font-size: 15px;
}

.write-wrapper .write-examples ul li:hover {
  background: #e8e8e8;
}

@media screen and (max-width: 700px) {
  .write-wrapper {
    padding: 0 16px;
  }

  .write-wrapper .write-nav {
    margin-top: 20px;
  }

  .write-wrapper .write-input-container .write-input {
    padding: 12px 16px;
  }
}

.draw-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px;
  display: flex;
  overflow: auto;
}

.draw-wrapper .draw-body {
  max-width: 800px;
  width: 100%;
  padding: 0 0 80px;
}

.draw-wrapper .draw-nav {
  border-bottom: 1px solid #e8e8e8;
  margin: 30px 0 20px;
  padding-bottom: 12px;
  display: flex;
}

.draw-wrapper .draw-nav .draw-tab {
  width: 100px;
  height: 32px;
  cursor: pointer;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  display: flex;
}

.draw-wrapper .draw-nav .draw-tab.tab-active {
  background: #e6e6e6;
}

.draw-wrapper .model-select-title {
  padding-top: 16px;
  font-size: 18px;
  font-weight: 500;
}

.draw-wrapper .model-select-container {
  max-width: 800px;
  width: 100%;
  height: 106px;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  margin-top: 12px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.04);
}

.draw-wrapper .model-select-container img {
  width: 94px;
  height: 94px;
  border-radius: 6px;
  margin: 6px;
}

.draw-wrapper .model-select-container .model-info {
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 0 50px 0 10px;
  display: flex;
}

.draw-wrapper .model-select-container .model-info .model-title {
  font-size: 17px;
  font-weight: 500;
}

.draw-wrapper .model-select-container .model-info .model-desc {
  color: #666;
  padding: 4px 0;
  font-size: 15px;
}

.draw-wrapper .model-select-container .model-details {
  color: #666;
  align-items: center;
  display: flex;
}

.draw-wrapper .model-select-container .model-details > div {
  align-items: center;
  display: flex;
}

.draw-wrapper .model-select-container .model-details > div svg {
  color: #888;
}

.draw-wrapper .model-select-container .model-details > div span {
  margin-left: 6px;
}

.draw-wrapper .model-select-container .model-details .model-cost {
  margin-left: 20px;
}

.draw-wrapper .model-select-container .model-details .model-cost div {
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  color: #777;
  border: 1px solid #888;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
  font-size: 11px;
  line-height: 16px;
  display: flex;
}

.draw-wrapper .model-select-container .model-arrow {
  height: 100%;
  width: 60px;
  color: #666;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
}

.draw-wrapper .draw-fields-container {
  max-width: 800px;
  width: 100%;
  flex-direction: column;
  display: flex;
  position: relative;
}

.draw-wrapper .draw-fields-container .draw-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 52px;
  -webkit-appearance: none;
  background: 0 0;
  border: 1px solid #d7d7d7;
  border-radius: 7px;
  flex: 1;
  margin: 0;
  padding: 12px;
  font-size: 16px;
  line-height: 28px;
}

.draw-wrapper .draw-fields-container .draw-input:empty:before {
  content: attr(placeholder);
  color: #999;
  pointer-events: none;
}

.draw-wrapper .draw-fields-container .field-title {
  margin: 32px 0 8px;
  padding-left: 4px;
  font-size: 16px;
  font-weight: 500;
}

.draw-wrapper .draw-fields-container .size-select {
  display: flex;
}

.draw-wrapper .draw-fields-container .size-select > div {
  height: 40px;
  width: 108px;
  cursor: pointer;
  border: 1px solid #d7d7d7;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  display: flex;
}

.draw-wrapper .draw-fields-container .size-select > div:last-child {
  margin-right: 0;
}

.draw-wrapper .draw-fields-container .size-select .size-active {
  color: #10a37f;
  border-color: #10a37f;
}

.draw-wrapper .draw-fields-container .image-upload {
  height: 100px;
  cursor: pointer;
  border: 1px dashed silver;
  border-radius: 7px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.draw-wrapper .draw-fields-container .image-upload.dragging-on {
  background: #d5e0ff;
  border: 1px solid #10a37f;
}

.draw-wrapper .draw-fields-container .image-upload div {
  width: 100%;
  height: 100%;
  color: #999;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  display: flex;
  position: absolute;
}

.draw-wrapper .draw-fields-container .image-upload .upload-holder-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}

.draw-wrapper .draw-fields-container .image-upload input {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.draw-wrapper .footer-submit {
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  display: flex;
}

.draw-wrapper .footer-submit .button {
  width: 100%;
  height: 44px;
  font-weight: 500;
}

.draw-wrapper .modal-wrapper {
  width: 100%;
  max-width: 800px;
  max-height: 90%;
  flex-direction: column;
  padding: 0;
  display: flex;
  overflow: hidden;
}

.draw-wrapper .modal-wrapper .modal-content {
  height: 100%;
  flex-direction: column;
  flex: 0;
  display: flex;
}

.draw-wrapper .model-panel {
  flex-direction: column;
  flex: 1;
  padding: 12px 24px;
  display: flex;
  overflow: auto;
}

.draw-wrapper .model-list {
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}

.draw-wrapper .model-footer {
  height: 50px;
  cursor: pointer;
  border-top: 1px solid #e6e6e6;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
}

.draw-wrapper .model-footer:hover {
  background-color: #f2f2f2;
}

.draw-wrapper .model-select-item {
  max-width: 800px;
  height: 92px;
  cursor: pointer;
  width: calc(50% - 12px);
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin: 12px 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.draw-wrapper .model-select-item img {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  margin: 6px;
}

.draw-wrapper .model-select-item .model-info {
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 0 16px 0 6px;
  display: flex;
}

.draw-wrapper .model-select-item .model-title {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.draw-wrapper .model-select-item .model-title div {
  font-size: 16px;
  font-weight: 500;
}

.draw-wrapper .model-select-item .model-title span {
  white-space: nowrap;
  height: 22px;
  background: #ffd645;
  border-radius: 4px;
  align-items: center;
  margin-left: 12px;
  padding: 0 8px;
  display: flex;
}

.draw-wrapper .model-select-item .model-title .model-tag-restoration {
  background: #83eb90;
}

.draw-wrapper .model-select-item .model-title .model-tag-transfer {
  background: #ff9ecf;
}

.draw-wrapper .model-select-item .model-desc {
  color: #666;
  padding: 8px 0 4px;
  font-size: 14px;
}
.draw-wrapper .draw-result {
  margin-top: 20px;
}
.draw-wrapper .draw-result .draw-showcase {
  min-height: 300px;
  box-sizing: border-box;
  border: 4px solid #e6e6e6;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;
}

.draw-wrapper .draw-result .draw-progress {
  height: 36px;
  background: #d8d8d8;
  border-radius: 20px;
  align-items: center;
  padding: 0 15px;
  display: flex;
}

.draw-wrapper .draw-result .draw-progress-thumb {
  height: 20px;
  width: 220px;
  overflow: hidden;
}

.draw-wrapper .draw-result .draw-progress-thumb div {
  width: 0;
  height: 20px;
  background: #10a37f;
  border-radius: 3px;
  -webkit-animation: 1.2s infinite draw-progress;
  animation: 1.2s infinite draw-progress;
}

@-webkit-keyframes draw-progress {
  0% {
    opacity: 0.5;
  }

  30% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  to {
    opacity: 0.5;
  }
}

@keyframes draw-progress {
  0% {
    opacity: 0.5;
  }

  30% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  to {
    opacity: 0.5;
  }
}

.draw-wrapper .draw-result .draw-result-img {
  max-width: 100%;
}

.draw-wrapper .draw-result .draw-tip {
  color: #777;
  font-size: 15px;
}

.draw-wrapper .draw-result .progress-tip {
  margin: 12px 0 4px;
}

.draw-wrapper .draw-result .draw-tip-error {
  color: #ff6767;
}

.draw-wrapper .draw-result .draw-info {
  margin-top: 20px;
  display: flex;
  position: relative;
}

.draw-wrapper .draw-result .draw-info .button {
  height: 40px;
  min-width: 80px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
}

.draw-wrapper .draw-result .draw-info .recreate {
  margin-left: 20px;
}

.draw-wrapper .draw-result .draw-info .download-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.draw-wrapper .draw-result .prompt-title {
  margin: 32px 0 8px;
  padding-left: 4px;
  font-size: 16px;
  font-weight: 500;
}

.draw-wrapper .draw-result .prompt-text {
  font-size: 15px;
  line-height: 1.6;
}

.draw-wrapper .draw-result .draw-showcase-img {
  min-height: 300px;
  border: 3px solid #e6e6e6;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  display: flex;
  position: relative;
}

.draw-wrapper .draw-result .draw-showcase-img div {
  height: 100%;
  width: 100%;
  color: #777;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  display: flex;
  position: absolute;
}

.draw-wrapper .draw-result .draw-showcase-img img {
  z-index: 1;
  position: relative;
}

.draw-wrapper .draw-footer-copyright {
  text-align: center;
  color: #666;
  margin-top: 70px;
}

@media screen and (max-width: 820px) {
  .draw-wrapper .modal-wrapper {
    margin: 0 16px;
  }

  .draw-wrapper .model-panel {
    padding: 12px 16px;
  }

  .draw-wrapper .model-select-item {
    width: 100%;
    margin: 8px 0;
  }
}

@media screen and (max-width: 700px) {
  .draw-wrapper {
    padding: 0 16px;
  }

  .draw-wrapper .model-select-container .model-info {
    padding-right: 40px;
  }

  .draw-wrapper .model-select-container .model-arrow {
    width: 40px;
  }
}

.draw-history .history-loading {
  color: #666;
  justify-content: center;
  margin-top: 40px;
  font-size: 15px;
  display: flex;
}

.draw-history .history-list {
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}

.draw-history .history-item {
  width: calc(50% - 10px);
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.draw-history .history-img-wrapper {
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.draw-history .history-img-wrapper .history-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.draw-history .history-icon-holder {
  width: 100%;
  height: 100%;
  color: #e6e6e6;
  background: #e5e5e5;
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
}

.draw-history .history-icon-holder svg {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.draw-history .history-status {
  color: #fff;
  background: #ff6464;
  border-radius: 3px;
  padding: 1px 4px;
  position: absolute;
  top: 8px;
  right: 8px;
}

.draw-history .history-status-starting,
.draw-history .history-status-processing {
  background: #43a247;
}

.draw-history .history-status-succeeded {
  display: none;
}

.draw-history .history-prompt {
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  height: 48px;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 10px;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.draw-history .history-show {
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
  flex-direction: column;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
}

.draw-history .history-show .history-show-hotspot {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.draw-history .history-show .history-close {
  height: 50px;
  width: 50px;
  z-index: 1;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  right: 10px;
}

.draw-history .history-show .history-show-img {
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  min-height: 360px;
  color: #fff;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 50px 16px 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
}

.draw-history .history-show .history-show-img img {
  max-width: 100%;
  z-index: 1;
  border-radius: 6px;
  position: relative;
}

.draw-history .history-show .history-show-buttons {
  display: flex;
}

.draw-history .history-show .history-show-buttons .button {
  height: 40px;
  min-width: 100px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
}

.draw-history .history-show .history-show-buttons .delete-btn {
  margin-left: 20px;
}

.draw-history .history-show .history-show-details {
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  padding: 20px 16px 50px;
  display: flex;
}

.draw-history .history-show .history-show-details .details-content {
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 0 20px 20px;
  font-size: 15px;
}

.draw-history .history-show .history-show-details .details-title {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
}

.draw-history .history-show .history-show-details .details-text {
  opacity: 0.8;
}

.draw-history .history-show .history-show-details .details-img {
  max-width: 100%;
  border-radius: 5px;
  display: flex;
}

@media screen and (max-width: 700px) {
  .draw-history .history-item {
    width: calc(50% - 8px);
    margin-bottom: 16px;
  }
}

.avatar-editor {
  width: 240px;
}

.avatar-editor .button {
  width: 100%;
  padding: 0;
  position: relative;
}

.avatar-editor input[type="file"] {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  position: absolute;
}

.avatar-editor input[type="file"]:disabled {
  cursor: default;
}

.avatar-editor .avatar-list {
  width: 240px;
  flex-wrap: wrap;
  margin-top: 15px;
  display: flex;
}

.avatar-editor .avatar-list > div {
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
  margin: 6px;
  position: relative;
  background-size: contain !important;
}

.avatar-editor .avatar-list > div .selected-border {
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: -3px;
  left: -3px;
}

.account-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 60px 20px 30px;
  display: flex;
  overflow: auto;
}

.account-wrapper .account-container {
  max-width: 400px;
  width: 100%;
}

.account-wrapper .user-basic-info {
  align-items: center;
  display: flex;
}

.account-wrapper .user-basic-info .user-photo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  position: relative;
}

.account-wrapper .user-basic-info .user-photo img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
}

.account-wrapper .user-basic-info .user-photo .avatar-uploading {
  width: 100%;
  height: 100%;
  cursor: default;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}

.account-wrapper .user-basic-info .user-photo .avatar-mask {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.account-wrapper .user-basic-info .avatar-menu {
  z-index: 1;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0 0 0 1px rgba(15, 15, 15, 0.05), 0 3px 6px rgba(15, 15, 15, 0.1),
    0 5px 18px rgba(15, 15, 15, 0.12);
}

.account-wrapper .user-basic-info .user-name {
  flex: 1;
  align-items: center;
  margin-left: 20px;
  display: flex;
}

.account-wrapper .user-basic-info .user-name input {
  width: 70%;
  border-color: #eeeff0;
  margin-right: 10px;
  font-size: 15px;
}

.account-wrapper .user-basic-info .user-name input:focus {
  border-color: #eff1f4;
}

.account-wrapper .user-basic-info .user-name .button {
  width: 76px;
  height: 34px;
  padding: 0;
}

.account-wrapper .security-opening {
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  display: flex;
}

.account-wrapper .security-opening .opening-text {
  color: #7b7b7d;
  margin-top: 10px;
  font-size: 13px;
}

.account-wrapper .security-container {
  min-height: 220px;
  margin-top: 24px;
}

.account-wrapper .register-date {
  opacity: 0.6;
  align-items: center;
  margin-bottom: 30px;
  font-size: 15px;
  display: flex;
}

.account-wrapper .register-date svg {
  margin-right: 10px;
}

.account-wrapper .register-date span {
  margin: 0 1px;
}

.account-wrapper .user-vip {
  box-sizing: border-box;
  border-top: 1px solid #eeeff0;
  border-bottom: 1px solid #eeeff0;
  margin-bottom: 30px;
  padding: 30px 0;
}

.account-wrapper .user-vip .vip-pro-title {
  align-items: center;
  display: flex;
}

.account-wrapper .user-vip .vip-pro-title .vip-icon {
  width: 16px;
  height: 16px;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  display: flex;
}

.account-wrapper .user-vip .vip-desc {
  opacity: 0.6;
  margin-top: 10px;
  font-size: 0.95em;
}

.account-wrapper .user-vip .vip-buttons {
  align-items: center;
  margin-top: 20px;
  display: flex;
}

.account-wrapper .user-vip .vip-invite {
  color: inherit;
  border-bottom: 1px solid #848484;
  margin-left: 30px;
  font-size: 0.95em;
}

.account-wrapper .user-vip .button {
  width: 120px;
  height: 34px;
}

.account-wrapper .user-medal {
  border-bottom: 1px solid #eeeff0;
  margin-bottom: 40px;
  padding: 0 0 40px;
}

.account-wrapper .user-medal .module-title {
  margin-bottom: 20px;
}

.account-wrapper .user-medal .medal-list img {
  width: 80px;
  height: 80px;
}

.account-wrapper .module-title {
  border-top: 1px solid #e6e6e6;
  padding-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

.account-wrapper .user-row {
  align-items: center;
  margin-top: 16px;
  font-size: 15px;
  display: flex;
}

.account-wrapper .user-row .row-label {
  opacity: 0.6;
  width: 70px;
}

.account-wrapper .user-row .row-content {
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.account-wrapper .user-row .row-display {
  padding-right: 10px;
}

.account-wrapper .user-row .row-operate {
  -webkit-user-select: none;
  user-select: none;
}

.account-wrapper .user-row .row-operate .button {
  color: inherit;
  height: 26px;
  width: 60px;
  background: 0 0;
  padding: 0;
}

.account-wrapper .user-logout {
  border-top: 1px solid #e6e6e6;
  margin-top: 40px;
  padding: 40px 0;
}

.account-wrapper .user-logout .button {
  width: 120px;
  color: #ff6767;
  background: 0 0;
  border-color: #ff6767;
}

.account-wrapper .user-logout .button:active {
  background: #ffecec;
}

.my-packages-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 60px 20px;
  display: flex;
  overflow: auto;
}

.my-packages-wrapper .my-packages-container {
  max-width: 800px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.my-packages-wrapper .my-packages-container h1 {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
}

.my-packages-wrapper .my-balance-container {
  height: 40px;
  align-items: center;
  margin: 10px 0 40px;
  display: flex;
}

.my-packages-wrapper .my-balance-container .my-balance {
  color: #ffc700;
  font-size: 28px;
  font-weight: 500;
}

.my-packages-wrapper .my-balance-container .my-balance span {
  margin-left: 6px;
  font-size: 18px;
}

.my-packages-wrapper .my-pkg-loading {
  width: 168px;
  justify-content: center;
  margin-top: 30px;
  display: flex;
}

.my-packages-wrapper .my-pkg-empty {
  color: #666;
  margin-top: 30px;
  font-size: 15px;
}

.my-packages-wrapper .my-pkg-list .pkg-row {
  display: flex;
}

.my-packages-wrapper .my-pkg-item {
  width: 100%;
  box-sizing: border-box;
  max-width: 500px;
  background: #fff;
  border-radius: 8px;
  margin-top: 20px;
  padding: 16px 24px;
  font-size: 15px;
  line-height: 2;
}

.my-packages-wrapper .pkg-row {
  flex-wrap: wrap;
  align-items: center;
  padding: 4px 0;
  display: flex;
}

.my-packages-wrapper .pkg-name {
  white-space: nowrap;
  height: 32px;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  display: flex;
}

.my-packages-wrapper .pkg-name span {
  margin-left: 4px;
  padding-top: 3px;
  font-size: 15px;
  display: block;
}

.my-packages-wrapper .pkg-status {
  white-space: nowrap;
  height: 28px;
  background: #ffd645;
  border-radius: 4px;
  align-items: center;
  margin-left: 20px;
  padding: 0 8px;
  display: flex;
}

.my-packages-wrapper .pkg-status span {
  margin: 0 2px;
  font-size: 15px;
  font-weight: 700;
}

.my-packages-wrapper .pkg-field {
  width: 250px;
  display: flex;
}

.my-packages-wrapper .pkg-field.pkg-field-payment {
  width: 200px;
}

.my-packages-wrapper .pkg-label {
  width: 78px;
  text-align: right;
  color: #777;
  white-space: nowrap;
}

@media screen and (max-width: 800px) {
  .my-packages-wrapper .my-pkg-item {
    padding: 12px 16px;
  }

  .my-packages-wrapper .pkg-row1 {
    flex-wrap: wrap;
  }
}

.download-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 60px 20px 0;
  display: flex;
  overflow: auto;
}

.download-wrapper .download-title {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
}

.download-wrapper .download-desc {
  color: #5f5f64;
  margin: 30px 0 0;
  font-size: 16px;
}

.download-wrapper .back-btn {
  width: 160px;
  flex-shrink: 0;
  margin-top: 50px;
  font-size: 15px;
}

.download-wrapper .app-icon {
  width: 80px;
  height: 80px;
  background-color: #10a37f;
  border-radius: 12px;
  flex-shrink: 0;
  margin: 40px 0;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(0, 1, 2, 0.2);
}

.download-wrapper .app-icon img {
  width: 80px;
  height: 80px;
}

.download-wrapper #app-container {
  align-items: flex-start;
  display: flex;
}

.download-wrapper #app-container.active {
  opacity: 1;
  pointer-events: auto;
}

.download-wrapper .img-container {
  align-items: center;
  display: flex;
}

.download-wrapper #app-qr-code {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  display: flex;
}

.download-wrapper #app-qr-code img {
  width: 140px;
  height: 140px;
  margin-bottom: 4px;
}

.download-wrapper .dl-btn {
  height: 50px;
  width: 200px;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  margin: 10px 0;
  font-size: 15px;
  font-weight: 500;
  display: flex;
}

.download-wrapper .dl-btn svg {
  width: 28px;
  height: 28px;
  margin: 0 8px 0 26px;
}

.download-wrapper #dl-btn-android {
  background: #76d78c;
}

.download-wrapper #dl-btn-android:hover {
  background: #86dc99;
}

.download-wrapper #dl-btn-android:active {
  background: #66d27f;
}

.download-wrapper .dl-btn-ios {
  color: #d7d7d8;
  background: #333;
}

.download-wrapper .dl-btn-ios.redirecting {
  width: 210px;
  justify-content: center;
}

.download-wrapper .dl-btn-ios.redirecting img {
  margin-left: 0;
}

.download-wrapper .dl-btn-ios .ios-dl-text {
  margin-left: 12px;
}

.download-wrapper .dl-btn-ios:hover {
  background: #3d3d3d;
}

.download-wrapper .dl-btn-ios:active {
  background: #292929;
}

.download-wrapper .dl-types {
  margin-top: 10px;
  display: flex;
}

.download-wrapper .dl-types.column {
  flex-direction: column;
}

.download-wrapper .dl-type {
  margin: 30px 20px;
}

.download-wrapper .dl-type > div {
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.download-wrapper .dl-type img {
  opacity: 0.6;
  width: 70px;
  height: 70px;
}

.download-wrapper .dl-remark {
  text-align: center;
  color: #5f5f64;
  font-size: 15px;
  line-height: 1.8;
}

.download-wrapper .dl-remark a {
  color: #08f;
  margin: 0 2px;
}

.download-wrapper .dl-buttons {
  justify-content: center;
  align-items: center;
  margin-top: 0;
  display: flex;
}

.download-wrapper .dl-gzh {
  margin-top: 10px;
}

.download-wrapper .dl-gzh img {
  height: 150px;
  width: 150px;
}

.download-wrapper .dl-scan {
  color: #5f5f64;
  font-size: 15px;
}

.download-wrapper .dl-group {
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  display: flex;
}

.download-wrapper .group-title {
  font-size: 20px;
  font-weight: 500;
}

.package-wrapper {
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 12px;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin-top: 60px;
  padding: 40px 0;
  display: flex;
  overflow: hidden;
}

.package-wrapper h2 {
  margin: 0 0 32px;
}

@media screen and (max-width: 420px) {
  .download-wrapper {
    padding-left: 8px;
    padding-right: 8px;
  }

  .download-wrapper #app-qr-code {
    margin-right: 10px;
  }

  .download-wrapper .dl-btn {
    width: 180px;
  }

  .download-wrapper .dl-btn svg {
    margin-left: 14px;
  }
}

.buy-modal {
  width: 280px;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  display: flex;
}

.buy-modal .buy-summary {
  padding: 0 0 20px;
  font-size: 15px;
}

.buy-modal .buy-summary b {
  font-size: 16px;
}

.buy-modal .buy-confirm {
  margin: 0 0 20px;
}

.buy-modal .buy-confirm button {
  width: 220px;
  height: 40px;
  background-color: #4fa072;
  font-weight: 500;
}

.buy-modal .buy-qr-desc {
  color: #7b7b7d;
  margin-top: 15px;
}

.buy-modal .finish-ico {
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #4fa072;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.buy-modal .finish-title {
  margin-top: 30px;
  font-size: 15px;
}

.buy-modal .finish-detail {
  color: #5f5f64;
  margin-top: 10px;
  font-size: 15px;
}

.buy-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 60px 20px 0;
  display: flex;
  overflow: auto;
}

.buy-wrapper .upgrade-title {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
}

.buy-wrapper .back-btn {
  width: 160px;
  border: 0;
  flex-shrink: 0;
  margin-top: 20px;
  font-size: 15px;
}

.buy-price-wrapper {
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding: 40px 0;
  display: flex;
}

.buy-price-wrapper h2 {
  margin: 0 0 32px;
}

.buy-price-wrapper section {
  align-items: center;
  margin-top: 16px;
  font-size: 15px;
  display: flex;
}

.buy-price-wrapper section header {
  width: 75px;
}

.buy-price-wrapper .buy-price-list {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}

.buy-price-wrapper .buy-item {
  width: calc(50% - 10px);
  cursor: pointer;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  margin: 10px 0;
  padding: 20px;
}

.buy-price-wrapper .buy-item .buy-price-header {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.buy-price-wrapper .buy-item .buy-price-header .buy-total {
  width: 90px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  display: flex;
}

.buy-price-wrapper .buy-item .buy-price-header .buy-total span {
  margin-left: 4px;
  padding-top: 3px;
  font-size: 15px;
  display: block;
}

.buy-price-wrapper .buy-item .buy-price-header .buy-present {
  white-space: nowrap;
  height: 28px;
  background: #ffd645;
  border-radius: 4px;
  align-items: center;
  padding: 0 8px;
  display: flex;
}

.buy-price-wrapper .buy-item .buy-price-header .buy-present span {
  margin: 0 2px;
  font-size: 15px;
  font-weight: 700;
}

.buy-price-wrapper .buy-item .buy-price-footer {
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  display: flex;
}

.buy-price-wrapper .buy-item .buy-price-footer button {
  width: 90px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
}

.buy-price-wrapper .buy-item .buy-price-footer button span {
  margin-left: 4px;
  font-size: 15px;
}

.buy-price-wrapper .buy-item:hover {
  border-color: #666;
}

.buy-price-wrapper .buy-item.selected {
  background: #edfaf2;
  border-color: #4fa072;
}

.buy-faqs {
  opacity: 0.9;
  max-width: 800px;
  width: 100%;
  padding-bottom: 50px;
}

.buy-faqs h3 {
  margin: 36px 0 10px;
}

.buy-faqs .faq-item > div {
  font-size: 15px;
  line-height: 1.5;
}

.buy-invite {
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
}

.buy-invite .invite-title {
  font-size: 20px;
  font-weight: 500;
}

.buy-invite .invite-desc {
  color: #555;
  margin-top: 16px;
  font-size: 15px;
}

.buy-invite .invite-addr {
  margin-top: 12px;
}

.buy-invite .invite-addr input {
  height: 36px;
  width: 320px;
  text-align: center;
  color: #444;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin: 0;
  padding: 0;
  display: flex;
}

.buy-invite .invite-addr input:active {
  background: #f0f0f0;
}

@media screen and (max-width: 560px) {
  .buy-price-wrapper .buy-item {
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    padding: 16px;
    display: flex;
  }

  .buy-price-wrapper .buy-item .buy-price-header .buy-total {
    justify-content: flex-start;
    margin-right: 6px;
  }

  .buy-price-wrapper .buy-item .buy-price-footer {
    justify-content: flex-end;
    padding-top: 0;
    display: flex;
  }

  .buy-price-wrapper .buy-item .buy-price-footer .button {
    width: 70px;
  }
}

.qyai-menu-mask {
  width: 100%;
  height: 100%;
  background: 0 0;
  position: fixed;
  top: 0;
  left: 0;
}

.qyai-menu {
  z-index: 1;
  box-sizing: border-box;
  background: #fff;
  border-radius: 6px;
  padding: 6px;
  position: absolute;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2);
}

.qyai-menu .qyai-menu-item {
  height: 36px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border-radius: 6px;
  flex-shrink: 0;
  align-items: center;
  padding: 0 12px;
  display: flex;
}

.qyai-menu .qyai-menu-item:hover {
  background: #f3f3f3;
}

.qyai-menu .qyai-menu-item.menu-danger {
  color: #fa453b;
}

.qyai-menu .qyai-menu-split {
  height: 1px;
  background: #eee;
  margin: 6px 0;
}

.qyai-menu a {
  color: inherit;
}
.button {
  height: 36px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  white-space: nowrap;
  background: #10a37f;
  border: none;
  border-radius: 5px;
  outline: none;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  font-size: 14px;
  text-decoration: none;
  display: flex;
}

</style>
