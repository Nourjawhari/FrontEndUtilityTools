module.exports = async function load_conversation(req, reply) {

    const userId = "support_Abed";
    const platformId = req.params.platformId;

    console.log("Platform id", platformId)
    let conversations = [
  {
    "conversationId": "chat_1",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_1",
      "participants": [
        "client_aserg8945",
        "support_ali",
        "support_Abed"
      ],
      "createdAt": "2025-07-01T10:00:00Z"
    },
    "finalMessage":{
      "content": "Send me a screenshot? 😅",
      "userId": "support_Abed",
      "type": "text",
      "timestamp": "2025-07-01T10:00:00Z"
    },
    "unreadMessages": 5
  },
  {
    "conversationId": "chat_2",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_2",
      "participants": [
        "client_lara",
        "support_rana",
        "support_Abed"
      ],
      "createdAt": "2025-07-02T11:15:00Z"
    },
    "finalMessage": {
      "content": "Can u help me please?",
      "userId": "client_lara",
      "type": "text",
      "timestamp": "2025-07-02T10:00:00Z"
    }
  },
  {
    "conversationId": "chat_3",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_3",
      "participants": [
        "client_ahmad",
        "support_nour"
      ],
      "createdAt": "2025-07-03T12:30:00Z"
    },
    "finalMessage": {
      "content": "1234-478-2937867218",
      "userId": "support_nour",
      "type": "text",
      "timestamp": "2025-07-31T10:00:00Z"
    }
  },
  {
    "conversationId": "chat_4",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_4",
      "participants": [
        "client_jane",
        "support_mike"
      ],
      "createdAt": "2025-07-04T09:45:00Z"
    },
    "finalMessage": {
      "content": "toast tastes lsaibrglasrbhr;ohw",
      "userId" :"support_mike",
      "type": "text",
      "timestamp": "2025-07-01T10:00:00Z"
    }
  },
  {
    "conversationId": "chat_5",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_5",
      "participants": [
        "support_ali",
        "support_mike",
        "support_rana",
        "support_nour"
      ],
      "createdAt": "2025-07-05T14:20:00Z"
    }
  },
  {
    "conversationId": "chat_6",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "chat_6",
      "participants": [
        "admin_lina",
        "support_nour"
      ],
      "createdAt": "2025-07-06T16:05:00Z"
    }
  },
  {
    "conversationId": "xyz",
    "platformId": 1,
    "chatMeta": {
      "conversationId": "xyz",
      "participants": [
        "support_ali",
        "admin_lina"
      ],
      "createdAt": "2025-07-07T18:40:00Z"
    },
    "finalMessage": {
      "content": " agjisaheig 💗",
      "userId" :"support_ali",
      "type": "text",
      "timestamp": "2025-08-13T12:45:05.000Z"
    }
  }
];

    let conversation = conversations.filter((conv) => conv.platformId === Number(platformId) && conv.chatMeta.participants.includes(userId))

    return conversation;
}