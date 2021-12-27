import React from "react";
import Loading from "../../../../../images/spinner.gif";
import crossicon from "../../../../../images/cross.svg";
const Videomodal = ({ openModal, setModal, videoLoading, modal, spinner,video }) => {
  return (
    <div className="App">
      <div onClick={openModal} className="">
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <button onClick={setModal} className="modal__close">
                  <img src={crossicon} alt="" />
                </button>

                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <img
                        src={Loading}
                        alt=""
                        className="modal__spinner-style"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default Videomodal;
