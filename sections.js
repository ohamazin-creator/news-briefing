/* 뉴스 분야 구성 — 대시보드(index.html)와 매일 뉴스를 받는 스크립트(scripts/fetch-news.mjs)가 함께 씁니다.
   n: 보여줄 개수, cat: GNews 분류, q: 검색어, days: 검색할 기간(일)
   무료 플랜: 요청 1회당 최대 10건, 하루 100회. 뉴스는 12시간 늦게 제공됩니다. */
globalThis.NEWS_SECTIONS = [
  { id:'politics', name:'정치',         n:3,  place:'top',  reqs:[{ q:'정치 OR 국회 OR 대통령실', days:1.5 }] },
  { id:'economy',  name:'경제',         n:20, place:'big',  reqs:[{ cat:'business' }, { q:'경제 OR 금리 OR 증시 OR 부동산', days:1.5 }] },
  { id:'society',  name:'사회',         n:20, place:'big',  reqs:[{ cat:'nation' }, { q:'사회 OR 사건 OR 복지 OR 노동', days:1.5 }] },
  { id:'world',    name:'세계',         n:20, place:'big',  reqs:[{ cat:'world' }, { q:'국제 OR 외신 OR 미국 OR 중국 OR 일본', days:1.5 }] },
  { id:'tech',     name:'IT·과학·미래', n:20, place:'big',  reqs:[{ cat:'technology' }, { cat:'science' }] },
  { id:'edu',      name:'교육',         n:10, place:'grow', sub:'입시·학교·대학, 최근 2일', reqs:[{ q:'교육 OR 입시 OR 학교 OR 대학', days:2 }] },
  { id:'study',    name:'유학',         n:10, place:'grow', mine:true, sub:'해외 대학·유학생·비자, 최근 7일', reqs:[{ q:'유학 OR 유학생 OR "해외 대학" OR 어학연수 OR "학생 비자"', days:7 }] },
  { id:'work',     name:'Work',         n:10, place:'grow', mine:true, sub:'업무 효율·협업·리더십, 최근 7일', reqs:[{ q:'"업무 효율" OR 일잘러 OR 협업 OR 리더십 OR "회의 문화" OR 생산성', days:7 }] },
  { id:'speech',   name:'Speech',       n:10, place:'grow', mine:true, sub:'대화법·발표·스피치, 최근 7일', reqs:[{ q:'대화법 OR 화법 OR 스피치 OR 발표 OR 말하기 OR 소통법', days:7 }] },
  { id:'growth',   name:'자기계발',     n:10, place:'grow', mine:true, sub:'습관·독서·공부법, 최근 7일', reqs:[{ q:'자기계발 OR 습관 OR 독서 OR 공부법 OR 루틴 OR 동기부여', days:7 }] },
  { id:'eye',      name:'안과·눈 건강', n:10, place:'mine', mine:true, sub:'망막·백내장·녹내장, 최근 7일', reqs:[{ q:'안과 OR 망막 OR 황반변성 OR 녹내장 OR 백내장 OR 시력', days:7 }] },
  { id:'medical',  name:'의료·병원',    n:10, place:'mine', mine:true, sub:'의료 정책·병원·전공의, 최근 2일', reqs:[{ q:'의료 OR 병원 OR 의대 OR 전공의 OR 건강보험', days:2 }] },
  { id:'health',   name:'건강',         n:10, place:'mine', mine:true, sub:'건강 분야 주요 뉴스', reqs:[{ cat:'health' }] },
  { id:'ai',       name:'AI',           n:10, place:'mine', mine:true, sub:'생성형 AI·AI 에이전트·활용, 최근 2일', reqs:[{ q:'"생성형 AI" OR "AI 에이전트" OR 챗GPT OR 클로드 OR 제미나이 OR "AI 활용"', days:2 }] },
  { id:'future',   name:'미래',         n:10, place:'mine', mine:true, sub:'미래 사회·트렌드·로봇·우주, 최근 3일', reqs:[{ q:'"미래 사회" OR "미래 기술" OR 트렌드 OR 로봇 OR 우주 OR 휴머노이드', days:3 }] }
];
