import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white"
              >
                קובעים תור בכמה קליקים
              </motion.h3>
              <p className="mt-3 text-white/75">
                השאירי פרטים ואחזור אלייך לתיאום מדויק ונוח.
              </p>
              <div className="mt-6 text-white/70 leading-relaxed">
                <p>טלפון: 050-1234567</p>
                <p>אינסטגרם: @noa.skin</p>
                <p>רח' הזוהר 12, תל אביב</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("תודה! נחזור אלייך בהקדם.");
              }}
              className="text-right"
            >
              <div className="grid gap-4">
                <input
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400/60"
                  placeholder="שם מלא"
                  required
                />
                <input
                  type="tel"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400/60"
                  placeholder="טלפון"
                  required
                />
                <textarea
                  rows="3"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400/60"
                  placeholder="מה תרצי לשפר בעור שלך?"
                />
                <button
                  className="mt-2 rounded-xl bg-pink-500 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(236,72,153,0.8)] hover:bg-pink-400 transition"
                >
                  שליחה
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
