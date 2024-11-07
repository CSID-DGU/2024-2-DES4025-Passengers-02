package DES4025.KIOSK.Service;

import DES4025.KIOSK.Entity.OrderDetail;
import DES4025.KIOSK.Repository.OrderDetailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CartService {
    private final OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getCart(Integer order_num) {
        return orderDetailRepository.findAllByOrderNum(order_num);
    }
}


