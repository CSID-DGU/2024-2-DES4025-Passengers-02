package DES4025.KIOSK.Controller;

import DES4025.KIOSK.DTO.orderDTO;
import DES4025.KIOSK.DTO.takeOutDTO;
import DES4025.KIOSK.Service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PutMapping("/home")
    public ResponseEntity<Map<String, String>> takeOutMode(@RequestBody takeOutDTO takeOutMode) {
        Map<String, String> response = new LinkedHashMap<>();

        try {
            int order_num = orderService.saveTakeOutMode(takeOutMode.isTakeOutMode());
            response.put("code", "SU");
            response.put("message", "Success.");
            response.put("order_num", String.valueOf(order_num));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("code", "DE");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/{order-num}")
    public ResponseEntity<?> getOrderNum(@PathVariable("order-num") Integer order_num, @RequestBody orderDTO orderdto) {
        Map<String, Object> response = new LinkedHashMap<>();

        try {
            orderService.setMenu(order_num, orderdto.getOrderDetail(), orderdto.getTotal_price());
            response.put("code", "SU");
            response.put("message", "Success.");
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.put("code", "Error");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
