export default function VsNav() {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
      <a href="/" className="flex items-center gap-2 group">
        <span className="text-2xl">🍌</span>
        <span className="text-base font-semibold tracking-tight text-[#2a241f] group-hover:opacity-70 transition">StudyBanana</span>
      </a>
      <div className="flex items-center gap-3">
        <a href="/vs" className="text-sm text-black/50 hover:text-black transition hidden sm:block">All Comparisons</a>
        <a
          href="/#download"
          className="rounded-full bg-[#2a241f] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5"
        >
          Download Free
        </a>
      </div>
    </nav>
  )
}
