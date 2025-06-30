import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const menuItems = [
    "Главная",
    "Услуги",
    "Карта маршрутов",
    "О компании",
    "Закупки",
    "Партнеры",
    "Контакты",
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <Icon name="Train" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Вектор Рейл</h1>
              <p className="text-sm text-slate-600">Менеджмент</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-slate-700 hover:text-sky-500 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button className="bg-sky-500 hover:bg-sky-600">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
