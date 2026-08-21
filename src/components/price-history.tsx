'use client';

export function PriceHistory({ current }: { current: number }) {
  const data = [
    { d: 'Haz 1', p: current * 1.08 },
    { d: 'Haz 15', p: current * 1.05 },
    { d: 'Tem 1', p: current * 1.03 },
    { d: 'Tem 15', p: current * 1.07 },
    { d: 'Ağu 1', p: current * 1.02 },
    { d: 'Ağu 21', p: current },
  ];

  const min = Math.min(...data.map((x) => x.p));
  const max = Math.max(...data.map((x) => x.p));
  const range = max - min || 1;
  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 90 - ((item.p - min) / range) * 75;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="mt-5 h-64 w-full">
      <div className="relative h-52 w-full overflow-hidden rounded-xl bg-slate-50 p-3">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            className="text-blue-600"
          />
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-6 text-center text-xs text-slate-500">
        {data.map((item) => (
          <span key={item.d}>{item.d}</span>
        ))}
      </div>
      <div className="mt-1 text-right text-xs font-semibold text-slate-600">
        Güncel: {current.toLocaleString('tr-TR')} TL
      </div>
    </div>
  );
}
