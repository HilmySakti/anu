let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '6285334919428' , 'Robiah Al Dawiyah', m)
  conn.reply(m.chat, `Bukan Siapa Siapa Bang Cuma Ngisi Slot ae Bang`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
