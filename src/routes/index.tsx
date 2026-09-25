import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  HeartPulse,
  Microscope,
  ShieldAlert,
  Stethoscope,
  Wind,
} from "lucide-react";
import bypassImage from "@/assets/cabg-illustration.png";
import valveImage from "@/assets/aortic-valve-illustration.png";
import aortaImage from "@/assets/aortic-dissection-illustration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Хирургия сердца — наглядный атлас операций" },
      { name: "description", content: "Коронарное шунтирование, операции на клапанах и аорте — понятными словами и наглядными медицинскими иллюстрациями." },
      { property: "og:title", content: "Хирургия сердца — наглядный атлас операций" },
      { property: "og:description", content: "Как устроены операции на сердце: причины, диагностика, лечение и восстановление без сложной латыни." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Topic = "bypass" | "valve" | "aorta";

const topics = {
  bypass: {
    number: "01",
    short: "Шунтирование",
    title: "Коронарное шунтирование",
    kicker: "Новый маршрут для крови",
    description: "Если коронарная артерия сильно сужена, создаём путь в обход препятствия. Почти как объезд на карте — только маршрут рассчитывается на годы.",
    image: bypassImage,
    alt: "Мультяшная медицинская схема коронарного шунтирования с шунтом от восходящей аорты",
    tone: "topic-sky",
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
    number: "02",
    short: "Аортальный клапан",
    title: "Протезирование аортального клапана",
    kicker: "Новый клапан для верного потока",
    description: "Клапан должен свободно открываться и герметично закрываться. Если механизм серьёзно повреждён, его ремонтируют или заменяют.",
    image: valveImage,
    alt: "Мультяшная медицинская схема протезирования аортального клапана",
    tone: "topic-mint",
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
    number: "03",
    short: "Хирургия аорты",
    title: "Расслаивающая аневризма аорты",
    kicker: "Когда счёт действительно идёт на часы",
    description: "Во внутренней оболочке аорты возникает разрыв, и кровь разделяет слои её стенки. Это экстренная ситуация, а не тема для ожидания до понедельника.",
    image: aortaImage,
    alt: "Мультяшная медицинская схема расслоения стенки аорты",
    tone: "topic-coral",
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

const topicKeys = Object.keys(topics) as Topic[];

function Index() {
  const [active, setActive] = useState<Topic>("bypass");
  const topic = topics[active];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-30 border-b-2 border-ink/10 bg-background/90 backdrop-blur-lg">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Основная навигация">
          <a href="#catalog" className="flex items-center gap-3" aria-label="К каталогу операций">
            <span className="logo-mark"><HeartPulse size={21} strokeWidth={2.5} aria-hidden="true" /></span>
            <span className="leading-tight"><strong className="block font-display text-sm">Кардиохирург</strong><span className="text-[11px] font-semibold text-muted-foreground">Атлас операций</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-muted-foreground md:flex">
            <a className="nav-link" href="#catalog">Операции</a><a className="nav-link" href="#how-it-works">Что делает хирург</a><a className="nav-link" href="#recovery">Восстановление</a>
          </div>
          <a href="#contact" className="action-button">Записаться <ArrowRight size={16} aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="hero-atlas relative min-h-[calc(100svh-4.5rem)] border-b-2 border-ink/10">
        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:pb-24 lg:pt-16">
          <div className="relative z-10 max-w-3xl">
            <p className="section-label"><span className="label-dot" /> Анатомия без латыни</p>
            <h1 className="mt-6 max-w-[11ch] font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl lg:text-8xl">Хирургия сердца <span className="marker-word">наглядно</span></h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">Что происходит с сердцем, как это находят и что именно делает хирург. Серьёзная медицина — человеческим языком.</p>
            <a href="#catalog" className="action-button action-button-primary mt-8">Открыть атлас <ArrowDown size={17} aria-hidden="true" /></a>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase text-muted-foreground">
              <span>Причины</span><span>Диагностика</span><span>Операция</span><span>Восстановление</span>
            </div>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <span className="doodle-note">обходной путь</span>
            <img src={bypassImage} alt="" width={900} height={900} />
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">АТЛАС / 01—03</div>
      </section>

      <section id="catalog" className="scroll-mt-18 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="section-heading"><div><p className="section-label">Каталог операций</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">Выберите, что разобрать</h2></div><p>У каждой темы один понятный маршрут: от причины заболевания до восстановления после операции.</p></div>

          <div className="topic-tabs mt-9" role="tablist" aria-label="Операции">
            {topicKeys.map((key) => (
              <button key={key} type="button" role="tab" aria-selected={active === key} onClick={() => setActive(key)} className={`topic-tab ${topics[key].tone} ${active === key ? "is-active" : ""}`}>
                <span>{topics[key].number}</span><strong>{topics[key].short}</strong><ArrowRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>

          <article className={`operation-sheet mt-5 ${topic.tone}`} role="tabpanel">
            <div className="operation-visual">
              <span className="figure-number">РИС. {topic.number}</span>
              <img key={topic.image} src={topic.image} alt={topic.alt} width={1200} height={1200} />
              <span className="figure-caption">Схематично · без натурализма</span>
            </div>
            <div className="operation-copy">
              <p className="section-label">{topic.kicker}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">{topic.title}</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">{topic.description}</p>
              <div className="medical-path mt-8">
                <InfoRow index="1" icon={<Activity size={18} />} label="Причина" text={topic.cause} />
                <InfoRow index="2" icon={<HeartPulse size={18} />} label="Как проявляется" text={topic.symptoms} />
                <InfoRow index="3" icon={<Microscope size={18} />} label="Диагностика" text={topic.diagnostic} />
                <InfoRow index="4" icon={<Wind size={18} />} label="Лечение" text={topic.treatment} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="how-it-works" className="border-y-2 border-ink/10 bg-ink py-16 text-paper sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="section-heading section-heading-dark"><div><p className="section-label">Что делает хирург</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold sm:text-5xl">{topic.title}: четыре важных решения</h2></div><Stethoscope className="hidden text-primary sm:block" size={52} strokeWidth={1.5} aria-hidden="true" /></div>
          <div className="steps-grid mt-10">
            {topic.operation.map(([title, text], index) => <div key={title} className="step-item"><span>0{index + 1}</span><div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-paper-muted">{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="recovery" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="recovery-layout">
            <div><p className="section-label">После операции</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">Восстановление — часть лечения</h2><p className="mt-5 max-w-xl font-medium leading-relaxed text-muted-foreground">Сроки индивидуальны: ориентир задаёт лечащая команда, а не чужая история из интернета.</p></div>
            <div className="recovery-line">
              {[["Первые дни", "Наблюдение, дыхательная гимнастика, обезболивание и первые шаги."], ["Первые недели", "Постепенно больше ходьбы, контроль раны, давления и лекарств."], ["Дальше", "Кардиореабилитация, контроль факторов риска и возвращение к привычной жизни."]].map(([title, text], index) => <div key={title} className="recovery-step"><span>{index + 1}</span><div><h3 className="font-display font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t-2 border-ink/10 bg-primary-soft py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="contact-row"><div><p className="section-label">Консультация</p><h2 className="mt-3 font-display text-3xl font-extrabold">Здесь будут контакты врача</h2><p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">Имя, клиника, телефон и способ записи добавятся после получения реальных данных — без выдуманных регалий и цифр.</p></div><span className="doctor-stamp"><Stethoscope size={20} /> Кардиохирург</span></div>
          <div className="warning-note mt-8"><ShieldAlert className="shrink-0" size={22} /><p><strong>Важно:</strong> материал носит ознакомительный характер. При внезапной сильной боли в груди, одышке, холодном поте или потере сознания немедленно вызывайте скорую помощь.</p></div>
        </div>
      </section>

      <footer className="border-t-2 border-ink/10 px-4 py-8 text-center text-xs font-semibold text-muted-foreground">Медицинский атлас кардиохирурга · Информация не заменяет очную консультацию</footer>
    </main>
  );
}

function InfoRow({ index, icon, label, text }: { index: string; icon: ReactNode; label: string; text: string }) {
  return <div className="info-row"><span className="info-index">{index}</span><span className="info-icon" aria-hidden="true">{icon}</span><div><h3>{label}</h3><p>{text}</p></div></div>;
}