package DES4025.KIOSK.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "dOrder")
public class dOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_num")
    private Integer orderNum;

    @Column(name = "take_out_mode")
    private Boolean takeOutMode;

    @Column(name = "order_date")
    @CreationTimestamp
    private Instant orderDate;

    @Column(name = "price")
    private Integer price;

}