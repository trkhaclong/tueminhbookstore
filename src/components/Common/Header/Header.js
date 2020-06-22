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
import img6 from '../../assets/img/home/6-min.jpg';

const contents = [
    {
        name:'Sách, Tuyện, Tác Phẩm', link:'/shop/sachtruyen',
        cate0: 'VĂN HỌC', child0: 'Tiểu thuyết', child1: 'Truyện ngắn', child2: 'Light novel', child3: 'Ngôn tình', child4: 'Xem thêm ...',
        link0: '/shop/sachtruyen/vanhoc', clink0: '/shop/sachtruyen/vanhoc/tieuthuyet', clink1: '/shop/sachtruyen/vanhoc/truyenngan', clink2: '/shop/sachtruyen/vanhoc/lightnovel', clink3: '/shop/sachtruyen/vanhoc/ngontinh',
        cate1: 'KINH TẾ',child10: 'Bài học kinh doanh', child11: ' Quản trị - Lãnh đạo', child12: ' Marketing - Bán hàng', child13: 'Phân tích kinh tế', child14: 'Xem thêm ...',
        link1: '/shop/sachtruyen/kinhte', clink10: '/shop/sachtruyen/kinhte/baihockinhdoanh', clink11: '/shop/sachtruyen/kinhte/quantrilanhdao', clink12: '/shop/sachtruyen/kinhte/marketing', clink13: '/shop/sachtruyen/kinhte/phantichkinhte',
        cate2: 'TÂM LÝ', child20: 'Kỹ năng sống', child21: 'Rèn luyện nhân cách', child22: 'Tâm lý', child23: 'Sách cho tuổi mới lớn', child24: 'Xem thêm ...',
        link2: '/shop/sachtruyen/tamly', clink20: '/shop/sachtruyen/tamly/kynangsong', clink21: '/shop/sachtruyen/tamly/renluyennhancach', clink22: '/shop/sachtruyen/tamly/tamly', clink23: '/shop/sachtruyen/tamly/sachchotuoimoilon',
        cate3: 'NUÔI DẠY CON', child30: 'Cẩm nang làm mẹ', child31: 'Phương pháp giáo dục trẻ', child32: 'Phát triển trí tuệ', child33: 'Phát triển kỹ năng', child34: 'Xem thêm ...',
        link3: '/shop/sachtruyen/nuoidaycon', clink30: '/shop/sachtruyen/nuoidaycon/camnanglamme', clink31: '/shop/sachtruyen/nuoidaycon/phuongphapgiaoductre', clink32: '/shop/sachtruyen/nuoidaycon/phattrientritue', clink33: '/shop/sachtruyen/nuoidaycon/phattrienkynang',
        cate4: 'THIẾU NHI', child40: 'Giáo dục', child41: 'Kiến thức bách khoa', child42: 'Sách kỹ năng', child43: 'Vừa học vừa chơi', child44: 'Xem thêm ...',
        link4: '/shop/sachtruyen/thieunhi', clink40: '/shop/sachtruyen/thieunhi/giaoduc', clink41: '/shop/sachtruyen/thieunhi/kienthucbachkhoa', clink42: '/shop/sachtruyen/thieunhi/kynang', clink43: '/shop/sachtruyen/thieunhi/vuahocvuachoi',
        cate5: 'TIỂU SỬ HỒI KÝ', child50: 'Câu chuyện Cuộc đời', child51: 'Chính trị', child52: 'Kinh tế', child53: 'Giải trí', child54: 'Xem thêm ...',
        link5: '/shop/sachtruyen/tieusuhoiky', clink50: '/shop/sachtruyen/tieusuhoiky/cauchuyencuocdoi', clink51: '/shop/sachtruyen/tieusuhoiky/chinhtri', clink52: '/shop/sachtruyen/tieusuhoiky/kinhte', clink53: '/shop/sachtruyen/tieusuhoiky/giaitri',
        cate6: 'GIÁO KHOA THAM KHẢO', child60: 'Cấp 1', child61: 'Cấp 2', child62: 'Cấp 3', child63: 'Luyện thi ĐH', child64: 'Xem thêm ...',
        link6: '/shop/sachtruyen/giaokhoathamkhao', clink60: '/shop/sachtruyen/giaokhoathamkhao/cap1', clink61: '/shop/sachtruyen/giaokhoathamkhao/cap2', clink62: '/shop/sachtruyen/giaokhoathamkhao/cap3', clink63: '/shop/sachtruyen/giaokhoathamkhao/luyenthidaihoc',
        cate7: 'SÁCH NGOẠI NGỮ', child70: 'Tiếng Anh', child71: 'Tiếng Nhật', child72: 'Tiếng Hoa', child73: 'Tiếng Pháp', child74: 'Xem thêm ...',
        link7: '/shop/sachtruyen/sachngoaingu', clink70: '/shop/sachtruyen/sachngoaingu/tienganh', clink71: '/shop/sachtruyen/sachngoaingu/tiengnhat', clink72: '/shop/sachtruyen/sachngoaingu/tienghoa', clink73: '/shop/sachtruyen/sachngoaingu/tiengphap',
    },
    {
        name:'Thiếu Nhi',
        cate0: 'ĐỒ CHƠI', child0: 'Lego', child1: 'Thú bông', child2: 'Đồ chơi điều khiển', child3: 'Mô hình', child4: 'Xem thêm ...',
        link0: '/shop/sachtruyen/vanhoc', clink0: '/shop/dochoi/lego', clink1: '/shop/dochoi/dochoikhac/thubong', clink2: '/shop/dochoi/noibat/dieukhien', clink3: '/shop/dochoi/mohinh',
        cate1: 'HỌC TẬP',child10: 'Vừa học vừa chơi', child11: 'Kiến thức bách khoa', child12: 'Kỹ năng', child13: 'Phát tiển trí tuệ', child14: 'Xem thêm ...',
        link1: '/shop/sachtruyen/thieunhi/giaoduc', clink10: '/shop/sachtruyen/thieunhi/vuahocvuachoi', clink11: '/shop/sachtruyen/thieunhi/kienthucbachkhoa', clink12: '/shop/sachtruyen/thieunhi/kynang', clink13: '/shop/sachtruyen/nuoidaycon/phattrientritue',
        cate2: 'DỤNG CỤ', child20: 'Bút mực', child21: 'Bút chì', child22: 'Balô', child23: 'Dụng cụ vẽ', child24: 'Xem thêm ...',
        link2: '/shop/vanphongpham/hocsinh', clink20: '/shop/vanphongpham/butviet/butmuc', clink21: '/shop/vanphongpham/butviet/butchi', clink22: '/shop/vanphongpham/hocsinh/balo', clink23: '/shop/vanphongpham/dungcuve',
        cate3: 'GIẢI TRÍ', child30: 'Đồ chơi', child31: 'Truyện tranh', child32: 'Truyện chữ', child33: 'Dụng cụ vẽ', child34: 'Xem thêm ...',
        link3: '/shop/dochoi', clink30: '/shop/dochoi', clink31: '/shop/truyentranh', clink32: '/shop/sachtruyen/thieunhi/kienthucbachkhoa', clink33: '/shop/vanphongpham/dungcuve',
   },
    {
        name:'VPP Dụng Cụ Học Sinh', link: '/shop/vanphongpham',
        cate0: 'BÚT VIẾT', child0: 'Bút bi', child1: 'Bút gel', child2: 'Bút mực', child3: 'Bút chì', child4: 'Xem thêm ...',
        link0: '/shop/vanphongpham/butviet', clink0: '/shop/vanphongpham/butviet/butbi', clink1: '/shop/vanphongpham/butviet/butgel', clink2: '/shop/vanphongpham/butviet/butmuc', clink3: '/shop/vanphongpham/butviet/butchi',
        cate1: 'DỤNG CỤ HỌC SINH',child10: 'Balô - Cặp xách', child11: 'Thước kẻ', child12: 'Hộp bút', child13: 'Dụng cụ học tập', child14: 'Xem thêm ...',
        link1: '/shop/vanphongpham/hocsinh', clink10: '/shop/vanphongpham/hocsinh/balo', clink11: '/shop/vanphongpham/hocsinh/thuocke', clink12: '/shop/vanphongpham/hocsinh/hopbut', clink13: '/shop/vanphongpham/hocsinh/dungcuhoctap',
        cate2: 'DỤNG CỤ VĂN PHÒNG', child20: 'Bìa', child21: 'Đựng tài liệu', child22: 'Bàn đục lỗ', child23: 'Hóa đơn', child24: 'Xem thêm ...',
        link2: '/shop/vanphongpham/vanphong', clink20: '/shop/vanphongpham/vanphong/bia', clink21: '/shop/vanphongpham/vanphong/dungtailieu', clink22: '/shop/vanphongpham/vanphong/banduclo', clink23: '/shop/vanphongpham/vanphong/hoadon',
        cate3: 'DỤNG CỤ VẼ', child30: 'Bút Vẽ', child31: 'Màu vẽ', child32: 'Khay', child33: 'Tập vẽ', child34: 'Xem thêm ...',
        link3: '/shop/vanphongpham/dungcuve', clink30: '/shop/vanphongpham/dungcuve/butve', clink31: '/shop/vanphongpham/dungcuve/mauve', clink32: '/shop/vanphongpham/dungcuve/khay', clink33: '/shop/vanphongpham/dungcuve/tapve',
        cate4: 'SẢN PHẨM VỀ GIẤY', child40: 'Vở viết các loại', child41: 'Sổ tay các loại', child42: 'Giấy Photo', child43: 'Giấy note',  child44: 'Xem thêm ...',
        link4: '/shop/vanphongpham/sanphamvegiay', clink40: '/shop/vanphongpham/sanphamvegiay/vo', clink41: '/shop/vanphongpham/sanphamvegiay/sotay', clink42: '/shop/vanphongpham/sanphamvegiay/giayphoto', clink43: '/shop/vanphongpham/sanphamvegiay/giaynote',
        cate5: 'SẢN PHẨM KHÁC', child50: 'Dao rọc giấy', child51: 'Băng keo', child52: 'Túi Zip', child53: 'Hộp', child54: 'Xem thêm ...',
        link5: '/shop/vanphongpham/sanphamkhac', clink50: '/shop/vanphongpham/sanphamkhac/daorocgiay', clink51: '/shop/vanphongpham/sanphamkhac/bangkeo', clink52: '/shop/vanphongpham/sanphamkhac/tuizip', clink53: '/shop/vanphongpham/sanphamkhac/hop',
        cate6: 'SẢN PHẨM ĐIỆN TỬ', child60: 'Máy tính điện tử', child61: 'Đồng hồ điện tử',child62: 'Đèn led',child63: 'Đồ chơi điện tử', child64: 'Xem thêm ...',
        link6: '/shop/vanphongpham/dientu', clink60: '/shop/vanphongpham/dientu/maytinhdientu', clink61: '/shop/vanphongpham/dientu/donghodientu', clink62: '/shop/vanphongpham/dientu/denled', clink63: '/shop/vanphongpham/dientu/dochoidientu',
    },
    {
        name:'Đồ Chơi', link: '/shop/dochoi',
        cate0: 'ĐỒ CHƠI NỔI BẬT', child0: 'Xếp hình', child1: 'Đồ chơi giáo dục', child2: 'Đồ chơi điều khiển', child3: 'Board game', child4: 'Xem thêm ...',
        link0: '/shop/dochoi/noibat', clink0: '/shop/dochoi/noibat/xephinh', clink1: '/shop/dochoi/noibat/giaoduc', clink2: '/shop/dochoi/noibat/dieukhien', clink3: '/shop/dochoi/noibat/boardgame',
        cate1: 'PHƯƠNG TIỆN CÁC LOẠI',child10: 'Ô tô', child11: 'Máy bay', child12: 'Tàu hỏa', child13: 'Tàu thủy', child14: 'Xem thêm ...',
        link1: '/shop/dochoi/phuongtien', clink10: '/shop/dochoi/phuongtien/oto', clink11: '/shop/dochoi/phuongtien/maybay', clink12: '/shop/dochoi/phuongtien/tauhoa', clink13: '/shop/dochoi/phuongtien/tauthuy',
        cate2: 'MÔ HÌNH CÁC LOẠI', child20: 'Mô hình giấy', child21: 'Mô hình gỗ', child22: 'Mô hình Nhân vật', child23: 'Mô hình động vật', child24: 'Xem thêm ...',
        link2: '/shop/dochoi/mohinh', clink20: '/shop/dochoi/mohinh/mohinhgiay', clink21: '/shop/dochoi/mohinh/mohinhgo', clink22: '/shop/dochoi/mohinh/nhanvat', clink23: '/shop/dochoi/mohinh/dongvat',
        cate3: 'LEGO', child30: 'Ít chi tiết', child31: 'Vừa vừa chi tiết', child32: 'Nhiêu chi tiết', child33: 'Rất nhiều chi tiết', child34: 'Xem thêm ...',
        link3: '/shop/dochoi/lego', clink30: '/shop/dochoi/lego/itchitiet', clink31: '/shop/dochoi/lego/vuachitiet', clink32: '/shop/dochoi/lego/nhieuchitiet', clink33: '/shop/dochoi/lego/ratnhieuchitiet',
        cate4: 'ĐỒ CHƠI KHÁC', child40: 'Bột nặn', child41: 'Búp bê', child42: 'Thú bông', child43: 'Spinner',  child44: 'Xem thêm ...',
        link4: '/shop/dochoi/dochoikhac', clink40: '/shop/dochoi/dochoikhac/botnan', clink41: '/shop/dochoi/dochoikhac/bupbe', clink42: '/shop/dochoi/dochoikhac/thubong', clink43: '/shop/dochoi/dochoikhac/spinner',
        cate5: 'TRUNG Thu', child50: 'Đèn lồng', child51: 'Mặt nạ', child52: 'Trống', child53: 'Gậy', child54: 'Xem thêm...',
        link5: '/shop/dochoi/trungthu', clink50: '/shop/dochoi/trungthu/denlong', clink51: '/shop/dochoi/trungthu/matna', clink52: '/shop/dochoi/trungthu/trongtrungthu', clink53: '/shop/dochoi/trungthu/gaytrungthu',
    },
    {
        name:'Tuyển Tập', link: '/shop/sachtruyen',
        cate0: 'TIỂU THUYẾT', child0: 'Tam quốc', child1: 'Thủy hử', child2: 'Hồng lâu mộng', child3: 'Tây du kí', child4: 'Xem thêm ...',
        link0: '/shop/sachtruyen/vanhoc/tieuthuyet', clink0: '/shop/sachtruyen/vanhoc/tieuthuyet/tamquoc', clink1: '/shop/sachtruyen/vanhoc/tieuthuyet/thuyhu', clink2: '/shop/sachtruyen/vanhoc/tieuthuyet/honglaumong', clink3: '/shop/sachtruyen/vanhoc/tieuthuyet/tayduki',
        cate1: 'TIỂU THUYẾT',child10: 'Harry Potter', child11: 'Lord of the rings', child12: 'Outlander', child13: 'Game of thrones', child14: 'Xem thêm ...',
        link1: '/shop/sachtruyen/vanhoc/tieuthuyet', clink10: '/shop/sachtruyen/vanhoc/tieuthuyet/harrypotter', clink11: '/shop/sachtruyen/vanhoc/tieuthuyet/lordoftherings', clink12: '/shop/sachtruyen/vanhoc/tieuthuyet/outlander', clink13: '/shop/sachtruyen/vanhoc/tieuthuyet/gameofthrones',
        cate2: 'NGÔN TÌNH', child20: 'Đừng nói chuyện với cô ấy', child21: 'Cuộc phiêu lưu của quả lê khổng lồ', child22: 'Như chỉ mới hôm qua', child23: 'Khi lỗi thuộc về những vì sao', child24: 'Xem thêm ...',
        link2: '/shop/sachtruyen/vanhoc/ngontinh', clink20: '/shop/sachtruyen/vanhoc/ngontinh/dungnoichuyenvoicoay', clink21: '/shop/sachtruyen/vanhoc/ngontinh/cuocphieuluucuaqualekhonglo', clink22: '/shop/sachtruyen/vanhoc/ngontinh/nhuchimoihomqua', clink23: '/shop/sachtruyen/vanhoc/ngontinh/khiloithuocvenhungvisao',
        cate3: 'SERIES MANGA', child30: 'Doraemon', child31: 'Conan', child32: 'Shin - cậu bé bút chì', child33: 'Dragon Ball', child34: 'Xem thêm ...',
        link3: '/shop/truyentranh/', clink30: '/shop/truyentranh/truyentranhnhatban/doremon', clink31: '/shop/truyentranh/truyentranhnhatban/conan', clink32: '/shop/truyentranh/truyentranhnhatban/shin', clink33: '/shop/truyentranh/truyentranhnhatban/dragonball',
    },
    {
        name:'Sách Theo Nhà Cung Cấp', link: '/shop',
        cate0: 'NXB VIỆT NAM', child0: 'NXB Trẻ', child1: 'Kim Đồng', child2: 'Nhã Nam', child3: 'Minh Long', child4: 'Xem thêm ...',
        link0: '/shop', clink0: '/shop', clink1: '/shop', clink2: '/shop', clink3: '/shop',
        cate1: 'NXB NƯỚC NGOÀI',child10: 'Oxford', child11: 'Usborne', child12: 'Pearson Longman', child13: 'Penguin Books', child14: 'Xem thêm ...',
        link1: '/shop', clink10: '/shop', clink11: '/shop', clink12: '/shop', clink13: '/shop',
    },
    {
        name:'Thương Hiệu VPP', link: '/shop/vanphongpham',
        cate0:'THƯƠNG HIỆU VN', child0:'Thiên Long', child1: 'Morning Glory', child2: 'Kyobo', child3: 'Artline', child4:'Xem thêm ...',
        link0: '/shop/vanphongpham', clink0: '/shop/vanphongpham', clink1: '/shop/vanphongpham', clink2: '/shop/vanphongpham', clink3: '/shop/vanphongpham',
        cate1: 'THƯƠNG HIỆU NƯỚC NGOÀI',child10: 'Stabilo', child11: 'Maped', child12: 'Bantex', child13: 'Faber', child14: 'Xem thêm ...',
        link1: '/shop/vanphongpham', clink10: '/shop/vanphongpham', clink11: '/shop/vanphongpham', clink12: '/shop/vanphongpham', clink13: '/shop/vanphongpham',
    },
    {
        name:'Thương Hiệu Đồ Chơi', link: '/shop/dochoi',
        cate0: 'THƯƠNG HIỆU VN',child0:'Yot', child1: 'tiNiToy', child2: 'Lego', child3: 'Toy', child4: 'Xem thêm ...',
        link0: '/shop/dochoi', clink0: '/shop/dochoi', clink1: '/shop/dochoi', clink2: '/shop/dochoi', clink3: '/shop/dochoi',
        cate1: 'THƯƠNG HIỆU NƯỚC NGOÀI',child10: 'VBCare', child11: 'Hot Wheels', child12: 'Play-Doh', child13: 'Barbie', child14: 'Xem thêm ...',
        link1: '/shop/dochoi', clink10: '/shop/dochoi', clink11: '/shop/dochoi', clink12: '/shop/dochoi', clink13: '/shop/dochoi',
    },
    {
        name:'Bách hóa online Lưu niệm', link: '/shop/bachhoa',
        cate0:'ĐỒ DÙNG CÁ NHÂN', child0: 'Túi Ví Thời Trang', child1: 'Đồng hồ', child2: 'Ly Cốc Bình Nước', child3: 'Hộp đựng đồ', child4: 'Xem thêm ...',
        link0: '/shop/bachhoa/dodungcanhan', clink0: '/shop/bachhoa/dodungcanhan/tuivi', clink1: '/shop/bachhoa/dodungcanhan/dongho', clink2: '/shop/bachhoa/dodungcanhan/lycocbinhnuoc', clink3: '/shop/bachhoa/dodungcanhan/hopdungdo',
        cate1: 'ĐỒ ĐIỆN GIA DỤNG', child10: 'Đèn bàn', child11: 'Đèn ngủ', child12: 'Đèn pin', child13: 'Minh Vy', child14: 'Xem thêm ...',
        link1: '/shop/bachhoa/dodiengiadung', clink10: '/shop/bachhoa/dodiengiadung/denban', clink11: '/shop/bachhoa/dodiengiadung/denngu', clink12: '/shop/bachhoa/dodiengiadung/denpin', clink13: '/shop/bachhoa/dodiengiadung/minhvy',
        cate2: 'ĐỒ TRANG TRÍ', child20: 'Phụ kiện', child21: 'Vật liệu trang trí', child22: 'Trang trí nhà cửa', child23: 'Linh tinh',child24: 'Xem thêm ...',
        link2: '/shop/bachhoa/dotrangtri', clink20: '/shop/bachhoa/dotrangtri/phukien', clink21: '/shop/bachhoa/dotrangtri/vatlieutrangtri', clink22: '/shop/bachhoa/dotrangtri/nhacua', clink23: '/shop/bachhoa/dotrangtri/linhtinh',
        cate3: 'LƯU NIỆM', child30: 'Móc khóa', child31: 'Gương lược', child32: 'Khung hình', child33: 'Tượng',child34: 'Xem thêm ...',
        link3: '/shop/bachhoa/luuniem', clink30: '/shop/bachhoa/luuniem/mockhoa', clink31: '/shop/bachhoa/luuniem/guongluoc', clink32: '/shop/bachhoa/luuniem/khunghinh', clink33: '/shop/bachhoa/luuniem/tuong',
        cate4: 'SẢN PHẨM KHÁC', child40: 'Chăm sóc cá nhân', child41: 'Nhà cửa đời sống', child42: 'Thiết bị số - Phụ kiện số',child43: 'Linh tinh', child44: 'Xem thêm ...',
    },
    {
        name:'Gốm sứ Bát Tràng', link: '/shop/battrang',
        cate0:'ĐỒ GIA DỤNG', child0: 'Cốc', child1: 'Chén', child2: 'Bát', child3: 'Đĩa', child4: 'Xem thêm ...',
        link0: '/shop/battrang', clink0: '/shop/battrang', clink1: '/shop/battrang', clink2: '/shop/battrang', clink3: '/shop/battrang',
        cate1: 'TRANG TRÍ', child10: 'Đèn xông tinh dầu', child11: 'Tượng thạch cao',child12: 'Đèn ngủ', child14: 'Xem thêm ...',
        link1: '/shop/battrang', clink10: '/shop/battrang', clink11: '/shop/battrang', clink12: '/shop/battrang',
        cate2: 'HOA', child20: 'Lọ hoa', child21: 'Chậu hoa',child22: 'Đế cắm hoa', child24: 'Xem thêm ...',
        link2: '/shop/battrang', clink20: '/shop/battrang', clink21: '/shop/battrang', clink22: '/shop/battrang',
    },
    {
        name:'Truyện Tranh', link: '/shop/truyentranh',
        cate0: 'TRUYỆN TRANH VIỆT NAM', child0: 'Truyện thiếu nhi', child1: 'Truyện lịch sử', child2: 'Truyện người trưởng thành', child3: 'Truyện hài', child4: 'Xem thêm ...',
        link0: '/shop/truyentranh/truyentranhnhatban', clink0: '/shop/truyentranh/truyentranhnhatban/onepunchman', clink1: '/shop/truyentranh/truyentranhnhatban/dragonball', clink2: '/shop/truyentranh/truyentranhnhatban/shin', clink3: '/shop/truyentranh/truyentranhnhatban/conan',
        cate1: 'TRUYỆN TRANH NHẬT BẢN', child10: 'Anime', child11: 'Comedy', child12: 'Fantasy',child13: 'Trinh thám', child14: 'Xem thêm ...',
        link1: '/shop/truyentranh/truyentranhnhatban', clink10: '/shop/truyentranh/truyentranhnhatban/conan', clink11: '/shop/truyentranh/truyentranhnhatban/doremon', clink12: '/shop/truyentranh/truyentranhnhatban/shin', clink13: '/shop/truyentranh/truyentranhnhatban/dragonball',
        cate2: 'TRUYỆN TRANH HÀN QUỐC', child20: 'Manhwa', child21: 'NTR', child22: 'Tragedy', child24: 'Xem thêm ...',
        link2: '/shop/truyentranh', clink20: '/shop/truyentranh', clink21: '/shop/truyentranh', clink22: '/shop/truyentranh', clink23: '/shop/truyentranh',
        cate3: 'TRUYỆN TRANH TÀU',child30: 'Ngôn tình', child31: 'Tu tiên', child32: 'Tiên hiệp', child33: 'Kiếm hiệp', child34: 'Xem thêm ...',
        link3: '/shop/truyentranh', clink30: '/shop/truyentranh', clink31: '/shop/truyentranh', clink32: '/shop/truyentranh', clink33: '/shop/truyentranh',
    }
];

const collections = [
    {src: img1,caption: ""},
    {src: img2,caption: ""},
    {src: img3,caption: ""},
    {src: img4,caption: ""},
    {src: img5,caption: ""},
    {src: img6,caption: ""}
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