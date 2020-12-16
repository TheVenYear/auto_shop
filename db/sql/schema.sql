create table brand
(
    id   serial primary key,
    name varchar(50) not null
);

create table customer
(
    id           serial primary key,
    first_name   varchar(100) not null,
    last_name    varchar(100) not null,
    phone_number varchar(12)  not null
);

create table auto_shop
(
    id           serial primary key,
    name         varchar(50) not null,
    brand_id     int,
    address      text        not null,
    phone_number varchar(12) not null,
    foreign key (brand_id) references brand (id) on delete set null
);

create table car
(
    id       serial primary key,
    name     varchar(100) not null,
    brand_id int          not null,
    price    bigint       not null default 0,
    foreign key (brand_id) references brand (id) on delete cascade
);

create table "order"
(
    id          serial primary key,
    customer_id int not null,
    order_date  timestamp,
    car_id      int,
    car_amount  int not null default 1,
    shop_id     int not null,
    foreign key (shop_id) references auto_shop (id) on delete cascade,
    foreign key (car_id) references car (id) on delete set null,
    foreign key (customer_id) references customer (id) on delete cascade
);
