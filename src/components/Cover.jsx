// A quiet generative cover for projects without a screenshot: a field of streamlines
// whose shape is derived from the project slug, drawn in the accent colour.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function Cover({ seed }) {
  const h = hash(seed);
  const amp = 10 + (h % 18);
  const freq = 1.2 + ((h >> 5) % 10) / 6;
  const phase = ((h >> 9) % 628) / 100;
  const tilt = (((h >> 13) % 40) - 20) / 4;
  const lines = 14;

  const paths = Array.from({ length: lines }, (_, i) => {
    const y0 = 18 + i * (164 / (lines - 1));
    const local = amp * (0.35 + 0.65 * Math.sin((i / (lines - 1)) * Math.PI));
    let d = '';
    for (let x = 0; x <= 320; x += 8) {
      const y = y0 + local * Math.sin((x / 320) * Math.PI * freq + phase + i * 0.18) + (tilt * (x - 160)) / 160;
      d += `${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)}`;
    }
    return d;
  });

  return (
    <div className="relative h-full w-full bg-accent-soft/60 dark:bg-accent-soft/40">
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full text-accent" aria-hidden="true">
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1" opacity={0.18 + 0.5 * Math.sin((i / (lines - 1)) * Math.PI)} />
        ))}
      </svg>
    </div>
  );
}
