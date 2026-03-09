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

export const ModernLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("p-16 leading-relaxed text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-right mb-10">
        <p className="text-sm font-medium">{data.city}, {data.date}</p>
      </div>

      <div className="mb-10">
        <p className="font-bold">Perihal: {data.letterSubject}</p>
        <div className="mt-6 space-y-1">
          <p>Yth. {data.recipientName}</p>
          <p className="font-bold">{data.companyName}</p>
          <p className="text-sm text-slate-500">{data.companyAddress}</p>
        </div>
      </div>

      <div className="space-y-6">
        <p>Dengan hormat,</p>
        <p>Melalui surat ini, saya bermaksud untuk melamar pekerjaan di {data.companyName} untuk posisi {data.title}. Berikut adalah data diri singkat saya:</p>
        
        <div className="grid grid-cols-[150px_10px_1fr] gap-y-2 text-sm ml-4">
          <p>Nama Lengkap</p><p>:</p><p className="font-bold">{data.fullName}</p>
          <p>Tempat, Tgl Lahir</p><p>:</p><p>{data.birthPlaceDate}</p>
          <p>Jenis Kelamin</p><p>:</p><p>{data.gender}</p>
          <p>Alamat</p><p>:</p><p>{data.address}</p>
          <p>Pendidikan Terakhir</p><p>:</p><p>{data.lastEducation}</p>
          <p>Telepon / Email</p><p>:</p><p>{data.phone} / {data.email}</p>
        </div>

        <div className="whitespace-pre-wrap">
          {data.letterContent}
        </div>

        {data.attachments.length > 0 && (
          <div className="mt-6">
            <p className="font-bold mb-2">Sebagai bahan pertimbangan, saya lampirkan:</p>
            <ul className="list-decimal list-inside text-sm space-y-1 ml-4">
              {data.attachments.map((att, i) => (
                <li key={i}>{att}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6">Demikian surat lamaran ini saya buat dengan sebenar-benarnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>

        <div className="pt-10 w-48 ml-auto text-center">
          <p>Hormat saya,</p>
          <div className="h-20"></div>
          <p className="font-bold border-b border-slate-900 pb-1">{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export const ClassicLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("p-20 text-neutral-900 leading-normal text-justify", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-right mb-8">
        <p>{data.city}, {data.date}</p>
      </div>

      <div className="mb-10">
        <p className="font-bold">Perihal: {data.letterSubject}</p>
        <div className="mt-6 space-y-1">
          <p>Yth. {data.recipientName}</p>
          <p className="font-bold uppercase tracking-wide">{data.companyName}</p>
          <p className="text-neutral-600">{data.companyAddress}</p>
        </div>
      </div>

      <div className="space-y-6">
        <p>Dengan hormat,</p>
        <p>Melalui surat ini, saya bermaksud untuk mengajukan lamaran pekerjaan di {data.companyName} untuk menempati posisi {data.title}. Berikut adalah data diri singkat saya:</p>
        
        <div className="grid grid-cols-[150px_10px_1fr] gap-y-1 text-sm ml-4">
          <p>Nama Lengkap</p><p>:</p><p className="font-bold">{data.fullName}</p>
          <p>Tempat, Tgl Lahir</p><p>:</p><p>{data.birthPlaceDate}</p>
          <p>Jenis Kelamin</p><p>:</p><p>{data.gender}</p>
          <p>Agama</p><p>:</p><p>{data.religion}</p>
          <p>Alamat</p><p>:</p><p>{data.address}</p>
          <p>Pendidikan Terakhir</p><p>:</p><p>{data.lastEducation}</p>
        </div>

        <div className="whitespace-pre-wrap">
          {data.letterContent}
        </div>

        {data.attachments.length > 0 && (
          <div className="mt-6">
            <p className="font-bold mb-2">Sebagai bahan pertimbangan, saya lampirkan:</p>
            <ul className="list-decimal list-inside text-sm space-y-1 ml-4">
              {data.attachments.map((att, i) => (
                <li key={i}>{att}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6">Demikian surat lamaran ini saya buat dengan sebenar-benarnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>

        <div className="pt-12 w-64 ml-auto text-center">
          <p>Hormat saya,</p>
          <div className="h-24"></div>
          <p className="font-bold uppercase tracking-widest underline underline-offset-8 decoration-neutral-300">{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export const CreativeLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("flex h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="w-24" style={{ backgroundColor: primaryColor }}></div>
      <div className="flex-1 p-20">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h1 className="text-5xl font-black text-neutral-900 leading-none mb-2 uppercase">
              {data.fullName?.split(' ')[0]}<br/>
              <span style={{ color: primaryColor }}>{data.fullName?.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg font-bold text-neutral-400 tracking-[0.3em] uppercase">{data.title}</p>
          </div>
          <div className="text-right text-xs font-bold text-neutral-400 space-y-1 uppercase tracking-widest">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4">
            <div className="bg-neutral-50 p-8 rounded-3xl space-y-8">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>Kepada</h3>
                <p className="font-bold text-neutral-900">{data.recipientName}</p>
                <p className="text-sm text-neutral-500">{data.recipientTitle}</p>
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>Perusahaan</h3>
                <p className="font-bold text-neutral-900">{data.companyName}</p>
                <p className="text-sm text-neutral-500">{data.companyAddress}</p>
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>Tanggal</h3>
                <p className="font-bold text-neutral-900">{data.date}</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-8">
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p className="text-xl font-bold text-neutral-900">Yth. Bapak/Ibu {data.recipientName},</p>
              <div className="whitespace-pre-wrap min-h-[400px] text-sm">
                {data.letterContent}
              </div>
              <div className="pt-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>Hormat saya,</p>
                <p className="text-2xl font-black text-neutral-900 uppercase">{data.fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MinimalistLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;

  return (
    <div className={cn("p-24 text-neutral-800 leading-relaxed max-w-4xl mx-auto", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="mb-20">
        <h1 className="text-4xl font-light tracking-tight text-neutral-900 mb-2">{data.fullName}</h1>
        <p className="text-sm tracking-widest uppercase" style={{ color: primaryColor }}>{data.title}</p>
      </header>

      <div className="grid grid-cols-4 gap-12 mb-16">
        <div className="text-[10px] font-bold text-neutral-300 uppercase tracking-[0.3em] space-y-4">
          <div>
            <p className="mb-1">Kontak</p>
            <p className="text-neutral-500">{data.email}</p>
            <p className="text-neutral-500">{data.phone}</p>
          </div>
          <div>
            <p className="mb-1">Alamat</p>
            <p className="text-neutral-500">{data.address}</p>
          </div>
        </div>
        
        <div className="col-span-3">
          <div className="mb-12 text-sm text-neutral-500">
            <p className="mb-8">{data.date}</p>
            <div className="space-y-1">
              <p className="font-bold text-neutral-900">{data.recipientName}</p>
              <p>{data.recipientTitle}</p>
              <p className="font-medium" style={{ color: primaryColor }}>{data.companyName}</p>
              <p>{data.companyAddress}</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-neutral-600">
            <p className="font-bold text-neutral-900">Yth. {data.recipientName},</p>
            <div className="whitespace-pre-wrap min-h-[400px]">
              {data.letterContent}
            </div>
            <div className="pt-16">
              <p className="mb-10">Hormat saya,</p>
              <p className="text-lg font-light text-neutral-900">{data.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfessionalLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="border-l-8 pl-8 mb-16" style={{ borderColor: primaryColor }}>
        <h1 className="text-4xl font-bold text-slate-900">{data.fullName}</h1>
        <p className="text-lg opacity-60 uppercase tracking-widest">{data.title}</p>
      </div>
      <div className="mb-12 text-sm opacity-60">
        <p>{data.address}</p>
        <p>{data.email} | {data.phone}</p>
      </div>
      <div className="mb-10">
        <p className="font-bold mb-1">{data.recipientName}</p>
        <p className="opacity-60">{data.companyName}</p>
      </div>
      <div className="prose prose-slate max-w-none">
        <p className="font-bold mb-6">Perihal: {data.letterSubject}</p>
        <p className="mb-6">Yth. {data.recipientName},</p>
        <div className="whitespace-pre-wrap leading-relaxed text-slate-700">{data.letterContent}</div>
        <div className="mt-12">
          <p>Hormat saya,</p>
          <p className="mt-10 font-bold text-xl" style={{ color: primaryColor }}>{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export const ExecutiveLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-neutral-900 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif font-bold mb-4">{data.fullName}</h1>
        <div className="h-1 w-24 bg-neutral-900 mx-auto mb-6" style={{ backgroundColor: primaryColor }}></div>
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">{data.title}</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-400 mb-16 border-b pb-4">
          <span>{data.address}</span>
          <span>{data.email}</span>
        </div>
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Kepada:</p>
          <p className="text-lg font-bold">{data.recipientName}</p>
          <p className="text-sm italic">{data.companyName}</p>
        </div>
        <div className="font-serif text-lg leading-relaxed text-justify space-y-6">
          <p className="font-bold underline decoration-neutral-200 underline-offset-8 mb-10">{data.letterSubject}</p>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap">{data.letterContent}</div>
          <div className="mt-20">
            <p>Hormat saya,</p>
            <p className="mt-12 text-2xl font-serif italic" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ElegantLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-stone-800", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#fffcf5' : data.customization.paperColor }}>
      <header className="flex justify-between items-start mb-20 border-b border-stone-200 pb-10">
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
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 italic text-stone-500">
          <p>Kepada Yth,</p>
          <p className="text-stone-800 font-medium not-italic">{data.recipientName}</p>
          <p>{data.companyName}</p>
        </div>
        <div className="space-y-6 leading-relaxed">
          <h2 className="text-lg font-medium mb-8" style={{ color: primaryColor }}>{data.letterSubject}</h2>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap opacity-90">{data.letterContent}</div>
          <div className="mt-16 pt-10 border-t border-stone-100">
            <p className="italic text-stone-400 mb-8">Salam hangat,</p>
            <p className="text-2xl font-light tracking-tighter" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BoldLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("text-black", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="p-16 border-b-[20px]" style={{ borderColor: primaryColor }}>
        <h1 className="text-7xl font-black uppercase leading-none tracking-tighter mb-4">{data.fullName}</h1>
        <p className="text-2xl font-bold opacity-50">{data.title}</p>
      </div>
      <div className="p-16 grid grid-cols-12 gap-16">
        <div className="col-span-4 space-y-8">
          <section className="p-8 bg-neutral-100">
            <h2 className="text-xs font-black uppercase tracking-widest mb-4">Dari</h2>
            <div className="text-sm font-bold space-y-1">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section className="p-8 border-2 border-black">
            <h2 className="text-xs font-black uppercase tracking-widest mb-4">Kepada</h2>
            <div className="text-sm font-bold space-y-1">
              <p>{data.recipientName}</p>
              <p className="opacity-40">{data.companyName}</p>
            </div>
          </section>
        </div>
        <div className="col-span-8">
          <h2 className="text-3xl font-black uppercase italic mb-10" style={{ color: primaryColor }}>{data.letterSubject}</h2>
          <div className="text-lg font-bold leading-tight space-y-6">
            <p>Dengan hormat,</p>
            <div className="whitespace-pre-wrap">{data.letterContent}</div>
            <div className="mt-16">
              <p className="text-xs uppercase opacity-40 mb-4">Hormat saya,</p>
              <p className="text-4xl font-black uppercase" style={{ color: primaryColor }}>{data.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SidebarLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("flex h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <aside className="w-1/3 bg-neutral-900 text-white p-12 flex flex-col">
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-2">{data.fullName}</h1>
          <p className="text-sm opacity-60 uppercase tracking-widest" style={{ color: primaryColor }}>{data.title}</p>
        </div>
        <div className="space-y-12 flex-1">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Detail</h2>
            <div className="text-xs space-y-4 opacity-80">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.address}</p>
            </div>
          </section>
          <section className="mt-auto pt-10 border-t border-neutral-800">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">Lamaran untuk</p>
            <p className="text-sm font-bold mt-2" style={{ color: primaryColor }}>{data.companyName}</p>
          </section>
        </div>
      </aside>
      <main className="flex-1 p-16 bg-white overflow-y-auto">
        <div className="max-w-xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4">Penerima</p>
            <p className="text-xl font-bold">{data.recipientName}</p>
            <p className="text-neutral-500">{data.companyName}</p>
          </div>
          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <h2 className="text-lg font-bold text-neutral-900 mb-8 border-b-2 pb-2" style={{ borderColor: primaryColor }}>{data.letterSubject}</h2>
            <p>Dengan hormat,</p>
            <div className="whitespace-pre-wrap">{data.letterContent}</div>
            <div className="mt-16">
              <p className="font-bold text-neutral-900">Hormat saya,</p>
              <p className="mt-8 text-2xl font-bold" style={{ color: primaryColor }}>{data.fullName}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const GridLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-8 grid grid-cols-12 gap-4", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="col-span-8 bg-white p-12 rounded-3xl shadow-sm" style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#ffffff' : 'rgba(255,255,255,0.5)' }}>
        <h2 className="text-2xl font-black mb-10" style={{ color: primaryColor }}>{data.letterSubject}</h2>
        <div className="space-y-6 text-sm leading-relaxed text-neutral-600">
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap">{data.letterContent}</div>
          <div className="mt-12 pt-8 border-t border-neutral-50">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-4">Tanda Tangan</p>
            <p className="text-2xl font-black">{data.fullName}</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 space-y-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm" style={{ backgroundColor: primaryColor, color: 'white' }}>
          <h1 className="text-2xl font-black mb-2">{data.fullName}</h1>
          <p className="text-xs font-bold opacity-60 uppercase tracking-widest">{data.title}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-neutral-300">Kontak</h2>
          <div className="text-xs space-y-2 font-bold text-neutral-500">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-neutral-300">Penerima</h2>
          <div className="text-xs font-bold text-neutral-500">
            <p className="text-neutral-900">{data.recipientName}</p>
            <p>{data.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CompactLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-slate-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="flex justify-between items-center border-b-2 pb-6 mb-10" style={{ borderColor: primaryColor }}>
        <h1 className="text-2xl font-bold">{data.fullName}</h1>
        <div className="text-[10px] text-right space-x-4 uppercase tracking-widest font-bold opacity-40">
          <span>{data.email}</span>
          <span>{data.phone}</span>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-12 text-xs font-bold opacity-50">
          <div>
            <p className="uppercase tracking-widest mb-1">Kepada:</p>
            <p className="text-slate-900">{data.recipientName}</p>
            <p>{data.companyName}</p>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-widest mb-1">Perihal:</p>
            <p className="text-slate-900">{data.letterSubject}</p>
          </div>
        </div>
        <div className="text-sm leading-relaxed space-y-4">
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap">{data.letterContent}</div>
          <div className="mt-12">
            <p className="font-bold">Hormat saya,</p>
            <p className="mt-6 text-xl font-bold" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AcademicLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-neutral-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="text-center mb-16">
        <h1 className="text-3xl font-serif mb-2">{data.fullName}</h1>
        <p className="text-sm italic opacity-60 mb-6">{data.title}</p>
        <div className="text-[10px] uppercase tracking-widest flex justify-center gap-8 opacity-40 border-y py-4 border-neutral-100">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.address}</span>
        </div>
      </div>
      <div className="max-w-2xl mx-auto font-serif">
        <div className="mb-12 text-sm">
          <p>{data.recipientName}</p>
          <p className="italic">{data.companyName}</p>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-justify">
          <p className="font-bold text-center mb-10 uppercase tracking-widest border-b pb-2" style={{ borderColor: primaryColor }}>{data.letterSubject}</p>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap">{data.letterContent}</div>
          <div className="mt-20">
            <p>Hormat saya,</p>
            <p className="mt-12 text-xl font-serif italic" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-neutral-300 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#171717' : data.customization.paperColor }}>
      <header className="mb-16 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl font-mono font-bold text-white mb-2">{data.fullName}</h1>
        <p className="text-lg font-mono opacity-50" style={{ color: primaryColor }}>&gt; {data.title}</p>
      </header>
      <div className="grid grid-cols-4 gap-12">
        <aside className="col-span-1 space-y-10">
          <section className="p-6 bg-neutral-800 rounded-lg">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4">Pengirim</h2>
            <div className="text-[10px] font-mono space-y-2 opacity-60">
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </section>
          <section className="p-6 border border-neutral-800 rounded-lg">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4">Penerima</h2>
            <div className="text-[10px] font-mono space-y-2 opacity-60">
              <p className="text-white">{data.recipientName}</p>
              <p>{data.companyName}</p>
            </div>
          </section>
        </aside>
        <main className="col-span-3">
          <div className="font-mono text-sm leading-relaxed space-y-8">
            <div className="p-4 bg-neutral-800 border-l-4" style={{ borderColor: primaryColor }}>
              <p className="text-white font-bold">PERIHAL: {data.letterSubject}</p>
            </div>
            <p>Dengan hormat,</p>
            <div className="whitespace-pre-wrap opacity-70">{data.letterContent}</div>
            <div className="mt-16">
              <p className="opacity-40">// Akhir transmisi</p>
              <p className="mt-6 text-xl font-bold text-white" style={{ color: primaryColor }}>{data.fullName}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const StartupLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-neutral-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="flex justify-between items-center mb-20">
        <div className="flex gap-6 items-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg" style={{ backgroundColor: primaryColor }}>
            {data.fullName?.[0]}
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight">{data.fullName}</h1>
            <p className="text-sm font-bold opacity-30">{data.title}</p>
          </div>
        </div>
        <div className="text-right text-xs font-bold opacity-40 space-y-1">
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 p-8 bg-neutral-50 rounded-3xl inline-block">
          <p className="text-xs font-black uppercase tracking-widest opacity-20 mb-2">Halo,</p>
          <p className="text-xl font-bold">{data.recipientName}</p>
          <p className="text-sm font-bold opacity-40">{data.companyName}</p>
        </div>
        <div className="space-y-6 text-lg font-medium leading-relaxed">
          <h2 className="text-3xl font-black tracking-tight mb-10" style={{ color: primaryColor }}>{data.letterSubject}</h2>
          <p>Yth. {data.recipientName},</p>
          <div className="whitespace-pre-wrap text-neutral-600">{data.letterContent}</div>
          <div className="mt-20 flex items-center gap-6">
            <div className="h-[2px] flex-1 bg-neutral-100"></div>
            <p className="text-2xl font-black" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VintageLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-neutral-900 border-[12px] border-double border-neutral-300", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#f4f1ea' : data.customization.paperColor }}>
      <div className="text-center border-b-4 border-neutral-900 pb-10 mb-12">
        <h1 className="text-5xl font-serif font-black uppercase tracking-tighter mb-2">{data.fullName}</h1>
        <p className="text-sm font-serif italic opacity-60">{data.address} • {data.email}</p>
      </div>
      <div className="max-w-2xl mx-auto font-serif">
        <div className="mb-12 text-sm italic">
          <p>Kepada Yth:</p>
          <p className="font-bold not-italic text-lg">{data.recipientName}</p>
          <p>{data.companyName}</p>
        </div>
        <div className="space-y-8 text-base leading-relaxed text-justify">
          <p className="font-bold uppercase tracking-widest border-b-2 border-neutral-900 pb-2 mb-10">{data.letterSubject}</p>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap">{data.letterContent}</div>
          <div className="mt-20 text-right">
            <p className="italic mb-10">Hormat saya,</p>
            <p className="text-3xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CorporateLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("flex flex-col h-full text-slate-900", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="h-4 w-full" style={{ backgroundColor: primaryColor }}></div>
      <div className="p-16 flex-1">
        <header className="flex justify-between items-start mb-20">
          <div>
            <h1 className="text-3xl font-bold mb-1">{data.fullName}</h1>
            <p className="text-sm font-semibold opacity-50 uppercase tracking-widest">{data.title}</p>
          </div>
          <div className="text-right text-xs text-slate-400 space-y-1">
            <p>{data.address}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </header>
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-2">Penerima</p>
            <p className="font-bold">{data.recipientName}</p>
            <p className="text-sm text-slate-500">{data.companyName}</p>
          </div>
          <div className="space-y-6 text-sm leading-relaxed">
            <p className="font-bold text-lg mb-8 border-l-4 pl-4" style={{ borderColor: primaryColor }}>{data.letterSubject}</p>
            <p>Dengan hormat,</p>
            <div className="whitespace-pre-wrap text-slate-600">{data.letterContent}</div>
            <div className="mt-20">
              <p className="font-bold">Hormat saya,</p>
              <p className="mt-8 text-xl font-bold" style={{ color: primaryColor }}>{data.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SimpleLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 max-w-3xl mx-auto text-neutral-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="mb-16 border-b pb-8">
        <h1 className="text-4xl font-bold mb-2">{data.fullName}</h1>
        <p className="text-sm opacity-60">{data.email} • {data.phone} • {data.address}</p>
      </div>
      <div className="space-y-8 text-sm leading-relaxed">
        <div className="mb-10">
          <p className="font-bold">{data.recipientName}</p>
          <p className="opacity-60">{data.companyName}</p>
        </div>
        <p className="font-bold text-lg" style={{ color: primaryColor }}>{data.letterSubject}</p>
        <p>Dear {data.recipientName},</p>
        <div className="whitespace-pre-wrap opacity-80">{data.letterContent}</div>
        <div className="mt-16">
          <p>Sincerely,</p>
          <p className="mt-6 font-bold text-xl">{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export const LuxuryLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-24 text-neutral-400 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#0a0a0a' : data.customization.paperColor }}>
      <header className="text-center mb-24">
        <h1 className="text-5xl font-serif text-white tracking-[0.3em] uppercase mb-6">{data.fullName}</h1>
        <div className="flex justify-center items-center gap-6">
          <div className="h-[1px] w-16 bg-neutral-800"></div>
          <p className="text-[10px] uppercase tracking-[0.6em]" style={{ color: primaryColor }}>{data.title}</p>
          <div className="h-[1px] w-16 bg-neutral-800"></div>
        </div>
      </header>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-20">
          <span>{data.address}</span>
          <span>{data.email}</span>
        </div>
        <div className="space-y-10 font-serif text-lg leading-relaxed text-justify">
          <p className="text-white text-center italic mb-16 tracking-widest">{data.letterSubject}</p>
          <p className="text-white">Dengan hormat,</p>
          <div className="whitespace-pre-wrap opacity-60">{data.letterContent}</div>
          <div className="mt-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-12">Hormat saya,</p>
            <p className="text-3xl text-white tracking-[0.2em] uppercase" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArtisticLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-neutral-900 overflow-hidden", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <div className="relative mb-24">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        <h1 className="text-7xl font-black leading-none relative z-10">{data.fullName}</h1>
        <p className="text-xl font-bold mt-4 opacity-30">{data.title}</p>
      </div>
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-4 space-y-12">
          <section className="p-8 bg-neutral-900 text-white transform -rotate-2">
            <h2 className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Dari</h2>
            <div className="text-sm font-bold space-y-2">
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </section>
          <section className="p-8 border-4 border-black transform rotate-1">
            <h2 className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Kepada</h2>
            <div className="text-sm font-bold space-y-2">
              <p>{data.recipientName}</p>
              <p>{data.companyName}</p>
            </div>
          </section>
        </div>
        <div className="col-span-8">
          <h2 className="text-4xl font-black mb-12 transform skew-x-[-10deg] inline-block px-4 text-white" style={{ backgroundColor: primaryColor }}>{data.letterSubject}</h2>
          <div className="text-lg font-medium leading-relaxed space-y-6 text-justify">
            <p>Dengan hormat,</p>
            <div className="whitespace-pre-wrap">{data.letterContent}</div>
            <div className="mt-20">
              <p className="text-xs font-black uppercase opacity-20 mb-4">Hormat saya,</p>
              <p className="text-4xl font-black" style={{ color: primaryColor }}>{data.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FunctionalLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor }}>
      <header className="mb-20 border-b-4 border-slate-100 pb-12">
        <h1 className="text-4xl font-bold mb-2">{data.fullName}</h1>
        <p className="text-lg font-medium opacity-50">{data.title}</p>
      </header>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-12 mb-16 text-sm">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">Pelamar</p>
            <p className="font-bold">{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">Pemberi Kerja</p>
            <p className="font-bold">{data.recipientName}</p>
            <p>{data.companyName}</p>
          </div>
        </div>
        <div className="space-y-8 text-base leading-relaxed text-justify">
          <h2 className="text-xl font-bold text-slate-900 mb-10" style={{ color: primaryColor }}>{data.letterSubject}</h2>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap text-slate-600">{data.letterContent}</div>
          <div className="mt-20 pt-10 border-t border-slate-50">
            <p className="text-xs font-black uppercase tracking-widest text-slate-300 mb-6">Tertanda</p>
            <p className="text-3xl font-bold" style={{ color: primaryColor }}>{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VibrantLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-slate-800", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#fff7ed' : data.customization.paperColor }}>
      <header className="bg-orange-500 text-white p-12 rounded-3xl mb-12 shadow-xl shadow-orange-100 flex justify-between items-center" style={{ backgroundColor: primaryColor }}>
        <div>
          <h1 className="text-4xl font-black mb-1">{data.fullName}</h1>
          <p className="text-lg font-bold opacity-80">{data.title}</p>
        </div>
        <div className="text-right text-xs font-bold opacity-80">
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </header>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 p-8 bg-white rounded-3xl border-2 border-orange-100">
          <p className="text-xs font-black uppercase tracking-widest text-orange-300 mb-2">Penerima</p>
          <p className="text-xl font-bold text-orange-600">{data.recipientName}</p>
          <p className="text-sm font-bold opacity-40">{data.companyName}</p>
        </div>
        <div className="space-y-6 text-lg font-medium leading-relaxed text-justify">
          <h2 className="text-3xl font-black tracking-tight text-orange-600 mb-10">{data.letterSubject}</h2>
          <p>Yth. {data.recipientName},</p>
          <div className="whitespace-pre-wrap text-slate-600">{data.letterContent}</div>
          <div className="mt-20 pt-10 border-t-4 border-orange-500">
            <p className="text-2xl font-black text-orange-600">{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OceanLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-20 text-cyan-50 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#083344' : data.customization.paperColor }}>
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 border-l-8 border-cyan-400 pl-8">
          <h1 className="text-5xl font-black tracking-tighter mb-2">{data.fullName}</h1>
          <p className="text-xl font-bold text-cyan-400 uppercase tracking-widest">{data.title}</p>
        </header>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4 space-y-8 text-xs font-bold uppercase tracking-widest opacity-40">
            <section>
              <p className="text-cyan-400 mb-2">Dari</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </section>
            <section>
              <p className="text-cyan-400 mb-2">Kepada</p>
              <p className="text-cyan-50">{data.recipientName}</p>
              <p>{data.companyName}</p>
            </section>
          </div>
          <div className="col-span-8 space-y-8">
            <h2 className="text-2xl font-black text-cyan-400 mb-12">{data.letterSubject}</h2>
            <div className="text-lg leading-relaxed space-y-6 opacity-80 text-justify">
              <p>Dengan hormat,</p>
              <div className="whitespace-pre-wrap">{data.letterContent}</div>
              <div className="mt-20">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-500 mb-4">Hormat saya,</p>
                <p className="text-3xl font-black text-white">{data.fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ForestLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-16 text-emerald-900", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#ecfdf5' : data.customization.paperColor }}>
      <div className="flex gap-12">
        <aside className="w-1/3 bg-emerald-800 text-emerald-50 p-12 rounded-[40px]">
          <h1 className="text-3xl font-black mb-2">{data.fullName}</h1>
          <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-12">{data.title}</p>
          <div className="space-y-8 text-xs font-bold opacity-60">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>
        </aside>
        <main className="flex-1 py-12">
          <div className="max-w-xl">
            <div className="mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-300 mb-4">Penerima</p>
              <p className="text-xl font-bold">{data.recipientName}</p>
              <p className="text-emerald-600 font-bold">{data.companyName}</p>
            </div>
            <div className="space-y-6 text-emerald-800 leading-relaxed text-justify">
              <h2 className="text-2xl font-black text-emerald-900 mb-10 border-b-4 border-emerald-100 pb-4">{data.letterSubject}</h2>
              <p>Dengan hormat,</p>
              <div className="whitespace-pre-wrap">{data.letterContent}</div>
              <div className="mt-16">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-300 mb-4">Hormat saya,</p>
                <p className="text-3xl font-black text-emerald-800">{data.fullName}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const RoyalLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-24 text-purple-100 min-h-full", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#2e1065' : data.customization.paperColor }}>
      <header className="text-center mb-24 border-b border-purple-800 pb-12">
        <h1 className="text-5xl font-serif font-black tracking-widest uppercase mb-4 text-purple-300">{data.fullName}</h1>
        <p className="text-sm font-serif italic opacity-40">{data.email} • {data.phone}</p>
      </header>
      <div className="max-w-2xl mx-auto font-serif">
        <div className="mb-16 italic opacity-60">
          <p>Kepada:</p>
          <p className="text-white font-bold not-italic text-xl">{data.recipientName}</p>
          <p>{data.companyName}</p>
        </div>
        <div className="space-y-10 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-black text-purple-300 text-center mb-16 underline decoration-purple-500 underline-offset-8">{data.letterSubject}</h2>
          <p>Dengan hormat,</p>
          <div className="whitespace-pre-wrap opacity-70">{data.letterContent}</div>
          <div className="mt-24 text-right">
            <p className="italic mb-12">Hormat saya,</p>
            <p className="text-4xl font-black text-purple-300 uppercase tracking-tighter">{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SunsetLetter: React.FC<TemplateProps> = ({ data }) => {
  const fontClass = getFontClass(data.customization.fontFamily);
  const primaryColor = data.customization.primaryColor;
  return (
    <div className={cn("p-12 text-rose-900", fontClass)} style={{ backgroundColor: data.customization.paperColor === '#ffffff' ? '#fff1f2' : data.customization.paperColor }}>
      <div className="bg-gradient-to-r from-rose-500 to-orange-400 p-12 rounded-[50px] text-white mb-12 flex justify-between items-end" style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, #fb923c)` }}>
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2">{data.fullName}</h1>
          <p className="text-xl font-bold opacity-80">{data.title}</p>
        </div>
        <div className="text-right text-xs font-bold opacity-60">
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div className="bg-white p-8 rounded-[30px] shadow-sm">
            <p className="text-xs font-black uppercase tracking-widest opacity-20 mb-2">Penerima</p>
            <p className="text-lg font-bold">{data.recipientName}</p>
            <p className="text-sm font-bold opacity-40">{data.companyName}</p>
          </div>
          <div className="text-right pt-4">
            <p className="text-xs font-black uppercase tracking-widest opacity-20">{data.date}</p>
          </div>
        </div>
        <div className="space-y-6 text-lg font-medium leading-relaxed text-justify">
          <h2 className="text-3xl font-black text-rose-500 mb-10">{data.letterSubject}</h2>
          <p>Yth. {data.recipientName},</p>
          <div className="whitespace-pre-wrap text-rose-700">{data.letterContent}</div>
          <div className="mt-20 flex items-center gap-8">
            <div className="h-1 flex-1 bg-rose-100"></div>
            <p className="text-3xl font-black text-rose-500">{data.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
