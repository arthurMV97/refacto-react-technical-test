export const extractCountriesFromDomainList = (domains: string[]) => {
  const extractedCoutries: string[] = domains.map((domain: string) =>
    domain.substring(0, 2)
  );

  return extractedCoutries.filter(function (country, pos) {
    return extractedCoutries.indexOf(country) === pos;
  });
};

export const extractDomainsClassification = (domains: string[]) => {};

export const extractDomainsSubClassification = (domains: string[]) => {};
