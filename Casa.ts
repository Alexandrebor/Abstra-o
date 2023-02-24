import { Imovel } from './Imovel';
class Casa extends Imovel{
  public numero: number;
  public qtdQuartos: number;
  public Garagem: boolean;

  setGaragem(Garagem:boolean){
    if(Garagem == <=1){
      return true;
    }else{
      return false;
    }

  }
}