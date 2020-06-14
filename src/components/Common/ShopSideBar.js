import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBook from '@material-ui/icons/MenuBook';
import ToysIcon from '@material-ui/icons/Toys';
import EventSeat from '@material-ui/icons/EventSeatRounded';
import BookIcon from '@material-ui/icons/Book'
import ChildIcon from '@material-ui/icons/ChildCare';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ImageIcon from '@material-ui/icons/Image';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShortTextIcon from '@material-ui/icons/ShortText';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import CakeIcon from '@material-ui/icons/Cake';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';

class ShopSideBar extends Component {
    render(){
        return(
            <div style={{width: '250', fontSize: '2rem'}} role= "presentation" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
                        <List>
                            <Link to="/shop">
                            <ListItem button default>
                                <ListItemIcon>
                                    <MenuBook fontSize="large" />
                                </ListItemIcon>
                                <ListItemText disableTypography primary="Tất cả sản phẩm"/>
                            </ListItem>
                            </Link>
                            
                        </List>
                        <Divider />
                        <List>
                            <Link to="/shop/dochoi">
                                <ListItem button >
                                    <ListItemIcon>
                                        <ToysIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đồ chơi"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/vanphongpham">
                                <ListItem button >
                                    <ListItemIcon>
                                        <EventSeat />
                                    </ListItemIcon>
                                    <ListItemText primary="Văn phòng phẩm"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/vanhoc">
                                <ListItem button >
                                    <ListItemIcon>
                                        <BookIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Văn học"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/thieunhi">
                                <ListItem button >
                                    <ListItemIcon>
                                        <ChildIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Thiếu nhi"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/tamly">
                                <ListItem button >
                                    <ListItemIcon>
                                        <RecordVoiceOverIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tâm lý kĩ năng"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/kinhte">
                                <ListItem button >
                                    <ListItemIcon>
                                        <MonetizationOnOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Kinh tế"/>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List>
                            <Link to="/shop/truyentranh">
                                <ListItem button >
                                    <ListItemIcon>
                                        <ImageIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Truyện tranh"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/vanhoc">
                                <ListItem button >
                                    <ListItemIcon>
                                        <SortByAlphaIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Truyện chữ"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/vanhoc/tieuthuyet">
                                <ListItem button >
                                    <ListItemIcon>
                                        <LibraryBooksIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tiểu thuyết"/>
                                </ListItem>
                            </Link>
                            
                            <Link to="/shop/sachtruyen/vanhoc/truyenngan">
                                <ListItem button >
                                    <ListItemIcon>
                                        <ShortTextIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Truyện ngắn"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/vanhoc/lightnovel">
                                <ListItem button >
                                    <ListItemIcon>
                                        <EmojiEmotionsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Light Novel"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/vanhoc/ngontinh">
                                <ListItem button >
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Ngôn tình"/>
                                </ListItem>
                            </Link>
                            
                        </List>
                        <Divider />
                        <List>
                            <Link to="/shop/sachtruyen/giaokhoathamkhao">
                                <ListItem button >
                                    <ListItemIcon>
                                        <LocalLibraryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Giáo khoa, Tham Khảo"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/sachtruyen/tieusuhoiky">
                                <ListItem button >
                                    <ListItemIcon>
                                        <LocalLibraryOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tiểu sử, Hồi ký"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/vanphongpham/sanphamvegiay/vo">
                                <ListItem button >
                                    <ListItemIcon>
                                        <MenuBookTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Vở viết các loại"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/vanphongpham/hocsinh">
                                <ListItem button >
                                    <ListItemIcon>
                                        <LocalMallOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đồ dùng học sinh"/>
                                </ListItem>
                            </Link>
                            <Link to="/shop/vanphongpham/vanphong">
                                <ListItem button >
                                    <ListItemIcon>
                                        <CakeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đồ dùng văn phòng"/>
                                </ListItem>
                            </Link>
                        </List>
                            <Link to="/shop/battrang">
                                <ListItem button >
                                    <ListItemIcon>
                                        <BorderColorOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đồ gốm"/>
                                </ListItem>
                            </Link>
                        <Divider />
                        <List>
                            <Link to="/shop/sachgoidaugiuong">
                                <ListItem button>
                                    <ListItemIcon>
                                        <AirlineSeatFlatIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sách gối đầu giường" />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List>
                            <Link to="/shop/vanphongpham/sanphamkhac">
                                <ListItem button>
                                    <ListItemIcon>
                                        <SmokeFreeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sản phẩm khác ..." />
                                </ListItem>
                            </Link>
                        </List>
                        
                    </div>
        )
    }
}
export default ShopSideBar;