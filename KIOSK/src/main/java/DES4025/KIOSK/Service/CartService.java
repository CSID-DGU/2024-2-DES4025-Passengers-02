package DES4025.KIOSK.Service;

import DES4025.KIOSK.DTO.modifyCartDTO;
import DES4025.KIOSK.Entity.OrderDetail;
import DES4025.KIOSK.Repository.OrderDetailRepository;
import DES4025.KIOSK.Repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class CartService {
    private final OrderDetailRepository orderDetailRepository;
    private final OrderRepository orderRepository;

    public List<OrderDetail> getCart(Integer order_num) {
        return orderDetailRepository.findAllByOrderNum(order_num);
    }

    public OrderDetail modifyCart(modifyCartDTO modifyCartDTO) {
        // 장바구니 삭제
        Integer modDetNum = modifyCartDTO.getOrder_detail_num();
        if (modifyCartDTO.isDelete()) {
            orderDetailRepository.deleteById(modDetNum);
            return null;
        }
        OrderDetail toModifyDetail = orderDetailRepository.findById(modDetNum).get();
        toModifyDetail.setMenuTemp(modifyCartDTO.isMenu_temp());
        if (modifyCartDTO.getMenu_amount() != null) {
            toModifyDetail.setMenuAmount(modifyCartDTO.getMenu_amount());
        }
        if (modifyCartDTO.getWhipped() != null) {
            toModifyDetail.setWhipped(modifyCartDTO.getWhipped());
        }
        if (modifyCartDTO.getAddShot() != null) {
            toModifyDetail.setAddShot(modifyCartDTO.getAddShot());
        }
        orderDetailRepository.deleteById(modDetNum);
        orderDetailRepository.save(toModifyDetail);

        return toModifyDetail;
    }

    public int getTotalPrice(Integer order_num) {
        List<OrderDetail> orderDetailList = getCart(order_num);
        int totalPrice = 0;
        for (OrderDetail orderDetail : orderDetailList) {
            totalPrice += orderDetail.getPrice() * orderDetail.getMenuAmount();
        }
        return totalPrice;
    }
}


