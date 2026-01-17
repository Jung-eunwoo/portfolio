import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini API 초기화
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

/**
 * Gemini API 호출 함수
 * @param prompt - AI에게 보낼 프롬프트
 * @param modelName - 사용할 모델 (기본: gemini-pro)
 */
export async function generateContent(prompt: string, modelName = 'gemini-pro') {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

/**
 * Gemini API 스트리밍 호출 함수
 * @param prompt - AI에게 보낼 프롬프트
 * @param onChunk - 스트림 청크가 도착할 때마다 실행될 콜백
 */
export async function generateContentStream(
  prompt: string,
  onChunk: (text: string) => void
) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContentStream(prompt);
    
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      onChunk(chunkText);
    }
  } catch (error) {
    console.error('Gemini API Stream Error:', error);
    throw error;
  }
}
