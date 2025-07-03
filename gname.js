
module.exports = {
  name: 'gname',
  aliases: ['groupname', 'gpname'],
  category: 'group',
  desc: 'Angalia jina la group',
  use: '.gname',
  async exec(m, sock) {
    if (!m.isGroup) return m.reply('❌ Hii command inafanya kazi kwenye group tu.');

    try {
      let groupMeta = await sock.groupMetadata(m.chat);
      let name = groupMeta.subject;

      await sock.sendMessage(m.chat, {
        text: `📛 *Group Name:* ${name}`
      }, { quoted: m });

    } catch (err) {
      console.error('Gname Error:', err);
      m.reply('⚠️ Haikuwezekana kupata jina la group.');
    }
  }
};
