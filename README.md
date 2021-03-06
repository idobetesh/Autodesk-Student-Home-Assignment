# Home-Assignment

## Live API on Heroku
`https://stormy-springs-57792.herokuapp.com/`

## Examples:
### 1. Get machine current status:   
`https://stormy-springs-57792.herokuapp.com/health`
#### Response:
    {
        "OS_name": "Linux",
        "platform_version": "v10.24.1",
        "memory_usage": 97.2796,
        "CPU_usage": 60.6211
    }
### 2. Get 10 recent tweets containing the word 'Autodesk':
`https://stormy-springs-57792.herokuapp.com/tweets?query=Autodesk`
#### Response:
    {
        "tweets": 
        [
            "Ai Ohto from wondering egg priority in Autodesk Sketchbook ð¥ð¥ð¥ https://t.co/ZGhCfgEtfw",
            "RT @ADSK_Inventor: Getting your Inventor model files to Fusion 360 is easier than ever with the new Send to Fusion 360 tool inside of Invenâ¦",
            "Have you registered yet? \nISO 19650 &amp; Autodesk Construction Cloud. \nðï¸ June 24th, 2021, 11 am IST\nRegister:â¦ https://t.co/jwuFSsSx5V",
            "@Naopon140703 ãããªã®ã§ãã(*^â¯^*)æåã¢ã¤ãã¹ã«æ£ããã«ç¡æã§æ¢ãã¦ãããAutodesk sketchbookã«åºä¼ãã¾ãã¦ï¼ãªãã½ãããã®èº«è¿ãªåè¼©ããï¼ãã¤ã¹ã§ãâªç§ãä½¿ãããªãã®å¨ç¶ã§ããwwä¼æ©ããªâ¦ https://t.co/9sjfpaZJJ9",
            "#AutoCAD 2020.1.4 Update\n\nDespite the current version of AutoCAD being 2022 #Autodesk still provide updates for priâ¦ https://t.co/eNf2mRMSlD",
            "RT @conniebomaye: Devastated to learn of @DonWestDeals lymphoma diagnosis. Sending all my love to one of the best people ever involved in wâ¦",
            "@zero00Zes ã¼ã¹ãããããããAutodesk sketchbookããä½¿ã£ã¦ãã®ã§ãã!?\nãã£ããï½ðèº«è¿ã«åè¼©ãããåã³ââºï¸\nã¢ã¤ãã¹ãã¤ã³ããã¾ã ã¾ã åå¼·ä¸è¶³ãªã®ã«ãç¡æã«é£ããã¡ãã£ãðç§ã®é ­ãé å¼µãã¼ï¼ç¬ï¼",
            "@k_ragain ãããã¨ããããã¾ãï¼\n\nèµ·ãããç®åã«ããå¦ç²¾ããããã§ããã­ï¼\n\nãã¡ãã®å¤ªé½ã¯Autodeskã®ãsketchbookãã¨ããã¢ããªã§ä½¿ãããã°ã­ã¼ãã©ã·ããä½¿ã£ã¦æãã¦ããã¾ãã\nããããã§ãã",
            "Autodeskã®ï½¢sketchbookï½£ã®ã°ã­ã¼ãã©ã·ãä½¿ãã°å¤ªé½åãæ¥½ã«ããã",
            "@Naopon140703 ãã¼(*Â´âï½*)ããã¡ããå¯æãã§ã(ToT)\nãªãã½ãããï¼ç§ããããããããã¨æã£ã¦ãã\nAutodesk Sketchbook\nä½¿ããã¦ã¦å¬ããã§ãðæä½é£ããã¨æãã¾ãããã®ã¢ããªãçµµå¿ã¨è¿ãâ¦ https://t.co/VTCh2JcVn0"
        ]
    }

### 3. When missing a query:
`https://stormy-springs-57792.herokuapp.com/tweets?query=`
#### Response:
    {
        "message": "Invalid query"
    }

### 4. On any other route:
`https://stormy-springs-57792.herokuapp.com/any-other-route`
#### Response:
    {
        "message": "Nothing in here..ð§"
    }   



## Run Locally
1. Make sure to have docker-CLI installed on your machine<br>
2. Navigate to the project directory 
3. In the tweet.js file insert your twitter private keys as follow: <br>
####
        const T = new Twit({
            consumer_key: <YOUR_CONSUMER_KEY>,
            consumer_secret: <YOUR_CONSUMER_SECRET>,
            access_token: <YOUR_ACCESS_TOKEN>,
            access_token_secret: <YOUR_ACCESS_TOKEN_SECRET>
        });
4. Build an image from a Dockerfile: `$docker build . -t "v1"`<br>
5. Run docker on port 3000: `$docker run -p 3000:3000 v1:latest`<br>
6. The service is now available at `http://localhost:3000/`