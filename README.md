# Supabase Edge Functions 템플릿

이 프로젝트는 Supabase Edge Functions를 사용한 개발을 위한 기본 폴더 구조를 제공합니다. 설계에 대한 지속적인 학습을 통해 더 나은 구조로 지속적으로 업데이트될 예정입니다.

## 실행방법

1. Supabase 프로젝트 준비
    - 새 프로젝트 생성 또는 기존 프로젝트 사용
    - https://supabase.com/dashboard/projects


2. Supabase CLI 설치
    - 설치 가이드: https://supabase.com/docs/guides/cli/getting-started#installing-the-supabase-cli


3. Supabase CLI 로그인
```
supabase login
```

4. Supabase 프로젝트 REFERENCE ID 조회
```
supabase projects list
```


5. Edge Function 배포
```
$ supabase functions deploy users --project-ref crcasoukpqyuxtwzb 
```
- supabase functions deploy [함수명] --project-ref [프로젝트 REFERENCE ID]
- `[함수명]`: 배포할 함수의 폴더 이름 (예: `users`)
- `[프로젝트 REFERENCE ID]`: Supabase 대시보드의 Edge Functions 페이지에서 확인 가능

참고: 프로젝트 REFERENCE ID는 Supabase 대시보드의 Edge Functions 페이지 또는 `supabase projects list` 명령어를 통해 확인할 수 있습니다.