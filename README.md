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
            "Ai Ohto from wondering egg priority in Autodesk Sketchbook 🔥🔥🔥 https://t.co/ZGhCfgEtfw",
            "RT @ADSK_Inventor: Getting your Inventor model files to Fusion 360 is easier than ever with the new Send to Fusion 360 tool inside of Inven…",
            "Have you registered yet? \nISO 19650 &amp; Autodesk Construction Cloud. \n🗓️ June 24th, 2021, 11 am IST\nRegister:… https://t.co/jwuFSsSx5V",
            "@Naopon140703 そうなのですよ(*^◯^*)最初アイビスに慣れずに無料で探してたら、Autodesk sketchbookに出会いまして！なおぽんさんの身近な先輩さん！ナイスです♪私も使いこなすの全然ですがww休憩しな… https://t.co/9sjfpaZJJ9",
            "#AutoCAD 2020.1.4 Update\n\nDespite the current version of AutoCAD being 2022 #Autodesk still provide updates for pri… https://t.co/eNf2mRMSlD",
            "RT @conniebomaye: Devastated to learn of @DonWestDeals lymphoma diagnosis. Sending all my love to one of the best people ever involved in w…",
            "@zero00Zes ゼストさん、もう「Autodesk sketchbook」を使ってたのですか!?\nやったぁ～💖身近に先輩がいた喜び✊☺️\nアイビスペイントもまだまだ勉強不足なのに、無料に釣られちゃった😂私の頭、頑張れー（笑）",
            "@k_ragain ありがとうございます！\n\n起きたら目前にいる妖精さんいいですよね！\n\nこちらの太陽はAutodeskの「sketchbook」というアプリで使える「グローブラシ」を使って描いております。\nおすすめです。",
            "Autodeskの｢sketchbook｣のグローブラシを使えば太陽光が楽にかける",
            "@Naopon140703 わー(*´∀｀*)わんちゃん可愛いです(ToT)\nなおぽんさん！私がおすすめしようと思っていた\nAutodesk Sketchbook\n使われてて嬉しいです😂操作難しいと思いますがこのアプリ、絵心と近い… https://t.co/VTCh2JcVn0"
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
        "message": "Nothing in here..🧐"
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