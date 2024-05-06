const DiscordRPC = require('discord-rpc');
const dotenv = require('dotenv');

// 讀取.env 檔案
dotenv.config();

// 客戶端 ID（你在 Discord 開發者門戶中創建應用程式後獲得的）
const clientId = process.env.APPLICATION_ID;

// 初始化 DiscordRPC
DiscordRPC.register(clientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

// 在 Discord 連接成功時觸發
rpc.on('ready', () => {
  console.log('Discord Rich Presence 已啟用');
  
  // 設置 Rich Presence 狀態
  rpc.setActivity({
    details: '詳細內容',
    state: '狀態',
    // startTimestamp: new Date(),
    largeImageKey: '1',
    smallImageKey: 'small_image_key',
    instance: false,
    buttons: [
        { label: '按鈕一',url:  'https://www.google.com'},
        { label: '按鈕二', url: 'https://www.youtube.com' }
      ],
  });
});

// 登入 Discord
rpc.login({ clientId }).catch(console.error);