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
  haulOffDefault,
  offersHaulOff,
  clearingCeilingNote,
  haulOffNote,
  type CalculatorService,
  type Density,
  type RockLevel,
} from "@/lib/cost-estimate";

const fieldLabel = "block text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-1.5";

/** Small segmented pill buttons (native radios, so arrow keys and screen readers work). */
function Segmented<T extends string>({
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
    <fieldset className="min-w-0 w-full sm:w-auto">
      <legend className={fieldLabel}>{legend}</legend>
      <div className="flex sm:inline-flex gap-1 p-1 rounded-2xl sm:rounded-full border-2 border-[#0a0a0a] bg-white">
        {options.map((o) => (
          <label key={o.value} className="flex-1 sm:flex-none cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className="flex items-center justify-center h-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium leading-tight text-center rounded-xl sm:rounded-full text-[#0a0a0a] sm:whitespace-nowrap transition-colors hover:bg-[#f5f5f5] peer-checked:bg-[#0a0a0a] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#C4922A]">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** The calculator itself: inputs in one wrapping row, then a one-line result with the quote button beside it. */
function CalculatorBody({
  initialService,
  showServicePicker,
  location,
}: {
  initialService: CalculatorService;
  showServicePicker: boolean;
  location: "service_page" | "calculator_page";
}) {
  const id = useId();
  const [service, setService] = useState<CalculatorService>(initialService);
  const [acresInput, setAcresInput] = useState("");
  const [density, setDensity] = useState<Density>("medium");
  const [rock, setRock] = useState<RockLevel>("some");
  // null = follow the default for this service and acreage, until the visitor ticks or unticks the box
  const [haulOffChoice, setHaulOffChoice] = useState<boolean | null>(null);

  const changeService = (next: CalculatorService) => {
    setService(next);
    setHaulOffChoice(null);
  };

  const acres = Number(acresInput);
  const usesRock = service === "rock-removal";
  const usesDensity = service !== "rock-removal";
  const hasHaulOff = offersHaulOff(service);
  const haulOff = hasHaulOff && (haulOffChoice ?? haulOffDefault(service, acres));
  const result = estimate(service, acres, density, rock, haulOff);
  const serviceLabel = calculatorServices.find((s) => s.value === service)?.label ?? "";
  const quoteHref = `/contact?service=${encodeURIComponent(serviceLabel)}${result ? `&acres=${acres}` : ""}#quote`;

  // calculator_used: once per page view, after the inputs have settled on a result
  const usedSent = useRef(false);
  const resultKey = result ? `${service}|${acres}|${density}|${rock}|${haulOff}` : "";
  useEffect(() => {
    if (!resultKey || usedSent.current) return;
    const timer = setTimeout(() => {
      usedSent.current = true;
      trackEvent("calculator_used", {
        calculator_service: service,
        acres: String(acres),
        density: usesDensity ? density : "",
        rock: usesRock ? rock : "",
        haul_off: hasHaulOff ? String(haulOff) : "",
        calculator_location: location,
      });
    }, 1200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- resultKey covers every input
  }, [resultKey]);

  const priceText = !result
    ? null
    : result.minimumOnly
    ? `${formatDollars(result.low)} minimum job`
    : result.low === result.high
    ? `About ${formatDollars(result.low)}`
    : `${formatDollars(result.low)} – ${formatDollars(result.high)}`;

  return (
    <div>
      {showServicePicker && (
        <div className="mb-4">
          <Segmented legend="Service" name={`${id}-service`} options={calculatorServices} value={service} onChange={changeService} />
        </div>
      )}

      <div className="flex flex-wrap items-start gap-x-5 gap-y-4">
        <div>
          <label htmlFor={`${id}-acres`} className={fieldLabel}>
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
            className="w-24 px-3 py-1.5 border-2 border-[#0a0a0a] rounded-xl text-[#0a0a0a] text-base focus:outline-none focus:ring-2 focus:ring-[#C4922A]"
          />
        </div>

        {usesDensity && (
          <Segmented legend="Brush density" name={`${id}-density`} options={densityOptions(service)} value={density} onChange={setDensity} />
        )}
        {usesRock && (
          <Segmented legend="Rock" name={`${id}-rock`} options={rockOptions} value={rock} onChange={setRock} />
        )}
      </div>

      {hasHaulOff && (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-0.5">
          <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-[#0a0a0a]">
            <input
              type="checkbox"
              checked={haulOff}
              onChange={(e) => setHaulOffChoice(e.target.checked)}
              className="w-4 h-4 accent-[#C4922A]"
            />
            Haul debris off site
          </label>
          <span className="text-[11px] text-[#6e6e73]">{haulOffNote}</span>
        </div>
      )}

      <div
        aria-live="polite"
        className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-[#f9f9f9] rounded-xl"
      >
        <div className="flex-1 min-w-0">
          {priceText ? (
            <>
              <p className="text-xl font-bold text-[#0a0a0a] leading-tight">
                <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide mr-2 align-middle">
                  Estimate
                </span>
                {priceText}
              </p>
              <p className="text-xs text-[#6e6e73] mt-0.5">{priceDrivers[service]}</p>
            </>
          ) : (
            <p className="text-sm text-[#6e6e73]">Enter your acreage to see an estimated range.</p>
          )}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <a
            href={quoteHref}
            data-track="cost_calculator"
            onClick={() =>
              trackEvent("calculator_quote_click", {
                calculator_service: service,
                acres: result ? String(acres) : "",
                calculator_location: location,
              })
            }
            className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-[#C4922A] text-black text-sm font-bold rounded-full hover:bg-amber-500 transition-colors"
          >
            Get your exact quote, free site visit
          </a>
          <a
            href="tel:5125716700"
            data-track="cost_calculator"
            aria-label="Call (512) 571-6700"
            className="flex items-center justify-center px-4 py-2.5 border-2 border-[#0a0a0a] text-[#0a0a0a] text-sm font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4 sm:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </div>

      {service === "land-clearing" && result && (
        <p className="text-xs text-[#3a3a3c] mt-2 leading-relaxed">{clearingCeilingNote}</p>
      )}
      <p className="text-[11px] text-[#6e6e73] mt-2 leading-relaxed">
        Estimates only. Your exact price depends on terrain, access and what&apos;s on the land. We&apos;ll give you a
        firm number at the free site visit.
      </p>
    </div>
  );
}

/**
 * Cost calculator built on the owner's pricing rules (lib/cost-estimate.ts).
 * Full version on /cost-calculator; `compact` is a collapsed box on the priority service pages
 * that opens the calculator inline with that page's service pre-selected.
 */
export default function CostCalculator({
  service = "land-clearing",
  compact = false,
}: {
  service?: CalculatorService;
  compact?: boolean;
}) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  if (!compact) {
    return (
      <div className="border-2 border-[#0a0a0a] rounded-2xl bg-white p-4 md:p-5">
        <CalculatorBody initialService={service} showServicePicker location="calculator_page" />
      </div>
    );
  }

  return (
    <div className="border-2 border-[#0a0a0a] rounded-2xl bg-white p-4 md:p-5 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-[#0a0a0a] leading-tight">How much will my project cost?</h3>
          <p className="text-sm text-[#6e6e73]">Get a free estimate in 30 seconds</p>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className={`self-start sm:self-auto flex-shrink-0 px-5 py-2.5 text-sm font-bold rounded-full transition-colors ${
            open
              ? "border-2 border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f5f5f5]"
              : "bg-[#C4922A] text-black hover:bg-amber-500"
          }`}
        >
          {open ? "Hide calculator" : "Estimate my cost"}
        </button>
      </div>
      {open && (
        <div id={panelId} className="mt-4 pt-4 border-t border-gray-200">
          <CalculatorBody initialService={service} showServicePicker={false} location="service_page" />
          <Link
            href="/cost-calculator"
            className="inline-block mt-2 text-xs font-semibold text-[#C4922A] hover:text-amber-600 transition-colors"
          >
            Open the full cost calculator →
          </Link>
        </div>
      )}
    </div>
  );
}
