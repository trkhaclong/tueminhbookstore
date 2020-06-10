import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import '../src/components/assets/loader';
import './components/assets/css/page.css';

import ErPage from './components/Pages/ErPage';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Blog from './components/Pages/Blog';
import Single from './components/Pages/Single';
import SingleProduct from './components/Pages/SingleProduct';

import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';

//Admin Pages
import Dashboard from './components/Pages/Admin/DashBoard';
import Posts from './components/Pages/Admin/Posts';
import Users from './components/Pages/Admin/Users';
import AddPost from './components/Pages/Admin/AddPost';
import Products from './components/Pages/Admin/Products';
import AddProduct from './components/Pages/Admin/AddProduct';

import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';
import PageWrapper from './components/PageWrapper';

import Footer from './components/Common/Footer';
import UserInfo from './components/Common/UserInfo';

import DoChoi from './components/Pages/Shop/dochoi';
import TruyenTranh from './components/Pages/Shop/truyentranh';
import VanPhongPham from './components/Pages/Shop/vanphongpham';
import VanHoc from './components/Pages/Shop/vanhoc';
import SachTrongNuoc from './components/Pages/Shop/sachtrongnuoc';
import TieuThuyet from './components/Pages/Shop/tieuthuyet';
import TruyenNgan from './components/Pages/Shop/truyenngan';
import LightNovel from './components/Pages/Shop/lightnovel';
import NgonTinh from './components/Pages/Shop/ngontinh';
import KinhTe from './components/Pages/Shop/kinhte';
import BaiHocKinhDoanh from './components/Pages/Shop/baihockinhdoanh';
import QuanTriLanhDao from './components/Pages/Shop/quantrilanhdao';
import Marketing from './components/Pages/Shop/marketing';
import PhanTichKinhTe from './components/Pages/Shop/phantichkinhte';
import TamLy from './components/Pages/Shop/tamly';
import KiNangSong from './components/Pages/Shop/kinangsong';
import RenLuyenNhanCach from './components/Pages/Shop/renluyennhancach';
import SachChoTuoiMoiLon from './components/Pages/Shop/sachchotuoimoilon';
import NuoiDayCon from './components/Pages/Shop/nuoidaycon';
import CamNangLamMe from './components/Pages/Shop/camnanglamme';
import PhuongPhapGiaoDucTre from './components/Pages/Shop/phuongphapgiaoductre';
import PhatTrienTriTue from './components/Pages/Shop/phattrientritue';
import PhatTrienKiNang from './components/Pages/Shop/phattrienkinang';
import ThieuNhi from './components/Pages/Shop/thieunhi';
import MangaComic from './components/Pages/Shop/mangacomic';
import KienThucBachKhoa from './components/Pages/Shop/kienthucbachkhoa';
import SachKiNangSong from './components/Pages/Shop/sachkinangsong';
import VuaHocVuaChoi from './components/Pages/Shop/vuahocvuachoi';
import TieuSuHoiKy from './components/Pages/Shop/tieusuhoiky';
import CauChuyenCuocDoi from './components/Pages/Shop/cauchuyencuocdoi';
import ChinhTri from './components/Pages/Shop/chinhtri';
import TSHKKinhTe from './components/Pages/Shop/tshkkinhte';
import TSHKGiaiTri from './components/Pages/Shop/tshkgiaitri';
import GiaoKhoaThamKhao from './components/Pages/Shop/giaokhoathamkhao';
import GiaoKhoaThamKhaoCap1 from './components/Pages/Shop/cap1';
import GiaoKhoaThamKhaoCap2 from './components/Pages/Shop/cap2';
import GiaoKhoaThamKhaoCap3 from './components/Pages/Shop/cap3';
import GiaoKhoaThamKhaoDaiHoc from './components/Pages/Shop/luyenthidaihoc';
import SachNgoaiNgu from './components/Pages/Shop/sachngoaingu';
import SachNgoaiNguTiengAnh from './components/Pages/Shop/tienganh';
import SachNgoaiNguTiengNhat from './components/Pages/Shop/tiengnhat';
import SachNgoaiNguTiengHoa from './components/Pages/Shop/tienghoa';
import SachNgoaiNguTiengPhap from './components/Pages/Shop/tiengphap';
import ButViet from './components/Pages/Shop/butviet';
import ButBi from './components/Pages/Shop/butbi';
import ButGel from './components/Pages/Shop/butgel';
import ButMuc from './components/Pages/Shop/butmuc';
import ButChi from './components/Pages/Shop/butchi';
import DungCuHocSinh from './components/Pages/Shop/dungcuhocsinh';
import BaloCapXach from './components/Pages/Shop/balo';
import ThuocKe from './components/Pages/Shop/thuocke';
import HopBut from './components/Pages/Shop/hopbut';
import DungCuHocTap from './components/Pages/Shop/dungcuhoctap';
import DungCuVanPhong from './components/Pages/Shop/dungcuvanphong';
import DungCuVanPhongBia from './components/Pages/Shop/dungcuvanphongbia';
import KepGiay from './components/Pages/Shop/kepgiay';
import BanDucLo from './components/Pages/Shop/banduclo';
import HoaDon from './components/Pages/Shop/hoadon';
import DungCuVe from './components/Pages/Shop/dungcuve';
import ButVe from './components/Pages/Shop/butve';
import MauVe from './components/Pages/Shop/mauve';
import DungCuVeKhay from './components/Pages/Shop/dungcuvekhay';
import DungCuVeTapVe from './components/Pages/Shop/dungcuvetapve';
import SanPhamVeGiay from './components/Pages/Shop/sanphamvegiay';
import VoVietCacLoai from './components/Pages/Shop/vovietcacloai';
import SoTayCacLoai from './components/Pages/Shop/sotaycacloai';
import GiayPhoto from './components/Pages/Shop/giayphoto';
import GiayNote from './components/Pages/Shop/giaynote';
import SanPhamKhac from './components/Pages/Shop/sanphamkhac';
import DaoRocGiay from './components/Pages/Shop/daorocgiay';
import BangKeo from './components/Pages/Shop/bangkeo';
import TuiZip from './components/Pages/Shop/tuizip';
import SanPhamKhacBang from './components/Pages/Shop/bang';
import SanPhamDienTu from './components/Pages/Shop/sanphamdientu';
import MayTinhDienTu from './components/Pages/Shop/maytinhdientu';
import DongHoDienTu from './components/Pages/Shop/donghodientu';
import DenLed from './components/Pages/Shop/denled';
import DoChoiDienTu from './components/Pages/Shop/dochoidientu';
import DoChoiNoiBat from './components/Pages/Shop/dochoinoibat';
import XepHinh from './components/Pages/Shop/xephinh';
import DoChoiGiaoDuc from './components/Pages/Shop/dochoigiaoduc';
import DoChoiDieuKhien from './components/Pages/Shop/dochoidieukhien';
import BoardGame from './components/Pages/Shop/boardgame';
import PhuongTienCacLoai from './components/Pages/Shop/phuongtien';
import OTo from './components/Pages/Shop/oto';
import MayBay from './components/Pages/Shop/maybay';
import TauHoa from './components/Pages/Shop/tauhoa';
import TauThuy from './components/Pages/Shop/tauthuy';
import MoHinhCacLoai from './components/Pages/Shop/mohinh';
import MoHinhGiay from './components/Pages/Shop/mohinhgiay';
import MoHinhGo from './components/Pages/Shop/mohinhgo';
import MoHinhNhanVat from './components/Pages/Shop/mohinhnhanvat';
import MoHinhDongVat from './components/Pages/Shop/mohinhdongvat';
import Lego from './components/Pages/Shop/lego';
import LegoItChiTiet from './components/Pages/Shop/legoitchitiet';
import LegoVuaChiTiet from './components/Pages/Shop/legovuachitiet';
import LegoNhieuChiTiet from './components/Pages/Shop/legonhieuchitiet';
import LegoRatNhieuChiTiet from './components/Pages/Shop/legoratnhieuchitiet';
import DoChoiKhac from './components/Pages/Shop/dochoikhac';
import BotNan from './components/Pages/Shop/botnan';
import BupBe from './components/Pages/Shop/bupbe';
import ThuBong from './components/Pages/Shop/thubong';
import Spinner from './components/Pages/Shop/spinner';
import TrungThu from './components/Pages/Shop/trungthu';
import DenLong from './components/Pages/Shop/denlong';
import MatNa from './components/Pages/Shop/matna';
import TrungThuTrong from './components/Pages/Shop/trungthutrong';
import TrungThuGay from './components/Pages/Shop/trungthugay';
import TuyenTap from './components/Pages/Shop/tuyentap';
import TacGiaVietNam from './components/Pages/Authors/tacgiavietnam';
import AuthorNguyenNhatAnh from './components/Pages/Authors/nguyennhatanh';
import AuthorNguyenNgocTu from './components/Pages/Authors/nguyenngoctu';
import AuthorNguyenNgocThach from './components/Pages/Authors/nguyenngocthach';
import AuthorNguyenNgocNgan from './components/Pages/Authors/nguyenngocngan';
import TacGiaNuocNgoai from './components/Pages/Authors/tacgianuocngoai';
import AuthorDanBrown from './components/Pages/Authors/danbrown';
import AuthorPauloCoelho from './components/Pages/Authors/paulocoelho';
import AuthorRickRiordan from './components/Pages/Authors/rickriordan';
import AuthorSydneyShelton from './components/Pages/Authors/sydneyshelton';
import BachHoaOnlineLuuNiem from './components/Pages/Shop/bachhoaonline';
import DoDungCaNhan from './components/Pages/Shop/dodungcanhan';
import TuiVi from './components/Pages/Shop/tuivi';
import DongHo from './components/Pages/Shop/dongho';
import LyCocBinhNuoc from './components/Pages/Shop/lycocbinhnuoc';
import HopDungDo from './components/Pages/Shop/hopdungdo';
import DoDienGiaDung from './components/Pages/Shop/dodiengiadung';
import DenBan from './components/Pages/Shop/denban';
import DenNgu from './components/Pages/Shop/denngu';
import DenPin from './components/Pages/Shop/denpin';
import DoDienGiaDungMinhVy from './components/Pages/Shop/minhvy';
import DoTrangTri from './components/Pages/Shop/dotrangtri';
import PhuKien from './components/Pages/Shop/phukien';
import VatLieuTrangTri from './components/Pages/Shop/vatlieutrangtri';
import TrangTriNhaCua from './components/Pages/Shop/trangtrinhacua';
import LinhTinh from './components/Pages/Shop/linhtinh';
import LuuNiem from './components/Pages/Shop/luuniem';
import MocKhoa from './components/Pages/Shop/mockhoa';
import GuongLuoc from './components/Pages/Shop/guongluoc';
import KhungHinh from './components/Pages/Shop/khunghinh';
import Tuong from './components/Pages/Shop/tuong';
import GomSuBatTrang from './components/Pages/Shop/gomsubattrang';
import TruyenTranhVietNam from './components/Pages/Shop/truyentranhvietnam';
import TruyenTranhNhatBan from './components/Pages/Shop/truyentranhnhatban';
import Conan from './components/Pages/Shop/conan';
import DragonBall from './components/Pages/Shop/dragonball';
import Shin from './components/Pages/Shop/shin';
import Doremon from './components/Pages/Shop/doremon';

class App extends Component {


  render(){
    return (
        <Router>

          <Route
            path='/admin/users'
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Users />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            path='/admin/products/:view/:id'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddProduct />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />

          <Route
            path='/admin/products/:view'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddProduct />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />
          <Route
            path='/admin/products'
            exact={true}
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Products />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            path='/admin/posts/:view/:id'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />

          <Route
            path='/admin/posts/:view'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />
          <Route
            path='/admin/posts'
            exact={true}
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            exact={true}
            path="/admin"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  :
                  <PageWrapper>
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  </PageWrapper>
                  }
                </div>
              )
            }}
          />
          <Route
            exact={true}
            path="/login"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    
                    <Redirect to="/" />
                  :
                  <PageWrapper>
                    <LoginWrapper>
                      <UserInfo />
                      <Footer />
                    </LoginWrapper>
                  </PageWrapper>
                  }
                </div>
              )
            }}
          />
          
          <Route 
            exact={true}
            path="/signup"
            render={props => {
              if(this.props.auth.token){
                return (
                  <Redirect to="/" />
                )
              }else{
                return (
                  <PageWrapper>
                    <LoginWrapper>
                      <SignUp />
                      <Footer />
                    </LoginWrapper>
                  </PageWrapper>
                )
              }
            }}
          />

          <Route 
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route 
            exact={true}
            path="/shop"
            render={props => (
              <PageWrapper>
                <Shop {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          
          

          <Route 
            exact={true}
            path="/shop/:id"
            render={props => (
              <PageWrapper>
                <SingleProduct {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-trong-nuoc"
            render={props => (
              <PageWrapper>
                <SachTrongNuoc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-hoc"
            render={props => (
              <PageWrapper>
                <VanHoc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-hoc/tieu-thuyet"
            render={props => (
              <PageWrapper>
                <TieuThuyet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-hoc/truyen-ngan"
            render={props => (
              <PageWrapper>
                <TruyenNgan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-hoc/light-novel"
            render={props => (
              <PageWrapper>
                <LightNovel {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-hoc/ngon-tinh"
            render={props => (
              <PageWrapper>
                <NgonTinh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/kinh-te"
            render={props => (
              <PageWrapper>
                <KinhTe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/kinh-te/bai-hoc-kinh-doanh"
            render={props => (
              <PageWrapper>
                <BaiHocKinhDoanh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/kinh-te/quan-tri-lanh-dao"
            render={props => (
              <PageWrapper>
                <QuanTriLanhDao {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/kinh-te/marketing"
            render={props => (
              <PageWrapper>
                <Marketing {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/kinh-te/phan-tich-kinh-te"
            render={props => (
              <PageWrapper>
                <PhanTichKinhTe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tam-ly"
            render={props => (
              <PageWrapper>
                <TamLy {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tam-ly/ki-nang-song"
            render={props => (
              <PageWrapper>
                <KiNangSong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tam-ly/ren-luyen-nhan-cach"
            render={props => (
              <PageWrapper>
                <RenLuyenNhanCach {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tam-ly/tam-ly"
            render={props => (
              <PageWrapper>
                <TamLy {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tam-ly/sach-cho-tuoi-moi-lon"
            render={props => (
              <PageWrapper>
                <SachChoTuoiMoiLon {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/nuoi-day-con"
            render={props => (
              <PageWrapper>
                <NuoiDayCon {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/nuoi-day-con/cam-nang-lam-me"
            render={props => (
              <PageWrapper>
                <CamNangLamMe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/nuoi-day-con/phuong-phap-giao-duc-tre"
            render={props => (
              <PageWrapper>
                <PhuongPhapGiaoDucTre {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/nuoi-day-con/phat-trien-tri-tue"
            render={props => (
              <PageWrapper>
                <PhatTrienTriTue {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/nuoi-day-con/phat-trien-ki-nang"
            render={props => (
              <PageWrapper>
                <PhatTrienKiNang {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thieu-nhi"
            render={props => (
              <PageWrapper>
                <ThieuNhi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thieu-nhi/manga-comic"
            render={props => (
              <PageWrapper>
                <MangaComic {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thieu-nhi/kien-thuc-bach-khoa"
            render={props => (
              <PageWrapper>
                <KienThucBachKhoa {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thieu-nhi/sach-ki-nang-song"
            render={props => (
              <PageWrapper>
                <SachKiNangSong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thieu-nhi/vua-hoc-vua-choi"
            render={props => (
              <PageWrapper>
                <VuaHocVuaChoi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tieu-su-hoi-ky"
            render={props => (
              <PageWrapper>
                <TieuSuHoiKy {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tieu-su-hoi-ky/cau-chuyen-cuoc-doi"
            render={props => (
              <PageWrapper>
                <CauChuyenCuocDoi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tieu-su-hoi-ky/chinh-tri"
            render={props => (
              <PageWrapper>
                <ChinhTri {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tieu-su-hoi-ky/kinh-te"
            render={props => (
              <PageWrapper>
                <TSHKKinhTe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tieu-su-hoi-ky/giai-tri"
            render={props => (
              <PageWrapper>
                <TSHKGiaiTri {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/giao-khoa-tham-khao"
            render={props => (
              <PageWrapper>
                <GiaoKhoaThamKhao {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/giao-khoa-tham-khao/cap-1"
            render={props => (
              <PageWrapper>
                <GiaoKhoaThamKhaoCap1 {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/giao-khoa-tham-khao/cap-2"
            render={props => (
              <PageWrapper>
                <GiaoKhoaThamKhaoCap2 {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/giao-khoa-tham-khao/cap-3"
            render={props => (
              <PageWrapper>
                <GiaoKhoaThamKhaoCap3 {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/giao-khoa-tham-khao/luyen-thi-dai-hoc"
            render={props => (
              <PageWrapper>
                <GiaoKhoaThamKhaoDaiHoc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-ngoai-ngu"
            render={props => (
              <PageWrapper>
                <SachNgoaiNgu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-ngoai-ngu/tieng-anh"
            render={props => (
              <PageWrapper>
                <SachNgoaiNguTiengAnh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-ngoai-ngu/tieng-nhat"
            render={props => (
              <PageWrapper>
                <SachNgoaiNguTiengNhat {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-ngoai-ngu/tieng-hoa"
            render={props => (
              <PageWrapper>
                <SachNgoaiNguTiengHoa {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/sach-ngoai-ngu/tieng-phap"
            render={props => (
              <PageWrapper>
                <SachNgoaiNguTiengPhap {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/van-phong-pham"
            render={props => (
              <PageWrapper>
                <VanPhongPham {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/but-viet"
            render={props => (
              <PageWrapper>
                <ButViet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/but-viet/but-bi"
            render={props => (
              <PageWrapper>
                <ButBi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/but-viet/but-gel"
            render={props => (
              <PageWrapper>
                <ButGel {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/but-viet/but-muc"
            render={props => (
              <PageWrapper>
                <ButMuc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/but-viet/but-chi"
            render={props => (
              <PageWrapper>
                <ButChi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-hoc-sinh"
            render={props => (
              <PageWrapper>
                <DungCuHocSinh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-hoc-sinh/balo"
            render={props => (
              <PageWrapper>
                <BaloCapXach {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-hoc-sinh/thuoc-ke"
            render={props => (
              <PageWrapper>
                <ThuocKe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-hoc-sinh/hop-but"
            render={props => (
              <PageWrapper>
                <HopBut {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-hoc-sinh/dung-cu-hoc-tap"
            render={props => (
              <PageWrapper>
                <DungCuHocTap {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-van-phong"
            render={props => (
              <PageWrapper>
                <DungCuVanPhong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-van-phong/bia"
            render={props => (
              <PageWrapper>
                <DungCuVanPhongBia {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-van-phong/kep-giay"
            render={props => (
              <PageWrapper>
                <KepGiay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-van-phong/ban-duc-lo"
            render={props => (
              <PageWrapper>
                <BanDucLo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-van-phong/hoa-don"
            render={props => (
              <PageWrapper>
                <HoaDon {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-ve"
            render={props => (
              <PageWrapper>
                <DungCuVe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-ve/but-ve"
            render={props => (
              <PageWrapper>
                <ButVe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-ve/mau-ve"
            render={props => (
              <PageWrapper>
                <MauVe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-ve/khay"
            render={props => (
              <PageWrapper>
                <DungCuVeKhay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/dung-cu-ve/tap-ve"
            render={props => (
              <PageWrapper>
                <DungCuVeTapVe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-ve-giay"
            render={props => (
              <PageWrapper>
                <SanPhamVeGiay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-ve-giay/vo-viet-cac-loai"
            render={props => (
              <PageWrapper>
                <VoVietCacLoai {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-ve-giay/so-tay-cac-loai"
            render={props => (
              <PageWrapper>
                <SoTayCacLoai {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-ve-giay/giay-photo"
            render={props => (
              <PageWrapper>
                <GiayPhoto {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-ve-giay/giay-note"
            render={props => (
              <PageWrapper>
                <GiayNote {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-khac"
            render={props => (
              <PageWrapper>
                <SanPhamKhac {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-khac/dao-roc-giay"
            render={props => (
              <PageWrapper>
                <DaoRocGiay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-khac/bang-keo"
            render={props => (
              <PageWrapper>
                <BangKeo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-khac/tui-zip"
            render={props => (
              <PageWrapper>
                <TuiZip {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-khac/bang"
            render={props => (
              <PageWrapper>
                <SanPhamKhacBang {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-dien-tu"
            render={props => (
              <PageWrapper>
                <SanPhamDienTu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-dien-tu/may-tinh-dien-tu"
            render={props => (
              <PageWrapper>
                <MayTinhDienTu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-dien-tu/dong-ho-dien-tu"
            render={props => (
              <PageWrapper>
                <DongHoDienTu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-dien-tu/den-led"
            render={props => (
              <PageWrapper>
                <DenLed {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/san-pham-dien-tu/do-choi-dien-tu"
            render={props => (
              <PageWrapper>
                <DoChoiDienTu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi"
            render={props => (
              <PageWrapper>
                <DoChoi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-noi-bat"
            render={props => (
              <PageWrapper>
                <DoChoiNoiBat {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-noi-bat/xep-hinh"
            render={props => (
              <PageWrapper>
                <XepHinh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-noi-bat/do-choi-giao-duc"
            render={props => (
              <PageWrapper>
                <DoChoiGiaoDuc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-noi-bat/do-choi-dieu-khien"
            render={props => (
              <PageWrapper>
                <DoChoiDieuKhien {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-noi-bat/board-game"
            render={props => (
              <PageWrapper>
                <BoardGame {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/phuong-tien-cac-loai"
            render={props => (
              <PageWrapper>
                <PhuongTienCacLoai {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/phuong-tien-cac-loai/o-to"
            render={props => (
              <PageWrapper>
                <OTo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/phuong-tien-cac-loai/may-bay"
            render={props => (
              <PageWrapper>
                <MayBay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/phuong-tien-cac-loai/tau-hoa"
            render={props => (
              <PageWrapper>
                <TauHoa {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/phuong-tien-cac-loai/tau-thuy"
            render={props => (
              <PageWrapper>
                <TauThuy {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/mo-hinh-cac-loai"
            render={props => (
              <PageWrapper>
                <MoHinhCacLoai {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/mo-hinh-cac-loai/mo-hinh-giay"
            render={props => (
              <PageWrapper>
                <MoHinhGiay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/mo-hinh-cac-loai/mo-hinh-go"
            render={props => (
              <PageWrapper>
                <MoHinhGo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/mo-hinh-cac-loai/mo-hinh-nhan-vat"
            render={props => (
              <PageWrapper>
                <MoHinhNhanVat {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/mo-hinh-cac-loai/mo-hinh-dong-vat"
            render={props => (
              <PageWrapper>
                <MoHinhDongVat {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/lego"
            render={props => (
              <PageWrapper>
                <Lego {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/lego/it-chi-tiet"
            render={props => (
              <PageWrapper>
                <LegoItChiTiet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/lego/vua-chi-tiet"
            render={props => (
              <PageWrapper>
                <LegoVuaChiTiet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/lego/nhieu-chi-tiet"
            render={props => (
              <PageWrapper>
                <LegoNhieuChiTiet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/lego/rat-nhieu-chi-tiet"
            render={props => (
              <PageWrapper>
                <LegoRatNhieuChiTiet {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-khac"
            render={props => (
              <PageWrapper>
                <DoChoiKhac {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-khac/bot-nan"
            render={props => (
              <PageWrapper>
                <BotNan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-khac/bup-be"
            render={props => (
              <PageWrapper>
                <BupBe {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-khac/thu-bong"
            render={props => (
              <PageWrapper>
                <ThuBong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-choi-khac/spinner"
            render={props => (
              <PageWrapper>
                <Spinner {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thung-thu"
            render={props => (
              <PageWrapper>
                <TrungThu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thung-thu/den-long"
            render={props => (
              <PageWrapper>
                <DenLong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thung-thu/mat-na"
            render={props => (
              <PageWrapper>
                <MatNa {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thung-thu/trong"
            render={props => (
              <PageWrapper>
                <TrungThuTrong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/thung-thu/gay"
            render={props => (
              <PageWrapper>
                <TrungThuGay {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/tuyen-tap"
            render={props => (
              <PageWrapper>
                <TuyenTap {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/authors/viet-nam"
            render={props => (
              <PageWrapper>
                <TacGiaVietNam {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/nguyen-nhat-anh"
            render={props => (
              <PageWrapper>
                <AuthorNguyenNhatAnh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/nguyen-ngoc-tu"
            render={props => (
              <PageWrapper>
                <AuthorNguyenNgocTu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/nguyen-ngoc-thach"
            render={props => (
              <PageWrapper>
                <AuthorNguyenNgocThach {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/nguyen-ngoc-ngan"
            render={props => (
              <PageWrapper>
                <AuthorNguyenNgocNgan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/authors/nuoc-ngoai"
            render={props => (
              <PageWrapper>
                <TacGiaNuocNgoai {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/dan-brown"
            render={props => (
              <PageWrapper>
                <AuthorDanBrown {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/paulo-coelho"
            render={props => (
              <PageWrapper>
                <AuthorPauloCoelho {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/rick-riordan"
            render={props => (
              <PageWrapper>
                <AuthorRickRiordan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/author/sydney-shelton"
            render={props => (
              <PageWrapper>
                <AuthorSydneyShelton {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/bach-hoa-online-luu-niem"
            render={props => (
              <PageWrapper>
                <BachHoaOnlineLuuNiem {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dung-ca-nhan"
            render={props => (
              <PageWrapper>
                <DoDungCaNhan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dung-ca-nhan/tui-vi"
            render={props => (
              <PageWrapper>
                <TuiVi {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dung-ca-nhan/dong-ho"
            render={props => (
              <PageWrapper>
                <DongHo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          
          <Route 
            exact={true}
            path="/do-dung-ca-nhan/ly-coc-binh-nuoc"
            render={props => (
              <PageWrapper>
                <LyCocBinhNuoc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dung-ca-nhan/hop-dung-do"
            render={props => (
              <PageWrapper>
                <HopDungDo {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dien-gia-dung"
            render={props => (
              <PageWrapper>
                <DoDienGiaDung {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dien-gia-dung/den-ban"
            render={props => (
              <PageWrapper>
                <DenBan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dien-gia-dung/den-ngu"
            render={props => (
              <PageWrapper>
                <DenNgu {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dien-gia-dung/den-pin"
            render={props => (
              <PageWrapper>
                <DenPin {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-dien-gia-dung/minh-vy"
            render={props => (
              <PageWrapper>
                <DoDienGiaDungMinhVy {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-trang-tri"
            render={props => (
              <PageWrapper>
                <DoTrangTri {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-trang-tri/phu-kien"
            render={props => (
              <PageWrapper>
                <PhuKien {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-trang-tri/vat-lieu-trang-tri"
            render={props => (
              <PageWrapper>
                <VatLieuTrangTri {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-trang-tri/trang-tri-nha-cua"
            render={props => (
              <PageWrapper>
                <TrangTriNhaCua {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/do-trang-tri/linh-tinh"
            render={props => (
              <PageWrapper>
                <LinhTinh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/luu-niem"
            render={props => (
              <PageWrapper>
                <LuuNiem {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/luu-niem/moc-khoa"
            render={props => (
              <PageWrapper>
                <MocKhoa {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/luu-niem/guong-luoc"
            render={props => (
              <PageWrapper>
                <GuongLuoc {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/luu-niem/khung-hinh"
            render={props => (
              <PageWrapper>
                <KhungHinh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/luu-niem/tuong"
            render={props => (
              <PageWrapper>
                <Tuong {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/gom-su-bat-trang"
            render={props => (
              <PageWrapper>
                <GomSuBatTrang {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh"
            render={props => (
              <PageWrapper>
                <TruyenTranh {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-viet-nam"
            render={props => (
              <PageWrapper>
                <TruyenTranhVietNam {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-viet-nam/thieu-nhi"
            render={props => (
              <PageWrapper>
                <Conan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-viet-nam/lich-su"
            render={props => (
              <PageWrapper>
                <DragonBall {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-viet-nam/truyen-nguoi-truong-thanh"
            render={props => (
              <PageWrapper>
                <Shin {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-nhat-ban"
            render={props => (
              <PageWrapper>
                <TruyenTranhNhatBan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-nhat-ban/dragon-ball"
            render={props => (
              <PageWrapper>
                <DragonBall {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-nhat-ban/doremon"
            render={props => (
              <PageWrapper>
                <Doremon {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-nhat-ban/conan"
            render={props => (
              <PageWrapper>
                <Conan {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/truyen-tranh-nhat-ban/shin"
            render={props => (
              <PageWrapper>
                <Shin {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          

          <Route 
            exact={true}
            path="/blogs"
            render={props => (
              <PageWrapper>
                <Blog {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route 
            exact={true}
            path="/blogs/:slug"
            render={props => (
              <PageWrapper>
                <Single {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route
            exact={true}
            path="/404"
            render={props => (
              <PageWrapper>
                <ErPage {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);