import React from 'react';
import { UserData } from '../types';
import { cn } from '../lib/utils';

interface TemplateProps {
  data: UserData;
}

const getFontClass = (font: string) => {
  switch (font) {
    case 'sans': return 'font-sans';
    case 'serif': return 'font-serif';
    case 'display': return 'font-display';
    case 'classic': return 'font-classic';
    case 'mono': return 'font-mono';
    default: return 'font-sans';
  }
};

export const ModernCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("flex flex-col h-full text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="p-12 flex justify-between items-center" style={{ backgroundColor: primaryColor, color: '#fff' }}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">{data.fullName || 'NAMA LENGKAP'}</h1>
          <p className="text-lg opacity-80 mt-1 font-light tracking-widest uppercase">{data.title || 'POSISI PEKERJAAN'}</p>
        </div>
        <div className="text-right text-sm space-y-1 opacity-90 border-l pl-8 border-white/20">
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.address}</p>
        </div>
      </div>
      
      <div className="flex flex-1">
        <div className="w-[35%] bg-slate-50 p-10 border-r border-slate-200">
          <section className="mb-10">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Data Pribadi</h2>
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-[80px_5px_1fr] gap-1">
                <p>Tempat/Tgl Lahir</p><p>:</p><p className="font-bold">{data.birthPlaceDate}</p>
                <p>Jenis Kelamin</p><p>:</p><p className="font-bold">{data.gender}</p>
                <p>Agama</p><p>:</p><p className="font-bold">{data.religion}</p>
                <p>Alamat</p><p>:</p><p className="font-bold">{data.address}</p>
                <p>Pend. Terakhir</p><p>:</p><p className="font-bold">{data.lastEducation}</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-[10px] rounded-full font-bold uppercase tracking-wider" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Pendidikan</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-bold text-sm text-slate-800">{edu.school}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{edu.degree} • {edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          {data.certifications.length > 0 && (
            <section>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Sertifikasi</h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, i) => (
                  <li key={i} className="text-[10px] font-bold text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: primaryColor }}></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        
        <div className="flex-1 p-12 flex flex-col">
          <section className="mb-10">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Profil Profesional</h2>
            <p className="text-sm leading-relaxed text-slate-600 text-justify italic">{data.summary || 'Tuliskan ringkasan profesional Anda di sini.'}</p>
          </section>

          <section className="flex-1">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Pengalaman Kerja</h2>
            <div className="space-y-8">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                    <span className="text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest" style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}>{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-600 mb-2 italic" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm text-slate-500 leading-relaxed text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-20 pt-10 border-t border-slate-100 text-right">
            <p className="text-sm">{data.city}, {data.date}</p>
            <div className="h-24"></div>
            <p className="font-bold text-lg underline underline-offset-8 decoration-slate-200">{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClassicCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("p-16 text-neutral-900 leading-normal", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="text-center border-b-2 pb-8 mb-10" style={{ borderColor: primaryColor }}>
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2" style={{ color: primaryColor }}>{data.fullName || 'NAMA LENGKAP'}</h1>
        <div className="flex justify-center gap-4 text-sm italic text-neutral-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.address}</span>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-lg font-bold uppercase border-b mb-4 tracking-wide" style={{ borderColor: `${primaryColor}40` }}>Data Pribadi</h2>
        <div className="grid grid-cols-[150px_10px_1fr] gap-y-1 text-sm">
          <p>Tempat, Tgl Lahir</p><p>:</p><p>{data.birthPlaceDate}</p>
          <p>Jenis Kelamin</p><p>:</p><p>{data.gender}</p>
          <p>Agama</p><p>:</p><p>{data.religion}</p>
          <p>Alamat</p><p>:</p><p>{data.address}</p>
          <p>Pendidikan Terakhir</p><p>:</p><p>{data.lastEducation}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold uppercase border-b mb-4 tracking-wide" style={{ borderColor: `${primaryColor}40` }}>Ringkasan Profesional</h2>
        <p className="text-sm text-neutral-700 text-justify">{data.summary}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold uppercase border-b mb-4 tracking-wide" style={{ borderColor: `${primaryColor}40` }}>Pengalaman Profesional</h2>
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold text-sm">
                <span style={{ color: primaryColor }}>{exp.company}</span>
                <span>{exp.duration}</span>
              </div>
              <div className="italic text-sm mb-2">{exp.position}</div>
              <p className="text-sm text-neutral-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-10">
        <section>
          <h2 className="text-lg font-bold uppercase border-b mb-4 tracking-wide" style={{ borderColor: `${primaryColor}40` }}>Pendidikan</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <p className="font-bold text-sm">{edu.school}</p>
              <p className="text-sm italic">{edu.degree}</p>
              <p className="text-xs text-neutral-500">{edu.year}</p>
            </div>
          ))}
        </section>
        
        <section>
          <h2 className="text-lg font-bold uppercase border-b mb-4 tracking-wide" style={{ borderColor: `${primaryColor}40` }}>Keahlian & Sertifikasi</h2>
          <div className="space-y-4">
            <ul className="grid grid-cols-1 gap-y-1 list-disc list-inside text-sm text-neutral-700">
              {data.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            {data.certifications.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-bold uppercase text-neutral-400 mb-2">Sertifikasi:</p>
                <ul className="space-y-1 text-sm text-neutral-700">
                  {data.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-neutral-400 rounded-full shrink-0"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t text-right">
        <p className="text-sm">{data.city}, {data.date}</p>
        <div className="h-24"></div>
        <p className="font-bold text-lg underline underline-offset-8 decoration-neutral-300">{data.fullName}</p>
      </div>
    </div>
  );
};

export const CreativeCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("flex h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="w-16 flex flex-col items-center py-10 gap-10 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="rotate-270 whitespace-nowrap text-xs font-bold tracking-[0.5em] uppercase opacity-50">CURRICULUM VITAE</div>
      </div>
      
      <div className="flex-1 p-16">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-6xl font-black text-neutral-900 leading-none mb-2">
              {data.fullName?.split(' ')[0]}<br/>
              <span style={{ color: primaryColor }}>{data.fullName?.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl font-medium text-neutral-400 uppercase tracking-widest">{data.title}</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-2xl text-sm space-y-2">
            <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></span> {data.email}</p>
            <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></span> {data.phone}</p>
            <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></span> {data.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-8 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-1" style={{ backgroundColor: primaryColor }}></span> Pengalaman
              </h2>
              <div className="space-y-8 border-l-2 border-neutral-100 ml-4 pl-8">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-white border-4" style={{ borderColor: primaryColor }}></div>
                    <span className="text-xs font-bold mb-1 block uppercase tracking-wider" style={{ color: primaryColor }}>{exp.duration}</span>
                    <h3 className="text-xl font-bold text-neutral-900">{exp.position}</h3>
                    <p className="text-sm font-semibold text-neutral-500 mb-3">{exp.company}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="col-span-4 space-y-12">
            <section>
              <h2 className="text-xl font-bold mb-6">Keahlian</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-lg uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6">Pendidikan</h2>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-bold text-neutral-900">{edu.school}</p>
                    <p className="text-sm text-neutral-500">{edu.degree}</p>
                    <p className="text-xs font-bold mt-1" style={{ color: primaryColor }}>{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfessionalCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="border-l-8 pl-6 mb-10" style={{ borderColor: primaryColor }}>
        <h1 className="text-4xl font-bold text-slate-900">{data.fullName}</h1>
        <p className="text-lg font-medium opacity-70 uppercase tracking-widest">{data.title}</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-1 border-b-2" style={{ borderColor: primaryColor, color: primaryColor }}>Pengalaman Kerja</h2>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.position}</span>
                    <span className="text-xs opacity-60">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-semibold opacity-80 mb-2">{exp.company}</p>
                  <p className="text-sm opacity-70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-1 border-b-2" style={{ borderColor: primaryColor, color: primaryColor }}>Kontak</h2>
            <div className="text-sm space-y-2 opacity-70">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-1 border-b-2" style={{ borderColor: primaryColor, color: primaryColor }}>Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs font-bold">{s}</span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-1 border-b-2" style={{ borderColor: primaryColor, color: primaryColor }}>Pendidikan</h2>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-3">
                <p className="text-sm font-bold">{edu.school}</p>
                <p className="text-xs opacity-60">{edu.degree} ({edu.year})</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export const ExecutiveCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-neutral-900 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-2">{data.fullName}</h1>
        <div className="h-1 w-20 bg-neutral-900 mx-auto mb-4" style={{ backgroundColor: primaryColor }}></div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{data.title}</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-12">
        <section className="text-center italic text-neutral-600 border-y py-6 border-neutral-200">
          {data.summary}
        </section>
        <section>
          <h2 className="text-center text-xs font-bold uppercase tracking-widest mb-8 text-neutral-400">Riwayat Profesional</h2>
          <div className="space-y-10">
            {data.experience.map(exp => (
              <div key={exp.id} className="text-center">
                <h3 className="text-lg font-bold">{exp.position}</h3>
                <p className="text-sm uppercase tracking-wider mb-2" style={{ color: primaryColor }}>{exp.company} | {exp.duration}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const ElegantCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-stone-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="flex justify-between items-start mb-12 border-b border-stone-200 pb-8">
        <div>
          <h1 className="text-4xl font-light tracking-tight mb-1">{data.fullName}</h1>
          <p className="text-stone-400 italic">{data.title}</p>
        </div>
        <div className="text-right text-xs uppercase tracking-widest space-y-1 text-stone-500">
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.address}</p>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-12">
        <aside className="col-span-1 space-y-10">
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-4">Keahlian</h2>
            <div className="space-y-2">
              {data.skills.map((s, i) => (
                <p key={i} className="text-xs font-medium">{s}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-4">Pendidikan</h2>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-4">
                <p className="text-xs font-bold">{edu.school}</p>
                <p className="text-[10px] italic text-stone-500">{edu.degree}</p>
              </div>
            ))}
          </section>
        </aside>
        <main className="col-span-3 space-y-10">
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-6">Pengalaman</h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-base font-bold">{exp.position}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400">{exp.duration}</span>
                  </div>
                  <p className="text-xs font-bold mb-2" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed opacity-80">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export const BoldCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("text-black", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="p-16 border-b-[20px]" style={{ borderColor: primaryColor }}>
        <h1 className="text-7xl font-black uppercase leading-none tracking-tighter mb-4">{data.fullName}</h1>
        <p className="text-2xl font-bold opacity-50">{data.title}</p>
      </div>
      <div className="p-16 grid grid-cols-2 gap-16">
        <section className="space-y-8">
          <h2 className="text-4xl font-black uppercase italic" style={{ color: primaryColor }}>Pekerjaan</h2>
          <div className="space-y-10">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <h3 className="text-xl font-bold uppercase">{exp.position}</h3>
                <p className="text-sm font-black opacity-40 mb-3">{exp.company} / {exp.duration}</p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-black uppercase italic mb-6" style={{ color: primaryColor }}>Keahlian</h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-black text-white text-xs font-black uppercase">{s}</span>
              ))}
            </div>
          </section>
          <section className="p-8 bg-neutral-100">
            <h2 className="text-xl font-black uppercase mb-4">Kontak</h2>
            <div className="space-y-2 text-sm font-bold">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const SidebarCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("flex h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <aside className="w-1/3 bg-neutral-900 text-white p-10 flex flex-col">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">{data.fullName}</h1>
          <p className="text-sm opacity-60 uppercase tracking-widest" style={{ color: primaryColor }}>{data.title}</p>
        </div>
        <div className="space-y-10 flex-1">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Kontak</h2>
            <div className="text-xs space-y-3 opacity-80">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Keahlian</h2>
            <div className="space-y-2">
              {data.skills.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                  <span className="text-xs">{s}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
      <main className="flex-1 p-12 bg-white overflow-y-auto">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 border-b-2 pb-2" style={{ borderColor: primaryColor }}>Pengalaman</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-neutral-900">{exp.position}</h3>
                  <span className="text-xs text-neutral-400">{exp.duration}</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: primaryColor }}>{exp.company}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-6 border-b-2 pb-2" style={{ borderColor: primaryColor }}>Pendidikan</h2>
          {data.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <p className="font-bold">{edu.school}</p>
              <p className="text-sm text-neutral-500">{edu.degree} | {edu.year}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export const GridCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-8 grid grid-cols-12 gap-4", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="col-span-8 bg-white p-10 rounded-3xl shadow-sm" style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#ffffff' : 'rgba(255,255,255,0.5)' }}>
        <h1 className="text-4xl font-black mb-2">{data.fullName}</h1>
        <p className="text-lg font-bold opacity-40 mb-8">{data.title}</p>
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 text-neutral-300">Pengalaman</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <h3 className="font-bold text-neutral-900">{exp.position}</h3>
                <p className="text-xs font-bold mb-2" style={{ color: primaryColor }}>{exp.company} • {exp.duration}</p>
                <p className="text-sm text-neutral-500">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="col-span-4 space-y-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm" style={{ backgroundColor: primaryColor, color: 'white' }}>
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">Kontak</h2>
          <div className="text-sm space-y-2 font-bold">
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-neutral-300">Keahlian</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-neutral-300">Pendidikan</h2>
          {data.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <p className="text-xs font-bold">{edu.school}</p>
              <p className="text-[10px] opacity-50">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CompactCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-10 text-slate-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="flex justify-between items-center border-b-2 pb-4 mb-6" style={{ borderColor: primaryColor }}>
        <h1 className="text-2xl font-bold">{data.fullName}</h1>
        <div className="text-[10px] text-right space-x-4 uppercase tracking-widest font-bold opacity-50">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: primaryColor }}>Pengalaman</h2>
          <div className="space-y-4">
            {data.experience.map(exp => (
              <div key={exp.id} className="grid grid-cols-6 gap-4">
                <div className="col-span-1 text-[10px] font-bold opacity-40">{exp.duration}</div>
                <div className="col-span-5">
                  <h3 className="text-sm font-bold">{exp.position} di {exp.company}</h3>
                  <p className="text-xs opacity-70 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-2 gap-10">
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: primaryColor }}>Pendidikan</h2>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-2">
                <p className="text-xs font-bold">{edu.school}</p>
                <p className="text-[10px] opacity-50">{edu.degree} • {edu.year}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: primaryColor }}>Keahlian</h2>
            <p className="text-xs leading-relaxed opacity-70">{data.skills.join(', ')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const AcademicCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-neutral-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif mb-2">{data.fullName}</h1>
        <p className="text-sm italic opacity-60 mb-4">{data.title}</p>
        <div className="text-[10px] uppercase tracking-widest flex justify-center gap-6 opacity-50">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] border-b mb-4 pb-1" style={{ borderColor: primaryColor }}>Pendidikan</h2>
          <div className="space-y-4">
            {data.education.map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between font-bold text-sm">
                  <span>{edu.school}</span>
                  <span>{edu.year}</span>
                </div>
                <p className="text-sm italic">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] border-b mb-4 pb-1" style={{ borderColor: primaryColor }}>Penelitian & Pengalaman</h2>
          <div className="space-y-6">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-sm">
                  <span>{exp.position}</span>
                  <span>{exp.duration}</span>
                </div>
                <p className="text-sm italic mb-2">{exp.company}</p>
                <p className="text-sm opacity-70 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const TechCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-neutral-300 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#171717' : data.customization.paperColor }}>
      <header className="mb-12">
        <h1 className="text-4xl font-mono font-bold text-white mb-2">{data.fullName}</h1>
        <p className="text-lg font-mono opacity-50" style={{ color: primaryColor }}>&gt; {data.title}</p>
      </header>
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 space-y-10">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></span> Pengalaman
            </h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id} className="border-l border-neutral-800 pl-6 relative">
                  <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-neutral-800"></div>
                  <h3 className="text-white font-bold">{exp.position}</h3>
                  <p className="text-xs font-mono opacity-40 mb-3">{exp.company} // {exp.duration}</p>
                  <p className="text-sm opacity-60 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-10">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Teknologi</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="px-2 py-1 bg-neutral-800 text-neutral-400 text-[10px] font-mono rounded border border-neutral-700">{s}</span>
              ))}
            </div>
          </section>
          <section className="p-6 bg-neutral-800 rounded-lg">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Kontak</h2>
            <div className="text-xs font-mono space-y-2 opacity-60">
              <p>EMAIL: {data.email}</p>
              <p>TELP: {data.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const StartupCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-neutral-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="flex gap-10 items-center mb-16">
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-2xl" style={{ backgroundColor: primaryColor }}>
          {data.fullName?.[0]}
        </div>
        <div>
          <h1 className="text-5xl font-black tracking-tight">{data.fullName}</h1>
          <p className="text-xl font-bold opacity-30">{data.title}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-7 space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-6">Riwayat Karir</h2>
            <div className="space-y-10">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <span className="text-xs font-black opacity-20">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold mb-3" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-5 space-y-12">
          <section className="p-8 bg-neutral-50 rounded-[2rem]">
            <h2 className="text-xl font-black mb-6">Keahlian Utama</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-white shadow-sm rounded-xl text-xs font-bold">{s}</span>
              ))}
            </div>
          </section>
          <section className="p-8 border-2 border-neutral-100 rounded-[2rem]">
            <h2 className="text-xl font-black mb-4">Hubungi Saya</h2>
            <div className="text-sm space-y-2 opacity-60">
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const VintageCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-neutral-900 border-[12px] border-double border-neutral-300", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#f4f1ea' : data.customization.paperColor }}>
      <div className="text-center border-b-4 border-neutral-900 pb-8 mb-10">
        <h1 className="text-6xl font-serif font-black uppercase tracking-tighter mb-2">{data.fullName}</h1>
        <p className="text-lg font-serif italic opacity-60">{data.title}</p>
      </div>
      <div className="flex justify-center gap-10 text-[10px] uppercase font-bold tracking-[0.2em] mb-12 opacity-50">
        <span>{data.email}</span>
        <span>{data.phone}</span>
        <span>{data.address}</span>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-serif font-bold uppercase border-b-2 border-neutral-900 mb-6">Riwayat Pekerjaan</h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between font-serif font-bold italic mb-1">
                    <span>{exp.position}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-xs font-bold uppercase mb-3" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm font-serif leading-relaxed text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-serif font-bold uppercase border-b-2 border-neutral-900 mb-6">Kualifikasi</h2>
            <div className="space-y-2">
              {data.skills.map((s, i) => (
                <p key={i} className="text-xs font-bold uppercase tracking-widest">• {s}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-serif font-bold uppercase border-b-2 border-neutral-900 mb-6">Pendidikan</h2>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-4">
                <p className="text-sm font-bold">{edu.school}</p>
                <p className="text-xs italic">{edu.degree}</p>
                <p className="text-[10px] opacity-50 mt-1">{edu.year}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export const CorporateCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("flex flex-col h-full text-slate-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="h-4 w-full" style={{ backgroundColor: primaryColor }}></div>
      <div className="p-12 grid grid-cols-12 gap-12">
        <div className="col-span-4 space-y-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">{data.fullName}</h1>
            <p className="text-sm font-semibold opacity-50 uppercase tracking-widest">{data.title}</p>
          </div>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Kontak</h2>
            <div className="text-sm space-y-2 opacity-70">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Keahlian</h2>
            <div className="space-y-2">
              {data.skills.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-200"></div>
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-8 space-y-12">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Pengalaman Profesional</h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold">{exp.position}</h3>
                    <span className="text-xs font-bold opacity-40">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold mb-3" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm opacity-70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Pendidikan</h2>
            <div className="grid grid-cols-2 gap-6">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <p className="text-sm font-bold">{edu.school}</p>
                  <p className="text-xs opacity-60">{edu.degree} // {edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const SimpleCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 max-w-3xl mx-auto text-neutral-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">{data.fullName}</h1>
        <p className="text-sm opacity-60">{data.email} • {data.phone} • {data.address}</p>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-1">Ringkasan</h2>
          <p className="text-sm leading-relaxed opacity-80">{data.summary}</p>
        </section>
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-1">Pengalaman</h2>
          <div className="space-y-6">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <p className="text-sm font-bold">{exp.position} | {exp.company} | {exp.duration}</p>
                <p className="text-sm opacity-70 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-1">Pendidikan</h2>
          {data.education.map(edu => (
            <p key={edu.id} className="text-sm">{edu.school} • {edu.degree} • {edu.year}</p>
          ))}
        </section>
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-1">Keahlian</h2>
          <p className="text-sm opacity-80">{data.skills.join(', ')}</p>
        </section>
      </div>
    </div>
  );
};

export const LuxuryCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-neutral-400 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#0a0a0a' : data.customization.paperColor }}>
      <header className="text-center mb-20">
        <h1 className="text-5xl font-serif text-white tracking-[0.2em] uppercase mb-4">{data.fullName}</h1>
        <div className="flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-neutral-800"></div>
          <p className="text-xs uppercase tracking-[0.5em]" style={{ color: primaryColor }}>{data.title}</p>
          <div className="h-[1px] w-12 bg-neutral-800"></div>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-2 space-y-16">
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-10">Pengalaman</h2>
            <div className="space-y-12">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-lg text-white font-serif">{exp.position}</h3>
                    <span className="text-[10px] uppercase tracking-widest opacity-40">{exp.duration}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: primaryColor }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed opacity-60">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-16">
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-8">Kontak</h2>
            <div className="text-xs space-y-4 tracking-widest">
              <p className="text-white">{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-8">Keahlian</h2>
            <div className="space-y-3">
              {data.skills.map((s, i) => (
                <p key={i} className="text-xs tracking-widest text-white">{s}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const ArtisticCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-neutral-900 overflow-hidden", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="relative mb-24">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        <h1 className="text-8xl font-black leading-none relative z-10">{data.fullName?.split(' ')[0]}<br/>{data.fullName?.split(' ')[1]}</h1>
        <p className="text-2xl font-bold mt-4 ml-2 opacity-30">{data.title}</p>
      </div>
      <div className="flex gap-20">
        <div className="flex-1 space-y-16">
          <section>
            <h2 className="text-4xl font-black mb-8 transform -rotate-2 origin-left">Pengalaman</h2>
            <div className="space-y-12">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: primaryColor }}></div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-sm font-black opacity-40 mb-4">{exp.company} // {exp.duration}</p>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="w-64 space-y-12">
          <section className="p-6 bg-neutral-900 text-white transform rotate-3">
            <h2 className="text-xl font-black mb-4 uppercase">Keahlian</h2>
            <div className="space-y-2">
              {data.skills.map((s, i) => (
                <p key={i} className="text-xs font-bold uppercase tracking-widest">{s}</p>
              ))}
            </div>
          </section>
          <section className="p-6 border-4 border-black">
            <h2 className="text-xl font-black mb-4 uppercase">Kontak</h2>
            <div className="text-xs font-bold space-y-2">
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export const MinimalistCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-neutral-800 max-w-4xl mx-auto", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="mb-16">
        <h1 className="text-4xl font-light tracking-tight text-neutral-900 mb-2">{data.fullName}</h1>
        <p className="text-lg text-neutral-500 font-light mb-6" style={{ color: primaryColor }}>{data.title}</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-neutral-400 uppercase tracking-widest">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </header>
      <div className="space-y-16">
        <section className="grid grid-cols-4 gap-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300">Tentang</h2>
          <div className="col-span-3">
            <p className="text-sm leading-relaxed text-neutral-600">{data.summary}</p>
          </div>
        </section>
        <section className="grid grid-cols-4 gap-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300">Pengalaman</h2>
          <div className="col-span-3 space-y-10">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-sm font-bold text-neutral-900">{exp.position}</h3>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{exp.duration}</span>
                </div>
                <p className="text-xs mb-3 uppercase tracking-wider" style={{ color: primaryColor }}>{exp.company}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const FunctionalCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="mb-16 border-b-4 border-slate-100 pb-10">
        <h1 className="text-4xl font-bold mb-2">{data.fullName}</h1>
        <p className="text-lg font-medium opacity-50 mb-6">{data.title}</p>
        <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </header>
      <div className="space-y-16">
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-8">Kompetensi Utama</h2>
          <div className="grid grid-cols-3 gap-6">
            {data.skills.map((s, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm font-bold text-center" style={{ color: primaryColor }}>{s}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-8">Riwayat Profesional</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id} className="flex gap-10">
                <div className="w-32 text-xs font-bold opacity-30 uppercase tracking-widest pt-1">{exp.duration}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{exp.position}</h3>
                  <p className="text-sm font-medium opacity-60 mb-2">{exp.company}</p>
                  <p className="text-sm leading-relaxed opacity-70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const CleanCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-gray-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">{data.fullName}</h1>
        <div className="text-right text-xs text-gray-400">
          <p>{data.email} | {data.phone}</p>
          <p>{data.address}</p>
        </div>
      </div>
      <div className="space-y-8">
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1">Pengalaman</h2>
          <div className="space-y-6">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-sm text-gray-900">
                  <span>{exp.position}</span>
                  <span className="font-normal text-gray-400">{exp.duration}</span>
                </div>
                <p className="text-xs font-medium mb-2" style={{ color: primaryColor }}>{exp.company}</p>
                <p className="text-sm leading-relaxed opacity-80">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-2 gap-12">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1">Pendidikan</h2>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-3">
                <p className="text-sm font-bold">{edu.school}</p>
                <p className="text-xs text-gray-500">{edu.degree} • {edu.year}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="text-sm">{s}{i < data.skills.length - 1 ? ' • ' : ''}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const VibrantCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-slate-900", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#fff7ed' : data.customization.paperColor }}>
      <header className="bg-orange-500 text-white p-12 rounded-3xl mb-12 shadow-xl shadow-orange-100" style={{ backgroundColor: primaryColor }}>
        <h1 className="text-5xl font-black mb-2">{data.fullName}</h1>
        <p className="text-xl font-bold opacity-80">{data.title}</p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold opacity-90">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-12">
          <section>
            <h2 className="text-2xl font-black text-orange-600 mb-6">Pengalaman</h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8 border-l-4 border-orange-200">
                  <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                  <h3 className="text-lg font-black">{exp.position}</h3>
                  <p className="text-orange-600 font-bold mb-2">{exp.company} | {exp.duration}</p>
                  <p className="text-sm leading-relaxed opacity-70">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-4 space-y-12">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-xl font-black text-orange-600 mb-6">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">{s}</span>
              ))}
            </div>
          </section>
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-xl font-black text-orange-600 mb-6">Pendidikan</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <p className="font-bold">{edu.school}</p>
                  <p className="text-xs opacity-60">{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const OceanCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-cyan-50", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#083344' : data.customization.paperColor }}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-end mb-20 border-b border-cyan-800 pb-10">
          <div>
            <h1 className="text-6xl font-black tracking-tighter mb-2">{data.fullName}</h1>
            <p className="text-2xl font-bold text-cyan-400">{data.title}</p>
          </div>
          <div className="text-right text-sm font-medium opacity-60 space-y-1">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-16">
          <aside className="space-y-12">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-6">Keahlian</h2>
              <div className="space-y-3">
                {data.skills.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                    <span className="text-sm font-bold">{s}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
          <main className="col-span-2 space-y-16">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-10">Riwayat Profesional</h2>
              <div className="space-y-12">
                {data.experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-black">{exp.position}</h3>
                      <span className="text-xs font-bold opacity-40">{exp.duration}</span>
                    </div>
                    <p className="text-cyan-400 font-bold mb-4">{exp.company}</p>
                    <p className="text-sm opacity-60 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export const ForestCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-emerald-900", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#ecfdf5' : data.customization.paperColor }}>
      <div className="flex gap-12">
        <aside className="w-1/3 bg-emerald-800 text-emerald-50 p-12 rounded-[40px] flex flex-col">
          <div className="mb-16">
            <h1 className="text-4xl font-black leading-tight mb-4">{data.fullName}</h1>
            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{data.title}</p>
          </div>
          <div className="space-y-12 flex-1">
            <section>
              <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">Kontak</h2>
              <div className="text-xs space-y-4 font-bold">
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.address}</p>
              </div>
            </section>
            <section>
              <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">Keahlian</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-700 rounded-lg text-[10px] font-bold">{s}</span>
                ))}
              </div>
            </section>
          </div>
        </aside>
        <main className="flex-1 py-12">
          <section className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-300 mb-10">Pengalaman</h2>
            <div className="space-y-12">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="text-2xl font-black mb-1">{exp.position}</h3>
                  <div className="flex justify-between text-sm font-bold text-emerald-600 mb-4">
                    <span>{exp.company}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-sm opacity-70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export const RoyalCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-purple-100", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#2e1065' : data.customization.paperColor }}>
      <header className="text-center mb-24">
        <h1 className="text-6xl font-serif font-black tracking-widest uppercase mb-4 text-purple-300">{data.fullName}</h1>
        <div className="h-1 w-32 bg-purple-400 mx-auto mb-8"></div>
        <p className="text-xl font-serif italic opacity-60">{data.title}</p>
      </header>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-4 space-y-16">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-purple-400 mb-8">Detail</h2>
            <div className="text-sm font-serif italic space-y-4 opacity-70">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-purple-400 mb-8">Keahlian</h2>
            <div className="space-y-4">
              {data.skills.map((s, i) => (
                <div key={i} className="border-b border-purple-800 pb-2 text-sm font-serif italic">{s}</div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-8 space-y-20">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-purple-400 mb-12">Pengalaman</h2>
            <div className="space-y-16">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="text-3xl font-serif font-black mb-2 text-purple-200">{exp.position}</h3>
                  <p className="text-sm font-serif italic opacity-50 mb-6">{exp.company} // {exp.duration}</p>
                  <p className="text-lg font-serif leading-relaxed opacity-70 text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const SunsetCV: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-rose-900", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#fff1f2' : data.customization.paperColor }}>
      <div className="bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 p-16 rounded-[60px] text-white mb-12 shadow-2xl shadow-rose-100" style={{ backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, #fb923c, #fcd34d)` }}>
        <h1 className="text-6xl font-black tracking-tighter mb-4">{data.fullName}</h1>
        <p className="text-2xl font-bold opacity-80">{data.title}</p>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[40px] shadow-sm">
            <h2 className="text-xl font-black text-rose-500 mb-6">Kontak</h2>
            <div className="text-sm font-bold space-y-4 opacity-60">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section className="bg-white p-10 rounded-[40px] shadow-sm">
            <h2 className="text-xl font-black text-rose-500 mb-6">Keahlian</h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-rose-50 text-rose-600 rounded-2xl text-xs font-bold">{s}</span>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-2 space-y-12">
          <section className="bg-white p-12 rounded-[40px] shadow-sm">
            <h2 className="text-2xl font-black text-rose-500 mb-10">Pengalaman</h2>
            <div className="space-y-12">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="text-2xl font-black mb-2">{exp.position}</h3>
                  <div className="flex justify-between text-sm font-bold text-orange-500 mb-4">
                    <span>{exp.company}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
