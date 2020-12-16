select a.id, a.name, sum(o.car_amount * c.price) as proceeds
from auto_shop a
         right join "order" o on o.shop_id = a.id
         left join car c on o.car_id = c.id group by a.id, a.name;