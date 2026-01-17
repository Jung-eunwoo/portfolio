# Gemini API Setup Guide

## 1. Gemini API 키 발급

1. [Google AI Studio](https://makersuite.google.com/app/apikey) 접속
2. **Get API key** 클릭
3. API 키 복사

## 2. 환경 변수 설정

`.env` 파일에 API 키 추가:

```bash
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## 3. 사용 예시

```typescript
import {
  generateContent,
  generateContentStream,
} from "@/services/GeminiService";

// 일반 호출
const response = await generateContent("안녕하세요!");
console.log(response);

// 스트리밍 호출
await generateContentStream("긴 텍스트 생성해줘", (chunk) => {
  console.log(chunk); // 실시간으로 청크 출력
});
```

## 4. 참고사항

- `.env` 파일은 Git에 커밋되지 않습니다 (`.gitignore`에 추가됨)
- API 키는 절대 공개 저장소에 업로드하지 마세요
- 무료 할당량: 60 requests/minute
