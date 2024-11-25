package DES4025.KIOSK.Repository;

import DES4025.KIOSK.Entity.dOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface OrderRepository extends JpaRepository<dOrder, Integer> {
    @Query(value = "update dOrder set orderDetail = :menu, total_price = :total_price where order_num = :order_num", nativeQuery = true)
    @Modifying
    @Transactional
    void setMenu(@Param(value = "order_num") int order_num, @Param(value = "menu") String menu, @Param(value = "total_price") int total_price);
}
