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

    public int saveTakeOutMode(boolean takeOutMode) {
        dOrder dorder = new dOrder();
        dorder.setTakeOutMode(takeOutMode);
        dOrder savedOrder = orderRepository.save(dorder);
        return savedOrder.getOrderNum();
    }

    public void setMenu(Integer order_num, String menu, int total_price) {
        orderRepository.setMenu(order_num, menu, total_price);
    }
}
