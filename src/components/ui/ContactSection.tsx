import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "@/lib/data";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapControls = useAnimation();
  const [visible, setVisible] = useState(false);

  // fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          mapControls.start({ opacity: 1, scale: 1, transition: { duration: 0.8 } });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mapControls]);

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-24 text-white relative overflow-hidden"
      style={{
        // Warmer, lighter top to blend with hero, deepens gradually
        background: 'linear-gradient(135deg, #9FD37A 0%, #7FB95A 35%, #3F8F3A 75%, #2F6F2C 100%)',
        clipPath: 'polygon(0 4%, 100% 0%, 100% 100%, 0% 100%)'
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Smooth Transition Element */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
        }} />
      </div>

      {/* Enhanced Background Pattern with Warmer Greens */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/office.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(22, 163, 74, 0.15) 0%, transparent 50%)'
        }} />
        {/* Floating decorative elements with warmer tones */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-green-300/20 to-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-300/15 to-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-200/25 to-emerald-400/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            КОНТАКТИ
          </motion.h2>
          <motion.div
            className="w-24 sm:w-32 h-1.5 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #bbf7d0 0%, #dcfce7 50%, #ffffff 100%)',
              transformOrigin: "left"
            }}
            initial={{ scaleX: 0 }}
            animate={visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-xl mt-6 max-w-lg mx-auto font-semibold text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Свържете се с нас за безплатна консултация
          </motion.p>
        </div>

        <div className="max-w-5xl w-full mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.12 }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 220, damping: 20 } }}
                whileFocus={{ scale: 1.03 }}
              >
                <Card className="bg-white/20 border-white/40 backdrop-blur-md shadow-xl shadow-green-900/40 ring-1 ring-white/30 transition-all duration-700 ease-out hover:bg-white/25 hover:shadow-green-900/50">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <motion.span
                      whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 8px #ffffff)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex"
                    >
                      <MapPin className="h-12 w-12 text-white transition-all duration-200" />
                    </motion.span>
                    <div>
                      <p className="text-white font-bold text-xl mb-2">АДРЕС</p>
                      <p className="text-white/90 text-lg break-words">
                        {siteData.company.contact.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.24 }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 220, damping: 20 } }}
                whileFocus={{ scale: 1.03 }}
              >
                <Card className="bg-white/20 border-white/40 backdrop-blur-md shadow-xl shadow-green-900/40 ring-1 ring-white/30 transition-all duration-700 ease-out hover:bg-white/25 hover:shadow-green-900/50">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <motion.a
                      href={`tel:${siteData.company.contact.phone.replace(/\s+/g, "")}`}
                      whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 8px #ffffff)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex"
                      aria-label="Позвънете ни"
                    >
                      <Phone className="h-12 w-12 text-white transition-all duration-200" />
                    </motion.a>
                    <div>
                      <p className="text-white font-bold text-xl mb-2">ТЕЛЕФОН</p>
                      <a
                        href={`tel:${siteData.company.contact.phone.replace(/\s+/g, "")}`}
                        className="text-white/90 text-lg underline underline-offset-4 hover:text-white transition-colors duration-200"
                      >
                        {siteData.company.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.36 }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 220, damping: 20 } }}
                whileFocus={{ scale: 1.03 }}
              >
                <Card className="bg-white/20 border-white/40 backdrop-blur-md shadow-xl shadow-green-900/40 ring-1 ring-white/30 transition-all duration-700 ease-out hover:bg-white/25 hover:shadow-green-900/50">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <motion.a
                      href={`mailto:${siteData.company.contact.email}`}
                      whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 8px #ffffff)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex"
                      aria-label="Изпратете ни имейл"
                    >
                      <Mail className="h-12 w-12 text-white transition-all duration-200" />
                    </motion.a>
                    <div>
                      <p className="text-white font-bold text-xl mb-2">EMAIL</p>
                      <a
                        href={`mailto:${siteData.company.contact.email}`}
                        className="text-white/90 text-lg underline underline-offset-4 hover:text-white transition-colors duration-200 break-all"
                      >
                        {siteData.company.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center">
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Намерете ни на картата
          </motion.h3>
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mapControls}
            className="w-full"
          >
            <a
              href="https://www.google.com/maps?q=обл.+София,+село+Мировяне,+ул.+Индустриален+път+4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Вижте ни в Google Maps"
              className="block group"
              tabIndex={0}
            >
              <div className="rounded-2xl border border-white/40 shadow-2xl shadow-green-900/40 overflow-hidden transition-[transform,box-shadow,filter] duration-300 will-change-transform hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:ring-2 focus:ring-white/60">
                <iframe
                  title="Google Map - обл. София, село Мировяне, ул. Индустриален път 4"
                  src="https://www.google.com/maps?q=обл.+София,+село+Мировяне,+ул.+Индустриален+път+4&output=embed"
                  width="100%"
                  height="340"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[260px] sm:h-[340px] border-0"
                  style={{ minHeight: 220 }}
                />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center">
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Последвайте ни в социалните мрежи
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full"
          >
            <Card className="bg-white/20 border-white/40 backdrop-blur-md shadow-xl shadow-green-900/40 ring-1 ring-white/30">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Facebook</h4>
                    <p className="text-white/90 text-lg mb-6">
                      Следете нашите най-нови проекти и актуализации
                    </p>
                    <motion.a
                      href="https://www.facebook.com/people/%D0%A2%D1%80%D0%BE%D0%BD-%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB/100063679471780/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Последвайте ни във Facebook
                    </motion.a>
                  </div>
                  
                  <div className="border-t border-white/30 pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                      <div className="space-y-2">
                        <h5 className="text-lg font-semibold text-white/90">Най-нови проекти</h5>
                        <p className="text-white/70 text-sm">Вижте нашите последни мебелни проекти</p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-lg font-semibold text-white/90">Актуализации</h5>
                        <p className="text-white/70 text-sm">Получавайте информация за нови услуги</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}