let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT BULANAN* ❭❀°━┓
┃
┃> Dapatkan ikan paus sebanyak
┃  Banyaknya dengan cara #mancing
┃  lalu kirim kan screenshot kolam
┃  kalian ke nomor owner ya! cara cek kolam?
┃  Ketik #kolam
┃> Hadiah? Jadi moderator bot selama
┃  2 bulan! pemenang akan diundi 24/10/2021!
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, 'status@s.whatsapp.net', '*Di Undi Tanggal 24/10/2021*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
