/* eslint-disable no-unused-vars */
import { TShirt } from "../../types";

export interface TshirtCardProps {
  tShirt: TShirt;
  onBuyNow: (tShirt: TShirt) => void;
}
