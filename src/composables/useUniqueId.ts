let id = 0;

export function useUniqueId(prefix: string = 'id') {
  return `${prefix}-${++id}`;
}
