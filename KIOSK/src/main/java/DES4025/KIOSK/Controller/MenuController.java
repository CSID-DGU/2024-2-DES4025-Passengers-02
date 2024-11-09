package DES4025.KIOSK.Controller;

import DES4025.KIOSK.DTO.MenuDTO;
import DES4025.KIOSK.Entity.Menu;
import DES4025.KIOSK.Service.MenuService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MenuController {

    private final MenuService menuService; //서비스 객체 넣기

    @PostMapping("/{order-num}/category")
    public ResponseEntity<Map<String, String>> setCategory(@PathVariable("order-num") Integer orderNum,
                                                           @RequestBody MenuDTO menuDTO) {
        Map<String, String> response = new HashMap<>();
        try {
            Integer categoryId = menuDTO.getCategoryId();
            response.put("code", "SU");
            response.put("message", "Success.");
            response.put("categoryId", categoryId.toString());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("code", "DE");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
