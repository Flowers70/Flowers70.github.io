import './GoldenBoxes.css';

function GoldenBoxes(props){
    let screenW = window.innerWidth;
    let screenH = window.innerHeight;

    let goldenNmbr = 0.618;

    // For now I am assuming this is on a laptop.
    let goldenBox = screenH * goldenNmbr;

    if((goldenBox + screenH) > screenW){
        goldenBox = screenW * (1 - goldenNmbr);
    }

    let bigGoldenBox_Width = goldenBox + (goldenBox * (1 + goldenNmbr));
    let bigGoldenBox_Height = goldenBox * (1 + goldenNmbr);

    const bigGoldenBox_Style = {
        width: bigGoldenBox_Width,
        height: bigGoldenBox_Height
    };

    const topL_Style = {
        width: goldenBox,
        height: (goldenBox * goldenNmbr)
    };

    const bottomL_Style = {
        width: goldenBox,
        height: goldenBox
    };

    const R_Style = {
        width: (goldenBox * (1 + goldenNmbr)),
        height: (goldenBox * (1 + goldenNmbr))
    };

    return(
        <div className="BigGoldenBox" style={bigGoldenBox_Style}>
            <div className='L'>
                <div className="topL" style={topL_Style}>{props.topL}</div>
                <div className="bottomL" style={bottomL_Style}>{props.bottomL}</div>
            </div>
            <div className="R" style={R_Style}>{props.Right}</div>
        </div>
    )
}

function NewMain(){
    const pics = {
        width: "100%",
        padding: 0,
        margin: "auto"
    };

    return(
        <GoldenBoxes 
        topL={<h1 style={{margin:0, color:"#A14584", alignSelf:"flex-end", marginLeft: "auto", fontSize: "2 rem !important"}}>Jacinth Boggess</h1>}
        bottomL={<img src="./images/Phone.png" style={pics} />}
        Right={<img src="./images/paperAndPen.png" style={pics}/>}
        />
    );
}

export default NewMain;