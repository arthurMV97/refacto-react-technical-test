import {
  extractClassificationFromDomainList,
  extractCountriesFromDomainList,
  extractSubClassificationFromDomainList,
} from "../../logic/domains.serializer";

interface Props {
  domains?: string[];
}

const DomainFilter = (props: Props) => {
  if (!props.domains) return;

  const countries: string[] = extractCountriesFromDomainList(props.domains);
  const classifications: string[] = extractClassificationFromDomainList(
    props.domains
  );

  const subClassifications: string[] = extractSubClassificationFromDomainList(
    props.domains
  );

  return (
    <>
      <select name="countries" multiple>
        {countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <select name="classifications" multiple>
        {classifications.map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {subClassifications.map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
};

export default DomainFilter;
