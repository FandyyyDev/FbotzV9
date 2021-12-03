// SILAHKAN KALIAN ATUR SESUAI KEINGINAN KALIAN :)
// NO ENC ALL FITUR? CHAT ME 🥴
// BY HANN SYKES | YOUTUBE : HannSykes
/*++++++++++++++++++++++++++++++++++++++++++++*/

// UCAPAN WELCOME
const ucapan = (num, mdata, pushname) => {
	return `Hello, @${num.split('@')[0]} 👋
Selamat Datang Di *_${mdata.subject}_*
Semoga Harimu Menyenangkan`
}

exports.ucapan = ucapan

// FOOTER WELCOME
const footerwelkam = `SUBREK HANNSYKES & FBOTZ YT`
exports.footerwelkam = footerwelkam


// UCAPAN GOODBYE
const goodbye = (num, mdata, pushname) => {
  return `Sayonaraa! @${num.split('@')[0]}👋`
  }
exports.goodbye = goodbye


// FOOTER GOODBYE
const footergoodbye = `SUBREK HANNSYKES & FBOTZ YT`
exports.footergoodbye = footergoodbye