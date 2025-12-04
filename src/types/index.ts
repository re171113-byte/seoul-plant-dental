export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  nameZh: string;
  title: string;
  titleEn: string;
  titleZh: string;
  specialty: string[];
  specialtyEn: string[];
  specialtyZh: string[];
  education: string[];
  educationEn: string[];
  educationZh: string[];
  career: string[];
  careerEn: string[];
  careerZh: string[];
  image: string;
}

export interface Service {
  id: string;
  name: string;
  nameEn: string;
  nameZh: string;
  description: string;
  descriptionEn: string;
  descriptionZh: string;
  icon: string;
  slug: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  contentEn?: string;
  contentZh?: string;
  treatment: string;
  date: Date;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  category: 'implant' | 'cosmetic' | 'orthodontic';
  description: string;
  descriptionEn?: string;
  descriptionZh?: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: Date;
  time: string;
  service: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface BoardPost {
  id: string;
  category: string;
  title: string;
  content: string;
  author: string;
  password?: string;
  views: number;
  reply?: string;
  replyDate?: Date;
  createdAt: Date;
}

export interface FAQ {
  id: string;
  question: string;
  questionEn: string;
  questionZh: string;
  answer: string;
  answerEn: string;
  answerZh: string;
  category: string;
}
