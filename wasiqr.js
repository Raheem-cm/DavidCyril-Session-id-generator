const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: it_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function IT_TECH_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_it_Tech = raheem_cm({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_it_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_it_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let TI_TECH_TEXT = `
*_Session Connected By RAHEEM*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 AMAZING YOU'VE CHOSEN RAHEEM-XMD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *tiktok:* https://www.tiktok.com/@mohamedbinhuzaifa?_t=ZM-8x1vYx9obmo&_r=1
║❒ *Owner:* https://wa.me/255763111390_
║❒ *Repo:* _https://github.com/Raheem-cm/RAHEEM-XMD 
║❒ *WaGroup:* _https://chat.whatsapp.com/Jp08rEdDmao1CvCOLH2KTT
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r
║❒ *Plugins:* _https://github.com/Raheem-cm/RAHEEM-XMD 
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_raheem_cm.sendMessage(Qr_Code_By_it_Tech.user.id,{text:RAHEEM_CM_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_it_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					RAHEEM_CM_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await RAHEEM_CM_QR_CODE()
});
module.exports = router
