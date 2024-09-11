import { extractCountriesFromDomainList } from "./domains.utils";

describe("extract domains informations", () => {
  const domainsListExample = [
    "US_OK-WOK",
    "FR_NK-WOL",
    "FR_OK-NPP",
    "EN_NK-NRP",
    "EN_BL-WOL",
  ];
  it("should return a list of country prefixes", () => {
    expect(extractCountriesFromDomainList(domainsListExample)).toEqual([
      "US",
      "FR",
      "EN",
    ]);
  });

  it("should return a list of classification prefixes", () => {
    expect(extractCountriesFromDomainList(domainsListExample)).toEqual([
      "OK",
      "NK",
      "BL",
    ]);
  });
});
