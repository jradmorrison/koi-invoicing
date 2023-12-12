import { useTransition } from 'react';

export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <button className='btn btn-dark'>{children}</button>
  }
  return (
    <button onClick={() => {
      onClick(); 
    }} className='btn btn-light'>
      {children}
    </button>
  )
}

