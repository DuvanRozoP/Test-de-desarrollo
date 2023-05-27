import { useEffect, useMemo, useState } from 'react';

import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle } from '../../ui/card';
import json from '../../../data/coupons.json';

import Coupons from './Coupons';
import type { CouponsProps } from './Coupons';

function Coupon() {
  const [, setCoupons] = useState<CouponsProps[]>([]);
  const [select, setSelecte] = useState<string>('');

  const handleSelectButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelecte(event.currentTarget.value);
  };

  useEffect(() => {
    setCoupons(() => {
      switch (select) {
        case 'Disponible':
          return json.filter(
            coupon => new Date(coupon.expired_date) >= new Date(),
          );
        case 'Vencidos':
          return json.filter(
            coupon => new Date(coupon.expired_date) < new Date(),
          );
        default:
          return json;
      }
    });
  }, [select]);

  const filteredCoupons = useMemo(() => {
    switch (select) {
      case 'Disponible':
        return json.filter(
          coupon => new Date(coupon.expired_date) >= new Date(),
        );
      case 'Vencidos':
        return json.filter(
          coupon => new Date(coupon.expired_date) < new Date(),
        );
      default:
        return json;
    }
  }, [select]);

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

      {filteredCoupons.map(({ code, expired_date, value, quantity }) => (
        <Coupons
          code={code}
          expired_date={expired_date}
          value={value}
          quantity={quantity}
        />
      ))}
    </section>
  );
}

export default Coupon;
