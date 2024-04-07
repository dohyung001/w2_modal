import '../styles/modalStyle.css'

export default function Modal({ open, close }) {

  return (
    <div>
      {open && (
        <div className="modal_wrapper" >
          <div className="modal">
            <p className="modal_title">안녕하세요</p>
            <h4 className="modal_text">모달 내용은 어쩌고 저쩌고..</h4>
            <button onClick={close} className="modal_close"  >닫기</button>
          </div>
        </div>
      )}
    </div>
  )
}


