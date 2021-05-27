export function getTargetValue(e: UIEvent): string {
  return (<HTMLInputElement | HTMLSelectElement>e.target).value;
}

type ParsedValue = {
  value: string | number;
  unit: string | null;
}

export function parseValueWithUnit(inputValue: any): ParsedValue {
  if (inputValue === 'auto') {
    return { value: 'auto', unit: null };
  }

  const value = parseInt(inputValue) || 0;
  const parsedUnit = String(inputValue).replace(String(value), '');

  if (parsedUnit === '') {
    return { value, unit: 'px' };
  }

  return { value, unit: parsedUnit };
}
