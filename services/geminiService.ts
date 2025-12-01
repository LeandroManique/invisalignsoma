import { GoogleGenAI, Content, Part } from "@google/genai";
import { LIVIA_SYSTEM_INSTRUCTION } from "../constants";
import { ChatMessage } from "../types";

// Initialize the client strictly according to new SDK rules
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a message to the Gemini model acting as Liv.ia
 */
export const sendMessageToLivia = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // Format history for the API
    // The API expects 'user' or 'model' roles.
    // We filter out any error messages locally before sending.
    const contents: Content[] = history
      .filter((msg) => msg.id !== 'temp-error')
      .map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text } as Part],
      }));

    // Add the new message to the contents
    contents.push({
      role: 'user',
      parts: [{ text: newMessage } as Part],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Efficient model for chat
      contents: contents,
      config: {
        systemInstruction: LIVIA_SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balance between creativity and sticking to facts
        maxOutputTokens: 300, // Keep answers concise
      },
    });

    if (response.text) {
      return response.text;
    } else {
      throw new Error("No response text generated");
    }
  } catch (error) {
    console.error("Error communicating with Liv.ia:", error);
    return "Desculpe, estou tendo um pequeno problema técnico. Poderia repetir sua pergunta ou agendar uma consulta diretamente pelo botão na página?";
  }
};