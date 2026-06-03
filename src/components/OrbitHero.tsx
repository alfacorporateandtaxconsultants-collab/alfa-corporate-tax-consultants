import { useEffect, useRef } from 'react';
import { Scale, FileText, Building2, Calculator, Gavel, Shield, Briefcase, Landmark } from 'lucide-react';

const orbitIcons = [
  { Icon: Scale, color: '#E85D04', ring: 1, angle: 0 },
  { Icon: FileText, color: '#F48C06', ring: 1, angle: 180 },
  { Icon: Building2, color: '#E85D04', ring: 2, angle: 45 },
  { Icon: Calculator, color: '#F48C06', ring: 2, angle: 135 },
  { Icon: Gavel, color: '#E85D04', ring: 2, angle: 225 },
  { Icon: Shield, color: '#F48C06', ring: 2, angle: 315 },
  { Icon: Briefcase, color: '#E85D04', ring: 3, angle: 22.5 },
  { Icon: Landmark, color: '#F48C06', ring: 3, angle: 112.5 },
];

export default function OrbitHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30;
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      container.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[500px] mx-auto" style={{ perspective: '1000px' }}>
      <div
        ref={containerRef}
        className="relative w-full h-full transition-transform duration-300 ease-out"
      >
        {/* Orbit Rings */}
        <div className="orbit-ring orbit-ring-1 animate-orbit" />
        <div className="orbit-ring orbit-ring-2 animate-orbit-reverse" />
        <div className="orbit-ring orbit-ring-3 animate-orbit-slow" />

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl flex items-center justify-center animate-float">
            <img
              src="/uploads/upload_1.jpg"
              alt="ALFA Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Orbiting Icons */}
        {orbitIcons.map((item, index) => {
          const radius = item.ring === 1 ? 100 : item.ring === 2 ? 160 : 220;
          const animationClass = item.ring === 1 ? 'animate-orbit' : item.ring === 2 ? 'animate-orbit-reverse' : 'animate-orbit-slow';
          const innerAnimation = item.ring === 1 ? 'orbit-dot-inner' : item.ring === 2 ? 'orbit-dot-inner-2' : 'orbit-dot-inner-3';

          return (
            <div
              key={index}
              className={`orbit-dot ${animationClass}`}
              style={{
                animationDelay: `${-item.angle / 360 * (item.ring === 1 ? 20 : item.ring === 2 ? 25 : 35)}s`,
              }}
            >
              <div className={innerAnimation}>
                <item.Icon size={22} style={{ color: item.color }} />
              </div>
            </div>
          );
        })}

        {/* Decorative dots on rings */}
        {[0, 90, 180, 270].map((angle, i) => (
          <div
            key={`dot1-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-orbit"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-4px',
              marginLeft: '-4px',
              animationDelay: `${-angle / 360 * 20}s`,
            }}
          >
            <div
              className="orbit-dot-inner"
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(232, 93, 4, 0.3)',
                transform: `translateX(100px)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
