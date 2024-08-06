//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/IM57veJplECHwSiwI2iXaY";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263714830715";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJ3ZFJTSFNIbjNlbktMMm1ZTFM3Z2ZCMGlESi96ZHEzcW9HS2lhbFlHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXhocjdRK1U3Q05yRFd4UW5JdTA5Rm5lcVBJWFZYcU42dThRYVZnUENFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPT3RxaWthTm9TMXRkUjVaM09BdWNwZS9OV1cxa1hENnA0OG9ZdzZqN1dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUUN3dFppMjZrcVY2TENIUTlydGUyRzk4akIwK3NLaXl2VG0yVi9va0RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NWklMbHJWZG80amYvOVRDVkdaSi9LNFJHRnFXYnhZTTVFR3oxV0F3bTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxnalJNdGZrNzdrVVFhMHdXQlNvdkVoR2RPUjU4T2RaanVtbjRpMWFyU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0daYU1Sckk1SitFa214U0UrV0xlQ1VFNjRwYmVBUTZPU2lHQ0JKR2xtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXpPdEdUN0N1TmVoZ1F3VW12ejZiQ21KSUU0RVBPTGZjYTNud1FXMUhFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqTmdVNXlvbW5oL1lORllBSjZvSHg4aFhqWVY5c3dsbWNPTncrSFBQeHNUbnFTRXJ1cmMwZlBYTzVsS0YzZXVWTmsvVHA1SXlWOXZZOUR0S1NtTGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IlhWQzlmSDVoNWh5NXE4T1paY0lTVDY3UHNuSEo4dE9HWENtcE8rekt4RlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxKYURLSjQ3VFVhSWV3ZENUOWNma0EiLCJwaG9uZUlkIjoiYWJkZjYwZmQtZGJkOS00NWQ3LWI4YzctODFlNzhmYTBkMjBhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhCVmgrUlRUNWtSOHphcjJab00vcFJLWGxUTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMnh0SkkrdUM1cy9hTmNYWXdTUWNrN0dWMXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUVYSFpMWEsiLCJtZSI6eyJpZCI6IjI2MzcxNDgzMDcxNTo2NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3ozMHA4RUVPNk54N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUFlBOTdpWlVPMkhtTUVnNGMvdFhzbElLM3djdXF4SDdiOEh0ek03VkZIbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRDh0ai9NUHlYTjV4OC9LZnZPQ3ZrUGdMZ000cDg4b25yenRuQXBOQklzMWJaNjF6NkdNS3EvZmptYk5JZ1pxdW1ydml1SllUc2VNcXZIa2NoUHBzREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImdWWXArRnJoSDdYOUoxTzNnb0xkNGtBWHoyNWJzZEtWblZOK3FQRmhaVTBTeVdZVEtweFphR1JHb0FtRUh1M0hNU0phZXJ1Z2JvSXBhWXJKWXBQZGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0ODMwNzE1OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQyQVBlNG1WRHRoNWpCSU9IUDdWN0pTQ3Q4SExxc1IrMi9CN2N6TzFSUjYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5MjY4NDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUc1In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOSSLAST-V2™`",
  author: process.env.PACK_AUTHER || "BOSSLAST-V2",
  packname: process.env.PACK_NAME || "B O S S L A S T",
  botname: process.env.BOT_NAME || "BOSSLAST-V2",
  ownername: process.env.OWNER_NAME || "BOSSLAST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
