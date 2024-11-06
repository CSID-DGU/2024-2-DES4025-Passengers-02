package DES4025.KIOSK.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Menu {
    @Id
    @Column(name = "menu_num", nullable = false)
    private Integer menuNum;

    @Column(name = "menu_name", nullable = false, length = 10)
    private String menuName;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "best")
    private Boolean best;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "can_temp")
    private Boolean canTemp;

    @Column(name = "can_whip")
    private Boolean canWhip;

    @Column(name = "can_add_shot")
    private Boolean canAddShot;

    @Column(name = "price")
    private Integer price;

}