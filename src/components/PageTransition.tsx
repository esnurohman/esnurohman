"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="min-h-screen w-screen fixed top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
export default PageTransition;
