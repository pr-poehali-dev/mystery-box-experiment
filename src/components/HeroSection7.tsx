import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Авторские фигурки из смолы — <span className="text-primary">ваш фурсона</span> оживает
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Создаём детализированные фигурки антропоморфных персонажей из качественной фотополимерной смолы. Ручная роспись, любой образ по вашему рефу — от милого лиса до харизматичного дракона.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button>Заказать фигурку</Button>
                <Button variant="ghost">
                  Смотреть работы
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://cdn.poehali.dev/projects/66ec152e-fec4-43e7-a702-c5d4bfb67143/files/5b262e02-8453-4fab-a329-9f0fbe48eb84.jpg"
              alt="Фигурка антропоморфного лиса из фотополимерной смолы ручной работы"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}