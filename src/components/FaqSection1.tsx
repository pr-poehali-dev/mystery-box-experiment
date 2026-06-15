import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Сколько времени занимает изготовление фигурки?",
    answer: "В среднем от 2 до 5 недель в зависимости от сложности персонажа и загруженности мастерской. Точные сроки назовём после согласования эскиза.",
  },
  {
    question: "Какие материалы вы используете?",
    answer: "Мы печатаем фигурки из прочной фотополимерной смолы и расписываем стойкими акриловыми красками с защитным покрытием — цвет не выцветает со временем.",
  },
  {
    question: "Можно ли заказать своего ОС или фурсону?",
    answer: "Да, это наша основная специализация! Пришлите реф-лист или арт персонажа, и мы воссоздадим его в объёме с проработкой всех деталей.",
  },
  {
    question: "Вы доставляете в другие города и страны?",
    answer: "Конечно. Бережно упаковываем фигурку в защитный бокс и отправляем по России и за рубеж удобной вам службой доставки.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-primary font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Мы собрали самую важную информацию, чтобы помочь вам. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Свяжитесь с нами.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Остались вопросы?</h2>
            <p className="text-base text-muted-foreground">
              Нужна помощь или консультация? Наша команда всегда готова помочь!
            </p>
          </div>
          <Button aria-label="Связаться с поддержкой">Написать нам</Button>
        </div>
      </div>
    </section>
  )
}