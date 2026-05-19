"use client";

import { Calculator, TrendingDown } from "lucide-react";
import { useState } from "react";

export default function SlabThicknessCalculator() {
  const [slabThickness, setSlabThickness] = useState(26);
  const [slabLength, setSlabLength] = useState(7.5);
  const [totalServiceLoad, setTotalServiceLoad] = useState(6);

  const calculateOutput = (thickness: number, length: number, load: number): number => {
    return 0.8125 * thickness * (1 + 0.01 * (length - 7.5) + 0.005 * (load - 6));
  };

  const calculatedOutput = calculateOutput(slabThickness, slabLength, totalServiceLoad);

  return (
    <section className="section bg-neutral">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
            Post-Tensioning <span className="text-primary">Calculator</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
            Discover how post-tensioning technology can optimize your slab thickness and reduce
            material costs while maintaining structural integrity.
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
                      Post-Tensioning Calculator
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Slab Thickness Slider */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="slab-thickness"
                          className="text-lg font-medium text-secondary"
                        >
                          Slab Thickness
                        </label>
                        <span className="bg-neutral px-3 py-1 text-lg font-bold text-secondary">
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
                          onChange={(e) => setSlabThickness(Number(e.target.value))}
                          className="slider h-3 w-full cursor-pointer appearance-none bg-neutral-dark focus:ring-2 focus:ring-primary focus:outline-none"
                          style={{
                            background: `linear-gradient(to right, #e82d22 0%, #e82d22 ${
                              ((slabThickness - 20) / 12) * 100
                            }%, #e6e6e6 ${((slabThickness - 20) / 12) * 100}%, #e6e6e6 100%)`,
                          }}
                        />
                        <div className="flex justify-between text-sm text-muted">
                          <span>20 cm</span>
                          <span>32 cm</span>
                        </div>
                      </div>
                    </div>

                    {/* Slab Length Input */}
                    <div className="space-y-2">
                      <label htmlFor="slab-length" className="text-lg font-medium text-secondary">
                        Slab Length (meters)
                      </label>
                      <input
                        id="slab-length"
                        type="number"
                        min="1"
                        max="50"
                        step="0.1"
                        value={slabLength}
                        onChange={(e) => setSlabLength(Number(e.target.value))}
                        className="w-full border border-border bg-white px-4 py-3 text-lg font-medium text-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      />
                    </div>

                    {/* Total Service Load Input */}
                    <div className="space-y-2">
                      <label htmlFor="service-load" className="text-lg font-medium text-secondary">
                        Total Service Load (kN/m²)
                      </label>
                      <input
                        id="service-load"
                        type="number"
                        min="1"
                        max="20"
                        step="0.1"
                        value={totalServiceLoad}
                        onChange={(e) => setTotalServiceLoad(Number(e.target.value))}
                        className="w-full border border-border bg-white px-4 py-3 text-lg font-medium text-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingDown size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">Estimated Results</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-primary/5 p-6">
                      <div className="mb-2 text-sm font-medium text-muted">Estimated Output</div>
                      <div className="text-4xl font-black text-primary">
                        {calculatedOutput.toFixed(2)}
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        Estimate based on post-tensioning analysis
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="bg-neutral p-4 text-center">
                        <div className="text-lg font-black text-secondary">{slabThickness} cm</div>
                        <div className="text-xs text-muted">Thickness</div>
                      </div>
                      <div className="bg-neutral p-4 text-center">
                        <div className="text-lg font-black text-secondary">{slabLength} m</div>
                        <div className="text-xs text-muted">Length</div>
                      </div>
                      <div className="bg-neutral p-4 text-center">
                        <div className="text-lg font-black text-secondary">
                          {totalServiceLoad} kN/m²
                        </div>
                        <div className="text-xs text-muted">Service Load</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="mt-8 border-t border-border pt-8">
                <div className="text-center">
                  <h4 className="mb-4 text-xl font-bold text-secondary">
                    Post-Tensioning Analysis Calculator
                  </h4>
                  <p className="mx-auto max-w-2xl text-sm text-muted">
                    This calculator provides estimates using engineering formulas based on slab
                    thickness, length, and service load parameters. Results are for preliminary
                    assessment only and are not a guarantee or promise of actual performance.
                    Professional engineering consultation is required for final design decisions.
                  </p>
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
  );
}
