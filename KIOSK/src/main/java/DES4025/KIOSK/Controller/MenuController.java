package DES4025.KIOSK.Controller;

import DES4025.KIOSK.DTO.MenuDTO;
import DES4025.KIOSK.Entity.Menu;
import DES4025.KIOSK.Service.MenuService;
import DES4025.KIOSK.Service.OrderDetailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MenuController {

    private final MenuService menuService; //서비스 객체 넣기
    private final OrderDetailService orderDetailService;
    //카테고리 선택
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

    //메뉴선택후 가격 response
    @PostMapping("/{order-num}/menu-select")
    public ResponseEntity<Map<String, Object>> selectMenu(@PathVariable("order-num") Integer orderNum,
                                                          @RequestBody MenuDTO menuDTO) {
        Map<String, Object> response = new LinkedHashMap<>();

        try {
            //데이터 가져오기
            String menuName = menuDTO.getMenuName(); //얘는 리퀘스트로 받아온 데이터 (=DTO)
            Integer price = menuService.getPriceByMenuName(menuName); //얘는 db에서 가져올 데이터(서비스-리포지토리 이용)
            Integer menuNum = menuService.getMenuNumByMenuName(menuName);
            //선택한 메뉴 db에 저장하기
            orderDetailService.saveOrderDetail(orderNum, menuNum);

            Map<String, Object> selectedMenu = new LinkedHashMap<>();
            selectedMenu.put("menu_name", menuName);
            selectedMenu.put("price", price);

            response.put("code", "SU");
            response.put("message", "Success.");
            response.put("selectedMenu", selectedMenu);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("code", "DE");
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
