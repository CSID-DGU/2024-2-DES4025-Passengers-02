package DES4025.KIOSK.Service;

import DES4025.KIOSK.Entity.OrderDetail;
import DES4025.KIOSK.Repository.OrderDetailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderDetailService {
    private final OrderDetailRepository orderDetailRepository;
    public void saveOrderDetail(Integer orderNum, Integer menuNum){
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setOrderNum(orderNum);  // 주문 번호
        orderDetail.setMenuNum(menuNum);  // 메뉴 번호

        // orderdetail 테이블에 저장
        orderDetailRepository.save(orderDetail);
    }
}
