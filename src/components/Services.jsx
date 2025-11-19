import { motion } from "framer-motion";
import { Sparkles, Flower2, Droplets, Leaf } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "ניקוי עמוק וזוהר",
    desc: "שילוב חומצות עדינות וחומרים פעילים לניקוי נקבוביות ושיקום מיידי של המראה.",
  },
  {
    icon: Droplets,
    title: "החדרת לחות מתקדמת",
    desc: "טכנולוגיית אולטרסאונד והחדרת סרומים לפי צורך העור, לאפקט מלא ורענן.",
  },
  {
    icon: Leaf,
    title: "טיפול לאקנה ולעור רגיש",
    desc: "פרוטוקולים עדינים ומדויקים לאיזון העור ולהפחתת אדמומיות ופצעונים.",
  },
  {
    icon: Flower2,
    title: "אנטי אייג'ינג והצערת העור",
    desc: "קולגן, מסכות משקמות ועיסוי מעודד זרימה למראה מתוח וזוהר.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-right">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            טיפולים מובילים
          </motion.h2>
          <p className="mt-3 text-white/70">
            התאמה אישית מלאה – כי כל עור הוא עולם.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-right"
            >
              <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl group-hover:scale-150 transition" />
              <Icon className="h-8 w-8 text-pink-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
