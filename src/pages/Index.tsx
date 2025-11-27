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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-700 to-slate-900 rounded-2xl transform rotate-45 shadow-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-secondary rounded-full animate-pulse"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-secondary rounded-full"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/80"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80"></div>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
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
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-700 to-slate-900 rounded-2xl transform rotate-45 shadow-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-14 h-14">
                        <div className="absolute inset-0 bg-secondary rounded-full"></div>
                        <div className="absolute inset-1.5 bg-gradient-to-br from-orange-400 to-secondary rounded-full"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/80"></div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80"></div>
                        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
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
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-700 to-slate-900 rounded-2xl transform rotate-45 shadow-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-11 h-11">
                        <div className="absolute inset-0 bg-secondary rounded-full"></div>
                        <div className="absolute inset-1 bg-gradient-to-br from-orange-400 to-secondary rounded-full"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/80"></div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80"></div>
                      </div>
                    </div>
                  </div>
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
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-black rounded-2xl transform rotate-45 shadow-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                      <div className="absolute inset-2 bg-gray-500 rounded-full"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white"></div>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
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