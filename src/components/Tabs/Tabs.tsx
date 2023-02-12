export function Tabs() {
  return (
    <div className="flex border-b border-dark-100">
      <button
        className={`min-w-max mr-4 pb-2 text-sm font-semibold`}>
        Presensi
      </button>
      <button className={`min-w-max mr-4 pb-2 text-sm font-semibold`}>
        Riwayat Kegiatan Presensi Kamu
      </button>
    </div>
  );
}
