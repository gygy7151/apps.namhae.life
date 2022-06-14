# Namhae Life 식사배달 웹앱

남해 리모트 근무 TOSS 직원대상 미니 배달서비스 프론트 개발 및 운영(2021.11.19 서비스종료)

## 사용기술스택
![남해토스프로젝트기술스택](https://user-images.githubusercontent.com/55748886/173522181-5446aed3-440b-4f5b-bf21-6ced0ba89885.JPG)
- 프론트 : React, Redux, Typescript, MaterailUI, Next.js
- 번들러 : Webpack 
- 백엔드 : Nest.js,graphQL
- CI/CD : Vercel, Github

## 업무담당
- 퍼블리싱,프론트 : 이지영 
- 프론트,백엔드,CI/CD : 엄준성


## 로컬 실행 환경 
- Node.js v12 or v14
- Rush.js 설치

```bash
~$ npm install -g @microsoft/rush
# and
~$ rush update
# and
~/apps/client$ rushx dev
```

## 이슈로그
- [10.14.2021] fix Schema 해결
---
- Store, Menu 타입 types.tsx 로 분리함. 향후 DB 스키마로 활용 예정
- Store 타입에 holidays 필드 추가
- Menu 타입에 isAvailable 필드 삭제
- Menu 타입에 isLunch, isDinner 필드 추가
- 점심과 저녁을 구분하는 상수 const BREAK_TIME = 15 추가
- 각 메뉴의 주문 가능 여부를 가늠하는 isMenuAvailable() 함수 추가


