
import { useNavigate } from 'react-router-dom';
import player from '../images/player.jpg'
import Footer from './Footer'
import Header from './Header'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'

export default function Main(props) {
    const { envDefaults,username, password } = props;

    const navigate=useNavigate();
console.log("username",username);
console.log("password",password);


    return (
        <div>
                    <Header />

                <div className="container">
                    <div className="jumbotron TopDashboard nopadding" >
                        <button className="btn btn-success btn-lg"  role="button" onClick={()=>navigate('/GameOrder')} >הזמן משחק </button> 
                    </div>
                    <div className="row jumbotron-row">
                        <div className="col-xs-12 col-md-4 PaddingBottom20 ">
                            <div className="rss_box Border-dir">
                                <div className="rss_title">
                                    <p>הודעות</p>
                                </div>
                                <div className="rss_line">
                                    <div className="rss_time"> <span>09:30 13/05/2016</span> </div>
                                    <div className="rss_text"> <span>מבצעים חמים</span> </div>
                                </div>
                                {/* <!-- End rss_line --> */}
                                <div className="rss_line">
                                    <div className="rss_time"> <span>09:30 13/05/2016</span> </div>
                                    <div className="rss_text"> <span>מבצעים חמים</span> </div>
                                </div>
                                {/* <!-- End rss_line --> */}
                                <div className="rss_line">
                                    <div className="rss_time"> <span>09:30 13/05/2016</span> </div>
                                    <div className="rss_text"> <span>מבצעים חמים</span> </div>
                                </div>
                                {/* <!-- End rss_line --> */}
                            </div>
                            {/* <!-- End rss_box --> */}
                        </div>
                        <div className="col-xs-12 col-md-8 MarginBottom20">
                            <div className="player_box">
                                <div>
                                <div className="player_title">
                                    <p>שחקן החודש</p>
                                </div>
                                <div className="player_name">
                                    <p>משה לוי</p>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 col-sm-9 col-md-9 cl-lg-9 ">
                                        <div className="player_text">
                                            <p>חוללו לכם טקסט חסר משמעות בעברית המכיל מילים לפי נושא הפרויקט עליו אתם עובדים. 'לורם איפסום' הוא מלל שמשמש כממלא מקום ומיועד לבדיקת הפונט והלייאאוט שלכם והתאמתם למוצר הסופי</p>
                                        </div>
                                        {/* <!-- End player_text --> */}
                                    </div>
                                    </div>
                                </div>
                                    <div className="col-xs-4 col-sm-3 col-md-3 cl-lg-3">
                                        <div className="player_picture"> <img src={player} alt="שחקן החודש" title="שחקן החודש" className="img-responsive img-circle" /> </div>
                                        {/* <!-- End player_picture --> */}
                                    </div>
                            </div>
                            {/* <!-- End player_box --> */}
                        </div>
                    </div>
                    {/* <!-- End Container --> */}

            <Footer/>
                </div>
        </div>
    )
}
