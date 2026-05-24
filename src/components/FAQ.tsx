import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Что входит в состав проекта?",
    answer:
      "В каждый проект входит полный комплект документации: архитектурный раздел (планы, фасады, разрезы), конструктивный раздел (узлы, спецификации), а также пояснительная записка. Этого достаточно для начала строительства.",
  },
  {
    question: "Можно ли изменить планировку под себя?",
    answer:
      "Да, большинство проектов допускают адаптацию. После покупки вы можете заказать внесение изменений у нас или у любого архитектора. Готовый проект — отличная база для доработки.",
  },
  {
    question: "Как быстро я получу проект после оплаты?",
    answer:
      "Проект отправляется на вашу электронную почту сразу после подтверждения оплаты — как правило, в течение нескольких минут. Все файлы в форматах PDF и DWG.",
  },
  {
    question: "Подходят ли проекты для получения разрешения на строительство?",
    answer:
      "Проекты содержат все необходимые разделы. При необходимости мы можем доработать проект под требования конкретного региона или добавить недостающие разделы за дополнительную плату.",
  },
  {
    question: "Какой фундамент предусмотрен в проектах?",
    answer:
      "В большинстве проектов предусмотрен свайно-ростверковый или ленточный фундамент. Рекомендуемый тип фундамента указан в каждом проекте. При необходимости возможна адаптация под другой тип.",
  },
  {
    question: "Как приобрести проект?",
    answer:
      "Выберите понравившийся проект в каталоге, нажмите «Купить проект» и следуйте инструкции. Оплата онлайн. После оплаты документация придёт на вашу почту.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}