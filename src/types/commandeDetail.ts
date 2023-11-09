import { Commande } from "./commande";
import { Product } from "./produits";

export interface CommandeDetail {
  id?: number;
  quantite: number;
  commande?: Commande;
  product: Product;
}
