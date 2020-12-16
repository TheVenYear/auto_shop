select o.id,
       to_char(o.order_date, 'dd.mm.yyyy')    as "date",
       concat(b.name, ' ', c2.name)           as car_name,
       concat(o.car_amount, 'шт')             as amount,
       (c2.price * o.car_amount)              as price,
       concat(c.first_name, ' ', c.last_name) as customer,
       c.phone_number                         as customer_phone_number
from "order" o
         left join customer c on c.id = o.customer_id
         left join car c2 on c2.id = o.car_id
         left join brand b on b.id = c2.brand_id;