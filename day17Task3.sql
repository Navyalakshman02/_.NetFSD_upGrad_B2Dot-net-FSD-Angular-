BEGIN TRY
    BEGIN TRANSACTION

    DECLARE @order_id INT = 1

    -- SAVEPOINT before restoring stock
    SAVE TRANSACTION BeforeStockRestore

    -- Restore stock
    UPDATE p
    SET p.stock_qty = p.stock_qty + oi.quantity
    FROM products p
    JOIN order_items oi
    ON p.product_id = oi.product_id
    WHERE oi.order_id = @order_id

    -- Update order status to Rejected (3)
    UPDATE orders
    SET order_status = 3
    WHERE order_id = @order_id

    COMMIT TRANSACTION
    PRINT 'Order cancelled successfully'

END TRY

BEGIN CATCH
    ROLLBACK TRANSACTION BeforeStockRestore
    PRINT 'Error while restoring stock'
END CATCH