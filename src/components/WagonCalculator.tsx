import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const WagonCalculator = () => {
  const [formData, setFormData] = useState({
    wagonType: "",
    quantity: "",
    days: "",
    route: "",
  });
  const [result, setResult] = useState<number | null>(null);

  const wagonTypes = [
    { value: "tank", label: "Цистерна", price: 1200 },
    { value: "hopper", label: "Хоппер", price: 800 },
    { value: "platform", label: "Платформа", price: 900 },
    { value: "covered", label: "Крытый вагон", price: 1000 },
  ];

  const routes = [
    { value: "moscow-spb", label: "Москва - Санкт-Петербург", multiplier: 1.0 },
    { value: "moscow-ekb", label: "Москва - Екатеринбург", multiplier: 1.3 },
    { value: "moscow-nsk", label: "Москва - Новосибирск", multiplier: 1.8 },
    { value: "moscow-vlv", label: "Москва - Владивосток", multiplier: 2.5 },
  ];

  const calculatePrice = () => {
    const wagonPrice =
      wagonTypes.find((w) => w.value === formData.wagonType)?.price || 0;
    const routeMultiplier =
      routes.find((r) => r.value === formData.route)?.multiplier || 1;
    const quantity = parseInt(formData.quantity) || 0;
    const days = parseInt(formData.days) || 0;

    const total = wagonPrice * quantity * days * routeMultiplier;
    setResult(total);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Калькулятор стоимости аренды вагонов
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Рассчитайте примерную стоимость аренды подвижного состава для ваших
            грузоперевозок
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="mr-2 text-sky-500" />
                Параметры аренды
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="wagonType">Тип вагона</Label>
                  <Select
                    value={formData.wagonType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, wagonType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип вагона" />
                    </SelectTrigger>
                    <SelectContent>
                      {wagonTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} - {type.price} ₽/сутки
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="route">Маршрут</Label>
                  <Select
                    value={formData.route}
                    onValueChange={(value) =>
                      setFormData({ ...formData, route: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите маршрут" />
                    </SelectTrigger>
                    <SelectContent>
                      {routes.map((route) => (
                        <SelectItem key={route.value} value={route.value}>
                          {route.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Количество вагонов</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Введите количество"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="days">Срок аренды (дни)</Label>
                  <Input
                    id="days"
                    type="number"
                    placeholder="Введите количество дней"
                    value={formData.days}
                    onChange={(e) =>
                      setFormData({ ...formData, days: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  onClick={calculatePrice}
                  className="bg-sky-500 hover:bg-sky-600 px-8"
                  size="lg"
                >
                  <Icon name="Calculator" className="mr-2" size={18} />
                  Рассчитать стоимость
                </Button>
              </div>

              {result !== null && (
                <div className="mt-8 p-6 bg-sky-50 rounded-lg border-l-4 border-sky-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        Расчетная стоимость аренды
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        Итоговая сумма за весь период аренды
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-sky-600">
                        {result.toLocaleString("ru-RU")} ₽
                      </div>
                      <div className="text-sm text-slate-500">
                        {formData.quantity} вагон(ов) на {formData.days} дней
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-sky-200">
                    <p className="text-sm text-slate-600">
                      * Расчет является предварительным. Окончательная стоимость
                      определяется после согласования всех условий договора.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WagonCalculator;
