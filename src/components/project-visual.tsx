type ProjectVisualProps = {
  slug: string;
  title: string;
};

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
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
