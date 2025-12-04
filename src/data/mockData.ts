// 저작권 문제 없는 가상 목업 데이터
// 모든 이름, 연락처, 주소는 가상으로 생성되었습니다.

export const clinicInfo = {
  name: {
    ko: '서울플란트치과',
    en: 'SEOUL PLANT Dental',
    zh: '首尔普兰特牙科',
  },
  phone: '02-555-1234',
  email: 'contact@seoulplant-demo.com',
  address: {
    ko: '서울특별시 강남구 테헤란로 123, 메디컬빌딩 4층',
    en: '4F, Medical Building, 123 Teheran-ro, Gangnam-gu, Seoul, Korea',
    zh: '韩国首尔江南区德黑兰路123号医疗大厦4楼',
  },
  businessNumber: '123-45-67890',
  hours: {
    weekday: '09:30 - 18:30',
    saturday: '09:30 - 14:00',
    sunday: '휴진',
    lunch: '13:00 - 14:00',
  },
};

export const doctors = [
  {
    id: 'dr-kim',
    name: {
      ko: '김민준',
      en: 'Kim Min-jun',
      zh: '金民俊',
    },
    title: {
      ko: '대표원장',
      en: 'Director',
      zh: '院长',
    },
    specialty: {
      ko: ['임플란트', '전악재건', '네비게이션 임플란트'],
      en: ['Implant', 'Full Mouth Reconstruction', 'Guided Implant'],
      zh: ['种植牙', '全口重建', '导航种植'],
    },
    education: {
      ko: [
        '서울대학교 치과대학 졸업',
        '서울대학교 대학원 구강악안면외과 석사',
        '미국 UCLA 임플란트 연수',
      ],
      en: [
        'DDS, Seoul National University',
        'MS in Oral Surgery, Seoul National University',
        'Implant Training, UCLA, USA',
      ],
      zh: [
        '首尔大学牙科学院毕业',
        '首尔大学研究生院口腔颌面外科硕士',
        '美国UCLA种植牙进修',
      ],
    },
    career: {
      ko: [
        '현) 서울플란트치과 대표원장',
        '대한임플란트학회 정회원',
        '대한구강악안면외과학회 인정의',
        '전) 서울대학교병원 구강악안면외과 전공의',
      ],
      en: [
        'Current) Director, SEOUL PLANT Dental',
        'Member, Korean Academy of Implant Dentistry',
        'Certified, Korean Association of Oral & Maxillofacial Surgery',
        'Former) Resident, Seoul National University Hospital',
      ],
      zh: [
        '现) 首尔普兰特牙科院长',
        '韩国种植牙学会正式会员',
        '韩国口腔颌面外科学会认证医师',
        '前) 首尔大学医院口腔颌面外科专科医师',
      ],
    },
    message: {
      ko: '환자 한 분 한 분께 최선의 맞춤 치료를 약속드립니다.',
      en: 'I promise personalized care for every patient.',
      zh: '承诺为每位患者提供最佳的个性化治疗。',
    },
  },
  {
    id: 'dr-lee',
    name: {
      ko: '이서연',
      en: 'Lee Seo-yeon',
      zh: '李叙妍',
    },
    title: {
      ko: '원장',
      en: 'Doctor',
      zh: '医师',
    },
    specialty: {
      ko: ['심미치료', '라미네이트', '치아미백'],
      en: ['Cosmetic Dentistry', 'Veneers', 'Teeth Whitening'],
      zh: ['美容牙科', '贴面', '牙齿美白'],
    },
    education: {
      ko: [
        '연세대학교 치과대학 졸업',
        '연세대학교 대학원 보철과 석사',
      ],
      en: [
        'DDS, Yonsei University',
        'MS in Prosthodontics, Yonsei University',
      ],
      zh: [
        '延世大学牙科学院毕业',
        '延世大学研究生院修复科硕士',
      ],
    },
    career: {
      ko: [
        '현) 서울플란트치과 원장',
        '대한심미치과학회 정회원',
        '전) 연세대학교 치과병원 보철과',
      ],
      en: [
        'Current) Doctor, SEOUL PLANT Dental',
        'Member, Korean Academy of Esthetic Dentistry',
        'Former) Prosthodontics Dept., Yonsei University Dental Hospital',
      ],
      zh: [
        '现) 首尔普兰特牙科医师',
        '韩国美容牙科学会正式会员',
        '前) 延世大学牙科医院修复科',
      ],
    },
    message: {
      ko: '자연스럽고 아름다운 미소를 되찾아 드리겠습니다.',
      en: 'I will help you regain your natural, beautiful smile.',
      zh: '帮助您重获自然美丽的笑容。',
    },
  },
  {
    id: 'dr-park',
    name: {
      ko: '박지훈',
      en: 'Park Ji-hoon',
      zh: '朴智勋',
    },
    title: {
      ko: '원장',
      en: 'Doctor',
      zh: '医师',
    },
    specialty: {
      ko: ['교정치료', '투명교정', '소아치과'],
      en: ['Orthodontics', 'Invisalign', 'Pediatric Dentistry'],
      zh: ['正畸治疗', '透明矫正', '儿童牙科'],
    },
    education: {
      ko: [
        '고려대학교 치과대학 졸업',
        '고려대학교 대학원 교정과 박사',
      ],
      en: [
        'DDS, Korea University',
        'PhD in Orthodontics, Korea University',
      ],
      zh: [
        '高丽大学牙科学院毕业',
        '高丽大学研究生院正畸科博士',
      ],
    },
    career: {
      ko: [
        '현) 서울플란트치과 원장',
        '대한치과교정학회 인정의',
        '인비절라인 인증 전문의',
      ],
      en: [
        'Current) Doctor, SEOUL PLANT Dental',
        'Certified, Korean Association of Orthodontists',
        'Invisalign Certified Provider',
      ],
      zh: [
        '现) 首尔普兰特牙科医师',
        '韩国正畸学会认证医师',
        '隐适美认证医师',
      ],
    },
    message: {
      ko: '가지런한 치아로 자신감을 되찾으세요.',
      en: 'Regain your confidence with perfectly aligned teeth.',
      zh: '用整齐的牙齿重拾自信。',
    },
  },
];

export const reviews = [
  {
    id: 'review-1',
    author: '김*영',
    rating: 5,
    treatment: {
      ko: '임플란트',
      en: 'Implant',
      zh: '种植牙',
    },
    date: '2024.11',
    content: {
      ko: '처음 임플란트 하는 거라 많이 긴장했는데, 원장님께서 하나하나 자세히 설명해주시고 편안하게 시술해주셔서 감사합니다. 회복도 빨라서 만족스럽습니다.',
      en: 'I was nervous about my first implant, but the doctor explained everything in detail and made me feel comfortable. Recovery was quick and I am very satisfied.',
      zh: '第一次做种植牙很紧张，但医生详细解释了每个步骤，让我感到很放心。恢复很快，非常满意。',
    },
  },
  {
    id: 'review-2',
    author: '이*호',
    rating: 5,
    treatment: {
      ko: '전악 임플란트',
      en: 'Full Mouth Implant',
      zh: '全口种植',
    },
    date: '2024.10',
    content: {
      ko: '오랫동안 틀니 생활을 하다가 전악 임플란트를 결심했습니다. 이제는 맛있게 음식을 먹을 수 있어서 정말 행복해요. 주변 분들께 강력 추천드립니다.',
      en: 'After years of wearing dentures, I decided to get full mouth implants. Now I can enjoy food again and I am truly happy. Highly recommend to others.',
      zh: '戴了很久假牙后决定做全口种植。现在能够美味地享用食物，真的很开心。强烈推荐给大家。',
    },
  },
  {
    id: 'review-3',
    author: 'David M.',
    rating: 5,
    treatment: {
      ko: '임플란트',
      en: 'Implant',
      zh: '种植牙',
    },
    date: '2024.10',
    content: {
      ko: 'Excellent service! The staff spoke English well and made me feel welcome. Professional treatment at a reasonable price.',
      en: 'Excellent service! The staff spoke English well and made me feel welcome. Professional treatment at a reasonable price.',
      zh: '服务非常好！工作人员英语说得很好，让我感到很受欢迎。价格合理，治疗专业。',
    },
  },
  {
    id: 'review-4',
    author: '박*진',
    rating: 5,
    treatment: {
      ko: '라미네이트',
      en: 'Veneers',
      zh: '贴面',
    },
    date: '2024.09',
    content: {
      ko: '앞니가 고르지 않아서 고민이 많았는데, 라미네이트 하고 나니 웃을 때 너무 예뻐졌어요. 주변에서 연예인 이냐고 물어봐요 ㅎㅎ',
      en: 'I was worried about my uneven front teeth. After getting veneers, my smile looks beautiful now. People even ask if I am a celebrity!',
      zh: '我一直很担心前牙不整齐。做了贴面后，笑容变得很漂亮。朋友们都问我是不是明星！',
    },
  },
  {
    id: 'review-5',
    author: '王*明',
    rating: 5,
    treatment: {
      ko: '임플란트',
      en: 'Implant',
      zh: '种植牙',
    },
    date: '2024.09',
    content: {
      ko: '중국에서 한국으로 의료관광 왔습니다. 중국어 통역도 가능하고, 시술 실력도 훌륭합니다. 다음에 또 오고 싶어요.',
      en: 'Came from China for medical tourism. They provided Chinese interpretation and the treatment was excellent. Would love to come again.',
      zh: '从中国来韩国进行医疗旅游。提供中文翻译，治疗技术也很出色。下次还想再来。',
    },
  },
  {
    id: 'review-6',
    author: '최*수',
    rating: 4,
    treatment: {
      ko: '스케일링',
      en: 'Scaling',
      zh: '洗牙',
    },
    date: '2024.08',
    content: {
      ko: '정기 검진과 스케일링 받으러 왔어요. 친절하게 설명해주시고, 꼼꼼하게 치료해주셔서 좋았습니다. 다음에 또 올게요!',
      en: 'Came for regular checkup and scaling. The staff was kind and thorough with the treatment. Will definitely come back!',
      zh: '来做定期检查和洗牙。工作人员很亲切，治疗也很仔细。下次还会再来！',
    },
  },
];

export const galleryItems = [
  {
    id: 'case-1',
    category: 'implant',
    description: {
      ko: '전악 임플란트 (All-on-4)',
      en: 'Full Mouth Implant (All-on-4)',
      zh: '全口种植 (All-on-4)',
    },
  },
  {
    id: 'case-2',
    category: 'implant',
    description: {
      ko: '어금니 임플란트',
      en: 'Molar Implant',
      zh: '磨牙种植',
    },
  },
  {
    id: 'case-3',
    category: 'cosmetic',
    description: {
      ko: '앞니 라미네이트',
      en: 'Front Teeth Veneers',
      zh: '前牙贴面',
    },
  },
  {
    id: 'case-4',
    category: 'implant',
    description: {
      ko: '앞니 임플란트',
      en: 'Front Teeth Implant',
      zh: '前牙种植',
    },
  },
  {
    id: 'case-5',
    category: 'orthodontic',
    description: {
      ko: '투명교정 (인비절라인)',
      en: 'Invisalign Treatment',
      zh: '透明矫正 (隐适美)',
    },
  },
  {
    id: 'case-6',
    category: 'cosmetic',
    description: {
      ko: '치아미백',
      en: 'Teeth Whitening',
      zh: '牙齿美白',
    },
  },
];

export const faqs = [
  {
    id: 'faq-1',
    category: 'implant',
    question: {
      ko: '임플란트 시술 시간은 얼마나 걸리나요?',
      en: 'How long does an implant procedure take?',
      zh: '种植牙手术需要多长时间？',
    },
    answer: {
      ko: '일반적으로 1개 임플란트 식립에 30분~1시간 정도 소요됩니다. 뼈이식이 필요한 경우 추가 시간이 소요될 수 있습니다.',
      en: 'Typically, placing one implant takes about 30 minutes to 1 hour. Additional time may be needed if bone grafting is required.',
      zh: '通常，植入一颗种植体需要30分钟到1小时。如果需要骨移植，可能需要额外的时间。',
    },
  },
  {
    id: 'faq-2',
    category: 'implant',
    question: {
      ko: '임플란트 시술 후 통증은 심한가요?',
      en: 'Is the pain severe after implant surgery?',
      zh: '种植牙术后疼痛严重吗？',
    },
    answer: {
      ko: '국소마취로 시술 중에는 통증이 없으며, 시술 후에도 처방된 진통제로 충분히 관리됩니다. 대부분 2-3일 후 일상생활이 가능합니다.',
      en: 'There is no pain during the procedure due to local anesthesia. Post-operative pain can be managed with prescribed painkillers. Most patients return to normal activities within 2-3 days.',
      zh: '由于局部麻醉，手术过程中没有疼痛。术后疼痛可以用处方止痛药管理。大多数患者在2-3天后可以恢复正常活动。',
    },
  },
  {
    id: 'faq-3',
    category: 'implant',
    question: {
      ko: '임플란트 수명은 얼마나 되나요?',
      en: 'How long do implants last?',
      zh: '种植牙能用多久？',
    },
    answer: {
      ko: '관리만 잘 하시면 반영구적으로 사용 가능합니다. 저희 병원은 10년 무상 보증을 제공하며, 정기검진을 통해 오래 유지될 수 있도록 도와드립니다.',
      en: 'With proper care, implants can last a lifetime. We offer a 10-year warranty and regular check-ups to help maintain your implants.',
      zh: '如果保养得当，种植牙可以终身使用。我们提供10年保修，并通过定期检查帮助您维护种植牙。',
    },
  },
  {
    id: 'faq-4',
    category: 'general',
    question: {
      ko: '외국인도 진료 가능한가요?',
      en: 'Do you treat foreign patients?',
      zh: '可以为外国患者提供服务吗？',
    },
    answer: {
      ko: '네, 가능합니다. 영어와 중국어 통역 서비스를 제공하고 있으며, 외국 보험 청구 서류도 발급해 드립니다.',
      en: 'Yes, we welcome foreign patients. We provide interpretation services in English and Chinese, and can issue documents for foreign insurance claims.',
      zh: '是的，我们欢迎外国患者。我们提供英语和中文翻译服务，也可以开具外国保险理赔所需的文件。',
    },
  },
  {
    id: 'faq-5',
    category: 'general',
    question: {
      ko: '예약 없이 방문 가능한가요?',
      en: 'Can I visit without an appointment?',
      zh: '可以不预约直接来吗？',
    },
    answer: {
      ko: '예약 환자 우선 진료이므로, 대기 시간 최소화를 위해 사전 예약을 권장드립니다. 급한 경우 전화 문의 후 방문해 주세요.',
      en: 'We prioritize patients with appointments. To minimize waiting time, we recommend booking in advance. For emergencies, please call before visiting.',
      zh: '我们优先接待预约患者。为了减少等待时间，建议提前预约。如有紧急情况，请先电话咨询后再来。',
    },
  },
];

export const boardPosts = [
  {
    id: 'post-1',
    category: {
      ko: '임플란트',
      en: 'Implant',
      zh: '种植牙',
    },
    title: {
      ko: '임플란트 상담 문의드립니다',
      en: 'Inquiry about implant consultation',
      zh: '种植牙咨询',
    },
    author: '김*현',
    date: '2024.11.20',
    views: 45,
    hasReply: true,
  },
  {
    id: 'post-2',
    category: {
      ko: '비용',
      en: 'Pricing',
      zh: '费用',
    },
    title: {
      ko: '전악 임플란트 비용 문의',
      en: 'Full mouth implant cost inquiry',
      zh: '全口种植费用咨询',
    },
    author: '이*호',
    date: '2024.11.19',
    views: 38,
    hasReply: true,
  },
  {
    id: 'post-3',
    category: {
      ko: '일반',
      en: 'General',
      zh: '一般',
    },
    title: {
      ko: '정기검진 예약 관련',
      en: 'Regular checkup appointment',
      zh: '定期检查预约',
    },
    author: '박*진',
    date: '2024.11.18',
    views: 22,
    hasReply: false,
  },
  {
    id: 'post-4',
    category: {
      ko: '임플란트',
      en: 'Implant',
      zh: '种植牙',
    },
    title: {
      ko: '해외 거주자인데 진료 가능한가요?',
      en: 'Can overseas residents get treatment?',
      zh: '海外居民可以接受治疗吗？',
    },
    author: 'John',
    date: '2024.11.17',
    views: 56,
    hasReply: true,
  },
  {
    id: 'post-5',
    category: {
      ko: '교정',
      en: 'Orthodontics',
      zh: '正畸',
    },
    title: {
      ko: '투명교정 기간 문의',
      en: 'Invisalign treatment duration',
      zh: '透明矫正时间咨询',
    },
    author: '최*수',
    date: '2024.11.15',
    views: 31,
    hasReply: true,
  },
];

export const historyTimeline = [
  { year: '2004', event: { ko: '서울플란트치과 개원', en: 'SEOUL PLANT Dental opened', zh: '首尔普兰特牙科开业' } },
  { year: '2008', event: { ko: '임플란트 10,000건 달성', en: '10,000 implants completed', zh: '完成10,000例种植' } },
  { year: '2012', event: { ko: '강남 신사옥 이전', en: 'Moved to new Gangnam office', zh: '迁至江南新址' } },
  { year: '2015', event: { ko: '네비게이션 임플란트 도입', en: 'Introduced guided implant surgery', zh: '引进导航种植技术' } },
  { year: '2018', event: { ko: '의료관광 우수기관 선정', en: 'Selected as excellent medical tourism facility', zh: '入选优秀医疗旅游机构' } },
  { year: '2020', event: { ko: '임플란트 40,000건 달성', en: '40,000 implants completed', zh: '完成40,000例种植' } },
  { year: '2023', event: { ko: '3D 프린팅 보철 시스템 도입', en: 'Introduced 3D printing prosthetics', zh: '引进3D打印修复系统' } },
  { year: '2024', event: { ko: '임플란트 50,000건 달성', en: '50,000 implants completed', zh: '完成50,000例种植' } },
];
