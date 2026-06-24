import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "famjam_welcome_shown";

export default function WelcomeAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  const word = "FAMJAM";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex overflow-hidden">
            {word.split("").map((c, i) => (
              <motion.span
                key={i}
                className="font-display text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-7xl"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </div>
          <motion.span
            className="mt-3 text-xs font-medium uppercase tracking-[0.5em] text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Essentials
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}