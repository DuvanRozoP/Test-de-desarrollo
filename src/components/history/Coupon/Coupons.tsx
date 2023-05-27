import { Separator } from '../../ui/separator';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';

export interface CouponsProps {
  code: number;
  expired_date: string;
  value: number;
  quantity: number;
}

function Coupons({ code, value, quantity, expired_date }: CouponsProps) {
  return (
    <Card id={String(code)} className="coupons">
      <div>
        <p>
          <strong>
            Cupon <span>{value.toLocaleString()}</span>
          </strong>
        </p>
        <p>
          <strong>Te queda 1 de {quantity}</strong>
        </p>
      </div>
      <p>
        Codigo: <span>TRRG54</span>
      </p>
      <p>Vence: {expired_date.replace(/\//g, ' - ')}</p>
      <Separator className="my-2" />
      <div>
        <p>
          Terminos y condiciones de cupon <strong>&gt;</strong>
        </p>
        <Button>Usar cupon</Button>
      </div>
    </Card>
  );
}

export default Coupons;
