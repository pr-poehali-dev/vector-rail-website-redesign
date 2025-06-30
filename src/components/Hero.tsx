import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-sky-300 font-medium uppercase tracking-wide text-sm">
              Железнодорожные перевозки
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Современные решения для
            <span className="text-sky-400 block">
              железнодорожной логистики
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Профессиональные услуги аренды подвижного состава, организация
            перевозок и комплексное логистическое сопровождение грузов по
            территории России и стран СНГ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-lg px-8 py-4"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-4"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Карта маршрутов
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
              <div className="text-sm text-slate-400">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">2000+</div>
              <div className="text-sm text-slate-400">вагонов в парке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">50+</div>
              <div className="text-sm text-slate-400">направлений</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
