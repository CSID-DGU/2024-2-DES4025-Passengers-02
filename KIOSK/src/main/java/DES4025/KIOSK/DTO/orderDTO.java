package DES4025.KIOSK.DTO;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@Builder
@ToString
public class orderDTO {
    private String orderDetail;
    private int total_price;
}
