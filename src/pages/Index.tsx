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
              <div className="relative inline-block">
                <div className="relative bg-gradient-to-br from-primary to-slate-800 px-16 py-8 rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-secondary opacity-20 rounded-2xl transform -rotate-2"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl font-black text-white tracking-tighter mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ТЕПЛО
                    </div>
                    <div className="text-5xl font-black text-secondary tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      СНАБ
                    </div>
                    <div className="w-full h-1 bg-secondary my-3 rounded"></div>
                    <div className="text-xs text-slate-300 tracking-widest font-medium">
                      ТЕПЛОСНАБЖАЮЩАЯ ОРГАНИЗАЦИЯ
                    </div>
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
                <div className="relative inline-block">
                  <div className="relative bg-gradient-to-br from-primary to-slate-800 px-10 py-6 rounded-xl shadow-xl">
                    <div className="relative z-10 text-center">
                      <div className="text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        ТЕПЛО
                      </div>
                      <div className="text-3xl font-black text-secondary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        СНАБ
                      </div>
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
                <div className="relative inline-block">
                  <div className="relative bg-gradient-to-br from-primary to-slate-800 px-8 py-5 rounded-xl shadow-xl">
                    <div className="relative z-10 text-center">
                      <div className="text-3xl font-black text-secondary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        ТС
                      </div>
                    </div>
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
              <div className="relative inline-block">
                <div className="relative bg-black px-16 py-8 rounded-2xl shadow-2xl">
                  <div className="relative z-10 text-center">
                    <div className="text-6xl font-black text-white tracking-tighter mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ТЕПЛО
                    </div>
                    <div className="text-5xl font-black text-gray-400 tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      СНАБ
                    </div>
                    <div className="w-full h-1 bg-gray-400 my-3 rounded"></div>
                    <div className="text-xs text-gray-500 tracking-widest font-medium">
                      ТЕПЛОСНАБЖАЮЩАЯ ОРГАНИЗАЦИЯ
                    </div>
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