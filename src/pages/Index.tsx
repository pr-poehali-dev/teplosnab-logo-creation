import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Логотип ООО "Теплоснаб"
          </h1>
          <p className="text-muted-foreground">Корпоративный стиль теплоснабжающей организации</p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Основной логотип
            </h2>
            <div className="flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-lg">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1A1F2C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="flame" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M50 5 L85 30 L85 70 L50 95 L15 70 L15 30 Z" fill="url(#grad1)" stroke="#F97316" strokeWidth="2"/>
                    <circle cx="50" cy="55" r="18" fill="url(#flame)" opacity="0.9"/>
                    <path d="M50 30 Q45 40 50 50 Q55 40 50 30" fill="#FFF" opacity="0.9"/>
                    <path d="M45 50 Q42 57 45 63 Q48 57 45 50" fill="#FFF" opacity="0.8"/>
                    <path d="M55 50 Q52 57 55 63 Q58 57 55 50" fill="#FFF" opacity="0.8"/>
                    <rect x="47" y="70" width="6" height="15" fill="#64748B" rx="1"/>
                    <rect x="35" y="78" width="30" height="3" fill="#64748B" rx="1"/>
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wider mt-1 font-medium">
                    Теплоснабжающая организация
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Вертикальная версия
              </h2>
              <div className="flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-lg">
                <div className="flex flex-col items-center gap-4">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-lg">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1A1F2C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="flame2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M50 5 L85 30 L85 70 L50 95 L15 70 L15 30 Z" fill="url(#grad2)" stroke="#F97316" strokeWidth="2"/>
                    <circle cx="50" cy="55" r="16" fill="url(#flame2)" opacity="0.9"/>
                    <path d="M50 32 Q46 40 50 48 Q54 40 50 32" fill="#FFF" opacity="0.9"/>
                    <path d="M46 48 Q44 54 46 60 Q49 54 46 48" fill="#FFF" opacity="0.8"/>
                    <path d="M54 48 Q52 54 54 60 Q57 54 54 48" fill="#FFF" opacity="0.8"/>
                    <rect x="47" y="68" width="6" height="13" fill="#64748B" rx="1"/>
                    <rect x="37" y="75" width="26" height="3" fill="#64748B" rx="1"/>
                  </svg>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ТЕПЛОСНАБ
                    </div>
                    <div className="text-xs text-muted-foreground tracking-wider mt-1">
                      Теплоснабжающая организация
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Компактная версия
              </h2>
              <div className="flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-lg">
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1A1F2C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="flame3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M50 5 L85 30 L85 70 L50 95 L15 70 L15 30 Z" fill="url(#grad3)" stroke="#F97316" strokeWidth="2"/>
                    <circle cx="50" cy="55" r="14" fill="url(#flame3)" opacity="0.9"/>
                    <path d="M50 34 Q47 40 50 46 Q53 40 50 34" fill="#FFF" opacity="0.9"/>
                    <path d="M47 46 Q45 51 47 57 Q49 51 47 46" fill="#FFF" opacity="0.8"/>
                    <path d="M53 46 Q51 51 53 57 Q55 51 53 46" fill="#FFF" opacity="0.8"/>
                    <rect x="47" y="66" width="6" height="11" fill="#64748B" rx="1"/>
                    <rect x="39" y="72" width="22" height="2.5" fill="#64748B" rx="1"/>
                  </svg>
                  <div className="text-2xl font-black text-primary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Монохромная версия
            </h2>
            <div className="flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-lg">
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-xl">
                  <path d="M50 5 L85 30 L85 70 L50 95 L15 70 L15 30 Z" fill="#000" stroke="#666" strokeWidth="2"/>
                  <circle cx="50" cy="55" r="18" fill="#4B5563" opacity="0.9"/>
                  <path d="M50 30 Q45 40 50 50 Q55 40 50 30" fill="#FFF" opacity="0.9"/>
                  <path d="M45 50 Q42 57 45 63 Q48 57 45 50" fill="#FFF" opacity="0.8"/>
                  <path d="M55 50 Q52 57 55 63 Q58 57 55 50" fill="#FFF" opacity="0.8"/>
                  <rect x="47" y="70" width="6" height="15" fill="#6B7280" rx="1"/>
                  <rect x="35" y="78" width="30" height="3" fill="#6B7280" rx="1"/>
                </svg>
                <div>
                  <div className="text-4xl font-black text-black tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                  <div className="text-sm text-gray-600 tracking-wider mt-1 font-medium">
                    Теплоснабжающая организация
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white">
            <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Фирменные цвета
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="w-full h-24 bg-primary rounded-lg mb-3 shadow-md"></div>
                <div className="text-sm font-semibold text-primary">Основной</div>
                <div className="text-xs text-muted-foreground font-mono">#1A1F2C</div>
              </div>
              <div>
                <div className="w-full h-24 bg-secondary rounded-lg mb-3 shadow-md"></div>
                <div className="text-sm font-semibold text-primary">Акцент</div>
                <div className="text-xs text-muted-foreground font-mono">#F97316</div>
              </div>
              <div>
                <div className="w-full h-24 bg-white border-2 border-slate-200 rounded-lg mb-3 shadow-md"></div>
                <div className="text-sm font-semibold text-primary">Белый</div>
                <div className="text-xs text-muted-foreground font-mono">#FFFFFF</div>
              </div>
              <div>
                <div className="w-full h-24 bg-slate-600 rounded-lg mb-3 shadow-md"></div>
                <div className="text-sm font-semibold text-primary">Серый</div>
                <div className="text-xs text-muted-foreground font-mono">#64748B</div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white">
            <h2 className="text-xl font-semibold mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Типографика
            </h2>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Основной шрифт - Montserrat</div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                  <div className="text-2xl font-semibold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                  <div className="text-xl font-medium text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ТЕПЛОСНАБ
                  </div>
                </div>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                Описательный текст: Regular, Medium для заголовков, Bold для акцентов
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;