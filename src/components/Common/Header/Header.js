import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/css/header.css';

import BlockContent from './DanhMucSP/BlockContent';
import SlideShow from './SlideShow';

import img1 from '../../assets/img/home/1-min.jpg';
import img2 from '../../assets/img/home/2-min.jpg';
import img3 from '../../assets/img/home/3-min.jpg';
import img4 from '../../assets/img/home/4-min.jpg';
import img5 from '../../assets/img/home/5-min.jpg';


const contents = [
    {
        name:'Sách Trong Nước', link:'/sach-trong-nuoc',
        cate0: 'VĂN HỌC', child0: 'Tiểu thuyết', child1: 'Truyện ngắn', child2: 'Light novel', child3: 'Ngôn tình', child4: 'Xem thêm ...',
        link0: '/van-hoc', clink0: '/van-hoc/tieu-thuyet', clink1: '/van-hoc/truyen-ngan', clink2: '/van-hoc/light-novel', clink3: '/van-hoc/ngon-tinh',
        cate1: 'KINH TẾ',child10: 'Bài học kinh doanh', child11: ' Quản trị - Lãnh đạo', child12: ' Marketing - Bán hàng', child13: 'Phân tích kinh tế', child14: 'Xem thêm ...',
        link1: '/kinh-te', clink10: '/kinh-te/bai-hoc-kinh-doanh', clink11: '/kinh-te/quan-tri-lanh-dao', clink12: '/kinh-te/marketing', clink13: '/kinh-te/phan-tich-kinh-te',
        cate2: 'TÂM LÝ', child20: 'Kĩ năng sống', child21: 'Rèn luyện nhân cách', child22: 'Tâm lý', child23: 'Sách cho tuổi mới lớn', child24: 'Xem thêm ...',
        link2: '/tam-ly', clink20: '/tam-ly/ki-nang-song', clink21: '/tam-ly/ren-luyen-nhan-cach', clink22: '/tam-ly/tam-ly', clink23: '/tam-ly/sach-cho-tuoi-moi-lon',
        cate3: 'NUÔI DẠY CON', child30: 'Cẩm nang làm mẹ', child31: 'Phương pháp giáo dục trẻ', child32: 'Phát triển trí tuệ', child33: 'Phát triển kĩ năng', child34: 'Xem thêm ...',
        link3: '/nuoi-day-con', clink30: '/nuoi-day-con/cam-nang-lam-me', clink31: '/nuoi-day-con/phuong-phap-giao-duc-tre', clink32: '/nuoi-day-con/phat-trien-tri-tue', clink33: '/nuoi-day-con/phat-trien-ki-nang',
        cate4: 'THIẾU NHI', child40: 'Manga comic', child41: 'Kiến thức bách khoa', child42: 'Sách kĩ năng sống', child43: 'Vừa học vừa chơi', child44: 'Xem thêm ...',
        link4: '/thieu-nhi', clink40: '/thieu-nhi/manga-comic', clink41: '/thieu-nhi/kien-thuc-bach-khoa', clink42: '/thieu-nhi/sach-ki-nang-song', clink43: '/thieu-nhi/vua-hoc-vua-choi',
        cate5: 'TIỂU SỬ HỒI KÝ', child50: 'Câu chuyện Cuộc đời', child51: 'Chính trị', child52: 'Kinh tế', child53: 'Giải trí', child54: 'Xem thêm ...',
        link5: '/tieu-su-hoi-ky', clink50: '/tieu-su-hoi-ky/cau-chuyen-cuoc-doi', clink51: '/tieu-su-hoi-ky/chinh-tri', clink52: '/tieu-su-hoi-ky/kinh-te', clink53: '/tieu-su-hoi-ky/giai-tri',
        cate6: 'GIÁO KHOA THAM KHẢO', child60: 'Cấp 1', child61: 'Cấp 2', child62: 'Cấp 3', child63: 'Luyện thi ĐH', child64: 'Xem thêm ...',
        link6: '/giao-khoa-tham-khao', clink60: '/giao-khoa-tham-khao/cap-1', clink61: '/giao-khoa-tham-khao/cap-2', clink62: '/giao-khoa-tham-khao/cap-3', clink63: '/giao-khoa-tham-khao/luyen-thi-dai-hoc',
        cate7: 'SÁCH NGOẠI NGỮ', child70: 'Tiếng Anh', child71: 'Tiếng Nhật', child72: 'Tiếng Hoa', child73: 'Tiếng Pháp', child74: 'Xem thêm ...',
        link7: '/sach-ngoai-ngu', clink70: '/sach-ngoai-ngu/tieng-anh', clink71: '/sach-ngoai-ngu/tieng-nhat', clink72: '/sach-ngoai-ngu/tieng-hoa', clink73: '/sach-ngoai-ngu/tieng-phap',
    },
    {
        name:'Foreign Books,',
        cate0: 'FICTION', child0: 'Contemporary Fiction', child1: 'Romance', child2: 'Fantasy', child3: 'Classics', child4: 'Xem thêm ...',
        cate1: 'BUISINESS',child10: 'Buisiness & Management', child11: 'Economics', child12: 'Finance & Accounting', child14: 'Xem thêm ...',
        cate2: 'DEVELOPMENT', child20: 'Popolar Psychology', child21: 'Advice On Careers', child22: 'Success', child23: 'Personal Finance', child24: 'Xem thêm ...',
        cate3: 'CHILDREN', child30: 'Picture', child31: 'Fiction', child32: 'Education', child33: 'Non-Fiction', child34: 'Xem thêm ...',
        cate4: 'DICTIONARIES', child40: 'LDT: English', child41: 'ELT: English', child42: 'Dictionaries',  child44: 'Xem thêm ...',
        cate5: 'LANGUAGES', child50: 'Japan Books', child51: 'German Books', child52: 'French Books', child54: 'Xem thêm ...',
        cate6: 'CATEGORIES', child60: 'Biography', child61: 'Society & Social Sciences', child62: 'Science & Geography', child63: 'Food & Drinks', child64: 'Xem thêm ...'
    },
    {
        name:'VPP Dụng Cụ Học Sinh', link: '/van-phong-pham',
        cate0: 'BÚT VIẾT', child0: 'Bút bi', child1: 'Bút gel', child2: 'Bút mực', child3: 'Bút chì', child4: 'Xem thêm ...',
        link0: '/but-viet', clink0: '/but-viet/but-bi', clink1: '/but-viet/but-gel', clink2: '/but-viet/but-muc', clink3: '/but-viet/but-chi',
        cate1: 'DỤNG CỤ HỌC SINH',child10: 'Balô - Cặp xách', child11: 'Thước kẻ', child12: 'Hộp bút', child13: 'Dụng cụ học tập', child14: 'Xem thêm ...',
        link1: '/dung-cu-hoc-sinh', clink10: '/dung-cu-hoc-sinh/balo', clink11: '/dung-cu-hoc-sinh/thuoc-ke', clink12: '/dung-cu-hoc-sinh/hop-but', clink13: '/dung-cu-hoc-sinh/dung-cu-hoc-tap',
        cate2: 'DỤNG CỤ VĂN PHÒNG', child20: 'Bìa', child21: 'Kẹp Giấy', child22: 'Bàn đục lỗ', child23: 'Hóa đơn', child24: 'Xem thêm ...',
        link2: '/dung-cu-van-phong', clink20: '/dung-cu-van-phong/bia', clink21: '/dung-cu-van-phong/kep-giay', clink22: '/dung-cu-van-phong/ban-duc-lo', clink23: '/dung-cu-van-phong/hoa-don',
        cate3: 'DỤNG CỤ VẼ', child30: 'Bút Vẽ', child31: 'Màu vẽ', child32: 'Khay', child33: 'Tập vẽ', child34: 'Xem thêm ...',
        link3: '/dung-cu-ve', clink30: '/dung-cu-ve/but-ve', clink31: '/dung-cu-ve/mau-ve', clink32: '/dung-cu-ve/khay', clink33: '/dung-cu-ve/tap-ve',
        cate4: 'SẢN PHẨM VỀ GIẤY', child40: 'Vở viết các loại', child41: 'Sổ tay các loại', child42: 'Giấy Photo', child43: 'Giấy note',  child44: 'Xem thêm ...',
        link4: '/san-pham-ve-giay', clink40: '/san-pham-ve-giay/vo', clink41: '/san-pham-ve-giay/so-tay-cac-loai', clink42: '/san-pham-ve-giay/giay-photo', clink43: '/san-pham-ve-giay/giay-note',
        cate5: 'SẢN PHẨM KHÁC', child50: 'Dao rọc giấy', child51: 'Băng keo', child52: 'Túi Zip', child53: 'Bảng', child54: 'Xem thêm ...',
        link5: '/san-pham-khac', clink50: '/san-pham-khac/dao-roc-giay', clink51: '/san-pham-khac/bang-keo', clink52: '/san-pham-khac/tui-zip', clink53: '/san-pham-khac/bang',
        cate6: 'SẢN PHẨM ĐIỆN TỬ', child60: 'Máy tính điện tử', child61: 'Đồng hồ điện tử',child62: 'Đèn led',child63: 'Đồ chơi điện tử', child64: 'Xem thêm ...',
        link6: '/san-pham-dien-tu', clink60: '/san-pham-dien-tu/may-tinh-dien-tu', clink61: '/san-pham-dien-tu/dong-ho-dien-tu', clink62: '/san-pham-dien-tu/den-led', clink63: '/san-pham-dien-tu/do-choi-dien-tu',
    },
    {
        name:'Đồ Chơi', link: '/do-choi',
        cate0: 'ĐỒ CHƠI NỔI BẬT', child0: 'Xếp hình', child1: 'Đồ chơi giáo dục', child2: 'Đồ chơi điều khiển', child3: 'Board game', child4: 'Xem thêm ...',
        link0: '/do-choi-noi-bat', clink0: '/do-choi-noi-bat/xep-hinh', clink1: '/do-choi-noi-bat/do-choi-giao-duc', clink2: '/do-choi-noi-bat/do-choi-dieu-khien', clink3: '/do-choi-noi-bat/board-game',
        cate1: 'PHƯƠNG TIỆN CÁC LOẠI',child10: 'Ô tô', child11: 'Máy bay', child12: 'Tàu hỏa', child13: 'Tàu thủy', child14: 'Xem thêm ...',
        link1: '/phuong-tien-cac-loai', clink10: '/phuong-tien-cac-loai/o-to', clink11: '/phuong-tien-cac-loai/may-bay', clink12: '/phuong-tien-cac-loai/tau hoa', clink13: '/phuong-tien-cac-loai/tau-thuy',
        cate2: 'MÔ HÌNH CÁC LOẠI', child20: 'Mô hình giấy', child21: 'Mô hình gỗ', child22: 'Mô hình Nhân vật', child23: 'Mô hình động vật', child24: 'Xem thêm ...',
        link2: '/mo-hinh-cac-loai', clink20: '/mo-hinh-cac-loai/mo-hinh-giay', clink21: '/mo-hinh-cac-loai/mo-hinh-go', clink22: '/mo-hinh-cac-loai/mo-hinh-nhan-vat', clink23: '/mo-hinh-cac-loai/mo-hinh-dong-vat',
        cate3: 'LEGO', child30: 'Ít chi tiết', child31: 'Vừa vừa chi tiết', child32: 'Nhiêu chi tiết', child33: 'Rất nhiều chi tiết', child34: 'Xem thêm ...',
        link3: '/lego', clink30: '/lego/it-chi-tiet', clink31: '/lego/vua-chi-tiet', clink32: '/lego/nhieu-chi-tiet', clink33: '/lego/rat-nhieu-chi-tiet',
        cate4: 'ĐỒ CHƠI KHÁC', child40: 'Bột nặn', child41: 'Búp bê', child42: 'Thú bông', child43: 'Spinner',  child44: 'Xem thêm ...',
        link4: '/do-choi-khac', clink40: '/do-choi-khac/bot-nan', clink41: '/do-choi-khac/bup-be', clink42: '/do-choi-khac/bup-be', clink43: '/do-choi-khac/spinner',
        cate5: 'TRUNG Thu', child50: 'Đèn lồng', child51: 'Mặt nạ', child52: 'Trống', child53: 'Gậy', child54: 'Xem thêm...',
        link5: '/trung-thu', clink50: '/trung-thu/den-long', clink51: '/trung-thu/mat-na', clink52: '/trung-thu/trong', clink53: '/trung-thu/gay',
    },
    {
        name:'Tuyển Tập', link: '/tuyen-tap',
        cate0: 'TÁC GIẢ VIỆT NAM', child0: 'Nguyễn Nhật Ánh', child1: 'Nguyễn Ngọc Tư', child2: 'Nguyễn Ngọc Thạch', child3: 'Nguyễn Ngọc Ngạn', child4: 'Xem thêm ...',
        link0: '/authors/viet-nam', clink0: '/author/nguyen-nhat-anh', clink1: '/author/nguyen-ngoc-tu', clink2: '/author/nguyen-ngoc-thach', clink3: '/author/nguyen-ngoc-ngan',
        cate1: 'TÁC GIẢ NƯỚC NGOÀI',child10: 'Dan Brown', child11: 'Paulo Coelho', child12: 'Rick Riordan', child13: 'Sydney Shelton', child14: 'Xem thêm ...',
        link1: '/authors/nuoc-ngoai', clink10: '/author/dan-brown', clink11: '/author/paulo-coelho', clink12: '/author/rick-riordan', clink13: '/author/sydney-shelton',
        cate2: 'CHỦ ĐỀ', child20: 'Harry Potter', child21: 'Game of thrones', child22: 'Middle School', child23: 'Sherlock Holmes', child24: 'Xem thêm ...',
        link2: '/do-choi-noi-bat', clink20: '/do-choi-noi-bat/xep-hinh', clink21: '/do-choi-noi-bat/do-choi-giao-duc', clink22: '/do-choi-noi-bat/do-choi-dieu-khien', clink23: '/do-choi-noi-bat/board-game',
        cate3: 'SERIES MANGA', child30: 'Doraemon', child31: 'Conan', child32: 'Shin - cậu bé bút chì', child33: 'Dragon Ball', child34: 'Xem thêm ...',
        link3: '/thieu-nhi/manga-comic', clink30: '/truyen-tranh-nhat-ban/doremon', clink31: '/truyen-tranh-nhat-ban/conan', clink32: '/truyen-tranh-nhat-ban/shin', clink33: '/truyen-tranh-nhat-ban/dragon-ball',
    },
    {
        name:'Sách Theo Nhà Cung Cấp', link: '/sach-trong-nuoc',
        cate0: 'NXB VIỆT NAM', child0: 'NXB Trẻ', child1: 'Kim Đồng', child2: 'Nhã Nam', child3: 'Minh Long', child4: 'Xem thêm ...',
        link0: '/sach-trong-nuoc', clink0: '/sach-trong-nuoc', clink1: '/sach-trong-nuoc', clink2: '/sach-trong-nuoc', clink3: '/sach-trong-nuoc',
        cate1: 'NXB NƯỚC NGOÀI',child10: 'Oxford', child11: 'Usborne', child12: 'Pearson Longman', child13: 'Penguin Books', child14: 'Xem thêm ...',
        link1: '/sach-trong-nuoc', clink10: '/sach-trong-nuoc', clink11: '/sach-trong-nuoc', clink12: '/sach-trong-nuoc', clink13: '/sach-trong-nuoc',
    },
    {
        name:'Thương Hiệu VPP', link: '/van-phong-pham',
        cate0:'Thương hiệu VN', child0:'Thiên Long', child1: 'Morning Glory', child2: 'Kyobo', child3: 'Artline', child4:'Xem thêm ...',
        link0: '/van-phong-pham', clink0: '/van-phong-pham', clink1: '/van-phong-pham', clink2: '/van-phong-pham', clink3: '/van-phong-pham',
        cate1: 'Thương hiệu nước ngoài',child10: 'Stabilo', child11: 'Maped', child12: 'Bantex', child13: 'Faber', child14: 'Xem thêm ...',
        link1: '/van-phong-pham', clink10: '/van-phong-pham', clink11: '/van-phong-pham', clink12: '/van-phong-pham', clink13: '/van-phong-pham',
    },
    {
        name:'Thương Hiệu Đồ Chơi', link: '/do-choi',
        cate0: 'THƯƠNG HIỆU VN',child0:'Yot', child1: 'tiNiToy', child2: 'Lego', child3: 'Toy', child4: 'Xem thêm ...',
        link0: '/do-choi', clink0: '/do-choi', clink1: '/do-choi', clink2: '/do-choi', clink3: '/do-choi',
        cate1: 'THƯƠNG HIỆU NƯỚC NGOÀI',child10: 'VBCare', child11: 'Hot Wheels', child12: 'Play-Doh', child13: 'Barbie', child14: 'Xem thêm ...',
        link1: '/do-choi', clink10: '/do-choi', clink11: '/do-choi', clink12: '/do-choi', clink13: '/do-choi',
    },
    {
        name:'Bách hóa online Lưu niệm', link: '/bach-hoa-online-luu-niem',
        cate0:'ĐỒ DÙNG CÁ NHÂN', child0: 'Túi Ví Thời Trang', child1: 'Đồng hồ', child2: 'Ly Cốc Bình Nước', child3: 'Hộp đựng đồ', child4: 'Xem thêm ...',
        link0: '/do-dung-ca-nhan', clink0: '/do-dung-ca-nhan/tui-vi', clink1: '/do-dung-ca-nhan/dong-ho', clink2: '/do-dung-ca-nhan/ly-coc-binh-nuoc', clink3: '/do-dung-ca-nhan/hop-dung-do',
        cate1: 'ĐỒ ĐIỆN GIA DỤNG', child10: 'Đèn bàn', child11: 'Đèn ngủ', child12: 'Đèn pin', child13: 'Minh Vy', child14: 'Xem thêm ...',
        link1: '/do-dien-gia-dung', clink10: '/do-dien-gia-dung/den-ban', clink11: '/do-dien-gia-dung/den-ngu', clink12: '/do-dien-gia-dung/den-pin', clink13: '/do-dien-gia-dung/minh-vy',
        cate2: 'ĐỒ TRANG TRÍ', child20: 'Phụ kiện', child21: 'Vật liệu trang trí', child22: 'Trang trí nhà cửa', child23: 'Linh tinh',child24: 'Xem thêm ...',
        link2: '/do-trang-tri', clink20: '/do-trang-tri/phu-kien', clink21: '/do-trang-tri/vat-lieu-trang-tri', clink22: '/do-trang-tri/trang-tri-nha-cua', clink23: '/do-trang-tri/linh-tinh',
        cate3: 'LƯU NIỆM', child30: 'Móc khóa', child31: 'Gương lược', child32: 'Khung hình', child33: 'Tượng',child34: 'Xem thêm ...',
        link3: '/luu-niem', clink30: '/luu-niem/moc-khoa', clink31: '/luu-niem/guong-luoc', clink32: '/luu-niem/khung-hinh', clink33: '/luu-niem/tuong',
        cate4: 'SẢN PHẨM KHÁC', child40: 'Chăm sóc cá nhân', child41: 'Nhà cửa đời sống', child42: 'Thiết bị số - Phụ kiện số',child43: 'Linh tinh', child44: 'Xem thêm ...',
    },
    {
        name:'Gốm sứ Bát Tràng', link: '/gom-su-bat-trang',
        cate0:'ĐỒ GIA DỤNG', child0: 'Cốc', child1: 'Chén', child2: 'Bát', child3: 'Đĩa', child4: 'Xem thêm ...',
        link0: '/gom-su-bat-trang', clink0: '/gom-su-bat-trang', clink1: '/gom-su-bat-trang', clink2: '/gom-su-bat-trang', clink3: '/gom-su-bat-trang',
        cate1: 'TRANG TRÍ', child10: 'Đèn xông tinh dầu', child11: 'Tượng thạch cao',child12: 'Đèn ngủ', child14: 'Xem thêm ...',
        link1: '/gom-su-bat-trang', clink10: '/gom-su-bat-trang', clink11: '/gom-su-bat-trang', clink12: '/gom-su-bat-trang',
        cate2: 'HOA', child20: 'Lọ hoa', child21: 'Chậu hoa',child22: 'Đế cắm hoa', child24: 'Xem thêm ...',
        link2: '/gom-su-bat-trang', clink20: '/gom-su-bat-trang', clink21: '/gom-su-bat-trang', clink22: '/gom-su-bat-trang',
    },
    {
        name:'Truyện Tranh', link: '/truyen-tranh',
        cate0: 'TRUYỆN TRANH VIỆT NAM', child0: 'Truyện thiếu nhi', child1: 'Truyện lịch sử', child2: 'Truyện người trưởng thành', child3: 'Truyện hài', child4: 'Xem thêm ...',
        link0: '/truyen-tranh-viet-nam', clink0: '/truyen-tranh-viet-nam/thieu-nhi', clink1: '/truyen-tranh-viet-nam/lich-su', clink2: '/truyen-tranh-viet-nam/truyen-nguoi-truong-thanh', clink3: '/truyen-tranh-viet-nam/truyen-hai',
        cate1: 'TRUYỆN TRANH NHẬT BẢN', child10: 'Anime', child11: 'Comedy', child12: 'Fantasy',child13: 'Trinh thám', child14: 'Xem thêm ...',
        link1: '/truyen-tranh-nhat-ban', clink10: '/truyen-tranh-nhat-ban/conan', clink11: '/truyen-tranh-nhat-ban/doremon', clink12: '/truyen-tranh-nhat-ban/shin', clink13: '/truyen-tranh-nhat-ban/dragon-ball',
        cate2: 'TRUYỆN TRANH HÀN QUỐC', child20: 'Manhwa', child21: 'NTR', child22: 'Tragedy', child24: 'Xem thêm ...',
        link2: '/truyen-tranh', clink20: '/truyen-tranh', clink21: '/truyen-tranh', clink22: '/truyen-tranh', clink23: '/truyen-tranh',
        cate3: 'TRUYỆN TRANH TÀU',child30: 'Ngôn tình', child31: 'Tu tiên', child32: 'Tiên hiệp', child33: 'Kiếm hiệp', child34: 'Xem thêm ...',
        link3: '/truyen-tranh', clink30: '/truyen-tranh', clink31: '/truyen-tranh', clink32: '/truyen-tranh', clink33: '/truyen-tranh',
    }
];

const collections = [
    {src: img1,caption: ""},
    {src: img2,caption: ""},
    {src: img3,caption: ""},
    {src: img4,caption: ""},
    {src: img5,caption: ""}
];

class Header extends Component {
    render(){
        return(
            <section id="header" className="header">
                
                <div className="header-breadcrumbs background-menu-homepage">
                    <div className="container">
                        <div className="row custom-menu-homepage">
                            <div className="col-md-3 hidden-max-width-992">
                                <div id="ves-verticalmenu" className="block block-success ves-verticalmenu highlighted hidden-sm offcanvas-actived">
                                    <div className="block-title hidden-xs hidden-sm">
                                        <span>Danh muc san pham</span>
                                        <em className="shapes right"></em>
                                        <em className="line"></em>
                                    </div>
                                    <div className="block-content">
                                        <div className="navbar navbar-inverse">
                                            <div id="verticalmenu" className="verticalmenu offset-canvas-menu-play" role="navigation" data-offcanvas="true">
                                                <div className="navbar">
                                                    <Link to="" data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle">
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                    </Link>
                                                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                                                        <ul className="nav navbar-nav vertical menu">
                                                            {contents.map((content, i) => {
                                                                return <BlockContent {...content} key={i} />
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="container-inner">
                                    <div className="container-inner">
                                        <div className="row">
                                            <div className="col-sms12 col-md-12 col-sm-12">
                                                <div className="inivoslider swiper-container swiper-container-horizontal">
                                                    <div className="slider-header">
                                                        <SlideShow 
                                                            input={collections}
                                                            ratio={`3:2`}
                                                            mode={`automatic`}
                                                            timeout={`3000`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}



export default Header;