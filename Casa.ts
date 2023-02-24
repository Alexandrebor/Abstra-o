import { Imovel } from './Imovel';
class Casa extends Imovel{
  public numero: string = 'S/N';
  public qtdComodos: number;
  public Garagem: boolean;
  public parede: string;
  public habitese: string = ' ';

  setGaragem(Garagem:boolean){
    if(Garagem == <=1){
      return true;
    }else{
      return false;
    }

  }
}