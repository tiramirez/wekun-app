import React, { Component } from "react";

const styles = {
    surveyBottomRow : {
        // height:"60vh"
        display:"flex"
    },
    imgBox :{
        width:"100%",
        height:"100%",
        maxHeight:"200px",
        maxWidht:"200px"
    }
}


class Layout extends Component {
    render () {
        return (
            <>
                <div className="container">
                <div id="row">
                    <div class='col'>
                    <input type="hidden" name="cookie_category" value="{{ category }}" />
                        <h2>Which place looks</h2>
                    </div>
                    <div class='col'>
                        <select class="form-select" id="sel" onchange="this.form.submit()">
                                <option value="1">like a better place to walk?</option>
                                <option value="2" href="#">like a better neighborhood to live?</option>
                                <option value="3">safer?</option>
                                <option value="4">more beautiful?</option>
                                <option value="5">wealthier?</option>
                        </select>
                    </div>
                </div>
                <div class="row" style={styles.surveyBottomRow}>
                    <div className="col-md">
                        <button className="card placeholder-wave" type="submit" name="answer" value="image_1">
                            <img class="figure-img rounded" src="images/PXL_20210320_151404919.jpg" alt="" style={styles.imgBox}/>
                        </button>
                    </div>
                    <div className="col-1">
                        <input type="submit" class="round-btn row" id="button_E" name="answer" value="=" />
                        <input type="submit" class="round-btn row" id="button_error" name="answer" value="X" />
                    </div>
                        <button className="col-md card placeholder-wave"  type="submit" name="answer" value="image_2">
                            <img class="figure-img rounded" src='images/PXL_20211002_184744191.jpg' alt="" style={styles.imgBox} />
                        </button>
                </div>
                </div>
            </>
        )
    }
}

export default Layout;