export interface IInput {
  label: string;
  example?: string;
  value: string;
  mask?: string;
  validator: (text: string) => boolean;
  onChangeText: (text: string) => void;
}
