package DES4025.KIOSK.Repository;

import DES4025.KIOSK.Entity.dOrder;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderRepository extends JpaRepository<dOrder, Integer> {

    @Query(value = "update dOrder set take_out_mode = :take_out_mode where order_num = :order_num", nativeQuery = true)
    @Modifying
    @Transactional
    void updateTakeOutMode(@Param("order_num") Integer order_num, @Param("take_out_mode") boolean take_out_mode);
}
