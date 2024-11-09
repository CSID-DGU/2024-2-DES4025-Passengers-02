package DES4025.KIOSK.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDetailDTO {
    private Integer orderNum;
    private Integer menuNum;
    private Integer price;
    private Boolean menuTemp;
}
