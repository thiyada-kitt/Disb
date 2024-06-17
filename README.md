## Disb
### Discord bot 
> For help with education and entertainment

#### Main feature!

- Generates replies using ChatGPT official API
- Send reminders when it's time to study as configured
- Turn music on and off and access music on yt
 
#### [1] Generates replies using ChatGPT official API
Engage in natural language conversations with ChatGPT 
#### [2] Send reminders when it's time to study as configured
reminder system - remind users per their request 
#### [3] Turn music on and off and access music on yt
 Enjoy a wide range of music from YouTube 
 
**constraint!** - In the preliminary reminder section It is configured only in the class schedule of the repository owner. change it to your own!!!

---
#### Setup project
- Clone the repository
- Cd discord-bot and Install Dependencies
- Create a .env file in the project root and add your Discord Bot token: `BOT_TOKEN=""`
- Invite bot to your server using the OAuth2 URL Generator
- Start the Bot: yarn dev-load or npm start or node index.js// to load register the commands and start the bot with nodemon
- yarn dev or pm2 start index.js// to start the bot with nodemon

#### Include all command!
`/prompt [used for chatgpt]`
`/play [song name or URL]`
`/stop`
`/pause`
`/resume`
`/info`
`/quit`
`/shuffle`
`/skip`
`/skip to [song number]`
