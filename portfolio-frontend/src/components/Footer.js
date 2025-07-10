

export default function Footer() {
  return (
    <footer className="shadow bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-gray-300 text-sm">
           © {new Date().getFullYear()} DevSpark by Al Amin. Built with ❤️ and ( Decoupled Next.js + WordPress).
          </p>
      </div>
    </footer>
  );
}