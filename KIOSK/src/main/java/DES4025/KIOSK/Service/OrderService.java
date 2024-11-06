package DES4025.KIOSK.Service;

import DES4025.KIOSK.Entity.dOrder;
import DES4025.KIOSK.Repository.OrderRepository;
import jakarta.persistence.Entity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Integer setOrderNum() {
        dOrder saved = orderRepository.save(new dOrder());
        return saved.getOrderNum();
    }

    public void saveTakeOutMode(Integer order_num, boolean takeOutMode) {
        orderRepository.updateTakeOutMode(order_num, takeOutMode);
    }
}
