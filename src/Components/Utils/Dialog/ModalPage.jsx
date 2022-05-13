import React from 'react'

function ModalPage(props) {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return (
      <div>
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
        </Modal>
      </div>
    );
}

export default ModalPage
