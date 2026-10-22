import type { ServicePricing } from "@/data/service-pricing";

const toNumber = (s: string) => Number(s.replace(/[^0-9.]/g, ""));

// "$1,500 – $2,500" → min 1500, max 2500. A trailing "+" ("$3,000 – $4,000+") means open-ended, so no maxPrice.
function priceSpecification(range: string, unit: string) {
  const [low, high] = range.split("–").map((s) => s.trim());
  return {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    minPrice: toNumber(low),
    ...(high && !high.endsWith("+") ? { maxPrice: toNumber(high) } : {}),
    unitText: unit,
  };
}

/** Schema.org Offer for a Service, mirroring the price ranges shown on the page. */
export function priceOffer(pricing: Pick<ServicePricing, "range" | "unit">) {
  return {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: priceSpecification(pricing.range, pricing.unit),
  };
}
