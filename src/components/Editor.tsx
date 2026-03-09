import React, { useState } from 'react';
import { UserData, Experience, Education, FontOption } from '../types';
import { Plus, Trash2, Palette, Type, Layout as LayoutIcon, Globe, Linkedin, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface EditorProps {
  data: UserData;
  onChange: (data: UserData) => void;
  activeTab: 'cv' | 'letter';
}

type EditorSection = 'data' | 'customize' | 'integrate';

export const Editor: React.FC<EditorProps> = ({ data, onChange, activeTab }) => {
  const [section, setSection] = useState<EditorSection>('data');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{[key: string]: boolean}>({
    linkedin: false,
    jobstreet: false
  });

  const updateField = (field: keyof UserData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const isInstruction = (val: string) => typeof val === 'string' && val.startsWith('[') && val.endsWith(']');

  const updateCustomization = (field: string, value: any) => {
    onChange({
      ...data,
      customization: {
        ...data.customization,
        [field]: value
      }
    });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Math.random().toString(36).substr(2, 9),
      company: '',
      position: '',
      duration: '',
      description: '',
    };
    updateField('experience', [...data.experience, newExp]);
  };

  const removeExperience = (id: string) => {
    updateField('experience', data.experience.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    const newExp = data.experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    updateField('experience', newExp);
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Math.random().toString(36).substr(2, 9),
      school: '',
      degree: '',
      year: '',
      description: '',
    };
    updateField('education', [...data.education, newEdu]);
  };

  const removeEducation = (id: string) => {
    updateField('education', data.education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    const newEdu = data.education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    updateField('education', newEdu);
  };

  const handleSkillChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      updateField('skills', [...data.skills, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const removeSkill = (index: number) => {
    updateField('skills', data.skills.filter((_, i) => i !== index));
  };

  const handleConnect = (platform: string) => {
    setIsConnecting(true);
    // Simulate OAuth flow
    setTimeout(() => {
      setConnectionStatus(prev => ({ ...prev, [platform]: true }));
      setIsConnecting(false);
    }, 1500);
  };

  const handleCertificationChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      updateField('certifications', [...data.certifications, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const removeCertification = (index: number) => {
    updateField('certifications', data.certifications.filter((_, i) => i !== index));
  };

  const handleAttachmentChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      updateField('attachments', [...data.attachments, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const removeAttachment = (index: number) => {
    updateField('attachments', data.attachments.filter((_, i) => i !== index));
  };

  const colors = [
    { name: 'Abu-abu Tua', value: '#0f172a' },
    { name: 'Hijau Zamrud', value: '#10b981' },
    { name: 'Nila', value: '#6366f1' },
    { name: 'Merah Muda', value: '#f43f5e' },
    { name: 'Kuning Jingga', value: '#f59e0b' },
    { name: 'Sian', value: '#06b6d4' },
    { name: 'Ungu', value: '#a855f7' },
    { name: 'Cokelat', value: '#78350f' },
    { name: 'Merah', value: '#ef4444' },
    { name: 'Biru Langit', value: '#3b82f6' },
    { name: 'Hijau Daun', value: '#22c55e' },
    { name: 'Oranye', value: '#f97316' },
    { name: 'Netral', value: '#404040' },
  ];

  const paperColors = [
    { name: 'Putih Bersih', value: '#ffffff' },
    { name: 'Krem Lembut', value: '#fffbeb' },
    { name: 'Abu-abu Muda', value: '#f8fafc' },
    { name: 'Biru Pucat', value: '#f0f9ff' },
    { name: 'Hijau Pucat', value: '#f0fdf4' },
    { name: 'Mawar Pucat', value: '#fff1f2' },
    { name: 'Kuning Pucat', value: '#fefce8' },
    { name: 'Ungu Pucat', value: '#faf5ff' },
    { name: 'Cokelat Pucat', value: '#fff7ed' },
  ];

  const fonts: { id: FontOption; name: string }[] = [
    { id: 'sans', name: 'Inter (Sans Modern)' },
    { id: 'serif', name: 'Libre Baskerville (Serif Klasik)' },
    { id: 'display', name: 'Montserrat (Display Tebal)' },
    { id: 'classic', name: 'Playfair Display (Elegan)' },
    { id: 'mono', name: 'JetBrains Mono (Teknis)' },
    { id: 'rounded', name: 'Quicksand (Bulat Lembut)' },
    { id: 'elegant', name: 'Cormorant (Mewah & Tipis)' },
    { id: 'modern', name: 'Outfit (Modern Bersih)' },
    { id: 'writing', name: 'Caveat (Tulis Tangan)' },
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      {/* Sub-tabs */}
      <div className="flex border-b border-neutral-100 bg-neutral-50/50 p-1">
        <button 
          onClick={() => setSection('data')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all",
            section === 'data' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-400 hover:text-neutral-600"
          )}
        >
          <LayoutIcon size={14} />
          Data Diri
        </button>
        <button 
          onClick={() => setSection('customize')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all",
            section === 'customize' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-400 hover:text-neutral-600"
          )}
        >
          <Palette size={14} />
          Kustomisasi
        </button>
        <button 
          onClick={() => setSection('integrate')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all",
            section === 'integrate' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-400 hover:text-neutral-600"
          )}
        >
          <Globe size={14} />
          Integrasi
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {section === 'data' && (
          <div className="space-y-8">
            {/* Profil Dasar */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Informasi Pribadi</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Nama Lengkap</label>
                  <input 
                    className={cn(
                      "w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all",
                      isInstruction(data.fullName) && "text-emerald-600 italic font-medium"
                    )}
                    value={data.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Contoh: John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Posisi / Gelar</label>
                  <input 
                    className={cn(
                      "w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all",
                      isInstruction(data.title) && "text-emerald-600 italic font-medium"
                    )}
                    value={data.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    placeholder="Contoh: Senior Web Developer"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Email</label>
                  <input 
                    className={cn(
                      "w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all",
                      isInstruction(data.email) && "text-emerald-600 italic font-medium"
                    )}
                    value={data.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Telepon</label>
                  <input 
                    className={cn(
                      "w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all",
                      isInstruction(data.phone) && "text-emerald-600 italic font-medium"
                    )}
                    value={data.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+62 812..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Kota Domisili</label>
                  <input 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    placeholder="Contoh: Jakarta"
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Alamat Lengkap</label>
                  <input 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="Jl. Merdeka No. 123..."
                  />
                </div>
              </div>
            </section>

            {/* Identitas Lengkap */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Identitas Lengkap</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Tempat, Tgl Lahir</label>
                  <input 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.birthPlaceDate}
                    onChange={(e) => updateField('birthPlaceDate', e.target.value)}
                    placeholder="Jakarta, 01-01-1990"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Jenis Kelamin</label>
                  <select 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.gender}
                    onChange={(e) => updateField('gender', e.target.value)}
                  >
                    <option value="">Pilih...</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Agama</label>
                  <input 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.religion}
                    onChange={(e) => updateField('religion', e.target.value)}
                    placeholder="Contoh: Islam"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Pendidikan Terakhir</label>
                  <input 
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={data.lastEducation}
                    onChange={(e) => updateField('lastEducation', e.target.value)}
                    placeholder="Contoh: S1 Desain"
                  />
                </div>
              </div>
            </section>

            {activeTab === 'cv' ? (
              <>
                {/* Ringkasan */}
                <section className="space-y-2">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Ringkasan Profesional</h3>
                  <textarea 
                    className={cn(
                      "w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all min-h-[100px]",
                      isInstruction(data.summary) && "text-emerald-600 italic font-medium"
                    )}
                    value={data.summary}
                    onChange={(e) => updateField('summary', e.target.value)}
                    placeholder="Tuliskan deskripsi singkat tentang diri Anda..."
                  />
                </section>

                {/* Pengalaman */}
                <section className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Pengalaman Kerja</h3>
                    <button onClick={addExperience} className="p-1 hover:bg-emerald-50 text-emerald-600 rounded-full transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="space-y-6">
                    {data.experience.map((exp) => (
                      <div key={exp.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3 relative group">
                        <button 
                          onClick={() => removeExperience(exp.id)}
                          className="absolute top-2 right-2 p-1 text-neutral-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                          <input 
                            placeholder="Perusahaan"
                            className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          />
                          <input 
                            placeholder="Posisi"
                            className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                          />
                          <input 
                            placeholder="Durasi (misal 2020 - 2022)"
                            className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500 col-span-2"
                            value={exp.duration}
                            onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                          />
                        </div>
                        <textarea 
                          placeholder="Deskripsi pekerjaan..."
                          className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500 min-h-[80px]"
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Pendidikan */}
                <section className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Pendidikan</h3>
                    <button onClick={addEducation} className="p-1 hover:bg-emerald-50 text-emerald-600 rounded-full transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {data.education.map((edu) => (
                      <div key={edu.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3 relative group">
                        <button 
                          onClick={() => removeEducation(edu.id)}
                          className="absolute top-2 right-2 p-1 text-neutral-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <input 
                          placeholder="Sekolah / Universitas"
                          className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input 
                            placeholder="Gelar"
                            className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          />
                          <input 
                            placeholder="Tahun"
                            className="px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            value={edu.year}
                            onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Keahlian */}
                <section className="space-y-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Keahlian</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {data.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full flex items-center gap-2 border border-emerald-100 uppercase tracking-wider">
                        {skill}
                        <button onClick={() => removeSkill(i)} className="hover:text-emerald-900"><Trash2 size={10} /></button>
                      </span>
                    ))}
                  </div>
                  <input 
                    placeholder="Tambah keahlian (Tekan Enter)"
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    onKeyDown={handleSkillChange}
                  />
                </section>

                {/* Sertifikasi */}
                <section className="space-y-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Sertifikasi</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {data.certifications.map((cert, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full flex items-center gap-2 border border-blue-100 uppercase tracking-wider">
                        {cert}
                        <button onClick={() => removeCertification(i)} className="hover:text-blue-900"><Trash2 size={10} /></button>
                      </span>
                    ))}
                  </div>
                  <input 
                    placeholder="Tambah sertifikasi (Tekan Enter)"
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    onKeyDown={handleCertificationChange}
                  />
                </section>
              </>
            ) : (
              <>
                {/* Informasi Penerima */}
                <section className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Informasi Penerima</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Nama Penerima</label>
                      <input 
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        value={data.recipientName}
                        onChange={(e) => updateField('recipientName', e.target.value)}
                        placeholder="Bapak/Ibu HRD"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Jabatan Penerima</label>
                      <input 
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        value={data.recipientTitle}
                        onChange={(e) => updateField('recipientTitle', e.target.value)}
                        placeholder="Manajer HRD"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Nama Perusahaan</label>
                      <input 
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        value={data.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        placeholder="PT. Maju Mundur"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Alamat Perusahaan</label>
                      <input 
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        value={data.companyAddress}
                        onChange={(e) => updateField('companyAddress', e.target.value)}
                        placeholder="Jakarta Selatan"
                      />
                    </div>
                  </div>
                </section>

                {/* Isi Surat */}
                <section className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Isi Surat</h3>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">Subjek / Perihal</label>
                    <input 
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      value={data.letterSubject}
                      onChange={(e) => updateField('letterSubject', e.target.value)}
                      placeholder="Contoh: Lamaran Pekerjaan - Senior Product Designer"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">Konten Surat</label>
                    <textarea 
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all min-h-[400px]"
                      value={data.letterContent}
                      onChange={(e) => updateField('letterContent', e.target.value)}
                      placeholder="Tuliskan isi surat lamaran kerja Anda..."
                    />
                  </div>
                </section>

                {/* Lampiran */}
                <section className="space-y-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Lampiran</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {data.attachments.map((att, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-50 text-neutral-700 text-[10px] font-black rounded-full flex items-center gap-2 border border-neutral-200 uppercase tracking-wider">
                        {att}
                        <button onClick={() => removeAttachment(i)} className="hover:text-neutral-900"><Trash2 size={10} /></button>
                      </span>
                    ))}
                  </div>
                  <input 
                    placeholder="Tambah lampiran (misal CV, Ijazah) - Tekan Enter"
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    onKeyDown={handleAttachmentChange}
                  />
                </section>
              </>
            )}
          </div>
        )}

        {section === 'customize' && (
          <div className="space-y-10">
            {/* Skema Warna */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Skema Warna Utama</h3>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => updateCustomization('primaryColor', c.value)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all",
                      data.customization.primaryColor === c.value 
                        ? "border-emerald-500 bg-emerald-50" 
                        : "border-neutral-100 hover:border-neutral-200"
                    )}
                  >
                    <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: c.value }}></div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500">{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Warna Kustom</label>
                <div className="flex gap-2">
                  <input 
                    type="color"
                    value={data.customization.primaryColor}
                    onChange={(e) => updateCustomization('primaryColor', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer border-none p-0"
                  />
                  <input 
                    type="text"
                    value={data.customization.primaryColor}
                    onChange={(e) => updateCustomization('primaryColor', e.target.value)}
                    className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Warna Kertas */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Warna Dasar Kertas</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">Baru</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {paperColors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => updateCustomization('paperColor', c.value)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all",
                      data.customization.paperColor === c.value 
                        ? "border-emerald-500 bg-emerald-50" 
                        : "border-neutral-100 hover:border-neutral-200"
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg shadow-sm border border-neutral-100" style={{ backgroundColor: c.value }}></div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500 text-center leading-tight">{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Warna Kertas Kustom</label>
                <div className="flex gap-2">
                  <input 
                    type="color"
                    value={data.customization.paperColor}
                    onChange={(e) => updateCustomization('paperColor', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer border-none p-0"
                  />
                  <input 
                    type="text"
                    value={data.customization.paperColor}
                    onChange={(e) => updateCustomization('paperColor', e.target.value)}
                    className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Font */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Tipografi (Font)</h3>
              <div className="space-y-2">
                {fonts.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => updateCustomization('fontFamily', f.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all text-left",
                      data.customization.fontFamily === f.id 
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700" 
                        : "border-neutral-100 hover:border-neutral-200 text-neutral-600"
                    )}
                  >
                    <span className={cn("text-sm font-medium", 
                      f.id === 'sans' ? 'font-sans' : 
                      f.id === 'serif' ? 'font-serif' : 
                      f.id === 'display' ? 'font-display' : 
                      f.id === 'classic' ? 'font-classic' : 'font-mono'
                    )}>
                      {f.name}
                    </span>
                    {data.customization.fontFamily === f.id && <CheckCircle2 size={16} />}
                  </button>
                ))}
              </div>
            </section>

            {/* Layout */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Tata Letak Elemen</h3>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <p className="text-[10px] text-neutral-400 italic">Fitur seret-dan-lepas (drag & drop) untuk mengatur urutan bagian akan segera hadir. Saat ini urutan diatur secara otomatis untuk menjaga profesionalitas.</p>
                <div className="space-y-2">
                  {['Profil', 'Pengalaman Kerja', 'Pendidikan', 'Keahlian'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 bg-white border border-neutral-100 rounded-lg text-xs font-bold text-neutral-600">
                      <span className="text-neutral-300">{i + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {section === 'integrate' && (
          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Hubungkan Platform</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Hubungkan akun pencarian kerja Anda untuk mengirimkan lamaran langsung dari aplikasi ini.</p>
              
              <div className="space-y-3">
                {/* LinkedIn */}
                <div className="p-4 bg-white border border-neutral-200 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#0077b5] rounded-xl flex items-center justify-center text-white">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">LinkedIn</h4>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Jaringan Profesional</p>
                    </div>
                  </div>
                  <button 
                    disabled={isConnecting}
                    onClick={() => handleConnect('linkedin')}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                      connectionStatus.linkedin 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-neutral-900 text-white hover:bg-neutral-800"
                    )}
                  >
                    {isConnecting ? "Menghubungkan..." : connectionStatus.linkedin ? "Terhubung" : "Hubungkan"}
                  </button>
                </div>

                {/* JobStreet */}
                <div className="p-4 bg-white border border-neutral-200 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1c3f94] rounded-xl flex items-center justify-center text-white">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">JobStreet</h4>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Portal Lowongan Kerja</p>
                    </div>
                  </div>
                  <button 
                    disabled={isConnecting}
                    onClick={() => handleConnect('jobstreet')}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                      connectionStatus.jobstreet 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-neutral-900 text-white hover:bg-neutral-800"
                    )}
                  >
                    {isConnecting ? "Menghubungkan..." : connectionStatus.jobstreet ? "Terhubung" : "Hubungkan"}
                  </button>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-b pb-2">Kirim Lamaran</h3>
              <div className={cn(
                "p-6 rounded-2xl border-2 border-dashed flex flex-col items-center text-center gap-4 transition-all",
                (connectionStatus.linkedin || connectionStatus.jobstreet) 
                  ? "border-emerald-200 bg-emerald-50/30" 
                  : "border-neutral-100 bg-neutral-50/50"
              )}>
                {(connectionStatus.linkedin || connectionStatus.jobstreet) ? (
                  <>
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-1">Siap Dikirim!</h4>
                      <p className="text-xs text-neutral-500">Pilih platform tujuan dan kirimkan CV serta Surat Lamaran Anda sekarang.</p>
                    </div>
                    <div className="flex gap-2 w-full">
                      {connectionStatus.linkedin && (
                        <button className="flex-1 py-3 bg-[#0077b5] text-white rounded-xl text-xs font-bold hover:bg-[#006396] transition-all">
                          Kirim ke LinkedIn
                        </button>
                      )}
                      {connectionStatus.jobstreet && (
                        <button className="flex-1 py-3 bg-[#1c3f94] text-white rounded-xl text-xs font-bold hover:bg-[#163275] transition-all">
                          Kirim ke JobStreet
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-400">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-400 mb-1">Belum Terhubung</h4>
                      <p className="text-xs text-neutral-300">Hubungkan setidaknya satu platform untuk mengaktifkan fitur pengiriman langsung.</p>
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
