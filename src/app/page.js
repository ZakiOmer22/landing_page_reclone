import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import ChartComponent from "@/components/ChartComponent"; // Direct import

export default function KrakenClone() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1434] to-[#0E0A1F] text-white p-6 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-purple-400">kraken</div>
        <nav className="flex gap-6 text-sm text-white/80">
          <a href="#">Home</a>
          <a href="#">Prices</a>
          <a href="#">Why Kraken</a>
          <a href="#">Learn</a>
          <a href="#">Support</a>
        </nav>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-white/80">Login</Button>
          <Button className="bg-purple-500 hover:bg-purple-600">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-6xl mx-auto mt-20 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Millions Trust Kraken, <br /> Your Leading Crypto Platform
        </h1>
        <p className="text-white/70 max-w-xl mx-auto mb-6">
          Kraken is the trusted choice for secure, reliable, and innovative
          cryptocurrency trading solutions worldwide.
        </p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <Input
            type="email"
            placeholder="satohh@email.com"
            className="max-w-xs rounded-md"
          />
          <Button className="bg-purple-500 hover:bg-purple-600">Sign up</Button>
        </div>

        <div className="flex justify-center gap-4 text-white/70">
          <a href="#" className="flex items-center gap-2">
            <FaApple /> Get the Kraken App
          </a>
        </div>

        {/* Phone Image with Crypto Icons */}
        <div className="relative w-full flex justify-center mt-16">
          <div className="relative w-[300px] h-[600px]">
            <Image
              src="/mockup-phone.png"
              alt="Kraken App Preview"
              fill
              className="object-contain"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-spin-slow">
              <Image
                src="/crypto-icons-ring.png"
                alt="Crypto Icons"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        <Card className="bg-[#1F1838] text-xl font-semibold">
          <CardContent className="p-6">380+<br />User Active</CardContent>
        </Card>
        <Card className="bg-[#1F1838] text-xl font-semibold">
          <CardContent className="p-6">190+<br />Trusted Company</CardContent>
        </Card>
        <Card className="bg-[#1F1838] text-xl font-semibold">
          <CardContent className="p-6">$207B+<br />Total Volume</CardContent>
        </Card>
        <Card className="bg-[#1F1838] text-xl font-semibold">
          <CardContent className="p-6">$230M+<br />Transaction</CardContent>
        </Card>
      </section>

      {/* Crypto Buy Panel */}
      <section className="mt-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Buy Crypto Easily and Securely in Minutes</h2>
        <ul className="text-white/70 space-y-2 mb-6">
          <li>Create your free Kraken account</li>
          <li>Connect your funding method</li>
          <li>Buy and sell 200+ cryptocurrencies</li>
        </ul>
        <Button className="bg-purple-500 hover:bg-purple-600">Buy Crypto</Button>

        {/* Live Chart */}
        <div className="mt-12 bg-[#1F1838] p-6 rounded-lg shadow-lg border border-purple-500">
          <h3 className="text-xl font-semibold mb-2">
            $102,554.00 <span className="text-green-400 text-sm">+2.12%</span>
          </h3>
          <ChartComponent />
        </div>
      </section>
    </div>
  );
}