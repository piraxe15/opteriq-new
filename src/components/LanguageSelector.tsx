import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <div className="flex items-center space-x-1">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className="h-8 px-2 text-xs"
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
            <span className="sm:hidden">{lang.code.toUpperCase()}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;