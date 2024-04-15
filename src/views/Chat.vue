<template>
  <div class="qyai-page">
    <div id="page-header" class="">
      <img class="header-logo" :src="require('@/assets/logo.svg')" @click="resetAll" />
      <div class="header-center">
        <div class="switch-button">
          <div :class="now_tab == 1 ? 'switch-active' : ''" @click="swichTab(1)">
            问答
          </div>
          <!-- <div :class="now_tab == 2 ? 'switch-active' : ''" @click="swichTab(2)">
            写作
          </div> -->
          <div :class="now_tab == 3 ? 'switch-active' : ''" @click="swichTab(3)">
            绘画
            <span>New</span>
          </div>
        </div>
      </div>
      <div class="header-right">
        <div class="button upgrade-btn" @click="swichTab(4)">
          <div class="upgrade-btn-ico">
            <img :src="require('@/assets/vip.svg')" />
          </div>
          <div class="upgrade-btn-text">购买Key</div>
        </div>
        <div class="header-user-wrapper">
          <div class="header-user-btn" @click="swichTab(5)">
            <img :src="require('@/assets/user.svg')" alt="" />
            <div class="header-user-name">账户</div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-wrapper" v-if="now_tab == 1">
      <div class="chat-body" id="article-wrapper">
        <div class="chat-questions" v-if="chat_list.length > 0">
          <div class="ask-item" v-for="(item, index) in chat_list" :key="index">
            <div class="ask-question">
              <div class="ask-photo">
                <img :src="require('@/assets/user.svg')" alt="" />
              </div>
              <div class="ask-text">{{ item.prompt }}</div>
            </div>
            <div class="ask-answer" @click="scrollToBottom">
              <div class="ask-photo">
                <div class="ask-photo-ai">
                  <img :src="require('@/assets/openai.svg')" alt="" />
                </div>
              </div>
              <div class="ask-text" :id="'text-' + index" v-html="item.html"></div>
            </div>
            <div class="ask-operations" v-if="item.done">
              <div class="operations_item copy" :data-clipboard-target="'#text-' + index" title="复制文本">
                <img :src="require('@/assets/copy.svg')" />
                <span>复制</span>
              </div>
              <div class="operations_item" title="删除" @click="delAns(index)">
                <img :src="require('@/assets/trash.svg')" />
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>

        <div class="chat-tutorial" v-else>
          <header>
            <h1>您可以这样提问</h1>
          </header>
          <div class="chat-examples">
            <div class="chat-example" v-for="(item, index) in ask_demos" :key="index" @click="doAsk(item)">
              <div class="chat-exp-text">{{ item }}</div>
            </div>
          </div>
          <div class="chat-about">
            <span>每次提问消耗</span>
            <div @click="swichTab(4)">2个AI币</div>
          </div>
          <div class="chat-notice">
            <div>
              禁止提交违规内容，违规内容会被系统拦截，严重者可能会被封禁账号。
            </div>
          </div>
        </div>
      </div>
      <div class="chat-footer">
        <div class="chat-footer-bar">
          <div class="chat-left">
            <textarea class="chat-input" v-model="prompt" :placeholder="prompt_holder" rows="1"></textarea>
          </div>
          <div class="chat-right">
            <div class="chat-submit" @click="ask">
              <img :src="require('@/assets/send.svg')" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="write-wrapper" v-if="now_tab == 2">
      <div class="write-body">
        <div class="write-nav">
          <div class="write-tab" :class="write_mode == 1 ? 'tab-active' : ''" @click="write_mode = 1">
            内容写作
          </div>
        </div>
        <div class="box-write">
          <div class="write-input-container">
            <input type="textarea" v-model="write_title" class="write-input" placeholder="需要写点什么？请在此表达你的想法" />
            <div placeholder="想要AI如何优化，表达您的想法（可选）" class="write-input instruction-input" contenteditable="plaintext-only"
              v-if="write_mode == 2">
              {{ edit_title }}
            </div>
            <div class="footer-submit">
              <button class="button size-l" @click="doWrite">提交</button>
              <div class="footer-clear" v-if="write_title" @click="clearTitle">
                清空
              </div>
            </div>
          </div>
          <div class="write-examples" v-if="write_result.length == 0">
            <div class="write-exp-title">示例：</div>
            <ul>
              <li v-for="item in write_demos" @click="writeFrom(item)" :key="item.id">
                {{ item }}
              </li>
            </ul>
            <div class="write-about">
              <span>每次创作消耗</span>
              <div>2个AI币</div>
            </div>
          </div>
        </div>
        <div class="box-result" v-if="write_result">
          <div class="write-input-container write-result">
            <div class="write-complete-text" id="write-result" v-html="write_result_html"></div>
            <div class="ask-operations" v-if="write_done">
              <a class="operations_item copy" data-clipboard-target="#write-result" title="复制文本">
                <img :src="require('@/assets/copy.svg')" /><span>复制</span></a>
              <div title="删除" class="operations_item" @click="write_result = ''">
                <img :src="require('@/assets/trash.svg')" />
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="draw-wrapper" v-if="now_tab == 3">
      <div class="draw-body">
        <div class="chat-about">
          <p>更强更好用的AI绘图上线了，欢迎试用👉<a href="https://ai.aihack.club/" target="_blank">点击进入</a></p>
        </div>
        <div v-if="!is_draw && draw_result.length == 0">
          <div class="draw-fields-container">
            <div>
              <div class="field-title">绘画提示</div>
              <input v-model="draw_title" placeholder="描述绘画要求，越详细越好" class="draw-input"
                contenteditable="plaintext-only" />
            </div>
            <div>
              <div class="field-title">图片尺寸</div>
              <div class="size-select">
                <div v-for="(item, index) in draw_sizes" :key="index" :class="draw_size == item ? 'size-active' : ''"
                  @click="chooseSize(item)">
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="footer-submit">
            <button class="button size-l" @click="draw">提交</button>
          </div>

          <div class="chat-about">
            <span>每次绘画消耗</span>
            <div @click="swichTab(4)">5个AI币</div>
          </div>
        </div>

        <div class="draw-result" v-if="is_draw || draw_result.length > 0">
          <div class="draw-showcase" v-if="is_draw">
            <div class="draw-progress">
              <div class="draw-progress-thumb">
                <div style="width: 0px"></div>
              </div>
            </div>
            <div class="draw-tip progress-tip">AI正在创作...</div>
          </div>

          <div class="draw-showcase-img" v-if="draw_result.length > 0">
            <img class="draw-result-img" :src="draw_result" alt="" />
          </div>

          <div class="draw-info">
            <button class="button" @click="draw_result = ''">返回</button>
            <a class="button download-btn" :href="draw_result" target="_blank" download="draw.png" rel="noreferrer">下载</a>
          </div>
          <div class="draw-prompt">
            <div class="prompt-title">绘画提示</div>
            <div class="prompt-text">{{ draw_title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="buy-wrapper" v-if="now_tab == 4">
      <h1 class="upgrade-title">购买Key</h1>
      <div class="buy-faqs">
        <!-- <div class="faq-item">
          <h3>更新提示</h3>
          <div>
            目前本站已使用最新的GPT-4接口，欢迎体验。
          </div>
        </div> -->
        <div class="faq-item">
          <h3>Key的价格？</h3>
          <div>
            定价：10元/个，每个Key包含<span>200个</span>AI币 有效期为激活后<span>2个月</span>
          </div>
        </div>
        <div class="faq-item">
          <h3>AI币是如何抵扣用量的？</h3>
          <div>
            在使用服务时进行抵扣，一次AI问答 = 2个AI币，一次AI写作 =
            2个AI币，一次AI绘画 = 5个AI币。
          </div>
        </div>
        <div class="faq-item">
          <h3>为何必须购买才能使用？</h3>
          <div>主要用于抵扣采购云服务器及接口维护费用 😔</div>
        </div>
        <div class="faq-item">
          <h3>如何购买Key？</h3>
          <div style="margin-bottom: 10px">
            <p>
              在线购买：付款后自动发货
              <a href="https://shop.51fkba.com/links/02F3B2DE" target="_blank">👉<strong
                  style="color: red">点击购买</strong></a>
            </p>
          </div>
          <div>
            <p>
              收款码方式：目前支持微信或支付宝付款码，付款时请<strong>备注您的邮箱</strong>，支付成功1小时内会将Key发送到您的邮箱。
            </p>

            <!-- <span class="show_qr" @click="show_qr = true">👉显示收款码</span> -->
          </div>
          <div class="qr_box">
            <img :src="require('@/assets/wepay.jpg')" width="100%" />
            <img :src="require('@/assets/alipay.jpg')" width="100%" />
          </div>
        </div>

        <div class="faq-item">
          <h3>私人定制服务</h3>
          <div>
            可帮您搭建和本站一样的网站，也可以按需定制开发，有意向可以<a style="color: #10a37f"
              href="https://chatbot.weixin.qq.com/webapp/dIYgk1431XFZISBOGaffnlvNSbcQQR?robotName=ChatGPT"
              target="_blank"><b>联系客服</b></a>
            或加Q 290805404。(注：本站后端服务仅限PHP语言)
          </div>
        </div>
      </div>
    </div>

    <div class="my-packages-wrapper" v-if="now_tab == 5">
      <div class="my-packages-container" v-if="key_info">
        <h1>我的余额</h1>
        <p class="now_key">
          当前Key: {{ api_key }}
          <span style="cursor: pointer" @click="removeKey">更换</span>
          <br> 到期时间：{{ formatDate(key_info.term) }}
        </p>
        <div class="my-balance-container">
          <div class="my-balance">{{ key_info.num }}<span>AI币</span></div>
        </div>
      </div>
      <div class="my-packages-container" v-else>
        <h1>设置Key</h1>
        <div class="my-balance-container">
          <input type="text" class="key_input" v-model="api_key" placeholder="输入您获取的Key" />
          <div class="button upgrade-btn" @click="saveKey">
            <div class="upgrade-btn-text">保存</div>
          </div>
        </div>
        <div class="chat-about">
          <span>还没有key?</span>
          <div @click="swichTab(4)">点此获取</div>
        </div>
      </div>
    </div>
    <div class="kf_ico" @click="goKf" v-if="!api_key">
      <img :src="require('@/assets/kf.svg')" alt="" />
      <p>客服</p>
    </div>
  </div>
</template>
<script>
import ClipboardJS from "clipboard";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import MarkdownIt from "markdown-it";
var moment = require("moment");
export default {
  data() {
    return {
      ask_demos: [
        "推荐几个送给父母的生日礼物",
        "写一份婚礼邀请函。",
        "清朝倒数第二个皇帝是谁？",
        "写一个产品经理招聘JD",
        "写一个vue.js 组件模板",
        "三体小说讲了个什么故事？",
        "周杰伦一共几张专辑",
        "AI会替代人类工作吗？",
        "写一首赞美春天的诗",
      ],
      prompt: "",
      prompt_holder: "请输入您的问题",
      result: [],
      templates: [],
      loading: false,
      loading_txt: "AI正在思考中",
      now_tab: 1,
      chat_list: [],
      write_mode: 1,
      write_result: "",
      write_result_html: "",
      write_demos: [
        "写一篇关于成长的作文。",
        "写一份运营工作汇报文案。",
        "写一篇关于诚信的短文。",
      ],
      write_title: "",
      edit_title: "",
      edit_rule: "",
      draw_title: "",
      is_draw: false,
      draw_result: "",
      draw_sizes: ["256x256", "512x512", "1024x1024"],
      draw_size: "256x256",
      pending: false,
      write_done: false,
      cash: 0,
      is_ask: false,
      api_key: "",
      key_info: null,
      show_qr: false,
      alltext: "",
    };
  },
  computed: {},
  mounted() {
    new ClipboardJS(".copy");
    this.api_key = localStorage.getItem("api_key") || "";
    // this.checkKey();
  },
  methods: {
    formatDate(timestamp) {
      return moment(timestamp * 1000).format("YYYY-MM-DD HH:mm");
    },
    goKf() {
      window.open(
        "https://chatbot.weixin.qq.com/webapp/dIYgk1431XFZISBOGaffnlvNSbcQQR?robotName=ChatGPT"
      );
    },
    resetAll() {
      this.prompt = "";
      this.chat_list = [];
    },
    removeKey() {
      this.api_key = "";
      this.key_info = null;
      localStorage.removeItem("api_key");
      this.checkKey();
    },
    async checkKey() {
      let res = await this.$http.post("/app/openai/checkkey", {
        api_key: this.api_key,
      });
      if (res.errcode == 0) {
        this.key_info = res.data;
        localStorage.setItem("api_key", this.api_key);
      } else {
        this.api_key = "";
        localStorage.removeItem("api_key");
        this.$weui.alert(res.errmsg);
        this.swichTab(5);
        return;
      }
    },
    async saveKey() {
      if (this.api_key.length < 1) {
        this.$weui.alert("请填写正确的Key");
        return;
      }

      this.checkKey();
    },
    parseMarkdown(text) {
      const md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) { }
          }

          return ""; // use external default escaping
        },
      });
      return md.render(text);
    },
    scrollToBottom() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
    swichTab(tab) {
      this.now_tab = tab;
    },
    delAns(index) {
      this.chat_list.splice(index, 1);
    },
    async ask() {
      if (this.is_ask) {
        return;
      }
      if (this.api_key.length < 1) {
        this.$weui.alert("请填写Key后使用");
        this.swichTab(5);
        return;
      }
      var that = this;
      if (that.prompt.length < 1) {
        this.$weui.alert("请填写要提问的内容");
        return;
      }

      let res = await this.$http.post("/app/openai/checkkey", {
        api_key: that.api_key,
      });
      if (res.errcode == 0) {
        that.is_ask = true;

        that.chat_list.push({
          prompt: that.prompt,
          message: "",
          html: "<p>AI思考中...</p>",
          done: false,
        });





        //  let res = await this.$http.post("/app/openai/ask", {
        //   q: that.prompt,
        //   api_key: that.api_key,
        // });
        // if (res) {
        //   that.is_ask = false;
        //   that.chat_list[that.chat_list.length - 1].html = that.parseMarkdown(res);
        //   document.getElementById("article-wrapper").scrollTop = 100000;
        // }






        const url =
          "/app/openai/stream?q=" + that.prompt + "&api_key=" + that.api_key;
        that.prompt = "";


        const eventSource = new EventSource(url);



        eventSource.addEventListener("open", (event) => {
          console.log("连接已建立", JSON.stringify(event));
          that.pending = true;
          console.log(that.chat_list[that.chat_list.length - 1].message);
        });




        eventSource.addEventListener("message", (event) => {


          if (that.pending) {
            that.pending = false;
            that.chat_list[that.chat_list.length - 1].message = "";
          }



          console.log('event:', event.data)
          if (event.data == '[DONE]') {

            that.chat_list[that.chat_list.length - 1].done = true;
            console.log("连接已关闭", JSON.stringify(event.data));
            eventSource.close();

            that.chat_list[that.chat_list.length - 1].done = true;
            console.log("连接已关闭", JSON.stringify(event.data));
            eventSource.close();
            console.log(new Date().getTime(), "answer end");
            that.is_ask = false;


          } else {
            var json = eval("(" + event.data + ")");

            console.log('json:', json)
            if (json.choices[0].delta.content) {

              var content = json.choices[0].delta.content.replace(/^\n+/, '')
              that.chat_list[that.chat_list.length - 1].message += content;
              that.chat_list[that.chat_list.length - 1].html =
                that.parseMarkdown(
                  that.chat_list[that.chat_list.length - 1].message
                );

              document.getElementById("article-wrapper").scrollTop = 100000;
            }

          }

        });

        eventSource.addEventListener("error", (event) => {
          console.error("发生错误：", JSON.stringify(event));
        });

      } else {
        this.$weui.alert(res.errmsg);
      }
    },
    doAsk(qa) {
      this.prompt = qa;
      this.ask();
    },
    async doWrite() {
      if (this.is_ask) {
        return;
      }
      var that = this;
      if (this.api_key.length < 1) {
        this.$weui.alert("请填写Key后使用");
        this.swichTab(5);
        return;
      }
      if (that.write_title.length < 1) {
        this.$weui.alert("请填写要创作的内容");
        return;
      }

      let res = await this.$http.post("/app/openai/checkkey", {
        api_key: that.api_key,
      });
      if (res.errcode == 0) {
        that.is_ask = true;

        that.write_done = false;
        that.write_result_html = "AI创作中...";
        const url =
          "/app/openai/stream?q=" +
          that.write_title +
          "&api_key=" +
          that.api_key;
        that.prompt = "";
        const eventSource = new EventSource(url);
        eventSource.addEventListener("open", (event) => {
          console.log("连接已建立", JSON.stringify(event));
          that.pending = true;
        });

        eventSource.addEventListener("message", (event) => {
          if (that.pending) {
            that.pending = false;
            that.write_result = "";
          }

          //console.log("接收数据：", event);
          try {
            var result = JSON.parse(event.data);
            if (result.time && result.content) {
              that.write_result += result.content;

              that.write_result_html = that.parseMarkdown(that.write_result);
              document.getElementById("write-wrapper").scrollTop = 100000;
            }
          } catch (error) {
            console.log(error);
          }
        });

        eventSource.addEventListener("error", (event) => {
          console.error("发生错误：", JSON.stringify(event));
        });

        eventSource.addEventListener("close", (event) => {
          that.write_done = true;
          console.log("连接已关闭", JSON.stringify(event.data));
          eventSource.close();
          console.log(new Date().getTime(), "answer end");
          that.is_ask = false;
        });
        that.checkKey();
      } else {
        this.$weui.alert(res.errmsg);
      }
    },
    async draw() {
      var that = this;
      if (that.draw_title.length < 1) {
        this.$weui.alert("请填写要绘画的内容");
        return;
      }
      let res = await this.$http.post("/app/openai/checkkey", {
        api_key: that.api_key,
      });
      if (res.errcode == 0) {
        that.is_draw = true;
        let res = await this.$http.post("/app/openai/draw", {
          prompt: that.draw_title,
          size: that.draw_size,
          api_key: that.api_key,
        });
        if (res.errcode == 0) {
          that.draw_result = res.message;
          that.is_draw = false;
          that.checkKey();
        } else {
          this.$weui.alert(res.errmsg);
        }
      } else {
        this.$weui.alert(res.errmsg);
      }
    },
    chooseSize(size) {
      this.draw_size = size;
    },
    clearTitle() {
      this.write_title = "";
      this.edit_title = "";
      this.edit_rule = "";
    },
    writeFrom(title) {
      this.write_title = title;
    },
    editFrom(title) {
      this.edit_title = title;
    },
  },
};
</script>
<style lang="less" scoped>
.key_input {
  margin-right: 20px;
  border: 1px solid #10a37f;
  padding: 10px 20px;
  border-radius: 8px;
}

.now_key {
  margin-top: 20px;
  background-color: #f3fdfb;
  border: 1px solid #10a37f;
  padding: 10px 20px;
  font-size: 16px;
  color: #10a37f;
  border-radius: 8px;
}

.qr_box {
  padding: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 240px;
    margin: 0 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #10a37f;
    border-radius: 8px;
  }
}

.show_qr {
  font-weight: bold;
  cursor: pointer;
  color: #10a37f;
}

@media screen and (max-width: 700px) {
  .qr_box {
    img {
      width: 150px;
    }
  }
}

.kf_ico {
  position: fixed;
  bottom: 20vh;
  right: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: #fff;
  background-color: #10a37f;
  border-radius: 8px;
  z-index: 11;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
}
</style>
