# lezkushCypherX WhatsApp Bot

**lezkushCypherX** ni WhatsApp bot yenye uwezo wa kudhibiti group, kutuma stickers, kucheza media (music/movies), kuendesha test commands na mengineyo, ikiwa imejengwa kwa matumizi ya watumiaji wa kawaida na ma-admin.

## Features

- Admin 1 & Admin 2 command control (kick, ban, hack, group tools)
- Media controls (play music, movie, video, image)
- General purpose commands (AI, weather, quotes, etc.)
- WhatsApp related commands (group info, dp updates, etc.)
- Command grouping kwa urahisi wa matumizi

## Installation

### 1. Clone repo:
```bash
git clone https://github.com/yourusername/lezkushCypherX.git
```

### 2. Install dependencies:
```bash
npm install
```
Au kama ni Python:
```bash
pip install -r requirements.txt
```

### 3. Add environment variables:
Unda file `.env` kisha ongeza keys zako kama:
```
API_KEY=your_api_key_here
SESSION_ID=your_session_id_here
```

### 4. Run the bot:
```bash
npm start
```
Au kwa Python:
```bash
python bot.py
```

## Deployment (Render.com)

- Create a new web service
- Connect GitHub repo
- Set build command:
  ```bash
  npm install
  ```
- Set start command:
  ```bash
  npm start
  ```
- Add environment variables on Render dashboard

## Command Grouping

### Admin 1 Commands
- `kick`
- `kick all`
- `ban`
- `banning group`
- `mute`
- `unmute`

### Admin 2 Commands
- `hack`
- `hacker group`
- `H-I logo`
- `promote`
- `demote`

### General Commands
- `help`
- `quote`
- `weather`
- `test`
- `about`
- `ai`

### Media Commands
- `play`
- `movie`
- `ytmp3`
- `image`
- `video`
- `download`

### WhatsApp Commands
- `groupinfo`
- `setdp`
- `getdp`
- `linkgroup`
- `invite`

## Credits

- Bot developed by: **BMambo**
- Powered by: Node.js / Python, Render.com