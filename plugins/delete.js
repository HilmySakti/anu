let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info', 'owner']

handler.command = /^del(ete)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.off = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false


module.exports = handler
