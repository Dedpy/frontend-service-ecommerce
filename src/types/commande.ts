import { CommandeDetail } from "./commandeDetail";
import { User } from "./user";

export interface Commande {
  id: number;
  prix: number;
  user: User;
  commandeDetails: CommandeDetail[];
}
