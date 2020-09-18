export interface Country {
  label: string;
  value: string;
}

export interface IDropdown {
  data: any;
  loading: boolean;
  value: string;
  onPress: (x: any) => void;
}
