create table accounts(
                         id bigserial primary key,
                         money int,
                         is_active bool
);

create table users(
    id bigserial primary key,
    username varchar(20) not null unique,
    password varchar(100) not null,
    role varchar(10) not null,
    account_id bigint,
    constraint fk_account_id
        foreign key(account_id) references accounts(id)
);

INSERT INTO accounts (money, is_active) VALUES (0, true);
INSERT INTO accounts (money, is_active) VALUES (150, false);

INSERT INTO users (username, password, role, account_id) VALUES ('test', '$2a$10$CPrwH2H2PVa6kpEbWiefle1CFtC0LgDMqK2YM.qt.UGyJeUJzzjyi', 'ROLE_USER', 1);
INSERT INTO users (username, password, role, account_id) VALUES ('admin', '$2a$10$D0Z0LQQmlVSzcPF.pTZP2e4ZwUsxS/VwPaj.UZHYh0aKDHXV/dRNW', 'ROLE_ADMIN', null);
INSERT INTO users (username, password, role, account_id) VALUES ('misha', '$2a$10$S5u3HQhxGOu3LG6qWQKDTOsNy.Ei3uoOs6jqwquVm6JUQt5u.GXV.', 'ROLE_USER', 2);
