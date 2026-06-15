import { AspectRatio } from "@/components/ui/aspect-ratio"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Image",
    title: "Пришлите реф",
    description: "Отправьте арт или описание персонажа — обсудим позу, размер и детали.",
  },
  {
    icon: "Sparkles",
    title: "Утвердим эскиз",
    description: "Согласуем 3D-модель и палитру росписи перед тем, как приступить к работе.",
  },
  {
    icon: "Package",
    title: "Получите фигурку",
    description: "Печатаем, расписываем вручную и бережно отправляем готовую работу вам.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-primary">Как заказать</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Заказать фигурку просто!</h2>
            <p className="text-base text-muted-foreground">Всего 3 шага от идеи до фигурки в руках:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              return (
                <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="flex justify-center items-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
                    <Icon name={step.icon} className="text-primary" size={22} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://cdn.poehali.dev/projects/66ec152e-fec4-43e7-a702-c5d4bfb67143/files/894fbc45-d4fd-462a-8b90-39f2c600a9e5.jpg"
                alt="Мастерская по созданию фигурок антропоморфных персонажей из смолы"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}