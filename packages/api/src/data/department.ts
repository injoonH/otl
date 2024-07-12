import { department } from '@/db/schema'

export const departments = [
  {
    id: 0,
    nameKo: '무학과',
    nameEn: 'Undecided',
  },
  {
    id: 4,
    nameKo: 'URP',
    nameEn: 'Undergraduate Research Participation',
  },
  {
    id: 8,
    nameKo: 'Freshman Design',
    nameEn: 'Freshman Design',
  },
  {
    id: 10,
    nameKo: '인턴십 프로그램',
    nameEn: 'Internship Program',
  },
  {
    id: 33,
    nameKo: 'Capstone Design',
    nameEn: 'Capstone Design',
  },
  {
    id: 98,
    nameKo: '광주과학기술원',
    nameEn: 'Gwangju Institute of Science and Technology',
  },
  {
    id: 99,
    nameKo: '창원대학교',
    nameEn: 'Changwon National University',
  },
  {
    id: 100,
    nameKo: '자연과학부',
    nameEn: 'College of Natural Science',
  },
  {
    id: 110,
    nameKo: '물리학과',
    nameEn: 'Physics',
  },
  {
    id: 132,
    nameKo: '생명과학과',
    nameEn: 'Biological Sciences',
  },
  {
    id: 140,
    nameKo: '수학과',
    nameEn: 'Mathematics',
  },
  {
    id: 141,
    nameKo: '수학전공',
    nameEn: 'Mathematics',
  },
  {
    id: 142,
    nameKo: '응용수학전공',
    nameEn: 'Applied Mathematics',
  },
  {
    id: 150,
    nameKo: '화학과',
    nameEn: 'Chemistry',
  },
  {
    id: 151,
    nameKo: '수리과학과',
    nameEn: 'Department of Mathematical Sciences',
  },
  {
    id: 210,
    nameKo: '기계공학과',
    nameEn: 'Mechanical Engineering',
  },
  {
    id: 211,
    nameKo: '기계공학전공',
    nameEn: 'Mechanical Engineering',
  },
  {
    id: 212,
    nameKo: '항공우주공학전공',
    nameEn: 'Aerospace Engineering',
  },
  {
    id: 220,
    nameKo: '원자력공학과',
    nameEn: 'Nuclear Engineering',
  },
  {
    id: 221,
    nameKo: '원자력및양자공학과',
    nameEn: 'Nuclear and Quantum Engineering',
  },
  {
    id: 240,
    nameKo: '항공우주공학과',
    nameEn: 'Aerospace Engineering',
  },
  {
    id: 321,
    nameKo: '산업경영학과',
    nameEn: 'Industrial Management',
  },
  {
    id: 330,
    nameKo: '산업공학과',
    nameEn: 'Industrial Engineering',
  },
  {
    id: 331,
    nameKo: '산업및시스템공학과',
    nameEn: 'Department of Industrial Systems Engineering',
  },
  {
    id: 340,
    nameKo: '산업디자인학과',
    nameEn: 'Industrial Design',
  },
  {
    id: 421,
    nameKo: '신소재공학과',
    nameEn: 'Materials Science and Engineering',
  },
  {
    id: 440,
    nameKo: '토목공학과',
    nameEn: 'Civil Engineering',
  },
  {
    id: 441,
    nameKo: '건설및환경공학과',
    nameEn: 'Civil and Environmental Engineering',
  },
  {
    id: 450,
    nameKo: '화학공학과',
    nameEn: 'Chemical Engineering',
  },
  {
    id: 451,
    nameKo: '생명화학공학과',
    nameEn: 'Chemical and Biomolecular Engineering',
  },
  {
    id: 460,
    nameKo: '바이오시스템학과',
    nameEn: 'Biosystems',
  },
  {
    id: 510,
    nameKo: '전기 및 전자공학과',
    nameEn: 'Electrical Engineering',
  },
  {
    id: 520,
    nameKo: '전산학과',
    nameEn: 'Computer Science',
  },
  {
    id: 531,
    nameKo: '전기및전자공학전공',
    nameEn: 'Electrical Engineering',
  },
  {
    id: 532,
    nameKo: '전산학전공',
    nameEn: 'Computer Science',
  },
  {
    id: 611,
    nameKo: '테크노-특수전공',
    nameEn: 'Special Field',
  },
  {
    id: 621,
    nameKo: '경영공학전공',
    nameEn: 'Management Engineering',
  },
  {
    id: 911,
    nameKo: '신소재공학과(고분자)',
    nameEn: 'Advanced Materials Engineering',
  },
  {
    id: 912,
    nameKo: '신소재공학과(전자재료)',
    nameEn: 'Advanced Materials Engineering',
  },
  {
    id: 920,
    nameKo: '자동화및설계공학과',
    nameEn: 'Automation and Design Technology',
  },
  {
    id: 931,
    nameKo: '정보및통신공학과(통신)',
    nameEn: 'Information and Communication Engineering',
  },
  {
    id: 933,
    nameKo: '정보및통신공학과(컴퓨터)',
    nameEn: 'Information and Communication Engineering',
  },
  {
    id: 934,
    nameKo: '테크노경영전공',
    nameEn: 'Techno-MBA',
  },
  {
    id: 936,
    nameKo: '비즈니스',
    nameEn: 'Business',
  },
  {
    id: 970,
    nameKo: '비교류타대학',
    nameEn: 'not entered',
  },
  {
    id: 971,
    nameKo: '충남대학교',
    nameEn: 'Chungnam National University',
  },
  {
    id: 972,
    nameKo: '이화여자대학교',
    nameEn: 'Ewha Womans University',
  },
  {
    id: 973,
    nameKo: '공통필수',
    nameEn: 'General Required',
  },
  {
    id: 974,
    nameKo: '한국정보통신대학',
    nameEn: 'Not Entered',
  },
  {
    id: 976,
    nameKo: '숙명여자대학교',
    nameEn: "Sookmyung Women's University",
  },
  {
    id: 977,
    nameKo: '고려대학교',
    nameEn: 'Korea University',
  },
  {
    id: 978,
    nameKo: '성균관대학교',
    nameEn: 'Sungkyunkwan University',
  },
  {
    id: 979,
    nameKo: '연세대학교',
    nameEn: 'Yonsei University',
  },
  {
    id: 980,
    nameKo: '전남대학교',
    nameEn: 'Chonnam University',
  },
  {
    id: 981,
    nameKo: '포항공과대학교',
    nameEn: 'Pohang University of Science and Technology',
  },
  {
    id: 2044,
    nameKo: '인문사회과학과정',
    nameEn: 'School of Humanities and Social Science',
  },
  {
    id: 2222,
    nameKo: '의과학학제전공',
    nameEn: 'Biomedical Science and Engineering Program',
  },
  {
    id: 2223,
    nameKo: '환경에너지공학학제전공',
    nameEn: 'Environmental and Energy Program',
  },
  {
    id: 2410,
    nameKo: '고분자학학제전공',
    nameEn: 'Polymer Science and Engineering Program',
  },
  {
    id: 2415,
    nameKo: '정보보호학제전공',
    nameEn: 'Information Security Program',
  },
  {
    id: 2710,
    nameKo: '테크노경영대학원',
    nameEn: 'Graduate School of Management',
  },
  {
    id: 3406,
    nameKo: '정보통신공학학제전공',
    nameEn: 'Telecommunication Engineering Program',
  },
  {
    id: 3484,
    nameKo: '나노과학기술학제전공',
    nameEn: 'Nano Science and Technology Program',
  },
  {
    id: 3485,
    nameKo: '문화기술학제전공',
    nameEn: 'Culture Technology Program',
  },
  {
    id: 3486,
    nameKo: '과학기술학학제전공',
    nameEn: 'Science, Technology and Society Program',
  },
  {
    id: 3487,
    nameKo: 'e-매뉴팩쳐링리더쉽학제전공',
    nameEn: 'e-Manufacturing Leadership Program',
  },
  {
    id: 3499,
    nameKo: '소프트웨어전문가과정학제전공',
    nameEn: 'Professional Software Expert Program',
  },
  {
    id: 3511,
    nameKo: '이그제큐티브전공',
    nameEn: 'Executive MBA',
  },
  {
    id: 3517,
    nameKo: 'M-Tech 프로그램',
    nameEn: 'M-Tech Program',
  },
  {
    id: 3520,
    nameKo: '로봇공학학제전공',
    nameEn: 'The Robotics Program',
  },
  {
    id: 3521,
    nameKo: '의과학대학원과정',
    nameEn: 'Graduate Program of Medical Science and Engineerin',
  },
  {
    id: 3537,
    nameKo: '자동차기술경영전공',
    nameEn: 'Automobil Technology & Management Program',
  },
  {
    id: 3539,
    nameKo: '문화기술대학원',
    nameEn: 'Graduate School of Culture Technology',
  },
  {
    id: 3540,
    nameKo: 'Business Economics 프로그램',
    nameEn: 'Business Economics Program',
  },
  {
    id: 3548,
    nameKo: '반도체 학제전공',
    nameEn: 'Semiconductor Technology Educational Program',
  },
  {
    id: 3558,
    nameKo: '금융전문대학원',
    nameEn: 'Graduate School of Finance',
  },
  {
    id: 3559,
    nameKo: '자동차기술대학원',
    nameEn: 'Automobile Technology',
  },
  {
    id: 3560,
    nameKo: '금융전공',
    nameEn: 'Finance',
  },
  {
    id: 3564,
    nameKo: '정보미디어경영대학원',
    nameEn: 'Graduate School of Information &  Media Management',
  },
  {
    id: 3596,
    nameKo: '공과대학',
    nameEn: 'College of Engineering',
  },
  {
    id: 3599,
    nameKo: '기계항공시스템학부',
    nameEn: 'School of Mechanical Engineering & Aerospac System',
  },
  {
    id: 3605,
    nameKo: '의과학대학원',
    nameEn: 'Graduate School of Medical Science and Engineering',
  },
  {
    id: 3617,
    nameKo: '아이엠비에이전공',
    nameEn: 'IMBA',
  },
  {
    id: 3648,
    nameKo: '바이오및뇌공학과',
    nameEn: 'Bio and Brain Engineering',
  },
  {
    id: 3689,
    nameKo: '과학기술정책대학원프로그램',
    nameEn: 'Graduate Program of Science and Technology Policy',
  },
  {
    id: 3691,
    nameKo: '정보과학기술대학',
    nameEn: 'College of Information Science and Technology',
  },
  {
    id: 3692,
    nameKo: '나노과학기술대학원',
    nameEn: 'Graduate school of Nanoscience & Technology',
  },
  {
    id: 3693,
    nameKo: '해양시스템공학전공',
    nameEn: 'Division of Ocean Systems Engineering',
  },
  {
    id: 3694,
    nameKo: '지적서비스공학과',
    nameEn: 'Department of Intelligent Service Engineering',
  },
  {
    id: 3701,
    nameKo: '우주탐사공학학제전공',
    nameEn: 'Space Exploration Engineering Program',
  },
  {
    id: 3703,
    nameKo: '소프트웨어대학원프로그램',
    nameEn: 'Software Graduate Program',
  },
  {
    id: 3716,
    nameKo: '기술경영전문대학원',
    nameEn: 'Graduate School of Innovation & Technology Management',
  },
  {
    id: 3723,
    nameKo: '정보통신공학과',
    nameEn: 'Information and Communications Engineering',
  },
  {
    id: 3724,
    nameKo: 'IT경영학과',
    nameEn: 'IT Business',
  },
  {
    id: 3725,
    nameKo: '소프트웨어공학 프로그램',
    nameEn: 'Software Engineering Program',
  },
  {
    id: 3726,
    nameKo: '디지털미디어 프로그램',
    nameEn: 'Digital Media Program',
  },
  {
    id: 3727,
    nameKo: '경영전문대학원 프로그램',
    nameEn: 'Master of Business Administration Program',
  },
  {
    id: 3728,
    nameKo: 'IT경영학과 학제간 프로그램',
    nameEn: 'IT Technology Program',
  },
  {
    id: 3799,
    nameKo: 'EEWS대학원',
    nameEn: 'Graduate school of EEWS',
  },
  {
    id: 3844,
    nameKo: '경영과학과',
    nameEn: 'Department of Management Science',
  },
  {
    id: 3845,
    nameKo: '전기 및 전자공학과',
    nameEn: 'Department of Electrical Engineering',
  },
  {
    id: 3846,
    nameKo: '지식서비스공학과',
    nameEn: 'Department of Knowledge Service Engineering',
  },
  {
    id: 3847,
    nameKo: '전산학과',
    nameEn: 'Department of Computer Science',
  },
  {
    id: 3882,
    nameKo: '지식재산대학원프로그램',
    nameEn: 'Master of intellectual property',
  },
  {
    id: 3894,
    nameKo: '인문사회과학과',
    nameEn: 'Department of Humanities & Social Sciences',
  },
  {
    id: 3895,
    nameKo: '경영공학과',
    nameEn: 'Department of Management Engineering',
  },
  {
    id: 3919,
    nameKo: '금융공학부전공프로그램',
    nameEn: 'Financial Engineering Program',
  },
  {
    id: 3920,
    nameKo: '과학저널리즘대학원프로그램',
    nameEn: 'Master of Science Journalism',
  },
  {
    id: 3941,
    nameKo: '글로벌IT기술대학원프로그램',
    nameEn: 'Global Information & Telecommunication Technology Program',
  },
  {
    id: 3942,
    nameKo: '금융전공',
    nameEn: 'Finance MBA',
  },
  {
    id: 3978,
    nameKo: '지식재산 부전공 프로그램',
    nameEn: 'Intellectual Property Minor Program for Undergraduate Students',
  },
  {
    id: 3990,
    nameKo: '과학기술정책대학원',
    nameEn: 'Graduate School of Science and Technology Policy',
  },
  {
    id: 3992,
    nameKo: '미래자동차 학제전공',
    nameEn: 'Division of Future Vehicle',
  },
  {
    id: 3993,
    nameKo: '과학기술정책학 부전공 프로그램',
    nameEn: 'Minor Program in Science and Technology Policy',
  },
  {
    id: 3997,
    nameKo: '조천식녹색교통대학원',
    nameEn: 'The Cho Chun Shik Graduate School of Green Transportation',
  },
  {
    id: 4005,
    nameKo: '정보보호대학원 프로그램',
    nameEn: 'Graduate School of Information Security',
  },
  {
    id: 4014,
    nameKo: '웹사이언스공학전공',
    nameEn: 'Division of Web Science and Technology',
  },
  {
    id: 4094,
    nameKo: '정보미디어전공',
    nameEn: 'Information and Media MBA',
  },
  {
    id: 4141,
    nameKo: '문화기술학 부전공 프로그램',
    nameEn: 'Minor Program in Culture Technology',
  },
  {
    id: 4144,
    nameKo: '정보보호대학원',
    nameEn: 'Graduate School of Information Security',
  },
  {
    id: 4174,
    nameKo: '정보경영 전공',
    nameEn: 'Information Management Program',
  },
  {
    id: 4181,
    nameKo: '금융공학 전공',
    nameEn: 'Financial Engineer Program',
  },
  {
    id: 4182,
    nameKo: '프로페셔널 MBA',
    nameEn: 'Professional MBA',
  },
  {
    id: 4183,
    nameKo: '사회적 기업가 MBA',
    nameEn: 'Social Entrepreneurship MBA',
  },
  {
    id: 4200,
    nameKo: '미래전략대학원 프로그램',
    nameEn: 'Graduate Program for Future Strategy',
  },
  {
    id: 4201,
    nameKo: '경제학 부전공 프로그램',
    nameEn: 'Economics Program',
  },
  {
    id: 4264,
    nameKo: '녹색성장대학원',
    nameEn: 'Graduate School of Green Growth',
  },
  {
    id: 4299,
    nameKo: '기술경영학과',
    nameEn: 'Department of Business and Technology Management',
  },
  {
    id: 4301,
    nameKo: '경영공학부',
    nameEn: 'School of Management Engineering',
  },
  {
    id: 4302,
    nameKo: '기술경영전문대학원프로그램',
    nameEn: 'Graduate Program for Innovation & Technology Management',
  },
  {
    id: 4303,
    nameKo: '금융MBA',
    nameEn: 'Finance MBA',
  },
  {
    id: 4304,
    nameKo: 'IMBA',
    nameEn: 'IMBA',
  },
  {
    id: 4305,
    nameKo: '이그제큐티브MBA',
    nameEn: 'Executive MBA',
  },
  {
    id: 4306,
    nameKo: '정보미디어MBA',
    nameEn: 'Information and Media MBA',
  },
  {
    id: 4307,
    nameKo: '테크노경영MBA',
    nameEn: 'Techno-MBA',
  },
  {
    id: 4310,
    nameKo: '금융공학프로그램',
    nameEn: 'Financial Engineering Program',
  },
  {
    id: 4311,
    nameKo: '녹색정책프로그램',
    nameEn: 'Green Policy Program',
  },
  {
    id: 4312,
    nameKo: '정보경영프로그램',
    nameEn: 'Information Management Program',
  },
  {
    id: 4335,
    nameKo: '기술경영학과(IT경영학)',
    nameEn: 'Department of Business and Technology Management(IT Business)',
  },
  {
    id: 4398,
    nameKo: '금융 이그제큐티브 MBA',
    nameEn: 'Finance Executive MBA(Finance EMBA)',
  },
  {
    id: 4417,
    nameKo: '기계항공공학부',
    nameEn: 'School of Mechanical and Aerospace Engineering',
  },
  {
    id: 4418,
    nameKo: '기계공학과',
    nameEn: 'Department of Mechanical Engineering',
  },
  {
    id: 4419,
    nameKo: '항공우주공학과',
    nameEn: 'Department of Aerospace Engineering',
  },
  {
    id: 4420,
    nameKo: '해양시스템대학원',
    nameEn: 'Graduate School of Ocean Systems Engineering',
  },
  {
    id: 4421,
    nameKo: '전산학부',
    nameEn: 'School of Computing',
  },
  {
    id: 4422,
    nameKo: '웹사이언스대학원',
    nameEn: 'Graduate School of Web Science Technology',
  },
  {
    id: 4423,
    nameKo: '전기및전자공학부',
    nameEn: 'School of Electrical Engineering',
  },
  {
    id: 4424,
    nameKo: '인문사회과학부',
    nameEn: 'School of Humanities & Social Sciences',
  },
  {
    id: 4425,
    nameKo: '문술미래전략대학원',
    nameEn: 'Moon Soul Graduate School of Future Strategy',
  },
  {
    id: 4427,
    nameKo: '뇌인지공학프로그램',
    nameEn: 'Program of Brain and Cognitive Engineering',
  },
  {
    id: 4431,
    nameKo: '기업가정신 부전공 프로그램',
    nameEn: 'Entrepreneurship Program',
  },
  {
    id: 4438,
    nameKo: '기술경영전문대학원',
    nameEn: 'Graduate School of Innovation & Technology Management',
  },
  {
    id: 4493,
    nameKo: '녹색경영정책프로그램',
    nameEn: 'Green Business and Policy Program',
  },
  {
    id: 4547,
    nameKo: '기술경영학부',
    nameEn: 'School of Business and Technology Management',
  },
  {
    id: 4548,
    nameKo: '기술경영학부(IT경영학)',
    nameEn: 'School of Business and Technology Management(IT Business)',
  },
  {
    id: 4549,
    nameKo: '지식서비스공학대학원',
    nameEn: 'Graduate School of Knowledge Service Engineering',
  },
  {
    id: 4562,
    nameKo: 'K-School',
    nameEn: 'K-School',
  },
  {
    id: 4724,
    nameKo: '융합기초학부 설립추진단',
    nameEn:
      'Promotion Committee for the Establishment of the Department of Transdisciplinary Science and Engineering',
  },
  {
    id: 4879,
    nameKo: 'AI대학원',
    nameEn: 'Graduate School of AI',
  },
  {
    id: 4883,
    nameKo: '융합기초학부',
    nameEn: 'School of Transdisciplinary Studies',
  },
  {
    id: 4937,
    nameKo: '과학기술정책대학원',
    nameEn: 'Graduate School of Science and Technology Policy',
  },
  {
    id: 5015,
    nameKo: '디지털금융MBA',
    nameEn: 'Digital Finance MBA',
  },
  {
    id: 5064,
    nameKo: '융합인재학부',
    nameEn: 'School of Transdisciplinary Studies',
  },
  {
    id: 5119,
    nameKo: '바이오혁신경영프로그램',
    nameEn: 'Bio Innovation Management Program',
  },
  {
    id: 5122,
    nameKo: '지식재산대학원프로그램',
    nameEn: "Master's Program in Intellectual Property",
  },
  {
    id: 5123,
    nameKo: '과학저널리즘대학원프로그램',
    nameEn: "Master's Program in Science Journalism",
  },
  {
    id: 5124,
    nameKo: '미래전략대학원프로그램',
    nameEn: "Master's Program in Future Strategy",
  },
  {
    id: 5204,
    nameKo: '김재철AI대학원',
    nameEn: 'Kim Jaechul Graduate School of AI',
  },
  {
    id: 5259,
    nameKo: '반도체시스템공학과',
    nameEn: 'Department of Semiconductor System Engineering',
  },
  {
    id: 5278,
    nameKo: '바이오혁신경영전문대학원',
    nameEn: 'Graduate School of Bio Innovation Management',
  },
  {
    id: 5294,
    nameKo: '뇌인지과학과',
    nameEn: 'Department of Brain and Cognitive Sciences',
  },
  {
    id: 5295,
    nameKo: '조천식모빌리티대학원',
    nameEn: 'Cho Chun Shik Graduate School of Mobility',
  },
  {
    id: 5296,
    nameKo: '디지털인문사회과학부',
    nameEn: 'School of Digital Humanities and Computational Social Sciences',
  },
  {
    id: 5355,
    nameKo: '데이터사이언스대학원',
    nameEn: 'Graduate School of  Data Science',
  },
  {
    id: 5356,
    nameKo: '글로벌디지털혁신대학원',
    nameEn: 'Graduate School of Global Digital Innovation',
  },
  {
    id: 5357,
    nameKo: 'KT-AI융합인재양성프로그램',
    nameEn: 'KT AI Convergence Education Program',
  },
  {
    id: 5358,
    nameKo: '메타버스학제전공',
    nameEn: 'Metaverse Program',
  },
  {
    id: 5365,
    nameKo: '카이스트MBA',
    nameEn: 'KAIST MBA',
  },
  {
    id: 5366,
    nameKo: '임팩트MBA',
    nameEn: 'Impact MBA',
  },
  {
    id: 5441,
    nameKo: '양자대학원',
    nameEn: 'Graduate School of Quantum Science and Technology',
  },
  {
    id: 5442,
    nameKo: '공학생물학대학원',
    nameEn: 'Graduate School of  Engineering Biology',
  },
  {
    id: 5443,
    nameKo: '녹색성장지속가능대학원',
    nameEn: 'Graduate School of Green Growth and Sustainability',
  },
  {
    id: 5488,
    nameKo: '반도체공학대학원',
    nameEn: 'Graduate School of Semiconductor Technology',
  },
  {
    id: 5489,
    nameKo: '인공지능반도체대학원',
    nameEn: 'Graduate School of AI Semiconductor',
  },
  {
    id: 5493,
    nameKo: '안보과학기술대학원',
    nameEn: 'Graduate School of Advanced Security Science and Technology',
  },
  {
    id: 5553,
    nameKo: '디지털인문사회과학부전공프로그램',
    nameEn:
      'Minor Program in Digital Humanities and Computational Social Sciences',
  },
  {
    id: 5554,
    nameKo: '미래전략부전공프로그램',
    nameEn: 'Minor Program for Future Strategy',
  },
  {
    id: 5593,
    nameKo: '메타버스대학원',
    nameEn: 'Graduate School of Metaverse',
  },
] as const satisfies (typeof department.$inferInsert)[]
