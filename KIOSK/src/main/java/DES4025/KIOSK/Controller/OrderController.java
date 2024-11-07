package DES4025.KIOSK.Controller;

import DES4025.KIOSK.Service.OrderService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/kiosk/mode")
    public ResponseEntity<Map<String, String>> setOrderNum() {
        Map<String, String> response = new HashMap<>();
        try {
            Integer order_num = orderService.setOrderNum();
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

    @PutMapping("/{order-num}/home")
    public ResponseEntity<Map<String, String>> takeOutMode(@PathVariable("order-num") Integer order_num, @RequestBody boolean takeOutMode) {
        Map<String, String> response = new HashMap<>();

        try {
            orderService.saveTakeOutMode(order_num, takeOutMode);
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


}
