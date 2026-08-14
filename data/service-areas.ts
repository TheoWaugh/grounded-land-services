export const serviceAreas: Record<string, string[]> = {
  "Austin Metro": [
    "Austin", "Bee Cave", "Buda", "Cedar Creek", "Driftwood",
    "Dripping Springs", "Elgin", "Hutto", "Kyle", "Leander",
    "Liberty Hill", "Manor", "Paige", "Round Rock", "Taylor",
    "Thorndale",
  ],
  "Hill Country": [
    "Bandera", "Bertram", "Blanco", "Boerne", "Briggs",
    "Burnet", "Canyon Lake", "Fredericksburg", "Georgetown",
    "Goldthwaite", "Horseshoe Bay", "Johnson City", "Kerrville",
    "Lampasas", "Llano", "Marble Falls", "Mason",
    "New Braunfels", "Round Mountain", "San Marcos", "Spicewood",
    "Wimberley", "Kingsland", "Granite Shoals", "Meadowlakes", "Lago Vista",
    "Jonestown", "Lakeway", "San Saba", "Mullin",
  ],
  "Central Texas": [
    "Bastrop", "Brady", "Brenham", "Bryan", "Caldwell",
    "Carmine", "College Station", "Columbus", "Gatesville",
    "Giddings", "Hamilton", "Hearne", "Jonesboro",
    "Killeen", "Madisonville", "McDade", "Meridian",
    "Rising Star", "Smithville", "Somerville",
    "Stephenville", "Temple", "Waco", "Wellborn",
  ],
  "San Antonio Area": [
    "San Antonio", "Seguin", "Gonzales", "Luling", "Lockhart",
    "Cuero", "Hallettsville", "Schulenburg", "Harwood",
    "Shiner", "Belmont", "New Berlin", "Floresville",
    "Waelder", "Nixon", "Smiley", "Stockdale", "La Vernia",
    "Moulton", "Flatonia", "Yoakum", "Edna", "Hondo",
    "Pleasanton", "Poteet", "Goliad",
  ],
  
  "Houston Area": [
    "Houston", "Brookshire", "Conroe", "Cypress", "Fulshear",
    "Katy", "Magnolia", "Navasota", "Pearland", "Sugar Land",
    "The Woodlands", "Tomball",
  ],
  "Dallas / Fort Worth": [
    "Dallas", "Fort Worth", "Caddo Mills", "Celina", "Decatur",
    "Denton", "Fate", "Forney", "Frisco", "Granbury",
    "McKinney", "Melissa", "Princeton", "Prosper", "Rockwall",
    "Royse City", "Terrell", "Waxahachie", "Weatherford",
  ],
  
  
};

export const rockCrushingCities = [
  "Austin", "Bee Cave", "Bertram", "Briggs", "Burnet",
  "Canyon Lake", "Driftwood", "Dripping Springs", "Fredericksburg",
  "Georgetown", "Goldthwaite", "Horseshoe Bay", "Johnson City",
  "Kerrville", "Lampasas", "Leander", "Liberty Hill", "Llano",
  "Marble Falls", "Mason", "New Braunfels", "Round Mountain",
  "Round Rock", "San Marcos", "Spicewood", "Wimberley",
];

export function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

/** Looks up a city by its URL slug and returns its name, region, and regional neighbors. */
export function getCityInfo(citySlug: string) {
  for (const [region, cities] of Object.entries(serviceAreas)) {
    const match = cities.find((c) => slugify(c) === citySlug);
    if (match) {
      return {
        name: match,
        region,
        nearby: cities.filter((c) => c !== match),
      };
    }
  }
  return null;
}