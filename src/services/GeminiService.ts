import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API 초기화
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn(
    "⚠️ VITE_GEMINI_API_KEY가 설정되지 않았습니다. .env 파일을 확인하세요.",
  );
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

// 기본 모델 상수
const DEFAULT_MODEL = "gemini-1.5-flash";

/**
 * Gemini API 호출 함수
 * @param prompt - AI에게 보낼 프롬프트
 * @param modelName - 사용할 모델 (기본: gemini-1.5-flash)
 */
export async function generateContent(
  prompt: string,
  modelName = DEFAULT_MODEL,
) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

/**
 * Gemini API 스트리밍 호출 함수
 * @param prompt - AI에게 보낼 프롬프트
 * @param onChunk - 스트림 청크가 도착할 때마다 실행될 콜백
 * @param modelName - 사용할 모델 (기본: gemini-1.5-flash)
 */
export async function generateContentStream(
  prompt: string,
  onChunk: (text: string) => void,
  modelName = DEFAULT_MODEL,
) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContentStream(prompt);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      onChunk(chunkText);
    }
  } catch (error) {
    console.error("Gemini API Stream Error:", error);
    throw error;
  }
}
