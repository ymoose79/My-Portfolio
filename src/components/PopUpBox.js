import React from 'react'
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const PopUpBox = (props) => {

    const { src, text, url, git, p } = props;

    const popUpBox = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={src}
                    alt={text}
                />
                <p>{p}</p>
                <b>GitHub: </b>{" "}
                <a
                    className="hyper-link"
                    href="/"
                    onClick={() => window.open(git)}
                >{git}
                </a>
                <br></br>
                <b>Live: </b>{" "}
                <a
                    className="hyper-link"
                    href="/"
                    onClick={() =>
                        window.open(url)
                    }
                >{url}
                </a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popUpBoxConfig = {
        titleBar: {
            enable: true,
            text: text,
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    return (
        <div>
            <div className="portfolio-image-box" onClick={popUpBox}>
                <img
                    className="portfolio-image"
                    src={src}
                    alt={text}
                />
                <div className="overflow"></div>
            </div>
            <PopupboxContainer {...popUpBoxConfig} />
        </div>
    )
}

export default PopUpBox