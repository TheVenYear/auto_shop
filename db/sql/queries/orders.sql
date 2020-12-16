select concat(c.last_name, ' ', c.first_name) as full_name, (c2.price * o.car_amount) as order_price, to_char(o.order_date, 'dd.mm.yyyy') as "date"
from "order" o
         left join customer c on c.id = o.customer_id
         left join car c2 on c2.id = o.car_id order by order_price desc;