import { Store } from '../types'

export const stores: Store[] = [
  {
    id: 'store01',
    name: '화통중화요리',
    image: '/images/stores/store01/main.jpeg',
    address: '남해읍 아산리 366-11 2층',
    phone: '055-863-9896',
    description: '불 "화", 통할 "통"의 화통으로 중화요리 특유의 고온의 불을 많이 사용하므로 불로 통한다는 의미이며, 불과 함께 오랜 경험을 가진 셰프들이 화통에서 요리를 합니다.',
    holidays: [],
  },
  {
    id: 'store02',
    name: '한촌설렁탕 남해점',
    image: '/images/stores/store02/main.jpg',
    address: '남해읍 스포츠로 12-1 1층',
    phone: '055-864-0700',
    description: '반세기를 향하는 한촌의 깊은 뿌리.\n깊어진 뿌리만큼 무성한 백년의 손님, 변함없는 맛으로 지켜가겠습니다.',
    holidays: [],
  },
  {
    id: 'store03',
    name: '화덕안',
    image: '/images/stores/store03/main.png',
    address: '남해읍 화전로 65-6 1층',
    phone: '055-862-8611',
    description: '매주 월요일과 화요일은 화덕안 정기휴무입니다.',
    holidays: ['MON', 'TUE'],
  },
  {
    id: 'store04',
    name: '글로이',
    image: '/images/stores/store04/main.jpeg',
    address: '남해읍 북변리 275-7 1층',
    phone: '0507-1409-8943',
    description: '안녕하세요. 주인 혼자 지지고 볶는 글로이입니다.\n남녀노소 누구나 좋아하는 가게였으면 합니다.\n매주 일요일과 월요일은 정기휴무입니다.',
    holidays: ['SUN', 'MON'],
  },
  {
    id: 'store05',
    name: '남해촌닭',
    image: '/images/stores/store05/main.jpeg',
    address: '남해읍 아산리 321',
    phone: '0507-1328-7075',
    description: '후라이드 잘하는 집 남해촌닭 #남해맛집 #존맛탱\n매주 일요일은 휴무입니다.\n영업시간 17시~24시',
    holidays: ['SUN'],
  },
]
