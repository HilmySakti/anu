let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO\nSaya SAGIRI BOT\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam/Mengejek Bot/Membandingkan Sagiri Bot Dengan Bot Lain = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/H4IT8u20a6bDQsI1pGtBj2\n\nSubscribe Me\nYT : HILMY GAMING 87",
                        "description": "*© HilmySakti*",
                        "buttonText": "PILIH DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nBy HilmySakti",
                                        "rowId": "#groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler