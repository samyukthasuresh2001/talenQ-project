import img1 from '../src/assets/pexels-christina-morillo-1181271.jpg'
import img2 from '../src/assets/istockphoto-1311598658-612x612.jpg'
import img3 from '../src/assets/laptop-from-above.jpg' 
const sliderData =
[
  {
    id: "banner1",
    id_no: 1,
    img:img1,
    text: "This is the first banner area",
    button: true,
    btn_typ: "redirect",
    btn_name: "Banner",
    link: "/redirect1"
  },
  {
    id: "banner2",
    id_no: 2,
    img:img2,
    text: "This is the second banner area",
    button: true,
    btn_typ: "redirect",
    btn_name: "Banner",
    link: "/redirect2"
  },
  {
    id: "banner3",
    id_no: 3,
    img:img3,
    text: "This is the third banner area",
    button: false
  }
]
export default sliderData;
 
  

