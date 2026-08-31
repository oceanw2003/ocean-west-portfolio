type ProjectVisualProps = {
  slug: string;
  title: string;
};

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  if (slug === "clu-multi-agent-assistant") {
    return (
      <svg aria-label={`${title} technical visual`} className="h-full w-full" viewBox="0 0 520 320" role="img">
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <circle cx="260" cy="160" fill="#d98a3c" r="30" />
        <circle cx="260" cy="160" fill="none" r="82" stroke="#f5f2eb" strokeDasharray="5 8" strokeOpacity="0.4" strokeWidth="2" />
        {[[260, 63], [347, 93], [379, 160], [347, 227], [260, 257], [173, 227], [141, 160], [173, 93]].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <line stroke="#f5f2eb" strokeOpacity="0.4" strokeWidth="2" x1="260" x2={cx} y1="160" y2={cy} />
            <circle cx={cx} cy={cy} fill="#171717" r="15" stroke="#f5f2eb" strokeOpacity="0.65" strokeWidth="2" />
          </g>
        ))}
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">68 tools / 16 agents / approval-gated autonomy</text>
      </svg>
    );
  }

  if (slug === "composites-ai-assistant") {
    return (
      <svg aria-label={`${title} technical visual`} className="h-full w-full" viewBox="0 0 520 320" role="img">
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <rect fill="none" height="156" rx="16" stroke="#f5f2eb" strokeOpacity="0.5" strokeWidth="2" width="230" x="72" y="70" />
        <path d="M106 111H265M106 143H241M106 175H258" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="378" cy="149" fill="none" r="57" stroke="#d98a3c" strokeWidth="3" />
        <circle cx="378" cy="149" fill="none" r="28" stroke="#f5f2eb" strokeDasharray="4 6" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M302 149H350M406 149H449M378 73V110M378 188V227" stroke="#f5f2eb" strokeOpacity="0.4" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">local documents / on-device embeddings / private retrieval</text>
      </svg>
    );
  }

  if (slug === "sales-utility-engine") {
    return (
      <svg aria-label={`${title} technical visual`} className="h-full w-full" viewBox="0 0 520 320" role="img">
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <rect fill="none" height="164" rx="14" stroke="#f5f2eb" strokeOpacity="0.5" strokeWidth="2" width="170" x="61" y="75" />
        <rect fill="none" height="164" rx="14" stroke="#f5f2eb" strokeOpacity="0.5" strokeWidth="2" width="170" x="289" y="75" />
        <path d="M93 113H194M93 145H177M93 177H161M321 113H421M321 145H405M321 177H386" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M231 157H289" stroke="#d98a3c" strokeWidth="3" />
        <path d="M274 146L289 157L274 168" fill="none" stroke="#d98a3c" strokeWidth="3" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">lead intake / qualification / handoff / local fallback</text>
      </svg>
    );
  }

  if (slug === "door-guard") {
    return (
      <svg aria-label={`${title} technical visual`} className="h-full w-full" viewBox="0 0 520 320" role="img">
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <rect fill="none" height="184" stroke="#f5f2eb" strokeOpacity="0.5" strokeWidth="2" width="112" x="93" y="55" />
        <circle cx="149" cy="110" fill="none" r="18" stroke="#f5f2eb" strokeWidth="2" />
        <path d="M149 128V178M122 151H176M149 178L125 215M149 178L173 215" stroke="#f5f2eb" strokeWidth="3" />
        <rect fill="none" height="133" rx="12" stroke="#d98a3c" strokeDasharray="7 6" strokeWidth="2" width="184" x="257" y="85" />
        <path d="M281 123H413M281 153H382M281 183H403" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">live detection / door zone / JSONL events / local AI</text>
      </svg>
    );
  }

  if (slug === "steering-wheel-redesign") {
    return (
      <svg
        aria-label={`${title} technical placeholder visual`}
        className="h-full w-full"
        viewBox="0 0 520 320"
        role="img"
      >
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <circle cx="260" cy="160" fill="none" r="104" stroke="#d98a3c" strokeWidth="3" />
        <circle cx="260" cy="160" fill="none" r="70" stroke="#f5f2eb" strokeDasharray="6 8" strokeOpacity="0.45" strokeWidth="2" />
        <path
          d="M190 113L142 84M330 113L378 84M185 208L136 236M335 208L384 236"
          stroke="#f5f2eb"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
        <path d="M223 82H297M223 238H297M166 160H354" stroke="#f5f2eb" strokeOpacity="0.2" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
          steering geometry / laminate paths / torsion test planning
        </text>
      </svg>
    );
  }

  if (slug === "mf5-rc-vehicle") {
    return (
      <svg
        aria-label={`${title} technical placeholder visual`}
        className="h-full w-full"
        viewBox="0 0 520 320"
        role="img"
      >
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <path d="M102 190H162L193 132H329L360 190H420" fill="none" stroke="#f5f2eb" strokeWidth="3" />
        <circle cx="170" cy="204" fill="none" r="33" stroke="#d98a3c" strokeWidth="3" />
        <circle cx="352" cy="204" fill="none" r="33" stroke="#d98a3c" strokeWidth="3" />
        <path d="M217 132L201 190M303 132L319 190M233 113H287" stroke="#f5f2eb" strokeOpacity="0.55" strokeWidth="2" />
        <path d="M78 230H442" stroke="#f5f2eb" strokeDasharray="5 8" strokeOpacity="0.3" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
          ackermann geometry / chassis packaging / qualifying validation
        </text>
      </svg>
    );
  }

  if (slug === "low-cost-engine-dynamometer") {
    return (
      <svg
        aria-label={`${title} technical placeholder visual`}
        className="h-full w-full"
        viewBox="0 0 520 320"
        role="img"
      >
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <rect fill="none" height="150" rx="12" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" width="180" x="86" y="96" />
        <circle cx="340" cy="171" fill="none" r="56" stroke="#d98a3c" strokeWidth="3" />
        <path d="M266 170H392M340 115V227" stroke="#f5f2eb" strokeOpacity="0.4" strokeDasharray="5 7" strokeWidth="2" />
        <path d="M146 96V70H234V96M408 171L454 153" stroke="#f5f2eb" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
          torque arm / rpm sensing / low-cost test instrumentation
        </text>
      </svg>
    );
  }

  if (slug === "motion-tracking-fixture") {
    return (
      <svg
        aria-label={`${title} technical placeholder visual`}
        className="h-full w-full"
        viewBox="0 0 520 320"
        role="img"
      >
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <path d="M120 99H400L353 206H167Z" fill="none" stroke="#d98a3c" strokeWidth="3" />
        <path d="M260 86V206M173 170H347M148 134L372 134" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="260" cy="171" fill="none" r="20" stroke="#f5f2eb" strokeWidth="2" />
        <path d="M210 110L160 82M310 110L360 82M196 206L146 238M324 206L374 238" stroke="#f5f2eb" strokeOpacity="0.35" strokeWidth="2" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
          multi-view coverage / structural safety / low-latency deployment
        </text>
      </svg>
    );
  }

  if (slug === "ai-brand-consistency-checker") {
    return (
      <svg
        aria-label={`${title} technical placeholder visual`}
        className="h-full w-full"
        viewBox="0 0 520 320"
        role="img"
      >
        <rect fill="#0f0f0f" height="320" rx="28" width="520" />
        <rect fill="none" height="162" rx="18" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" width="280" x="104" y="74" />
        <path d="M140 120H350M140 153H310M140 186H332" stroke="#f5f2eb" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="396" cy="130" fill="#d98a3c" r="17" />
        <path d="M391 130L395 134L404 124" fill="none" stroke="#090909" strokeWidth="2.5" />
        <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
          rule checking / revision guidance / structured review output
        </text>
      </svg>
    );
  }

  return (
    <svg
      aria-label={`${title} technical placeholder visual`}
      className="h-full w-full"
      viewBox="0 0 520 320"
      role="img"
    >
      <rect fill="#0f0f0f" height="320" rx="28" width="520" />
      <path d="M96 94H424V226H96Z" fill="none" stroke="#d98a3c" strokeWidth="2.5" />
      <path d="M136 129H384M136 161H384M136 193H332" stroke="#f5f2eb" strokeOpacity="0.38" strokeWidth="2" />
      <path d="M384 129L424 94M332 193L424 226" stroke="#f5f2eb" strokeOpacity="0.28" strokeWidth="2" />
      <text fill="#f5f2eb" fontSize="16" opacity="0.75" x="32" y="290">
        retrieval / grounded answers / modular architecture
      </text>
    </svg>
  );
}
