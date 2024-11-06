package DES4025.KIOSK.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "`Order`")
public class Order {
    @Id
    @Column(name = "order_num", nullable = false)
    private Integer orderNum;

    @Column(name = "take_out_mode")
    private Boolean takeOutMode;

    @Column(name = "order_date")
    private Instant orderDate;

    @Column(name = "price")
    private Integer price;

}