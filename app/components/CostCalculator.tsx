"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/track";
import {
  calculatorServices,
  densityOptions,
  rockOptions,
  priceDrivers,
  estimate,
  formatDollars,
  type CalculatorService,
  type Density,
  type RockLevel,
} from "@/lib/cost-estimate";

function OptionGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-[#0a0a0a] mb-2">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full border-2 border-[#0a0a0a] bg-white text-[#0a0a0a] transition-colors hover:bg-[#f5f5f5] peer-checked:bg-[#0a0a0a] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#C4922A] peer-focus-visible:ring-offset-2">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * Rough cost range from the owner's real rates (lib/cost-estimate.ts). Full version on /cost-calculator;
 * `compact` locks the service and is embedded in the cost section of the priority service pages.
 */
export default function CostCalculator({
  service: initialService = "land-clearing",
  compact = false,
}: {
  service?: CalculatorService;
  compact?: boolean;
}) {
  const id = useId();
  const [service, setService] = useState<CalculatorService>(initialService);
  const [acresInput, setAcresInput] = useState("");
  const [density, setDensity] = useState<Density>("medium");
  const [rock, setRock] = useState<RockLevel>("some");

  const acres = Number(acresInput);
  const usesRock = service !== "forestry-mulching";
  const usesDensity = service !== "rock-removal";
  const result = estimate(service, acres, density, rock);
  const serviceLabel = calculatorServices.find((s) => s.value === service)?.label ?? "";
  const quoteHref = `/contact?service=${encodeURIComponent(serviceLabel)}${result ? `&acres=${acres}` : ""}#quote`;

  // calculator_used: once per page view, after the inputs have settled on a result
  const usedSent = useRef(false);
  const resultKey = result ? `${service}|${acres}|${density}|${rock}` : "";
  useEffect(() => {
    if (!resultKey || usedSent.current) return;
    const timer = setTimeout(() => {
      usedSent.current = true;
      trackEvent("calculator_used", {
        calculator_service: service,
        acres: String(acres),
        density: usesDensity ? density : "",
        rock: usesRock ? rock : "",
        calculator_location: compact ? "service_page" : "calculator_page",
      });
    }, 1200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- resultKey covers every input
  }, [resultKey]);

  return (
    <div className={`border-2 border-[#0a0a0a] rounded-2xl bg-white ${compact ? "p-5 my-6" : "p-6 md:p-8"}`}>
      {compact && (
        <p className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide mb-1">Cost Calculator</p>
      )}
      {compact && (
        <p className="text-lg font-bold text-[#0a0a0a] mb-4">Estimate your {serviceLabel.toLowerCase()} cost</p>
      )}

      <div className="space-y-5">
        {!compact && (
          <OptionGroup legend="Service" name={`${id}-service`} options={calculatorServices} value={service} onChange={setService} />
        )}

        <div>
          <label htmlFor={`${id}-acres`} className="block text-sm font-semibold text-[#0a0a0a] mb-2">
            Acres
          </label>
          <input
            id={`${id}-acres`}
            type="number"
            inputMode="decimal"
            min="0.1"
            step="0.1"
            placeholder="e.g. 5"
            value={acresInput}
            onChange={(e) => setAcresInput(e.target.value)}
            className="w-40 px-4 py-2.5 border-2 border-[#0a0a0a] rounded-xl text-[#0a0a0a] text-base focus:outline-none focus:ring-2 focus:ring-[#C4922A]"
          />
        </div>

        {usesDensity && (
          <OptionGroup legend="Brush density" name={`${id}-density`} options={densityOptions} value={density} onChange={setDensity} />
        )}
        {usesRock && (
          <OptionGroup legend="Rock" name={`${id}-rock`} options={rockOptions} value={rock} onChange={setRock} />
        )}
      </div>

      <div aria-live="polite" className="mt-6 p-5 bg-[#f9f9f9] rounded-2xl">
        {result ? (
          <>
            <p className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide mb-1">Estimated Range</p>
            <p className="text-3xl font-bold text-[#0a0a0a]">
              {result.minimumOnly
                ? `${formatDollars(result.low)} minimum job`
                : `${formatDollars(result.low)} – ${formatDollars(result.high)}`}
            </p>
            <p className="text-sm text-[#6e6e73] mt-2">{priceDrivers[service]}</p>
          </>
        ) : (
          <p className="text-sm text-[#6e6e73]">Enter your acreage to see an estimated range.</p>
        )}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <a
          href={quoteHref}
          data-track="cost_calculator"
          onClick={() =>
            trackEvent("calculator_quote_click", {
              calculator_service: service,
              acres: result ? String(acres) : "",
              calculator_location: compact ? "service_page" : "calculator_page",
            })
          }
          className="flex-1 text-center px-6 py-4 bg-[#C4922A] text-black font-bold rounded-full hover:bg-amber-500 transition-colors"
        >
          Get your exact quote, free site visit
        </a>
        <a
          href="tel:5125716700"
          data-track="cost_calculator"
          className="text-center px-6 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold rounded-full hover:bg-[#f5f5f5] transition-colors"
        >
          Call (512) 571-6700
        </a>
      </div>

      <p className="text-xs text-[#6e6e73] mt-4 leading-relaxed">
        Estimates only. Your exact price depends on terrain, access and what&apos;s on the land. We&apos;ll give you a
        firm number at the free site visit.
      </p>
      {compact && (
        <Link href="/cost-calculator" className="inline-block mt-3 text-sm font-semibold text-[#C4922A] hover:text-amber-600 transition-colors">
          Open the full cost calculator →
        </Link>
      )}
    </div>
  );
}
