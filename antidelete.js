
module.exports = {
  name: 'antidelete',
  type: 'event',
  async exec(event, sock) {
    const { remoteJid, message, messageStubType, participant } = event;

    if (messageStubType === 91 && message?.protocolMessage?.type === 0) {
      try {
        const originalMsg = message.protocolMessage;

        // Re-send deleted message to group or inbox
        await sock.sendMessage(remoteJid, {
          text: `⚠️ *Ujumbe uliyofutwa na* @${participant.split('@')[0]}:\n\n_(${originalMsg.key?.id})_`,
          mentions: [participant]
        });

        if (originalMsg?.key?.id) {
          // Try to resend actual message (text/image/etc)
          const deletedMsg = await sock.loadMessage(remoteJid, originalMsg.key.id);
          if (deletedMsg?.message) {
            await sock.sendMessage(remoteJid, deletedMsg.message, { quoted: deletedMsg });
          }
        }
      } catch (err) {
        console.error('AntiDelete Error:', err);
      }
    }
  }
};
