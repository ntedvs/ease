"use client"

import { Calculator, TrendingDown } from "lucide-react"
import { useState } from "react"

export default function SlabThicknessCalculator() {
  const [slabThickness, setSlabThickness] = useState(26)

  const getOptimizedThickness = (thickness: number): number => {
    const thicknessMap: Record<number, number> = {
      20: 17,
      21: 18,
      22: 18,
      23: 18,
      24: 19,
      25: 20,
      26: 20,
      27: 21,
      28: 22,
      29: 23,
      30: 24,
      31: 24,
      32: 25,
    }
    return thicknessMap[thickness] || thickness
  }

  const optimizedThickness = getOptimizedThickness(slabThickness)
  const savings = slabThickness - optimizedThickness
  const savingsPercentage = ((savings / slabThickness) * 100).toFixed(1)

  return (
    <section className="section bg-neutral">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
            Post-Tensioning <span className="text-primary">Calculator</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
            Discover how post-tensioning technology can optimize your slab
            thickness and reduce material costs while maintaining structural
            integrity.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="card">
            <div className="card-body p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Calculator Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Calculator size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">
                      Slab Thickness Calculator
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="slab-thickness"
                        className="text-lg font-medium text-secondary"
                      >
                        Standard Slab Thickness
                      </label>
                      <span className="rounded-lg bg-neutral px-3 py-1 text-lg font-bold text-secondary">
                        {slabThickness} cm
                      </span>
                    </div>

                    <div className="space-y-2">
                      <input
                        id="slab-thickness"
                        type="range"
                        min="20"
                        max="32"
                        value={slabThickness}
                        onChange={(e) =>
                          setSlabThickness(Number(e.target.value))
                        }
                        className="slider h-3 w-full cursor-pointer appearance-none rounded-lg bg-neutral-dark focus:ring-2 focus:ring-primary focus:outline-none"
                        style={{
                          background: `linear-gradient(to right, #e82d22 0%, #e82d22 ${
                            ((slabThickness - 20) / 12) * 100
                          }%, #e6e6e6 ${
                            ((slabThickness - 20) / 12) * 100
                          }%, #e6e6e6 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-sm text-muted">
                        <span>20 cm</span>
                        <span>32 cm</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingDown size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">
                      Optimization Results
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-neutral p-4">
                      <div className="mb-2 text-sm font-medium text-muted">
                        With Post-Tensioning
                      </div>
                      <div className="text-3xl font-black text-primary">
                        {optimizedThickness.toFixed(1)} cm
                      </div>
                    </div>

                    <div className="rounded-lg bg-primary/5 p-4">
                      <div className="mb-2 text-sm font-medium text-muted">
                        Material Savings
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-black text-secondary">
                          {savings.toFixed(1)} cm
                        </span>
                        <span className="text-lg font-bold text-primary">
                          ({savingsPercentage}%)
                        </span>
                      </div>
                    </div>

                    {savings > 0 && (
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <div className="text-sm font-medium text-primary">
                          💡 Optimization Available
                        </div>
                        <div className="mt-1 text-sm text-muted">
                          Post-tensioning can reduce your slab thickness by{" "}
                          {savingsPercentage}% while maintaining structural
                          performance.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="mt-8 border-t border-border pt-8">
                <div className="text-center">
                  <h4 className="mb-4 text-xl font-bold text-secondary">
                    Why Choose Post-Tensioning?
                  </h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="text-2xl font-black text-primary">
                        Reduced Material
                      </div>
                      <div className="text-sm text-muted">
                        Lower concrete volume and reduced steel requirements
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-black text-primary">
                        Enhanced Strength
                      </div>
                      <div className="text-sm text-muted">
                        Superior structural performance and durability
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-black text-primary">
                        Cost Savings
                      </div>
                      <div className="text-sm text-muted">
                        Significant reduction in material and construction costs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #e82d22;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        input[type="range"]::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #e82d22;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        input[type="range"]::-ms-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #e82d22;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </section>
  )
}
