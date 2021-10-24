let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TELKOMSEL:* [081217779427]
┣➥ *Trakteer:* [https://trakteer.id/HilmyGaming87]
┣➥ *Gopay:* [081217779427]
┣➥ *Saweria:* [https://saweria.co/HilmyBot]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? wa.me/6281217779427*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
