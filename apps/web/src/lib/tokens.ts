import canon from "../../../../AwesomeDS/tokens.json";
export const tokens = canon;
export function resolveColor(reference: string) {
  const [family, step] = reference.split(".");
  return (canon.reference as Record<string, Record<string, string>>)[family][step];
}
