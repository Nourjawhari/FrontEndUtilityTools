module.exports = async function load_message(req, reply) {

    const platformId = req.params.platformId;
    const conversationId = req.params.conversationId;

    console.log("Conversation Id", conversationId)
    let messages = [
        {
            "conversationId": "chat_1",
            "senderId": "client_aserg8945",
            "type": "text",
            "content": "Hello, I need help with my account.",
            "media": null,
            "quotedMessage": null,
            "status": {
                "sentAt": "2025-07-15T05:52:12.532Z"
            },
            "platformId": 1
        },
        {
            "conversationId": "chat_1",
            "senderId": "support_ali",
            "type": "text",
            "content": "Sure, I'd be happy to assist you!",
            "media": null,
            "reactions": {
                "😁": ["support_Abed", "client_aserg8945"]
            },
            "quotedMessage": {
                "id": "msg_1",
                "senderId": "client_aserg8945",
                "preview": "Hello, I need help with my account."
            },
            "status": {
                "sentAt": "2025-07-15T04:52:12.532Z"
            },
            "platformId": 1
        },
        {
            "conversationId": "chat_1",
            "senderId": "support_Abed",
            "type": "text",
            "content": "Can you please provide your account number?",
            "media": null,
            "quotedMessage": null,
            "status": {
                "sentAt": "2025-07-15T02:15:12.532Z"
            },
            "platformId": 1
        },
        {
            "conversationId": "chat_1",
            "senderId": "client_aserg8945",
            "type": "text",
            "content": "Send me a screenshot? \uD83D\uDE05 \uD83D\uDE05",
            "media": null,
            "quotedMessage": null,
            "status": {
                "sentAt": "2025-07-16T05:52:12.532Z"
            },
            "platformId": 2
        }
    ];

    let message = messages.filter((msg) => msg.conversationId === conversationId && msg.platformId === Number(platformId))

    return message;
}