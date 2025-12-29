import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/50">
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
        aria-label="Switch to English"
      >
        {/* UK/English Flag */}
        <svg className="w-4 h-3 rounded-sm overflow-hidden" viewBox="0 0 60 40">
          <clipPath id="gb-clip">
            <rect width="60" height="40" rx="2" />
          </clipPath>
          <g clipPath="url(#gb-clip)">
            <rect fill="#012169" width="60" height="40"/>
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 L30,40 M0,20 L60,20" stroke="#fff" strokeWidth="12"/>
            <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
        <span className="hidden sm:inline">EN</span>
      </button>
      
      <button
        onClick={() => setLanguage("ar")}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
          language === "ar"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
        aria-label="Switch to Arabic"
      >
        {/* Syrian Flag */}
        <svg className="w-4 h-3 rounded-sm overflow-hidden" viewBox="0 0 60 40">
          <clipPath id="sy-clip">
            <rect width="60" height="40" rx="2" />
          </clipPath>
          <g clipPath="url(#sy-clip)">
            <rect fill="#CE1126" y="0" width="60" height="13.33"/>
            <rect fill="#FFFFFF" y="13.33" width="60" height="13.34"/>
            <rect fill="#000000" y="26.67" width="60" height="13.33"/>
            <g fill="#007A3D">
              <polygon points="20,20 21.5,24.5 17,21.5 23,21.5 18.5,24.5" transform="translate(-2, -3)"/>
              <polygon points="20,20 21.5,24.5 17,21.5 23,21.5 18.5,24.5" transform="translate(24, -3)"/>
            </g>
          </g>
        </svg>
        <span className="hidden sm:inline">AR</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
