import { siteData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-700 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <p className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity duration-300">
          © 2024 {siteData.company.name}. Всички права запазени.
        </p>
      </div>
    </footer>
  );
}
