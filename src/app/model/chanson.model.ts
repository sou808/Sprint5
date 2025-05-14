import { Categorie } from "./categorie.model";
export class Chanson {
idChanson? : number;
titreChanson? : string;
type? : string;
dateSortie? : Date ;
  categorie!: Categorie;
}
/*export interface Chanson {
  idChanson?: number;
  titreChanson?: string;
  type?: string;
  dateSortie?: Date;
}
 */