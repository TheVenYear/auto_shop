select c.id, c.last_name, b.name, sum(c2.price * o.car_amount) as expenses, sum(o.car_amount) as car_amount
from customer c
         left join "order" o on c.id = o.customer_id
         left join car c2 on o.car_id = c2.id
         left join brand b on c2.brand_id = b.id
group by c.id, c.last_name, b.name;