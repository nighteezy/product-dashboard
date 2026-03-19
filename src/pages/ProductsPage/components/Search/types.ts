export interface ISearch {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
}
