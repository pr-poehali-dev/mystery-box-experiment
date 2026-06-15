import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const pricingData = {
  plans: [
    {
      name: "Чиби",
      description: "Милая мини-фигурка в стиле чиби.",
      features: [
        {
          name: "Высота ~8 см",
          tooltip: "Компактный размер, удобно на полку или стол",
        },
        {
          name: "Базовая ручная роспись",
          tooltip: "Аккуратная роспись основных цветов персонажа",
        },
        {
          name: "Простая поза",
          tooltip: "Стоячая или сидячая поза без сложных элементов",
        },
      ],
      pricing: {
        monthly: 3900,
        annually: 3900,
      },
      variant: "secondary",
    },
    {
      name: "Стандарт",
      description: "Детализированная фигурка вашего персонажа.",
      badge: "Популярный",
      features: [
        {
          name: "Высота ~15 см",
          tooltip: "Оптимальный размер для проработки деталей",
        },
        {
          name: "Детальная роспись шерсти",
          tooltip: "Проработка фактуры, переходов и узоров",
        },
        {
          name: "Поза по вашему рефу",
          tooltip: "Любая поза и выражение из вашего арта",
        },
        {
          name: "1 аксессуар в комплекте",
          tooltip: "Оружие, украшение или предмет на выбор",
        },
      ],
      pricing: {
        monthly: 8900,
        annually: 8900,
      },
      variant: "default",
    },
    {
      name: "Премиум",
      description: "Коллекционная фигурка с максимальной детализацией.",
      features: [
        {
          name: "Высота ~25 см",
          tooltip: "Крупная статуэтка музейного уровня",
        },
        {
          name: "Сложная динамичная сцена",
          tooltip: "Подставка, эффекты и несколько фигур",
        },
        {
          name: "Премиум-роспись и эффекты",
          tooltip: "Глянец, свечение, металлик и тонкая деталировка",
        },
        {
          name: "Подарочная упаковка",
          tooltip: "Защитный бокс и сертификат подлинности",
        },
      ],
      pricing: {
        monthly: 18900,
        annually: 18900,
      },
      variant: "secondary",
    },
  ],
}

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-primary">Каталог</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Форматы фигурок и цены
            </h2>
            <p className="text-base text-muted-foreground">Выберите формат — финальная цена зависит от сложности персонажа.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {pricingData.plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className={`text-base leading-6 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      от
                    </span>
                    <span className="text-4xl font-semibold leading-10">
                      {plan.pricing.monthly.toLocaleString("ru-RU")}
                    </span>
                    <span className={`text-base leading-6 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      ₽
                    </span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    Заказать
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    {index === 0 ? "Что включено:" : `Все из ${pricingData.plans[index - 1].name}, плюс:`}
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}