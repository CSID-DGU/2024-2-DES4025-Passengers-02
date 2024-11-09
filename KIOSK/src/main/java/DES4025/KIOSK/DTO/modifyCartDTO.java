package DES4025.KIOSK.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class modifyCartDTO {
    private Integer order_detail_num = null;
    private boolean delete;
    private Integer menu_amount = null;
    private boolean menu_temp = false;
    private Integer whipped = null;
    private Integer addShot = null;
}
