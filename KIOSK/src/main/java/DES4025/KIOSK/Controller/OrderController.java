package DES4025.KIOSK.Controller;

import DES4025.KIOSK.Service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PutMapping("/{order-num}/home")
    public ResponseEntity<Map<String, String>> takeOutMode(@PathVariable("order-num") Integer order_num, @RequestParam boolean takeOutMode) {
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
