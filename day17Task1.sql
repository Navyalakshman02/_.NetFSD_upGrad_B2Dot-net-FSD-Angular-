CREATE TRIGGER trg_ReduceStock
ON order_items
AFTER INSERT
AS
BEGIN
    -- Check if stock is sufficient
    IF EXISTS (
        SELECT 1
        FROM products p
        JOIN inserted i ON p.product_id = i.product_id
        WHERE p.stock_qty < i.quantity
    )
    BEGIN
        RAISERROR('Stock is insufficient',16,1)
        ROLLBACK TRANSACTION
        RETURN
    END

    
    UPDATE p
    SET p.stock_qty = p.stock_qty - i.quantity
    FROM products p
    JOIN inserted i
    ON p.product_id = i.product_id
END