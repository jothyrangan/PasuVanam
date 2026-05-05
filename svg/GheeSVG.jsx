"use client";

export default function GheeSVG() {
  return (
    <div className="flex items-center justify-center bg-[#fff7ed] h-[400px]">
      <svg width="260" height="320" viewBox="0 0 260 320">
        
        {/* Glow */}
        <circle cx="130" cy="260" r="60" fill="#facc15" opacity="0.2">
          <animate attributeName="r" values="55;65;55" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Jar */}
        <rect x="70" y="120" width="120" height="150" rx="20" fill="#facc15" />
        <rect x="70" y="100" width="120" height="30" rx="10" fill="#e5e7eb" />

        {/* Ghee surface (subtle wave) */}
        <path fill="#fde047">
          <animate 
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="
              M70 150 Q130 140 190 150 L190 270 L70 270 Z;
              M70 150 Q130 160 190 150 L190 270 L70 270 Z;
              M70 150 Q130 140 190 150 L190 270 L70 270 Z
            "
          />
        </path>

        {/* Spoon */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 40; 0 0"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            additive="sum"
            values="0 130 80; 8 130 80; 0 130 80"
            dur="2.5s"
            repeatCount="indefinite"
          />

          {/* Spoon handle */}
          <rect x="120" y="20" width="8" height="120" rx="4" fill="#9ca3af" />

          {/* Spoon bowl */}
          <ellipse cx="124" cy="140" rx="20" ry="12" fill="#facc15" />
        </g>

        {/* Ghee drip */}
        <ellipse cx="124" cy="160" rx="6" ry="8" fill="#fde047">
          <animate 
            attributeName="cy"
            values="160;180;160"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </ellipse>

      </svg>
    </div>
  );
}