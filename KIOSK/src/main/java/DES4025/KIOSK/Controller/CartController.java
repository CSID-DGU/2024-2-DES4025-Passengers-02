package DES4025.KIOSK.Controller;

import DES4025.KIOSK.DTO.modifyCartDTO;
import DES4025.KIOSK.Entity.OrderDetail;
import DES4025.KIOSK.Service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@Slf4j
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping("/{order-num}/cart")
    public ResponseEntity<?> getCart(@PathVariable("order-num") Integer order_num) {
        Map<String, Object> response = new LinkedHashMap<>();

        try {
            List<OrderDetail> orderList = cartService.getCart(order_num);
            if (orderList.isEmpty()) {
                response.put("code", "Error");
                response.put("message", "No order found");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            else {
                response.put("code", "SU");
                response.put("message", "Success.");
                response.put("order", orderList);
                return ResponseEntity.ok(response);
            }
        } catch (Exception e) {
            response.put("code", "Error");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/{order-num}/cart/modify")
    public ResponseEntity<?> modifyCart(modifyCartDTO modifyCartDTO) {
        Map<String, Object> response = new LinkedHashMap<>();

        try {
            OrderDetail orderDetail = cartService.modifyCart(modifyCartDTO);
            response.put("code", "SU");
            response.put("message", "Success.");
            if (orderDetail != null) {
                response.put("modify Detail", orderDetail);
            }
            else {
                response.put("Deleted Order Detail Num", modifyCartDTO.getOrder_detail_num());
            }
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.put("code", "Error");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/{order-num}/order-num")
    public ResponseEntity<?> getOrderNum(@PathVariable("order-num") Integer order_num) {
        Map<String, Object> response = new LinkedHashMap<>();

        try {
            int total_price = cartService.getTotalPrice(order_num);
            response.put("code", "SU");
            response.put("message", "Success.");
            response.put("order_num", order_num);
            response.put("total_price", total_price);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.put("code", "Error");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
