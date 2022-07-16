import { TShirt } from "../../types";

export interface TshirtDialogProps {
  tShirt: TShirt | null;
  open: boolean;
  onClose: () => void;
}
