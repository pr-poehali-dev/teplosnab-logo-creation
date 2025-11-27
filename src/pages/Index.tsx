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
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1A1F2C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="heatGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#FB923C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#heatGlow)" strokeWidth="3" opacity="0.6"/>
                    <g filter="url(#glow)">
                      <path d="M50 20 L50 45" stroke="url(#heatGlow)" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M50 50 L65 65" stroke="url(#heatGlow)" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M50 50 L35 65" stroke="url(#heatGlow)" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M50 50 L50 75" stroke="url(#heatGlow)" strokeWidth="4" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="8" fill="url(#heatGlow)"/>
                      <circle cx="50" cy="50" r="12" fill="none" stroke="url(#heatGlow)" strokeWidth="1.5" opacity="0.5"/>
                      <circle cx="50" cy="50" r="16" fill="none" stroke="url(#heatGlow)" strokeWidth="1" opacity="0.3"/>
                      <circle cx="50" cy="20" r="4" fill="url(#heatGlow)"/>
                      <circle cx="65" cy="65" r="4" fill="url(#heatGlow)"/>
                      <circle cx="35" cy="65" r="4" fill="url(#heatGlow)"/>
                      <circle cx="50" cy="75" r="4" fill="url(#heatGlow)"/>
                    </g>
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
                  <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-xl">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1A1F2C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="heatGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#FB923C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="glow2">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="50" cy="50" r="42" fill="url(#grad2)" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#heatGlow2)" strokeWidth="2.5" opacity="0.6"/>
                    <g filter="url(#glow2)">
                      <path d="M50 22 L50 42" stroke="url(#heatGlow2)" strokeWidth="3.5" strokeLinecap="round"/>
                      <path d="M50 50 L63 63" stroke="url(#heatGlow2)" strokeWidth="3.5" strokeLinecap="round"/>
                      <path d="M50 50 L37 63" stroke="url(#heatGlow2)" strokeWidth="3.5" strokeLinecap="round"/>
                      <path d="M50 50 L50 72" stroke="url(#heatGlow2)" strokeWidth="3.5" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="7" fill="url(#heatGlow2)"/>
                      <circle cx="50" cy="50" r="11" fill="none" stroke="url(#heatGlow2)" strokeWidth="1.2" opacity="0.5"/>
                      <circle cx="50" cy="22" r="3.5" fill="url(#heatGlow2)"/>
                      <circle cx="63" cy="63" r="3.5" fill="url(#heatGlow2)"/>
                      <circle cx="37" cy="63" r="3.5" fill="url(#heatGlow2)"/>
                      <circle cx="50" cy="72" r="3.5" fill="url(#heatGlow2)"/>
                    </g>
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
                        <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="heatGlow3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#FB923C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="glow3">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad3)" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#heatGlow3)" strokeWidth="2" opacity="0.6"/>
                    <g filter="url(#glow3)">
                      <path d="M50 24 L50 43" stroke="url(#heatGlow3)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M50 50 L61 61" stroke="url(#heatGlow3)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M50 50 L39 61" stroke="url(#heatGlow3)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M50 50 L50 70" stroke="url(#heatGlow3)" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="6" fill="url(#heatGlow3)"/>
                      <circle cx="50" cy="50" r="10" fill="none" stroke="url(#heatGlow3)" strokeWidth="1" opacity="0.5"/>
                      <circle cx="50" cy="24" r="3" fill="url(#heatGlow3)"/>
                      <circle cx="61" cy="61" r="3" fill="url(#heatGlow3)"/>
                      <circle cx="39" cy="61" r="3" fill="url(#heatGlow3)"/>
                      <circle cx="50" cy="70" r="3" fill="url(#heatGlow3)"/>
                    </g>
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
                <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl">
                  <defs>
                    <linearGradient id="gradBW" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#1F2937', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="glowBW">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#gradBW)" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#6B7280" strokeWidth="3" opacity="0.6"/>
                  <g filter="url(#glowBW)">
                    <path d="M50 20 L50 45" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M50 50 L65 65" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M50 50 L35 65" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M50 50 L50 75" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="8" fill="#9CA3AF"/>
                    <circle cx="50" cy="50" r="12" fill="none" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.5"/>
                    <circle cx="50" cy="50" r="16" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.3"/>
                    <circle cx="50" cy="20" r="4" fill="#9CA3AF"/>
                    <circle cx="65" cy="65" r="4" fill="#9CA3AF"/>
                    <circle cx="35" cy="65" r="4" fill="#9CA3AF"/>
                    <circle cx="50" cy="75" r="4" fill="#9CA3AF"/>
                  </g>
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