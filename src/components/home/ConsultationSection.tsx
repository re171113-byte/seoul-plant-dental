'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const branches = ['강남본원', '잠실점', '분당점', '일산점'];
const treatments = ['임플란트', '전악 임플란트', '틀니', '심미치료', '충치/신경치료', '기타'];

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    treatment: '',
    message: '',
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send to API
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="text-white/80 font-medium mb-2 block">CONSULTATION</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              온라인 상담예약
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              아래 양식을 작성해주시면 담당자가 확인 후<br />
              빠른 시간 내에 연락드리겠습니다.
            </p>

            {/* Quick Contact */}
            <div className="space-y-4">
              <a
                href="tel:02-555-1234"
                className="flex items-center gap-4 bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-white/80">전화 상담</p>
                  <p className="text-xl font-bold">02-555-1234</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-[#FEE500] rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-[#3C1E1E]" />
                </div>
                <div>
                  <p className="text-sm text-white/80">카카오톡 상담</p>
                  <p className="text-xl font-bold">서울플란트치과</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80">상담시간</p>
                  <p className="font-medium">평일 09:30~18:30 | 토 09:30~14:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-secondary-800 mb-6">
                상담 예약 신청
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>

                {/* Branch & Treatment */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      희망 지점
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">선택</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      상담 내용
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">선택</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    상담 내용
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="궁금하신 내용을 입력해주세요"
                  />
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
                    isSubmitted
                      ? 'bg-green-500'
                      : 'bg-primary-500 hover:bg-primary-600'
                  }`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      신청이 완료되었습니다
                    </span>
                  ) : (
                    '상담 예약 신청하기'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
