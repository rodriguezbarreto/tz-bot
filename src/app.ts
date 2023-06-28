import { create, Whatsapp, Message } from "venom-bot";

class Bot {
    client: Whatsapp | null;

    constructor() {
        this.client = null;
    }

    async initialize() {
        try {
            this.client = await create({
                session: "session-name", // name of session
                headless: "new",
            });

            this.client.onMessage((message) => this.handleMessage(message));
        } catch (error) {
            console.error(error);
        }
    }

    async handleMessage(message: Message) {
        if (this.client) {
            if (message.body === "Hi" && message.isGroupMsg === false) {
                try {
                    const result = await this.client.sendText(
                        message.from,
                        "Welcome Venom 🕷"
                    );
                    console.log("Result: ", result); // return object success
                } catch (error) {
                    console.error("Error when sending: ", error); // return object error
                }
            }
        }
    }
}

// Initialize the bot
const myBot = new Bot();
myBot.initialize();
