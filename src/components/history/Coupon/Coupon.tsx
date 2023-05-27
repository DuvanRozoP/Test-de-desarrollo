import { useState } from 'react';

import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle } from '../../ui/card';
import { Separator } from '../../ui/separator';

function Coupon() {
  const [select, setSelecte] = useState<string>('');

  const handleSelectButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelecte(event.currentTarget.value);
  };

  return (
    <section className="containerCoupon">
      <Card className="coupon">
        <CardHeader>
          <CardTitle className="couponTitle">Historial de Cupones</CardTitle>
          <div className="options">
            <Button
              value="Disponible"
              onClick={handleSelectButton}
              className={`btnCoupon ${select === 'Disponible' ? 'select' : ''}`}
            >
              Disponibles
            </Button>
            <Button
              value="Vencidos"
              onClick={handleSelectButton}
              className={`btnCoupon ${select === 'Vencidos' ? 'select' : ''}`}
            >
              Vencidos
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card id="20" className="coupons">
        <div>
          <p>
            <strong>
              Cupon <span>{Number(12000).toLocaleString()}</span>
            </strong>
          </p>
          <p>
            <strong>Te queda 1 de 1</strong>
          </p>
        </div>
        <p>
          Codigo: <span>TRRG54</span>
        </p>
        <p>Vence: 18 - 01 - 2023</p>
        <Separator className="my-2" />
        <div>
          <p>
            Terminos y condiciones de cupon <strong>&gt;</strong>
          </p>
          <Button>Usar cupon</Button>
        </div>
      </Card>
    </section>
  );
}

export default Coupon;
