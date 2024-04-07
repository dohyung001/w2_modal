import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("모달이 켜짐");
  }
  function closeModal() {
    setIsOpen(false);
    console.log('모달이 꺼짐');
  }

  return (
    <div>
      <h1>안녕하세요!</h1>
      <h4>내용내용내용</h4>
      <button onClick={() => openModal()}>버튼 열기</button>
      <Modal open={isOpen} close={closeModal} />

    </div>
  )
}

export default App
