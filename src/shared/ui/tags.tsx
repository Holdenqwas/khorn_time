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
    static programming = <Tag bordered={false} color="processing">
        программирование
    </Tag>;

    static devices = <Tag bordered={false} color="success">
        переферия
    </Tag>
};

export default Tags;