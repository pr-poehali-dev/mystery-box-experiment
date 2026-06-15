export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="ЛапкиАрт логотип" role="img">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="14" r="4.2" fill="hsl(var(--primary))" />
        <circle cx="6.5" cy="8.5" r="1.8" fill="hsl(var(--primary))" />
        <circle cx="10" cy="6" r="1.8" fill="hsl(var(--primary))" />
        <circle cx="14" cy="6" r="1.8" fill="hsl(var(--primary))" />
        <circle cx="17.5" cy="8.5" r="1.8" fill="hsl(var(--primary))" />
      </svg>
      <span className="text-lg font-bold text-foreground">ЛапкиАрт</span>
    </div>
  )
}