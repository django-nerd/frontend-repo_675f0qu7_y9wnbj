import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 text-right">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            היי, אני נועה – מטפלת פנים מוסמכת
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/80 leading-8"
          >
            מעל 7 שנים שאני חיה ונושמת אסתטיקה ובריאות העור. הגישה שלי משלבת ידע מקצועי,
            מגע מדויק, וטכנולוגיות מתקדמות – כדי שתצאי בכל פעם זוהרת ובטוחה בעור שלך.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 grid sm:grid-cols-3 gap-4 text-white/80"
          >
            <li className="rounded-xl bg-white/5 border border-white/10 p-4">תעודה בינלאומית בטיפול פנים</li>
            <li className="rounded-xl bg-white/5 border border-white/10 p-4">התאמה אישית לכל סוגי העור</li>
            <li className="rounded-xl bg-white/5 border border-white/10 p-4">סביבה נעימה ושקטה</li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
