import { category } from '@/db/schema'

export const categories = [
  {
    id: 0,
    nameKo: '없음',
    nameEn: 'None',
  },
  {
    id: 11,
    nameKo: '인문사회필수',
    nameEn: '',
  },
  {
    id: 14,
    nameKo: '전공필수',
    nameEn: 'Major Required',
  },
  {
    id: 15,
    nameKo: '기초필수',
    nameEn: 'Basic Required',
  },
  {
    id: 16,
    nameKo: '교양필수',
    nameEn: 'Mandatory General Courses',
  },
  {
    id: 17,
    nameKo: '공통필수',
    nameEn: 'General Required',
  },
  {
    id: 18,
    nameKo: '교양필수(체육)',
    nameEn: 'Mandatory Physical Education',
  },
  {
    id: 19,
    nameKo: '교양필수(봉사)',
    nameEn: 'Mandatory Volunteer Activity',
  },
  {
    id: 31,
    nameKo: '교양선택',
    nameEn: '',
  },
  {
    id: 34,
    nameKo: '전공선택',
    nameEn: 'Major Elective',
  },
  {
    id: 35,
    nameKo: '선택(석/박사)',
    nameEn: 'Elective(Graduate)',
  },
  {
    id: 36,
    nameKo: '자유선택',
    nameEn: 'Other Elective',
  },
  {
    id: 37,
    nameKo: '기초선택',
    nameEn: 'Basic Elective',
  },
  {
    id: 38,
    nameKo: '인문사회선택',
    nameEn: 'Humanities & Social Elective',
  },
  {
    id: 41,
    nameKo: '인문사회선택(인문-핵심)',
    nameEn: 'Humanities & Social Elective(Humanities-Core)',
  },
  {
    id: 42,
    nameKo: '인문사회선택(인문-융합)',
    nameEn: 'Humanities & Social Elective(Humanities-Convergence)',
  },
  {
    id: 43,
    nameKo: '인문사회선택(인문-일반)',
    nameEn: 'Humanities & Social Elective(Humanities-General)',
  },
  {
    id: 44,
    nameKo: '인문사회선택(사회-핵심)',
    nameEn: 'Humanities & Social Elective(Social-Core)',
  },
  {
    id: 45,
    nameKo: '인문사회선택(사회-융합)',
    nameEn: 'Humanities & Social Elective(Social-Convergence)',
  },
  {
    id: 46,
    nameKo: '인문사회선택(사회-일반)',
    nameEn: 'Humanities & Social Elective(Social-General)',
  },
  {
    id: 47,
    nameKo: '인문사회선택(문학예술-핵심)',
    nameEn: 'Humanities & Social Elective(Arts-Core)',
  },
  {
    id: 48,
    nameKo: '인문사회선택(문학예술-융합)',
    nameEn: 'Humanities & Social Elective(Arts-Convergence)',
  },
  {
    id: 49,
    nameKo: '인문사회선택(문학예술-일반)',
    nameEn: 'Humanities & Social Elective(Arts-General)',
  },
  {
    id: 73,
    nameKo: '학제간필수',
    nameEn: 'Interdisciplinary Requirement',
  },
  {
    id: 75,
    nameKo: '연구필수',
    nameEn: 'Research Requirement',
  },
  {
    id: 76,
    nameKo: '전공',
    nameEn: 'Major',
  },
  {
    id: 77,
    nameKo: '트랙필수',
    nameEn: 'Track Requirement',
  },
  {
    id: 78,
    nameKo: '학제간',
    nameEn: 'Interdisciplinary',
  },
  {
    id: 80,
    nameKo: '인턴쉽',
    nameEn: 'Internship',
  },
  {
    id: 82,
    nameKo: '공통기초',
    nameEn: 'Common Basic',
  },
  {
    id: 91,
    nameKo: '논문연구',
    nameEn: 'Thesis Research(MA/phD)',
  },
  {
    id: 92,
    nameKo: '개별연구',
    nameEn: 'Individual Study',
  },
  {
    id: 93,
    nameKo: '졸업연구',
    nameEn: 'Thesis Study(Undergraduate)',
  },
  {
    id: 94,
    nameKo: '세미나',
    nameEn: 'Seminar',
  },
  {
    id: 95,
    nameKo: '논문세미나',
    nameEn: 'Thesis Seminar',
  },
  {
    id: 96,
    nameKo: '현장실습및연구',
    nameEn: 'Field Practice',
  },
  {
    id: 97,
    nameKo: '연구필수',
    nameEn: 'Research Requirement',
  },
  {
    id: 98,
    nameKo: '인턴쉽',
    nameEn: 'Internship',
  },
] as const satisfies (typeof category.$inferInsert)[]
