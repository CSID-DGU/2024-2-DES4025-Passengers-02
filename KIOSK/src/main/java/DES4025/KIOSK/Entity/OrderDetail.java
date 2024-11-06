package DES4025.KIOSK.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "order_details")
public class OrderDetail {
    @Id
    @Column(name = "order_detail_num", nullable = false)
    private Integer orderDetailNum;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_num")
    private dOrder orderNum;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "menu_num")
    private Menu menuNum;

    @Column(name = "menu_amount")
    private Integer menuAmount;

    @Column(name = "menu_temp")
    private Boolean menuTemp;

    @Column(name = "whipped")
    private Integer whipped;

    @Column(name = "add_shot")
    private Integer addShot;

    @Column(name = "price")
    private Integer price;

}