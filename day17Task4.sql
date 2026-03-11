CREATE TABLE products(
product_id INT PRIMARY KEY,
product_name VARCHAR(50),
stock_qty INT
)

CREATE TABLE orders(
order_id INT IDENTITY PRIMARY KEY,
customer_id INT,
order_date DATE,
order_status INT
)

CREATE TABLE order_items(
item_id INT IDENTITY PRIMARY KEY,
order_id INT,
product_id INT,
quantity INT,
FOREIGN KEY(order_id) REFERENCES orders(order_id),
FOREIGN KEY(product_id) REFERENCES products(product_id)
)