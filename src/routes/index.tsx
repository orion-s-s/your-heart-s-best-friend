import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Activity, ArrowRight, HeartPulse, ShieldAlert, Stethoscope, Wind } from "lucide-react";
import bypassImage from "@/assets/cabg-illustration.png";
import valveImage from "@/assets/aortic-valve-illustration.png";
import aortaImage from "@/assets/aortic-dissection-illustration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Операции на сердце и сосудах — простыми словами" },
      { name: "description", content: "Причины, диагностика, лечение и понятные схемы коронарного шунтирования, протезирования клапана и хирургии аорты." },
      { property: "og:title", content: "Как проходят операции на сердце" },
      { property: "og:description", content: "Медицинский атлас кардиохирурга без сложных терминов и пугающих картинок." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Topic = "bypass" | "valve" | "aorta";

const topics = {
  bypass: {
    short: "Шунтирование",
    title: "Коронарное шунтирование",
    kicker: "Когда сердцу нужен объездной путь",
    description: "Если коронарная артерия сильно сужена, создаём новый путь для крови в обход препятствия. Как хороший навигатор — только маршрут рассчитывается на годы.",
    image: bypassImage,
    alt: "Схема коронарного шунтирования с обходным сосудом",
    color: "text-primary",
    soft: "bg-sky-soft",
    cause: "Атеросклеротическая бляшка постепенно сужает сосуд. Влияют наследственность, курение, давление, диабет, холестерин и питание.",
    symptoms: "Давление или жжение за грудиной при нагрузке, одышка, снижение выносливости. Иногда болезнь долго не подаёт сигналов.",
    diagnostic: "Коронарография показывает точную карту сужений. ЭКГ, ЭхоКГ и нагрузочные тесты помогают оценить работу сердца.",
    treatment: "Лекарства снижают риск. Стент раскрывает локальное сужение. При сложном или множественном поражении эффективнее шунтирование.",
    operation: [
      ["С искусственным кровообращением", "Сердце временно останавливают, а кровообращение поддерживает аппарат. Хирург работает в неподвижном поле."],
      ["На работающем сердце", "Специальный стабилизатор удерживает небольшой участок. Сердце продолжает сокращаться."],
      ["Сосуды для шунта", "Внутренняя грудная и лучевая артерии или собственная вена ноги. Выбор зависит от анатомии и задачи."],
      ["Минидоступ", "В отдельных случаях операция возможна через небольшую торакотомию между рёбрами — без полной стернотомии."],
    ],
  },
  valve: {
    short: "Аортальный клапан",
    title: "Протезирование аортального клапана",
    kicker: "Новый клапан для правильного потока",
    description: "Клапан должен открываться свободно и закрываться герметично. Если механизм серьёзно повреждён, его ремонтируют или заменяют.",
    image: valveImage,
    alt: "Схема протезирования аортального клапана",
    color: "text-secondary",
    soft: "bg-mint-soft",
    cause: "Чаще клапан кальцинируется с возрастом, бывает врождённо двустворчатым или повреждается после воспаления.",
    symptoms: "Одышка, боль в груди, головокружение или обмороки, отёки. Сердцу приходится работать с заметной перегрузкой.",
    diagnostic: "Главный метод — ЭхоКГ. Исследование измеряет площадь отверстия, скорость потока и степень обратного заброса крови.",
    treatment: "Наблюдение и лекарства контролируют последствия, но не чинят механически повреждённый клапан. При показаниях требуется замена.",
    operation: [
      ["Механический протез", "Очень долговечен, но обычно требует постоянного приёма препаратов, снижающих свёртываемость крови."],
      ["Биологический протез", "Не требует пожизненной интенсивной антикоагуляции, но имеет ограниченный срок службы."],
      ["Открытая операция", "Повреждённый клапан удаляют и точно фиксируют новый. Метод даёт хирургу полный контроль."],
      ["Малоинвазивный доступ", "В подходящих случаях возможен меньший разрез или транскатетерная установка — решение принимает команда специалистов."],
    ],
  },
  aorta: {
    short: "Хирургия аорты",
    title: "Расслаивающая аневризма аорты",
    kicker: "Когда счёт действительно идёт на часы",
    description: "Во внутренней оболочке аорты возникает разрыв, и кровь разделяет слои её стенки. Это экстренная ситуация, а не тема для ожидания до понедельника.",
    image: aortaImage,
    alt: "Схема расслоения стенки аорты",
    color: "text-coral",
    soft: "bg-coral-soft",
    cause: "Главные факторы — высокое давление, наследственные болезни соединительной ткани, врождённые особенности аорты и атеросклероз.",
    symptoms: "Внезапная очень сильная боль в груди или спине, холодный пот, слабость, потеря сознания, различие пульса или давления на руках.",
    diagnostic: "КТ-ангиография быстро показывает протяжённость расслоения. В нестабильном состоянии используют срочную ЭхоКГ.",
    treatment: "При поражении восходящей аорты обычно нужна немедленная операция. При других типах тактика зависит от осложнений и анатомии.",
    operation: [
      ["Удалить опасный участок", "Повреждённую часть восходящей аорты заменяют прочным синтетическим протезом."],
      ["Сохранить или заменить клапан", "Если возможно, собственный аортальный клапан сохраняют. При повреждении заменяют вместе с корнем аорты."],
      ["Защитить мозг и органы", "Во время сложного этапа применяют специальные режимы кровообращения и температуры."],
      ["Продолжить наблюдение", "После операции контролируют всю аорту: расслоение может распространяться дальше заменённого участка."],
    ],
  },
} as const;

function Index() {
  const [active, setActive] = useState<Topic>("bypass");
  const topic = topics[active];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-48 size-[34rem] rounded-full bg-primary/15 blur-3xl motion-safe:animate-[floaty_9s_ease-in-out_infinite]" />
        <div className="absolute right-[-14rem] top-[34rem] size-[38rem] rounded-full bg-secondary/14 blur-3xl motion-safe:animate-[floaty_11s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-40 left-1/3 size-[28rem] rounded-full bg-coral/10 blur-3xl" />
      </div>

      <header className="relative z-20 mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="glass-panel flex h-16 items-center justify-between rounded-2xl px-3 sm:px-5" aria-label="Основная навигация">
          <a href="#catalog" className="flex items-center gap-3">
            <span className="relative grid size-10 place-items-center rounded-xl bg-foreground text-primary-foreground">
              <HeartPulse size={20} aria-hidden="true" />
              <span className="absolute inset-0 rounded-xl border border-primary/50 motion-safe:animate-[pulse-ring_3s_ease-out_infinite]" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-sm">Кардиохирург</strong>
              <span className="hidden text-[11px] text-muted-foreground sm:block">Сердце · сосуды · вены</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            <a className="transition-colors hover:text-primary" href="#catalog">Операции</a>
            <a className="transition-colors hover:text-primary" href="#how-it-works">Как проходит</a>
            <a className="transition-colors hover:text-primary" href="#recovery">После операции</a>
          </div>
          <a href="#contact" className="rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary">Записаться</a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24">
        <div className="max-w-4xl">
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-secondary" /> Медицинский атлас без латыни
          </span>
          <h1 className="mt-6 max-w-[13ch] font-display text-5xl font-bold leading-[.98] tracking-normal sm:text-7xl lg:text-8xl">
            Операции на сердце <span className="text-primary">простыми словами</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Что заболело, как это находят и что именно делает хирург. Понятные схемы вместо страшных картинок — и ровно столько юмора, сколько выдерживает кардиология.
          </p>
          <a href="#catalog" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5">
            Выбрать операцию <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="catalog" className="relative z-10 mx-auto max-w-7xl scroll-mt-6 px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Каталог операций</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Выберите тему</h2></div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Каждая вкладка устроена одинаково: причина, симптомы, диагностика, лечение и сама операция.</p>
        </div>

        <div className="glass-panel flex gap-2 overflow-x-auto rounded-2xl p-2" role="tablist" aria-label="Операции">
          {(Object.keys(topics) as Topic[]).map((key) => (
            <button key={key} type="button" role="tab" aria-selected={active === key} onClick={() => setActive(key)} className={`min-w-fit flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${active === key ? "bg-foreground text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-card hover:text-foreground"}`}>
              {topics[key].short}
            </button>
          ))}
        </div>

        <article className="glass-panel mt-5 overflow-hidden rounded-3xl" role="tabpanel">
          <div className="grid lg:grid-cols-[.92fr_1.08fr]">
            <div className={`${topic.soft} relative min-h-[22rem] overflow-hidden p-4 sm:min-h-[32rem] sm:p-8`}>
              <img key={topic.image} src={topic.image} alt={topic.alt} width={1200} height={1200} className="h-full w-full object-contain mix-blend-multiply" />
              <span className="absolute bottom-5 left-5 rounded-lg bg-card px-3 py-2 text-xs font-medium text-muted-foreground backdrop-blur-lg">Схема без натурализма</span>
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <p className={`text-xs font-semibold uppercase tracking-[.18em] ${topic.color}`}>{topic.kicker}</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{topic.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{topic.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <InfoCard icon={<Activity size={18} />} label="Причина" text={topic.cause} />
                <InfoCard icon={<HeartPulse size={18} />} label="Как проявляется" text={topic.symptoms} />
                <InfoCard icon={<Stethoscope size={18} />} label="Диагностика" text={topic.diagnostic} />
                <InfoCard icon={<Wind size={18} />} label="Лечение" text={topic.treatment} />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl scroll-mt-6 px-4 py-12 sm:px-6 sm:py-20">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Что делает хирург</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{topic.title}: четыре важных шага</h2></div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {topic.operation.map(([title, text], index) => (
            <div key={title} className="glass-panel flex gap-5 rounded-2xl p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-foreground font-display text-sm font-bold text-primary-foreground">0{index + 1}</span>
              <div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="recovery" className="relative z-10 border-y border-border bg-card/35 py-16 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-secondary">После операции</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Восстановление — тоже часть лечения</h2><p className="mt-4 leading-relaxed text-muted-foreground">Сроки индивидуальны: ориентир задаёт лечащая команда, а не чужая история из интернета.</p></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[["Первые дни", "Наблюдение, дыхательная гимнастика, обезболивание и первые шаги."], ["Первые недели", "Постепенное увеличение ходьбы, контроль раны, давления и лекарств."], ["Дальше", "Кардиореабилитация, контроль факторов риска и возвращение к привычной жизни."]].map(([title, text]) => (
                <div key={title} className="glass-panel rounded-2xl p-5"><h3 className="font-display font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-12">
          <div className="absolute -right-20 -top-24 size-72 rounded-full bg-primary/16 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div><h2 className="font-display text-3xl font-bold">Здесь будут контакты врача</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Имя, клиника, телефон и способ записи добавятся после получения реальных данных — без выдуманных регалий и цифр.</p></div>
            <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-primary/25 bg-sky-soft px-4 py-3 text-sm font-semibold text-primary"><Stethoscope size={18} /> Кардиохирург</span>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-coral/30 bg-coral-soft/70 p-4 text-sm text-foreground">
          <ShieldAlert className="mt-0.5 shrink-0 text-coral" size={19} />
          <p><strong>Важно:</strong> материал носит ознакомительный характер. При внезапной сильной боли в груди, одышке, холодном поте или потере сознания немедленно вызывайте скорую помощь.</p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">Медицинский атлас кардиохирурга · Информация не заменяет очную консультацию</footer>
    </main>
  );
}

function InfoCard({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return <div className="rounded-2xl border border-border bg-card/65 p-4"><div className="flex items-center gap-2 text-sm font-bold text-foreground"><span className="text-primary" aria-hidden="true">{icon}</span>{label}</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>;
}