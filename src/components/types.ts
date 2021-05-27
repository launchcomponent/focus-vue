export type TextStyleVariant = 'positive' | 'negative' | 'strong' | 'subdued';

export interface PageAction {
  content: string;
  disabled: boolean;
  loading: boolean;
}

export interface SaveAction {
  loading: boolean;
  label: string;
  onAction: () => ({}),
}

export interface ModalAction {
  content: string;
}

export interface OptionListItem {
  value: string | number;
  label: string;
}
