import { Tag } from "antd";

// Цвета
// processing
// success
// error
// warning
// magenta
// red
// volcano
// orange
// gold
// lime
// green
// cyan
// blue
// geekblue
// purple 

class Tags {
    static programming = <Tag bordered={true} color="processing">
        программирование
    </Tag>;
    static devices = <Tag bordered={true} color="success">
        переферия
    </Tag>
    static opinion = <Tag bordered={true} color="purple">
        мнение
    </Tag>
};

export default Tags;