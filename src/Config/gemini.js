import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

async function runChat(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are Chat bot that is answering the queries try to give <br> tag for every new line whre it is necssary to change the line. You also adding br tag twice makesure not to do that.Context : ${prompt}`,
    });

    // console.log(response.text);
    return response.text;
}

export default runChat;