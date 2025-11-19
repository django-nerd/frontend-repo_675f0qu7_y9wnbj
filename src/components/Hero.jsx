import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900 via-slate-900 to-slate-950 opacity-80" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              טיפול פנים שמאיר מבפנים
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-6 text-lg text-white/80"
            >
              התאמה אישית מלאה לעור שלך, עם חוויה מפנקת ותוצאות נראות לעין.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center justify-end gap-4"
            >
              <a
                href="#contact"
                className="rounded-xl bg-pink-500 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(236,72,153,0.8)] hover:bg-pink-400 transition"
              >
                קביעת תור
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/20 px-6 py-3 text-white/90 hover:text-white hover:border-white/40 transition"
              >
                פירוט טיפולים
              </a>
            </motion.div>
          </div>

          {/* 3D side with Spline */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 overflow-hidden bg-white/5 backdrop-blur">
              {/* Fallback gradient if Spline fails */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-fuchsia-400/10 to-emerald-400/10" />
              <Spline
                scene="https://prod.spline.design/T3bW2yAP9mWq1Wg6/scene.splinecode"
                onLoad={() => {}}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pointer-events-none absolute -inset-x-10 -bottom-10 h-48 bg-gradient-to-t from-slate-950 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
