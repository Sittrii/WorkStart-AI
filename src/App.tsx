import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  FileText, 
  Mail, 
  Download, 
  Layout, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserData, TemplateType, DocumentType, FontOption } from './types';
import { Editor } from './components/Editor';
import { 
  ModernCV, ClassicCV, CreativeCV, MinimalistCV,
  ProfessionalCV, ExecutiveCV, ElegantCV, BoldCV,
  SidebarCV, GridCV, CompactCV, AcademicCV,
  TechCV, StartupCV, VintageCV, CorporateCV,
  SimpleCV, LuxuryCV, ArtisticCV, FunctionalCV, CleanCV,
  VibrantCV, OceanCV, ForestCV, RoyalCV, SunsetCV
} from './components/CVTemplates';
import { 
  ModernLetter, ClassicLetter, CreativeLetter, MinimalistLetter,
  ProfessionalLetter, ExecutiveLetter, ElegantLetter, BoldLetter,
  SidebarLetter, GridLetter, CompactLetter, AcademicLetter,
  TechLetter, StartupLetter, VintageLetter, CorporateLetter,
  SimpleLetter, LuxuryLetter, ArtisticLetter, FunctionalLetter,
  VibrantLetter, OceanLetter, ForestLetter, RoyalLetter, SunsetLetter
} from './components/LetterTemplates';
import { cn } from './lib/utils';

const initialData: UserData = {
  fullName: '[NAMA LENGKAP ANDA]',
  title: '[POSISI / JABATAN YANG DILAMAR]',
  email: '[alamat.email@anda.com]',
  phone: '[+62 8xx-xxxx-xxxx]',
  address: '[Alamat Lengkap / Domisili]',
  website: '[www.portfolio-anda.com]',
  summary: 'Gunakan bagian ini untuk memperkenalkan diri Anda secara singkat. Ceritakan pengalaman utama, keahlian kunci, dan apa yang membuat Anda unik. Contoh: "Profesional di bidang [Bidang] dengan pengalaman [X] tahun dalam [Keahlian]."',
  skills: ['[Keahlian 1]', '[Keahlian 2]', '[Keahlian 3]', '[Keahlian 4]', '[Keahlian 5]'],
  experience: [
    {
      id: '1',
      company: '[Nama Perusahaan / Organisasi]',
      position: '[Posisi / Jabatan]',
      duration: '[Bulan/Tahun Mulai] - [Sekarang/Selesai]',
      description: 'Jelaskan tanggung jawab dan pencapaian Anda di sini. Gunakan poin-poin untuk mempermudah pembaca. Fokus pada hasil nyata yang Anda berikan.'
    }
  ],
  education: [
    {
      id: '1',
      school: '[Nama Universitas / Institusi]',
      degree: '[Gelar / Jurusan]',
      year: '[Tahun Masuk] - [Tahun Lulus]',
      description: 'Tambahkan detail seperti IPK, judul skripsi, atau prestasi akademik jika relevan.'
    }
  ],
  certifications: ['[Nama Sertifikasi 1]', '[Nama Sertifikasi 2]'],
  // Identity details (Indonesian standard)
  birthPlaceDate: '[Tempat, Tanggal Lahir]',
  gender: '[Laki-laki / Perempuan]',
  religion: '[Agama]',
  lastEducation: '[Pendidikan Terakhir]',
  city: '[Kota Domisili]',
  // Letter specific
  recipientName: '[Nama Penerima / HRD]',
  recipientTitle: '[Jabatan Penerima, misal: HR Manager]',
  companyName: '[Nama Perusahaan Tujuan]',
  companyAddress: '[Alamat Perusahaan Tujuan]',
  letterContent: 'Bapak/Ibu [Nama Penerima],\n\nSaya menulis surat ini untuk menyatakan ketertarikan saya pada posisi [Nama Posisi] di [Nama Perusahaan]...\n\n[Paragraf 1: Sebutkan dari mana Anda tahu lowongan ini dan mengapa Anda tertarik]\n\n[Paragraf 2: Jelaskan kualifikasi utama Anda yang relevan dengan posisi tersebut]\n\n[Paragraf 3: Sampaikan antusiasme Anda untuk berdiskusi lebih lanjut dalam sesi wawancara]\n\nTerima kasih atas waktu dan pertimbangan Anda.',
  letterSubject: 'Lamaran Pekerjaan - [Nama Posisi] - [Nama Anda]',
  attachments: ['Curriculum Vitae (CV)', 'Portofolio', 'Ijazah & Transkrip', 'Sertifikat Pendukung'],
  date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
  customization: {
    primaryColor: '#10b981',
    paperColor: '#ffffff',
    fontFamily: 'sans',
    sectionOrder: ['profile', 'experience', 'education', 'skills']
  },
  integrationStatus: {
    linkedin: false,
    jobstreet: false
  }
};

export default function App() {
  const [data, setData] = useState<UserData>(initialData);
  const [activeTab, setActiveTab] = useState<DocumentType>('cv');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState<'editor' | 'gallery' | 'color-gallery' | 'paper-gallery' | 'font-gallery'>('editor');
  
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${data.fullName} - ${activeTab.toUpperCase()}`,
  });

  const templates: { id: TemplateType; name: string; color: string }[] = [
    { id: 'modern', name: 'Modern', color: 'bg-slate-900' },
    { id: 'classic', name: 'Klasik', color: 'bg-neutral-200' },
    { id: 'creative', name: 'Kreatif', color: 'bg-emerald-500' },
    { id: 'minimalist', name: 'Minimalis', color: 'bg-neutral-50' },
    { id: 'professional', name: 'Profesional', color: 'bg-blue-600' },
    { id: 'executive', name: 'Eksekutif', color: 'bg-slate-800' },
    { id: 'elegant', name: 'Elegan', color: 'bg-stone-200' },
    { id: 'bold', name: 'Berani', color: 'bg-black' },
    { id: 'sidebar', name: 'Bilah Samping', color: 'bg-neutral-900' },
    { id: 'grid', name: 'Kisi', color: 'bg-neutral-100' },
    { id: 'compact', name: 'Padat', color: 'bg-slate-100' },
    { id: 'academic', name: 'Akademik', color: 'bg-white border' },
    { id: 'tech', name: 'Teknologi', color: 'bg-neutral-800' },
    { id: 'startup', name: 'Startup', color: 'bg-indigo-500' },
    { id: 'vintage', name: 'Vintage', color: 'bg-amber-50' },
    { id: 'corporate', name: 'Korporat', color: 'bg-slate-700' },
    { id: 'clean', name: 'Bersih', color: 'bg-neutral-50 border' },
    { id: 'luxury', name: 'Mewah', color: 'bg-neutral-950' },
    { id: 'artistic', name: 'Artistis', color: 'bg-rose-500' },
    { id: 'functional', name: 'Fungsional', color: 'bg-slate-50' },
    { id: 'vibrant', name: 'Berwarna', color: 'bg-orange-500' },
    { id: 'ocean', name: 'Laut', color: 'bg-cyan-500' },
    { id: 'forest', name: 'Hutan', color: 'bg-emerald-800' },
    { id: 'royal', name: 'Kerajaan', color: 'bg-purple-700' },
    { id: 'sunset', name: 'Matahari Terbenam', color: 'bg-rose-400' },
  ];

  const renderCV = () => {
    switch (template) {
      case 'modern': return <ModernCV data={data} />;
      case 'classic': return <ClassicCV data={data} />;
      case 'creative': return <CreativeCV data={data} />;
      case 'minimalist': return <MinimalistCV data={data} />;
      case 'professional': return <ProfessionalCV data={data} />;
      case 'executive': return <ExecutiveCV data={data} />;
      case 'elegant': return <ElegantCV data={data} />;
      case 'bold': return <BoldCV data={data} />;
      case 'sidebar': return <SidebarCV data={data} />;
      case 'grid': return <GridCV data={data} />;
      case 'compact': return <CompactCV data={data} />;
      case 'academic': return <AcademicCV data={data} />;
      case 'tech': return <TechCV data={data} />;
      case 'startup': return <StartupCV data={data} />;
      case 'vintage': return <VintageCV data={data} />;
      case 'corporate': return <CorporateCV data={data} />;
      case 'clean': return <CleanCV data={data} />;
      case 'luxury': return <LuxuryCV data={data} />;
      case 'artistic': return <ArtisticCV data={data} />;
      case 'functional': return <FunctionalCV data={data} />;
      case 'vibrant': return <VibrantCV data={data} />;
      case 'ocean': return <OceanCV data={data} />;
      case 'forest': return <ForestCV data={data} />;
      case 'royal': return <RoyalCV data={data} />;
      case 'sunset': return <SunsetCV data={data} />;
      default: return <ModernCV data={data} />;
    }
  };

  const renderLetter = () => {
    switch (template) {
      case 'modern': return <ModernLetter data={data} />;
      case 'classic': return <ClassicLetter data={data} />;
      case 'creative': return <CreativeLetter data={data} />;
      case 'minimalist': return <MinimalistLetter data={data} />;
      case 'professional': return <ProfessionalLetter data={data} />;
      case 'executive': return <ExecutiveLetter data={data} />;
      case 'elegant': return <ElegantLetter data={data} />;
      case 'bold': return <BoldLetter data={data} />;
      case 'sidebar': return <SidebarLetter data={data} />;
      case 'grid': return <GridLetter data={data} />;
      case 'compact': return <CompactLetter data={data} />;
      case 'academic': return <AcademicLetter data={data} />;
      case 'tech': return <TechLetter data={data} />;
      case 'startup': return <StartupLetter data={data} />;
      case 'vintage': return <VintageLetter data={data} />;
      case 'corporate': return <CorporateLetter data={data} />;
      case 'clean': return <SimpleLetter data={data} />;
      case 'luxury': return <LuxuryLetter data={data} />;
      case 'artistic': return <ArtisticLetter data={data} />;
      case 'functional': return <FunctionalLetter data={data} />;
      case 'vibrant': return <VibrantLetter data={data} />;
      case 'ocean': return <OceanLetter data={data} />;
      case 'forest': return <ForestLetter data={data} />;
      case 'royal': return <RoyalLetter data={data} />;
      case 'sunset': return <SunsetLetter data={data} />;
      default: return <ModernLetter data={data} />;
    }
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

  const fonts: { id: FontOption; name: string; sample: string }[] = [
    { id: 'sans', name: 'Inter', sample: 'Modern & Bersih' },
    { id: 'serif', name: 'Libre Baskerville', sample: 'Klasik & Terpercaya' },
    { id: 'display', name: 'Montserrat', sample: 'Tebal & Berani' },
    { id: 'classic', name: 'Playfair Display', sample: 'Elegan & Mewah' },
    { id: 'mono', name: 'JetBrains Mono', sample: 'Teknis & Presisi' },
    { id: 'rounded', name: 'Quicksand', sample: 'Ramah & Dinamis' },
    { id: 'elegant', name: 'Cormorant', sample: 'Artistik & Halus' },
    { id: 'modern', name: 'Outfit', sample: 'Minimalis & Canggih' },
    { id: 'writing', name: 'Caveat', sample: 'Personal & Kreatif' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-6 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-neutral-900 leading-tight">WorkStart <span className="text-emerald-500">AI</span></h1>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Pembuat CV & Surat Lamaran Otomatis</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-neutral-100 p-1 rounded-xl">
            <button 
              onClick={() => setView('gallery')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                view === 'gallery' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Template
            </button>
            <button 
              onClick={() => setView('color-gallery')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                view === 'color-gallery' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Warna Desain
            </button>
            <button 
              onClick={() => setView('paper-gallery')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                view === 'paper-gallery' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Warna Kertas
            </button>
            <button 
              onClick={() => setView('font-gallery')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                view === 'font-gallery' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Font
            </button>
          </div>

          <button 
            onClick={() => setView('editor')}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
              view === 'editor' ? "bg-emerald-500 text-white shadow-lg" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            )}
          >
            <Layout size={16} />
            Editor
          </button>

          <div className="h-6 w-px bg-neutral-200 mx-2"></div>

          <div className="flex bg-neutral-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('cv')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'cv' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              <FileText size={16} />
              CV
            </button>
            <button 
              onClick={() => setActiveTab('letter')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'letter' ? "bg-white text-emerald-600 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              <Mail size={16} />
              Surat Lamaran
            </button>
          </div>

          <button 
            onClick={() => handlePrint()}
            className="flex items-center gap-2 px-6 py-2 bg-neutral-900 text-white rounded-xl text-sm font-bold hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200 active:scale-95"
          >
            <Download size={16} />
            Unduh PDF
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative">
        <AnimatePresence mode="wait">
          {view === 'gallery' && (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 bg-neutral-50 overflow-y-auto p-12 z-30"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black text-neutral-900 mb-2">Pilih Desain Profesional</h2>
                  <p className="text-neutral-500 font-medium">Temukan template yang paling sesuai dengan karakter dan industri Anda.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {templates.map((t) => (
                    <motion.div
                      key={t.id}
                      whileHover={{ y: -8 }}
                      onClick={() => {
                        setTemplate(t.id);
                        setView('editor');
                      }}
                      className={cn(
                        "group cursor-pointer bg-white rounded-3xl p-4 border-2 transition-all shadow-sm hover:shadow-2xl",
                        template === t.id ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-transparent hover:border-neutral-200"
                      )}
                    >
                      <div className={cn("aspect-[3/4] rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden", t.color)}>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        <div className="w-3/4 h-3/4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-2xl flex flex-col p-4 gap-2">
                          <div className="w-1/2 h-2 bg-white/40 rounded" />
                          <div className="w-full h-1 bg-white/20 rounded" />
                          <div className="w-full h-1 bg-white/20 rounded" />
                          <div className="w-2/3 h-1 bg-white/20 rounded" />
                          <div className="mt-auto flex gap-1">
                            <div className="w-4 h-4 rounded-full bg-white/40" />
                            <div className="w-4 h-4 rounded-full bg-white/40" />
                          </div>
                        </div>
                        {template === t.id && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                            <CheckCircle2 size={18} />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between px-2">
                        <div>
                          <h3 className="font-black text-neutral-900">{t.name}</h3>
                          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Template {activeTab.toUpperCase()}</p>
                        </div>
                        <button className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          template === t.id ? "bg-emerald-500 text-white" : "bg-neutral-100 text-neutral-400 group-hover:bg-emerald-50 group-hover:text-emerald-500"
                        )}>
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'color-gallery' && (
            <motion.div 
              key="color-gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 bg-neutral-50 overflow-y-auto p-12 z-30"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black text-neutral-900 mb-2">Pilih Warna Desain</h2>
                  <p className="text-neutral-500 font-medium">Ubah suasana dokumen Anda dengan skema warna yang mencerminkan profesionalitas Anda.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {colors.map((c) => (
                    <motion.div
                      key={c.value}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setData({
                          ...data,
                          customization: { ...data.customization, primaryColor: c.value }
                        });
                        setView('editor');
                      }}
                      className={cn(
                        "cursor-pointer bg-white rounded-3xl p-6 border-2 transition-all shadow-sm flex flex-col items-center gap-4",
                        data.customization.primaryColor === c.value ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-transparent hover:border-neutral-200"
                      )}
                    >
                      <div className="w-20 h-20 rounded-full shadow-2xl border-4 border-white" style={{ backgroundColor: c.value }} />
                      <div className="text-center">
                        <h3 className="font-black text-neutral-900 text-sm">{c.name}</h3>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{c.value}</p>
                      </div>
                      {data.customization.primaryColor === c.value && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'paper-gallery' && (
            <motion.div 
              key="paper-gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 bg-neutral-50 overflow-y-auto p-12 z-30"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black text-neutral-900 mb-2">Pilih Warna Kertas</h2>
                  <p className="text-neutral-500 font-medium">Gunakan warna dasar kertas yang elegan untuk membuat dokumen Anda lebih menonjol.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {paperColors.map((c) => (
                    <motion.div
                      key={c.value}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setData({
                          ...data,
                          customization: { ...data.customization, paperColor: c.value }
                        });
                        setView('editor');
                      }}
                      className={cn(
                        "cursor-pointer bg-white rounded-3xl p-6 border-2 transition-all shadow-sm flex flex-col items-center gap-4",
                        data.customization.paperColor === c.value ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-transparent hover:border-neutral-200"
                      )}
                    >
                      <div className="w-24 h-32 rounded-lg shadow-xl border border-neutral-100 relative overflow-hidden" style={{ backgroundColor: c.value }}>
                        <div className="absolute top-4 left-4 w-1/2 h-2 bg-neutral-900/10 rounded" />
                        <div className="absolute top-8 left-4 w-3/4 h-1 bg-neutral-900/5 rounded" />
                        <div className="absolute top-10 left-4 w-3/4 h-1 bg-neutral-900/5 rounded" />
                        <div className="absolute top-12 left-4 w-1/2 h-1 bg-neutral-900/5 rounded" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-black text-neutral-900 text-sm">{c.name}</h3>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{c.value}</p>
                      </div>
                      {data.customization.paperColor === c.value && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'font-gallery' && (
            <motion.div 
              key="font-gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 bg-neutral-50 overflow-y-auto p-12 z-30"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black text-neutral-900 mb-2">Pilih Tipografi</h2>
                  <p className="text-neutral-500 font-medium">Font yang tepat dapat memberikan kesan pertama yang kuat pada HRD.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fonts.map((f) => (
                    <motion.div
                      key={f.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setData({
                          ...data,
                          customization: { ...data.customization, fontFamily: f.id }
                        });
                        setView('editor');
                      }}
                      className={cn(
                        "cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all shadow-sm flex flex-col gap-6",
                        data.customization.fontFamily === f.id ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-transparent hover:border-neutral-200"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-black text-neutral-900 text-lg">{f.name}</h3>
                          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Gaya {f.id}</p>
                        </div>
                        {data.customization.fontFamily === f.id && (
                          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                            <CheckCircle2 size={18} />
                          </div>
                        )}
                      </div>
                      
                      <div className={cn("text-4xl py-8 border-y border-neutral-50", 
                        f.id === 'sans' && "font-sans",
                        f.id === 'serif' && "font-serif",
                        f.id === 'display' && "font-display",
                        f.id === 'classic' && "font-classic",
                        f.id === 'mono' && "font-mono",
                        f.id === 'rounded' && "font-rounded",
                        f.id === 'elegant' && "font-elegant",
                        f.id === 'modern' && "font-modern",
                        f.id === 'writing' && "font-writing"
                      )}>
                        {f.sample}
                      </div>

                      <div className="text-sm text-neutral-500 leading-relaxed">
                        The quick brown fox jumps over the lazy dog. 1234567890
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'editor' && (
            <>
              {/* Sidebar Editor */}
              <motion.aside 
                key="editor-sidebar"
                initial={false}
                animate={{ width: isSidebarOpen ? 450 : 0, opacity: isSidebarOpen ? 1 : 0 }}
                className="bg-white border-r border-neutral-200 flex flex-col overflow-hidden shadow-xl z-10"
              >
                <div className="p-6 flex-1 overflow-hidden">
                  <Editor data={data} onChange={setData} activeTab={activeTab} />
                </div>
              </motion.aside>

              {/* Toggle Sidebar */}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="absolute left-[435px] top-1/2 -translate-y-1/2 w-8 h-16 bg-white border border-neutral-200 rounded-r-2xl flex items-center justify-center text-neutral-400 hover:text-emerald-500 transition-all z-20 shadow-md"
                style={{ left: isSidebarOpen ? '450px' : '0px' }}
              >
                {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>

              {/* Preview Area */}
              <div className="flex-1 overflow-y-auto p-12 bg-neutral-100 custom-scrollbar relative">
                {/* Live Preview Badge */}
                <div className="absolute top-6 right-12 flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest animate-pulse z-20">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  Live Preview Aktif
                </div>

                <div className="flex flex-col items-center relative">
                  {/* Instructional Overlay for Initial State */}
                  {JSON.stringify(data) === JSON.stringify(initialData) && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl border border-emerald-100 shadow-2xl text-emerald-900 font-bold flex flex-col items-center gap-2 animate-bounce">
                        <div className="flex items-center gap-2">
                          <Sparkles className="text-emerald-500" size={20} />
                          <span>Mode Contoh (Instruksi)</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest opacity-50 font-black">Mulai isi data di panel kiri</p>
                      </div>
                    </div>
                  )}

                  <div className="mb-8 flex items-center gap-2 text-neutral-400 text-sm font-medium">
                    <Layout size={16} />
                    Pratinjau {activeTab.toUpperCase()} - Template {templates.find(t => t.id === template)?.name || template}
                  </div>
                  
                  <div 
                    className={cn(
                      "print-container transform scale-[0.85] origin-top shadow-[0_0_100px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden transition-all duration-700",
                      JSON.stringify(data) === JSON.stringify(initialData) && "opacity-50 grayscale-[0.3] blur-[0.5px]"
                    )}
                    style={{ backgroundColor: data.customization.paperColor }}
                  >
                    <div ref={printRef} className="h-full">
                      {activeTab === 'cv' ? renderCV() : renderLetter()}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4;
        }
      `}</style>
    </div>
  );
}
