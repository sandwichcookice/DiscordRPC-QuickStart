須知: 

    本文件為Discord RPC的使用教學文件，內容為如何開始使用Discord RPC。
    你必須要有一個Discord帳號，並且在Discord的設定裡面開啟「開發人員模式」，才能夠使用Discord RPC。
    在步驟中會需要你前往discord developer portal，並且創建一個應用程式，然後取得Client ID。


步驟:

    1. 安裝node.js  https://nodejs.org/en <===網址

    (可選) 安裝 yarn (yarn是什麼放在補充文件裡面) https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

    2. 進入你創建好的資料夾 (右鍵->開啟命令提示字元)

    3. 輸入以下指令
    ```
    npm :
        npm init

    yarn :
        yarn init

    ```
    4. 完成後，在資料夾創建一個JS的檔案 名子可以自由選擇，這邊使用index.js

    5. 輸入以下指令，安裝discord-rpc套件
    ```
    npm :
        npm install discord-rpc --save
        npm install dotenv

    yarn :
        yarn add discord-rpc
        yarn add dotenv

    ```

    6. 完成安裝之後，前往discord developer portal https://discord.com/developers/applications/

    7. 點選「New Application」(圖片附件1)

    8. 輸入應用程式名稱，並且點選「Create」(圖片附件2) (記住名字不能包含discord)

    9. 記錄下你的 APPLICATION ID , PUBLIC KEY , TOKEN (圖片附件3,4)

    10. 創建一個.env 檔案，並且將你的 APPLICATION ID 、 PUBLIC KEY 、 TOKEN 填入其中 (注意：.env檔案請勿上傳到github，不過本文件會全部上傳，以便參考)

    11. 將以下程式碼複製貼上到index.js檔案中
    ```
    const DiscordRPC = require('discord-rpc');

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
    
    ```

    12. 執行指令
    ```
    npm :
        npm start

    yarn :
        yarn start

    ```

    13. 完成！你應該會看到Discord的狀態列上出現一個名為「Hello World」的訊息，並且有一個圖片。

    14. 你可以修改程式碼中的details、state、largeImageKey、largeImageText、smallImageKey、smallImageText等參數，來自訂你的Discord狀態。

    15. 你也可以在Discord的設定裡面，點選「開發人員模式」，並且在「Rich Presence」裡面，點選「Test」，來測試你的Discord狀態。

    16. 祝你使用愉快！
