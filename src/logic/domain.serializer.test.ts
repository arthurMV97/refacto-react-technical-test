import {
  extractClassificationFromDomainList,
  extractCountriesFromDomainList,
  extractSubClassificationFromDomainList,
} from "./domains.serializer";

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
    expect(extractClassificationFromDomainList(domainsListExample)).toEqual([
      "OK",
      "NK",
      "BL",
    ]);
  });

  it("should return a list of subclassification prefixes", () => {
    expect(extractSubClassificationFromDomainList(domainsListExample)).toEqual([
      "WOK",
      "WOL",
      "NPP",
      "NRP",
    ]);
  });
});
