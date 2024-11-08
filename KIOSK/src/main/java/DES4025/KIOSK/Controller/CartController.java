package DES4025.KIOSK.Controller;

import DES4025.KIOSK.Entity.OrderDetail;
import DES4025.KIOSK.Service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping("/{order-num}/cart")
    public ResponseEntity<Map<String, Object>> getCart(@PathVariable("order-num") Integer order_num) {
        Map<String, Object> response = new HashMap<>();

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
}
