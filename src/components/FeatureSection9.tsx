import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "PawPrint",
    title: "Любой персонаж",
    description: "Создаём фигурку по вашему рефу — фурсона, ОС или любимый персонаж в точных деталях.",
  },
  {
    icon: "Brush",
    title: "Ручная роспись",
    description: "Каждая фигурка расписывается вручную стойкими красками с проработкой мельчайших нюансов.",
  },
  {
    icon: "Gem",
    title: "Качественная смола",
    description: "Используем прочную фотополимерную смолу — фигурка не выцветает и не боится времени.",
  },
  {
    icon: "Truck",
    title: "Бережная доставка",
    description: "Упаковываем в защитный бокс и отправляем в любую точку России и мира.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-primary">Преимущества</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему выбирают ЛапкиАрт?</h2>
          <p className="text-base text-muted-foreground">
            Превращаем вашего персонажа в фигурку, которой хочется любоваться:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 items-center text-center">
                <div className="flex justify-center items-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
                  <Icon name={feature.icon} className="text-primary" size={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}