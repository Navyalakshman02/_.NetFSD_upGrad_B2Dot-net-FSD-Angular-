BEGIN TRY
    BEGIN TRANSACTION

    -- Insert order
    INSERT INTO orders(customer_id, order_date, order_status)
    VALUES (101, GETDATE(), 1)

    -- Get last order id
    DECLARE @order_id INT
    SET @order_id = SCOPE_IDENTITY()

    -- Insert order items
    INSERT INTO order_items(order_id, product_id, quantity)
    VALUES 
    (@order_id, 1, 2),
    (@order_id, 2, 1)

    COMMIT TRANSACTION
    PRINT 'Order placed successfully'

END TRY

BEGIN CATCH
    ROLLBACK TRANSACTION
    PRINT 'Order failed due to insufficient stock'
END CATCH