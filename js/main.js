var e = React.createElement;

function Btn(props) {
    return e("div", { key: `${props.className}_${props.icon}_${props.content}`, className: `${props.className}_btn`}, 
        [
            // icon
            e("div", { key: `${props.className}_${props.icon}`, className: `${props.icon}` } ),
            // content
            e("div", { key: `${props.className}_${props.content}`, className: `${props.className}_font` } , `${props.content}`)
        ]
    );
}

function Title() {
    return e("div", { key: "title_div" }, [
        e("div", { key: "shopname", className: "shopname" }, [
            e("div", {key: "shopname_lg", className: "shopname_lg"} ,"DutyFree"),
            e("div", {key: "shopname_sm", className: "shopname_sm"} , "采盟免稅購物網")
        ]),
        e("div", { key: "btn_box", className: "btn_box" }, [
            e(Btn, { key: "btn_collect", content: "我的收藏", className: "topbar", icon:"heart" }, null ),
            e(Btn, { key: "btn_cart", content: "購物車", className: "topbar", icon:"cart-outline" }, null ),
            e(Btn, { key: "btn_login", content: "登入", className: "topbar", icon:"account" }, null )
        ]),
        e("div", { key: "search_box", className: "search_box" }, [
            e("div", { key: "search_icon", className: "search_icon" }, null ),
            e("div", { key: "search_title", className: "search_title" }, "尋找商品" ),
        ])
    ]);
}

function Nav() {
    return e("div", { key: "navgation", className: "nav" }, [
        e("div", {key: "nav_title_sale", className: "nav_title"} , "限時活動"),
        e("div", {key: "nav_title_makeup", className: "nav_title_active"} , "美妝"),
        e("div", {key: "nav_title_good", className: "nav_title"} , "精品"),
        e("div", {key: "nav_title_life", className: "nav_title"} , "生活"),
        e("div", {key: "nav_title_3c", className: "nav_title"} , "3C"),
        e("div", {key: "nav_title_food", className: "nav_title"} , "食品"),
        e("div", {key: "nav_title_pay", className: "nav_title"} , "支付優惠"),
        e("div", {key: "nav_title_brand", className: "nav_title"} , "品牌導覽"),
        e("div", {key: "nav_title_news", className: "nav_title"} , "最新消息")
    ]);
}

function TreeItem(props) {
    return e("div", { key: `${props.className}`, className: `${props.className}_item`}, 
        [
            // icon
            e("div", { key: `${props.className}_icon`, className: `${props.className}_icon` } ),
            // content
            e("div", { key: `${props.className}_font`, className: `${props.className}_font` } , `${props.content}`)
        ]
    );
}

function Tree() {
    return e("div", { key: "tree_div", className: "tree" }, [
        e(TreeItem, {key: "tree_makeup", className: "tree_active", content: "美妝"} , null), 
        e(TreeItem, {key: "tree_care", className: "tree_active_2", content: "保養"} , null), 
        e(TreeItem, {key: "tree_face", className: "tree_bottom", content: "臉部保養"} , null), 
        e(TreeItem, {key: "tree_hair", className: "tree_bottom", content: "美體美髮"} , null), 
        e(TreeItem, {key: "tree_make", className: "tree_inactive", content: "彩妝"} , null), 
        e(TreeItem, {key: "tree_perfume", className: "tree_inactive", content: "香水"} , null)
    ]);
}

function CheckItem(props){
    return e("div", { key: `${props.className}_div`}, 
        [
            // checkbox
            e("div", { key: `${props.className}_${props.content}_checkbox`, className: `${props.className}` } ),
            // content
            e("div", { key: `${props.className}_${props.content}`, className: `${props.className}_font` } , `${props.content}`)
        ]
    );
}

function Filter() {
    return e("div", { key: "filter_div", className: "filter" }, [
        e("div", {key: "filter_box", className: "filter_box_open"}, [
            e("div", {key: "filter_price", className: "filter_text"}, "價格範圍"), 
            e("div", {key: "open_arrow", className: "open_arrow"}, null), 
            e(CheckItem, {key: "999", className: "checked", content: "999元以下"}, null),
            e(CheckItem, {key: "1999", className: "checked", content: "1,000~1,999元"}, null),
            e(CheckItem, {key: "4999", className: "checked", content: "2,000~4,999元"}, null),
            e(CheckItem, {key: "9999", className: "checked", content: "5,000~9,999元"}, null),
            e(CheckItem, {key: "19999", className: "unchecked", content: "1,0000~1,9999元"}, null),
            e(CheckItem, {key: "49999", className: "unchecked", content: "2,0000~4,9999元"}, null),
            e(CheckItem, {key: "59999", className: "unchecked", content: "5,0000以上"}, null),
        ]), 
        e("div", {key: "filter_box_prod", className: "filter_box_close"}, [
            e("div", {key: "filter_prod", className: "filter_text"}, "商品特色"), 
            e("div", {key: "close_arrow_prod", className: "close_arrow"}, null), 
        ]), 
        e("div", {key: "filter_box_color", className: "filter_box_close"}, [
            e("div", {key: "filter_color", className: "filter_text"}, "顏色"), 
            e("div", {key: "close_arrow_color", className: "close_arrow"}, null), 
        ])
    ]);
}

function TopBar() {
    return e("div", { key: "topbar_div", className: "topbar" }, [
        e(Title, {  key: "title", className: "title" }, null),
        e(Nav, {  key: "nav", className: "nav" }, null)
    ]);
}

function SideBar() {
    return e("div", { key: "sidebar_div", className: "sidebar" }, [
        e(Tree, {  key: "tree" }, null),
        e(Filter, {  key: "filter", className: "filter" }, null)
    ]);
}

function CommdityList() {
    return e("div", { key: "commodity_list_div", className: "commodity_list" }, [
        e("div", {key: "list_item_1", className: "list_item_1"} , null), 
        e("div", {key: "list_item_2", className: "list_item_2"} , null), 
        e("div", {key: "list_item_3", className: "list_item_3"} , null), 
        e("div", {key: "list_item_4", className: "list_item_4"} , null), 
        e("div", {key: "list_item_5", className: "list_item_5"} , null), 
        e("div", {key: "list_item_6", className: "list_item_6"} , null), 
        e("div", {key: "list_item_7", className: "list_item_7"} , null), 
        e("div", {key: "list_item_8", className: "list_item_8"} , null), 
        e("div", {key: "list_item_9", className: "list_item_9"} , null), 
        e("div", {key: "list_item_10", className: "list_item_10"} , null), 
        e("div", {key: "list_item_11", className: "list_item_11"} , null), 
        e("div", {key: "list_item_12", className: "list_item_12"} , null)
    ]);
}

function Page() {
    return e("div", { key: "page_div", className: "page" }, [
        e("div", {key: "page_num_1", className: "page_num"} , "1"), 
        e("div", {key: "page_num_2", className: "page_num_hide"} , "2"), 
        e("div", {key: "page_num_3", className: "page_num_hide"} , "3"), 
        e("div", {key: "page_num_4", className: "page_num_hide"} , "4"), 
        e("div", {key: "page_num_5", className: "page_num_hide"} , "5"), 
        e("div", {key: "page_num_6", className: "page_num_hide"} , "6")
    ]);
}

function Commodity() {
    return e("div", { key: "commodity_div", className: "commodity" }, [
        e("div", {  key: "sorting", className: "sorting"  }, null),
        e("div", {  key: "view", className: "view"  }, null),
        e(CommdityList, {  key: "commodity_list" }, null),
        e(Page, {  key: "page" }, null),
    ]);
}

function Content() {
    return e("div", { key: "content_div", className: "content" }, [
        e("div", {  key: "banner", className: "banner" }, null),
        e(SideBar, {  key: "sidebar" }, null),
        e(Commodity, {  key: "commodity" }, null)
    ]);
}

function Bottom() {
    return e("div", { key: "bottom_div", className: "bottom" }, [
        e("div", {key: "bottom_title_div", className: "bottom_title_div"}, [
            e("div", {  key: "bottom_title_about", className: "bottom_title" }, "關於采盟 About TASA MENG"),
            e("div", {  key: "bottom_title_service", className: "bottom_title" }, "服務政策 Service Policy"),
            e("div", {  key: "bottom_title_costom", className: "bottom_title" }, "客服中心 Costomer Center"),
        ]),
        e("div", {key: "bottom_content_div", className: "bottom_content_div"}, [
            e("div", {  key: "bottom_content_us", className: "bottom_content" }, "關於我們"),
            e("div", {  key: "bottom_content_service", className: "bottom_content" }, "服務條款"),
            e("div", {  key: "bottom_content_shopflow", className: "bottom_content" }, "購物流程")
        ]),
        e("div", {key: "bottom_content_div2", className: "bottom_content_div"}, [
            e("div", {  key: "bottom_content_public", className: "bottom_content" }, "官方網站"),
            e("div", {  key: "bottom_content_member", className: "bottom_content" }, "會員條款"),
            e("div", {  key: "bottom_content_notify", className: "bottom_content" }, "購物注意事項")
        ]),
        e("div", {key: "bottom_content_div3", className: "bottom_content_div"}, [
            e("div", {  key: "bottom_content_fb", className: "bottom_content" }, "粉絲團網站"),
            e("div", {  key: "bottom_content_law", className: "bottom_content" }, "免責聲明"),
            e("div", {  key: "bottom_content_qa", className: "bottom_content" }, "常見問題")
        ]),
        e("div", {key: "bottom_content_div4", className: "bottom_content_div"}, [
            e("div", {  key: "bottom_content_prod", className: "bottom_content" }, "企業網站"),
            e("div", {  key: "bottom_content_policy", className: "bottom_content" }, "隱私權政策"),
            e("div", {  key: "bottom_content_contact", className: "bottom_content" }, "聯絡我們")
        ])
    ]);
}

function DutyFree() {
    return e("div", { key: "dutyfree", className: "dutyfree" }, [
        e(TopBar, { key: "topbar" }, null),
        e(Content, { key: "content" }),
        e(Bottom, { key: "bottom" })
    ]);
}

ReactDOM.render(e(DutyFree), document.getElementById("root"));