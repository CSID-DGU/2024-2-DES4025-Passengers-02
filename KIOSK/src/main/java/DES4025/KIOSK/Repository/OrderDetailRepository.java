package DES4025.KIOSK.Repository;

import DES4025.KIOSK.Entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
    List<OrderDetail> findAllByOrderNum(Integer order_num);
}
