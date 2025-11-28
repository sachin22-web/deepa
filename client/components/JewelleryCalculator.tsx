import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

interface MetalRate {
  name: string;
  purity: string;
  pricePerGram: number;
  color: string;
}

const metalRates: MetalRate[] = [
  { name: "Gold 24K", purity: "24K", pricePerGram: 7500, color: "from-yellow-400 to-yellow-600" },
  { name: "Gold 22K", purity: "22K", pricePerGram: 6875, color: "from-yellow-300 to-yellow-500" },
  { name: "Gold 18K", purity: "18K", pricePerGram: 5625, color: "from-yellow-200 to-yellow-400" },
  { name: "Silver 92.5", purity: "92.5", pricePerGram: 800, color: "from-gray-300 to-gray-500" },
  { name: "Platinum", purity: "950", pricePerGram: 5000, color: "from-slate-300 to-slate-500" },
];

export default function JewelleryCalculator() {
  const [weight, setWeight] = useState<string>("10");
  const [selectedMetal, setSelectedMetal] = useState<MetalRate>(metalRates[1]);
  const [makingChargesPercent, setMakingChargesPercent] = useState<string>("10");
  const [includeMakingCharges, setIncludeMakingCharges] = useState<boolean>(true);

  const calculations = useMemo(() => {
    const weightNum = parseFloat(weight) || 0;
    const metalCost = weightNum * selectedMetal.pricePerGram;
    const makingCost = includeMakingCharges
      ? (metalCost * parseFloat(makingChargesPercent)) / 100
      : 0;
    const totalCost = metalCost + makingCost;

    return {
      metalCost: Math.round(metalCost),
      makingCost: Math.round(makingCost),
      totalCost: Math.round(totalCost),
    };
  }, [weight, selectedMetal, makingChargesPercent, includeMakingCharges]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 text-white py-12 md:py-16">
        <div className="container-max">
          <div className="flex items-center gap-4 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">
              Jewellery Weight Calculator
            </h1>
          </div>
          <p className="text-gray-200 max-w-2xl">
            Calculate the exact cost of your jewellery based on weight, metal type, and making charges.
            Our transparent pricing ensures you get the best value for your precious metals.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-secondary mb-8">
                  Calculate Your Jewellery Cost
                </h2>

                {/* Weight Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    Weight (in grams)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter weight"
                      min="0"
                      step="0.1"
                      className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-semibold">
                      g
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Enter the total weight of the jewellery in grams
                  </p>
                </div>

                {/* Metal Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-secondary mb-4">
                    Select Metal Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {metalRates.map((metal) => (
                      <button
                        key={metal.purity}
                        onClick={() => setSelectedMetal(metal)}
                        className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                          selectedMetal.purity === metal.purity
                            ? "ring-2 ring-primary shadow-lg scale-105"
                            : "border-2 border-gold-200 hover:border-primary hover:shadow-md"
                        } ${
                          selectedMetal.purity === metal.purity
                            ? `bg-gradient-to-r ${metal.color} text-white`
                            : "bg-white text-secondary"
                        }`}
                      >
                        <div className="text-sm">{metal.name}</div>
                        <div className="text-xs mt-1 opacity-90">
                          ₹{metal.pricePerGram.toLocaleString()}/g
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Making Charges */}
                <div className="mb-8 bg-gold-50 p-6 rounded-lg border border-gold-200">
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="includeMakingCharges"
                      checked={includeMakingCharges}
                      onChange={(e) => setIncludeMakingCharges(e.target.checked)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor="includeMakingCharges"
                      className="text-sm font-semibold text-secondary cursor-pointer"
                    >
                      Include Making Charges
                    </label>
                  </div>

                  {includeMakingCharges && (
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-3">
                        Making Charges (%)
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="number"
                          value={makingChargesPercent}
                          onChange={(e) => setMakingChargesPercent(e.target.value)}
                          min="0"
                          max="100"
                          step="1"
                          className="flex-1 px-4 py-2 border-2 border-gold-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                        <span className="flex items-center text-gray-600 font-semibold">
                          %
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Typical making charges: 10-15% for gold, 5-8% for silver
                      </p>
                    </div>
                  )}
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gold-200">
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Current Rate</p>
                    <p className="text-xl font-bold text-secondary">
                      ₹{selectedMetal.pricePerGram.toLocaleString()}/g
                    </p>
                    <p className="text-xs text-gray-600 mt-1">({selectedMetal.name})</p>
                  </div>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Weight</p>
                    <p className="text-xl font-bold text-secondary">
                      {parseFloat(weight) || 0} g
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-secondary to-secondary/90 rounded-lg shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Price Breakdown
                </h3>

                {/* Results */}
                <div className="space-y-4 mb-8 pb-8 border-b border-white/20">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-200">Metal Cost</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ₹{calculations.metalCost.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        {weight}g × ₹{selectedMetal.pricePerGram}
                      </div>
                    </div>
                  </div>

                  {includeMakingCharges && calculations.makingCost > 0 && (
                    <div className="flex justify-between items-start">
                      <span className="text-gray-200">Making Charges</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-300">
                          ₹{calculations.makingCost.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-300 mt-1">
                          {makingChargesPercent}% of metal cost
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Total Cost</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ₹{calculations.totalCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-300">
                      Final amount including all charges
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white/5 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-200">Metal Type:</span>
                    <span className="font-semibold">{selectedMetal.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">Weight:</span>
                    <span className="font-semibold">{weight}g</span>
                  </div>
                  {includeMakingCharges && (
                    <div className="flex justify-between">
                      <span className="text-gray-200">Making Charges:</span>
                      <span className="font-semibold">{makingChargesPercent}%</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-4 bg-blue-500/20 rounded-lg border border-blue-400/50">
                  <p className="text-xs text-gray-300">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Prices are indicative and may vary based on current market rates and purity certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white border-t border-gold-100">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                How is gold purity measured?
              </h3>
              <p className="text-gray-600">
                Gold purity is measured in karats. 24K is pure gold, 22K is 91.67% pure, and 18K is 75% pure. Silver is typically 92.5% pure (sterling silver).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                What are making charges?
              </h3>
              <p className="text-gray-600">
                Making charges cover the artistry, labor, and design complexity. They typically range from 10-15% for gold and 5-8% for silver jewellery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                How accurate is this calculator?
              </h3>
              <p className="text-gray-600">
                This calculator provides estimates based on standard metal rates. Actual prices may vary due to market fluctuations and certification costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Can I get certified jewellery?
              </h3>
              <p className="text-gray-600">
                Yes! All our jewellery comes with BIS certification for gold and authentic gemstone certificates, ensuring authenticity and purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gold-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
            Ready to Get Your Jewellery?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Use this calculator to estimate costs, then visit our store or contact us for a personalized consultation.
          </p>
          <a
            href="/products"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Shop Our Collection
          </a>
        </div>
      </section>
    </main>
  );
}
