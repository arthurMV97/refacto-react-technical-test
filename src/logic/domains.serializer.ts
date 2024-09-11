const extractDomainsInformationByStringPosition = (
  domains: string[],
  position: [number, number]
) => {
  const extractedPart: string[] = domains.map((domain: string) =>
    domain.substring(position[0], position[1])
  );

  return extractedPart.filter(function (country, pos) {
    return extractedPart.indexOf(country) === pos;
  });
};

export const extractCountriesFromDomainList = (domains: string[]) => {
  return extractDomainsInformationByStringPosition(domains, [0, 2]);
};

export const extractDomainsClassification = (domains: string[]) => {
  return extractDomainsInformationByStringPosition(domains, [3, 5]);
};

export const extractDomainsSubClassification = (domains: string[]) => {
  return extractDomainsInformationByStringPosition(domains, [6, 9]);
};
