package DES4025.KIOSK.Service;
import DES4025.KIOSK.Entity.Menu;
import DES4025.KIOSK.Repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuRepository menuRepository;
    public Integer getPriceByMenuName(String menuName) {
        Optional<Menu> menu = menuRepository.findByMenuName(menuName); // 메뉴 이름으로 메뉴 검색

        // 메뉴가 존재하면 가격 반환, 아니면 null 반환
        return menu.map(Menu::getPrice).orElse(null);
    }
    public Integer getMenuNumByMenuName(String menuName) {
        Optional<Menu> menu = menuRepository.findByMenuName(menuName); // 메뉴 이름으로 메뉴 검색

        // 메뉴가 존재하면 가격 반환, 아니면 null 반환
        return menu.map(Menu::getMenuNum).orElse(null);

    }
}
