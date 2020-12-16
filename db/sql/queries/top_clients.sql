select distinct l.last_name, l.first_name
from (select c2.last_name, c2.first_name, sum(o.car_amount * c.price) as expenses
      from "order" o
               left join car c on o.car_id = c.id
               left join customer c2 on o.customer_id = c2.id
      group by c2.id, order_date) l
group by l.last_name, l.first_name, l.expenses
having l.expenses > 250000;