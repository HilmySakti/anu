let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Hilmy Ganteng >\\\<, Ada Yang Manggil😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@SAGIRI/i
handler.command = new RegExp

module.exports = handler