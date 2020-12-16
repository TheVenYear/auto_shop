insert into brand (name) values ('BMW');

insert into brand (name) values ('Audi');

insert into auto_shop (name, brand_id, address, phone_number)
values ('BMW-Фаворит', 1, 'Москва, ул. Колчака, д.42', '+79105559966');

insert into auto_shop (name, brand_id, address, phone_number)
values ('Audi-Фаворит', 2, 'Москва, ул. Колчака, д.43', '+79105559955');

insert into customer (last_name, first_name, phone_number) values ('Иванов', 'Сергей', '+79107891122');
insert into customer (last_name, first_name, phone_number) values ('Коробкин', 'Олег', '+79107891155');
insert into customer (last_name, first_name, phone_number) values ('Олейкин', 'Роман', '+79107891166');
insert into customer (last_name, first_name, phone_number) values ('Семёнов', 'Дмитрий', '+79107891177');

insert into car (name, brand_id, price) values ('X3', 1, 2000000);
insert into car (name, brand_id, price) values ('X5', 1, 3000000);
insert into car (name, brand_id, price) values ('X6', 1, 2000000);

insert into car (name, brand_id, price) values ('Q3', 2, 1750000);
insert into car (name, brand_id, price) values ('Q5', 2, 2000000);
insert into car (name, brand_id, price) values ('Q6', 2, 2600000);

insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (1, '2014-10-01', 1, 1, 1);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (2, '2014-10-02', 4, 2, 2);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (3, '2014-10-02', 3, 1, 1);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (2, '2014-10-02', 5, 1, 2);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (2, '2014-10-02', 1, 2, 1);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (3, '2014-10-02', 6, 3, 2);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (4, '2014-10-03', 1, 4, 1);
insert into "order" (customer_id, order_date, car_id, car_amount, shop_id) values (1, '2014-10-03', 2, 1, 1);


