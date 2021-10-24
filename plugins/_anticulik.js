let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi 」

• *Gopay:* 081217779427
• *Telkomsel:* 081217779427
• *Trakteer:* https://trakteer.id/HilmyGaming87

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/HilmyShop.Official

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281217779427', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler